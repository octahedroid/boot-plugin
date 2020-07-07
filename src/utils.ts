import * as https from "https";
import { Port } from "./port";
import { che } from "@eclipse-che/api";
import * as http from "http";
import * as chePlugin from "@eclipse-che/plugin";
import { WorkspacePort } from "./workspace-port";

interface CheMachine {
  props: che.workspace.Machine;
  id: string;
}

interface CheMachineServer {
  name: string;
  props: che.workspace.Server;
}

let currentTimeout: NodeJS.Timeout | null = null;

const getWorkspacePorts = (
  workspace: che.workspace.Workspace
): WorkspacePort[] => {
  const ports: WorkspacePort[] = [];
  if (!workspace) {
    return ports;
  }

  if (!workspace.id) {
    return ports;
  }

  if (!workspace.runtime) {
    return ports;
  }

  if (!workspace.runtime!.machines) {
    return ports;
  }

  const machines = workspace.runtime!.machines!;

  const machinesById: CheMachine[] =
    Object.keys(machines).map((id) => ({
      id,
      props: machines[id],
    })) || [];

  machinesById.map((machine: CheMachine) => {
    const servers = machine.props.servers || {};
    const serversByName: CheMachineServer[] = Object.keys(servers).map(
      (name) => ({
        name,
        props: servers[name],
      })
    );

    serversByName.map(({ name: serverName, props }: CheMachineServer) => {
      const url = props.url!;
      const attributes = props.attributes!;
      const portNumber = attributes.port!;
      ports.push({ url, portNumber, serverName });
    });
  });

  return ports;
};

const pollingEffect = async (url: string) => {
  https.get(url, (res: http.IncomingMessage) => {
    console.log("Incoming message:");
    console.table(res);
    res.on("data", () => {
      const { statusCode: status } = res;
      status !== 200 &&
        (currentTimeout = setTimeout(() => pollingEffect(url), 0));
      status !== 200 && console.log(`Request finished on a :${status}`);
      status === 200 && console.log("URL can now be previewed!:", url);
    });
  });
};

const logPort = async (port: Port) => {
  console.log(
    `Port exposed: ${port.portNumber}, Interface: ${port.interfaceListen}`
  );

  const workspace = await chePlugin.workspace.getCurrentWorkspace();
  const { 0: serverPort } = getWorkspacePorts(workspace).filter(
    (workspacePort) =>
      parseInt(workspacePort.portNumber, 10) === port.portNumber &&
      workspacePort.serverName === "nodejs"
  );

  if (serverPort && serverPort.url) {
    const { url } = serverPort;
    currentTimeout = setTimeout(() => pollingEffect(url), 0);
  }
};

const handleOpenPort = async (port: Port) => {
  console.log("Logging opened port");
  console.log("Interface listen:");
  await logPort(port);
  // const { portNumber } = port;
  // if (portNumber >= MAX_ALLOWED_PORT) {
  //   return;
  // }
};

export { logPort, handleOpenPort, getWorkspacePorts };

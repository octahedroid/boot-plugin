import { Port } from "./port";
import { che } from "@eclipse-che/api";
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

const MAX_ALLOWED_PORT = 32000;

const LISTEN_ALL_IPV6 = "::";
const LISTEN_ALL_IPV4 = "0.0.0.0";

const getWorkspacePorts = (
  workspace: che.workspace.Workspace
): WorkspacePort[] => {
  const ports: WorkspacePort[] = [];
  if (
    !workspace ||
    !workspace.id ||
    !workspace.runtime ||
    !workspace.runtime!.machines
  ) {
    return ports;
  }

  const machines = workspace.runtime!.machines!;

  const machinesById: CheMachine[] =
    Object.keys(machines).map((id) => ({
      id,
      props: machines[id],
    })) || [];

  machinesById.map((machine: CheMachine) => {
    const servers = machine.props.servers!;
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
  console.log(`Server port: ${serverPort && serverPort.url}`);
};

const handleOpenPort = async (port: Port) => {
  console.log("Logging opened port");

  const { portNumber, interfaceListen } = port;
  if (portNumber >= MAX_ALLOWED_PORT) {
    return;
  }

  if (
    interfaceListen !== LISTEN_ALL_IPV4 &&
    interfaceListen !== LISTEN_ALL_IPV6
  ) {
  }
};

export { logPort, handleOpenPort, getWorkspacePorts };

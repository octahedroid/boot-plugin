import { che } from "@eclipse-che/api";

interface CheMachine {
  name: string;
}

const MACHINE = "nodejs";

const getMachineServers = (machine: che.workspace.Machine) => {
  if (!machine) {
    return {};
  }

  const { servers } = machine;
  console.table(servers);
};

const bySelectedMachine = (selectedMachineName: string, machines: any) => {
  const { 0: machineID } = Object.keys(machines).filter(
    (machineName) => machineName === selectedMachineName
  );
  const { [machineID]: selectedMachine } = machines || {};
  return selectedMachine;
};

const getPreviewUrl = async (workspace: che.workspace.Workspace) => {
  if (!workspace || !workspace.id || !workspace.runtime) {
    return "";
  }

  const { id } = workspace;

  const { machines } = workspace.runtime! || { machines: {} };
  const selectedMachine = bySelectedMachine(MACHINE, machines);

  console.log(`Workspace: ${id}`);
  console.log("Machines:");
  console.table(machines);
  console.log("Selected Machine:");
  console.log(selectedMachine);
  console.log("Servers:");
  getMachineServers(selectedMachine);
};

export { getPreviewUrl };

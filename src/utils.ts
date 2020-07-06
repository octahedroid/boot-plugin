import { che } from "@eclipse-che/api";

interface CheMachine {
  name: string;
}

const getPreviewUrl = async (workspace: che.workspace.Workspace) => {
  if (!workspace || !workspace.id || !workspace.runtime) {
    return "";
  }

  const { id } = workspace;

  const { machines } = workspace.runtime! || { machines: {} };

  console.log(`Workspace: ${id}`);
  console.log("Machines:");
  console.table(machines);
};

export { getPreviewUrl };

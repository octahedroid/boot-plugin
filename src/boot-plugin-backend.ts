/**
 * Generated using theia-plugin-generator
 */

import * as path from "path";
import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
import WorkspaceClient from "@eclipse-che/workspace-client";
// const workspace = await che.workspace.getCurrentWorkspace();
//     const { bootstrap } = tasks;
//     await theia.tasks.executeTask(bootstrap);

const start = async (context: theia.PluginContext) => {
  let status = null;
  let clientId = null;
  const entryPoint = "/api/workspace";
  const workspace = await che.workspace.getCurrentWorkspace();
  const masterApiClient = WorkspaceClient.getJsonRpcApi(entryPoint);
  const connectionPromise = masterApiClient.connect(entryPoint);
  await connectionPromise.then(() => {
    clientId = masterApiClient.getClientId();
  });

  const handler = (info) => {
    console.table(info);
  };
  if (workspace.id) {
    masterApiClient.subscribeWorkspaceStatus(workspace.id, handler);
  } else {
    console.log("No wkspc id");
  }
};
function stop() {}
export { start, stop };

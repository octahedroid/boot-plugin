/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

const start = async (context: theia.PluginContext) => {
  await new Promise((resolve) => setTimeout(resolve, 30000));
  const workspace = await che.workspace.getCurrentWorkspace();
  const { bootstrap } = tasks;
  await theia.tasks.executeTask(bootstrap);
};
function stop() {}
export { start, stop };

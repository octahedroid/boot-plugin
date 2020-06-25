/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
import { tasks } from "./tasks";

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const { bootstrap } = tasks;
  await theia.tasks.executeTask(bootstrap);
};
function stop() {}
export { start, stop };

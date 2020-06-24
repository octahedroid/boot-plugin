/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
import { bootTasks } from "./tasks";

const handleEndTask = async (event: theia.TaskEndEvent) => {
  const { execution } = event;
  const { task } = execution;
  const { name } = task;

  if (name === "install") {
    await theia.tasks.executeTask(bootTasks.develop);
  }
};

theia.tasks.onDidEndTask(handleEndTask);

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  await theia.tasks.executeTask(bootTasks.install);
};
function stop() {}
export { start, stop };

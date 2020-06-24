/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
import { bootTasks } from "./tasks";

const handleEndTask = async (event: che.TaskExitedEvent) => {
  // const { execution } = event;
  // const { task } = execution;
  // const { name } = task;

  // switch (name) {
  //   case "install":
  //     await theia.tasks.executeTask(bootTasks.develop);
  //     break;
  //   case "develop":
  //     console.log("Develop task ended!!!");
  //     break;
  // }
  console.log("Task Exited Event:");
  console.log(event);
};

che.task.onDidEndTask(handleEndTask);

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  await theia.tasks.executeTask(bootTasks.install);
};
function stop() {}
export { start, stop };

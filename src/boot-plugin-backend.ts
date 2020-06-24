/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
import { TaskTypes, TaskStatus } from "./task";

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    name: TaskStatus.INSTALL,
    definition: {
      type: TaskTypes.CHE,
      target: {
        component: "nodejs",
        containerName: "nodejs",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn && yarn develop",
      options: {
        cwd: "/projects/frontend",
      },
    },
  };
  await theia.tasks.executeTask(initTask);
};
function stop() {}
export { start, stop };

/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    name: "Install",
    scope: theia.TaskScope.Workspace,
    definition: {
      type: "che",
      target: {
        component: "nodejs",
        containerName: "nodejs",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn",
      args: ["&& yarn develop"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  };
  await theia.tasks.executeTask(initTask);
};
function stop() {}
export { start, stop };

/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
const SHELL_TASK_TYPE = "shell";
const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    name: "Develop",
    definition: {
      type: "che",
      label: "Yarn install",
      command: "yarn && yarn develop",
      target: {
        workspaceId: "",
        component: "nodejs",
        workingDir: "/projects/frontend",
      },
      previewUrl: "",
    },
    execution: {
      command: "yarn",
      args: ["&&", "yarn", "develop"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  };
  await theia.tasks.executeTask(initTask);
};
function stop() {}
export { start, stop };

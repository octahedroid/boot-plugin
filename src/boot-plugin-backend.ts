/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
const SHELL_TASK_TYPE = "shell";
theia.tasks.onDidEndTask(async (e: theia.TaskEndEvent) => {
  const { execution } = e;
  const { task } = execution;
  const { name } = task;
  if (name === "Yarn install chingado") {
    console.log("Exec:");
    console.log(execution);
  }
});

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    definition: {
      type: "che",
      label: "Yarn install chingado",
      command: "yarn && yarn develop",
      target: {
        workspaceId: "",
        component: "nodejs",
        workingDir: "/projects/frontend",
      },
      previewUrl: "",
    },
    execution: {
      options: {
        cwd: "/projects/frontend",
      },
    },
  };

  await theia.tasks.executeTask(initTask);
};

function stop() {}

export { start, stop };

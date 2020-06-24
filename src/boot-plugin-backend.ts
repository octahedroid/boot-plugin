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
  if (name === "Yarn Install") {
  }
});

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    name: "Yarn Dev",
    source: SHELL_TASK_TYPE,
    scope: theia.TaskScope.Workspace,
    definition: {
      label: "Yarn Dev label",
      type: SHELL_TASK_TYPE,
      component: "nodejs",
      echo: true,
      command: "yarn && yarn develop",
      clear: false,
      workingDir: "/projects/frontend",
      target: {
        containerName: "nodejs",
      },
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

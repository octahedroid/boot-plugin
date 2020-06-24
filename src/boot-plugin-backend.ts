/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

const bootTasks: {
  install: theia.Task;
  develop: theia.Task;
} = {
  install: {
    name: "install",
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
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
  develop: {
    name: "develop",
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
      args: ["develop"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
};

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

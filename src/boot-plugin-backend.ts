/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

import * as che from "@eclipse-che/plugin";

const SHELL_TASK_TYPE = "shell";

theia.tasks.onDidEndTask(async (e: theia.TaskEndEvent) => {
  const { execution } = e;
  const { task } = execution;
  const { execution: exec, name } = task;
  if (name === "Yarn install") {
    console.log("Test task ended, beginning Dev task:");
    const initTask: theia.Task = {
      name: "Yarn Dev",
      source: SHELL_TASK_TYPE,
      scope: theia.TaskScope.Workspace,
      definition: {
        type: SHELL_TASK_TYPE,
        component: "nodejs",
        echo: true,
        clear: false,
        workingDir: "/projects/gatsby-casper",
        target: {
          containerName: "nodejs",
        },
      },
      execution: {
        command: "yarn",
        args: ["dev"],
        options: {
          cwd: "/projects/gatsby-casper",
        },
      },
    };

    await theia.tasks.executeTask(initTask);
  }
});

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const initTask: theia.Task = {
    name: "Yarn install",
    source: SHELL_TASK_TYPE,
    scope: theia.TaskScope.Workspace,
    definition: {
      type: SHELL_TASK_TYPE,
      component: "nodejs",
      echo: true,
      clear: false,
      workingDir: "/projects/gatsby-casper",
      target: {
        containerName: "nodejs",
      },
    },
    execution: {
      command: "yarn",
      options: {
        cwd: "/projects/gatsby-casper",
      },
    },
  };

  await theia.tasks.executeTask(initTask);
};

function stop() {}

export { start, stop };

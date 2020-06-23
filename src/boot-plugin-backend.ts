/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

import * as che from "@eclipse-che/plugin";

const SHELL_TASK_TYPE = "shell";

theia.tasks.onDidEndTask((e: theia.TaskEndEvent) => {
  const { execution } = e;
  const { task } = execution;
  const { execution: exec, name } = task;
  if (name === "Test task") {
    console.log("Test task ended:");
    console.log(task);
    console.log(exec);
  }
});

const start = async (context: theia.PluginContext) => {
  await che.workspace.getCurrentWorkspace();
  const bashTasks = await theia.tasks.fetchTasks();
  console.table(bashTasks);
  bashTasks.map((task) => {
    console.log("Definition:");
    console.table(task.definition);
    console.log("Execution:");
    console.log(task.execution);
  });
  const initTask: theia.Task = {
    name: "Test task",
    source: SHELL_TASK_TYPE,
    scope: theia.TaskScope.Global,
    definition: {
      type: SHELL_TASK_TYPE,
      component: "che-dev",
      echo: true,
      clear: false,
      workingDir: "/projects/gatsby-casper",
      target: {
        containerName: "che-dev",
      },
    },
    execution: {
      command: "yarn",
      args: ["dev"],
      options: {
        // shellArgs: ["Hello world"],
        cwd: "/projects/gatsby-casper",
      },
    },
  };

  theia.tasks.executeTask(initTask);
};

function stop() {}

export { start, stop };

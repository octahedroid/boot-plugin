/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

const SHELL_TASK_TYPE = "shell";

// theia.tasks.onDidEndTask(async (e: theia.TaskEndEvent) => {
//   const { execution } = e;
//   const { task } = execution;
//   const { name } = task;
//   if (name === "Yarn Install") {
//     const initTask: theia.Task = {
//       name: "Yarn Dev",
//       source: SHELL_TASK_TYPE,
//       scope: theia.TaskScope.Workspace,
//       definition: {
//         type: SHELL_TASK_TYPE,
//         component: "nodejs",
//         echo: true,
//         clear: false,
//         workingDir: "/projects/frontend",
//         target: {
//           containerName: "nodejs",
//         },
//       },
//       execution: {
//         command: "yarn",
//         args: ["dev"],
//         options: {
//           cwd: "/projects/frontend",
//         },
//       },
//     };

//     await theia.tasks.executeTask(initTask);
//   }
// });

// const start = async (context: theia.PluginContext) => {
//   const initTask: theia.Task = {
//     name: "Yarn Install",
//     source: SHELL_TASK_TYPE,
//     scope: theia.TaskScope.Workspace,
//     definition: {
//       preview: {},
//       type: SHELL_TASK_TYPE,
//       component: "nodejs",
//       echo: true,
//       clear: false,
//       workingDir: "/projects/frontend",
//       target: {
//         containerName: "nodejs",
//       },
//     },
//     execution: {
//       command: "yarn",
//       options: {
//         cwd: "/projects/frontend",
//       },
//     },
//   };

//   await theia.tasks.executeTask(initTask);
// };

const start = async (context: theia.PluginContext) => {
  const initTask: theia.Task = {
    name: "start develop",
    definition: {
      type: "che",
      label: "start develop",
      command: "yarn && yarn develop",
      target: {
        workspaceId: "",
        component: "nodejs",
        workingDir: "/projects/frontend",
      },
      execution: {
        options: {
          cwd: "/projects/frontend",
        },
      },
    },
  };
  await theia.tasks.executeTask(initTask);
};

function stop() {}

export { start, stop };

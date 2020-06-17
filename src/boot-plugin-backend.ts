/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

// import { ContainersService } from "./containers-service";

const start = (context: theia.PluginContext) => {
  console.log("Logging tasks:");
  theia.tasks.fetchTasks({ type: "che" }).then(
    (tasks) => {
      for (const task of tasks) {
        console.log(task.name);
        console.log(task.definition);
      }
    },
    (reason) => {
      console.error("No tasks :(");
      console.log(reason);
    }
  );
};

//   const containersService = new ContainersService();

//   containersService.updateContainers().then(
//     () => {
//       // treeDataProvider.updateContainersTreeData(containersService.containers);
//       const containers = containersService.containers;
//       containers.forEach(({ commands }) => {});
//     },
//     (error) => {
//       console.error(error);
//       theia.window.showErrorMessage(error);
//     }
//   );
const stop = () => {};
export { start, stop };

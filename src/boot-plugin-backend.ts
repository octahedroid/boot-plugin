/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

// import { ContainersService } from "./containers-service";

export function start(context: theia.PluginContext) {
  console.log("Logging tasks:");
  theia.tasks.fetchTasks({ type: "che" }).then(
    (tasks) => {
      console.log("Tasks:");
      //   console.log(tasks);
      tasks.map((task) => {
        const { name } = task;
        theia.window.showInformationMessage(`Task name: ${name}`);
      });
    },
    (reason) => {
      console.error("No tasks :(");
      console.log(reason);
    }
  );

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
}

export function stop() {}

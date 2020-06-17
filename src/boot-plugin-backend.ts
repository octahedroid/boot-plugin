/**
 * Generated using theia-plugin-generator
 */

import * as theia from "@theia/plugin";

// import { ContainersService } from "./containers-service";

export async function start(context: theia.PluginContext) {
  const tasks = await theia.tasks.fetchTasks({ type: "che" });
  tasks.map(({ name }) => console.log(`Task name: ${name}`));
  // const containersService = new ContainersService();

  // containersService.updateContainers().then(() => {
  //     // treeDataProvider.updateContainersTreeData(containersService.containers);
  //     const containers = containersService.containers;
  //     containers.forEach(({ commands,  }) => {
  //     });
  // }, error => {
  //     console.error(error);
  //     theia.window.showErrorMessage(error);
  // });
}

export function stop() {}

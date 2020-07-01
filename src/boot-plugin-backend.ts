/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

const runDelayedBootstrap = (resolve) => {
  setTimeout(async () => {
    const workspace = await che.workspace.getCurrentWorkspace();
    const { bootstrap } = tasks;
    await theia.tasks.executeTask(bootstrap);
    console.log("Terminated tasks, resolving promise");
    resolve();
  }, 30000);
};

const start = async (context: theia.PluginContext) => {
  new Promise(runDelayedBootstrap);
};

function stop() {}

export { start, stop };

/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
const { bootstrap } = tasks;
const runDelayedBootstrap = (resolve: any) => {
    setTimeout(async () => {
        const task = await theia.tasks.executeTask(bootstrap);
        console.log("Terminated tasks, resolving promise");
        resolve(task);
    }, 30000);
};

const start = async (context: theia.PluginContext) => {
    await che.workspace.getCurrentWorkspace();
    new Promise(runDelayedBootstrap);
};

function stop() { }

export { start, stop };

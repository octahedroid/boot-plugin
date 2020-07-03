/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";

const { install, preview } = tasks;

const runDelayedBootstrap = (resolve: any) => {
    console.log("Setting 30 secs timeout for dependencies to install");
    setTimeout(async () => {
        await theia.tasks.executeTask(install);
        resolve();
    }, 30000);
};

const handleDidEndTask = async (event: theia.TaskEndEvent) => {
    const { execution } = event;
    const { task } = execution;
    const { name } = task;

    if (name === "yarn-install") {
        await theia.tasks.executeTask(preview);
        return;
    }

    if (name === "yarn-preview") {
        console.log("previewing task ended");
        return;
    }
};

theia.tasks.onDidEndTask(handleDidEndTask);

const start = async (context: theia.PluginContext) => {
    new Promise(runDelayedBootstrap);
};

function stop() { }

export { start, stop };

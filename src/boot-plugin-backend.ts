/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

import { getPreviewUrl } from "./utils";
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
    console.log("This task finished too and now we are previewing!");
  }
};

theia.tasks.onDidEndTask(handleDidEndTask);

const start = async (context: theia.PluginContext) => {
  const workspace = await che.workspace.getCurrentWorkspace();
  getPreviewUrl(workspace);
  new Promise(runDelayedBootstrap);
};

function stop() {}

export { start, stop };

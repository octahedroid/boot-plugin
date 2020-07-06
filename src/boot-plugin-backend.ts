/**
 * Generated using theia-plugin-generator
 */

import { tasks } from "./tasks";
import * as theia from "@theia/plugin";
import { handleOpenPort } from "./utils";

import { PortChangesDetector } from "./port-changes-detector";

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
};

theia.tasks.onDidEndTask(handleDidEndTask);

const start = async (context: theia.PluginContext) => {
  const portChangesDetector = new PortChangesDetector();
  portChangesDetector.onDidOpenPort(handleOpenPort);
  await portChangesDetector.init();
  portChangesDetector.check();
  new Promise(runDelayedBootstrap);
};

function stop() {}

export { start, stop };

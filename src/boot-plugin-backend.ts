/**
 * Generated using theia-plugin-generator
 */

import * as path from "path";
import { tasks } from "./tasks";
import chokidar from "chokidar";
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";

const installEffect = async (path: string) => {
  if (/\/frontend\/package.json/.test(path)) {
    await che.workspace.getCurrentWorkspace();
    const { bootstrap } = tasks;
    await theia.tasks.executeTask(bootstrap);
  }
};

const start = async (context: theia.PluginContext) => {
  const cwd = path.resolve(__dirname);
  const watcher = chokidar.watch(cwd);
  watcher.on("add", installEffect);
};
function stop() {}
export { start, stop };

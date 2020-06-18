/**
 * Generated using theia-plugin-generator
 */
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
// import { ContainersService } from "./containers-service";
const start = async (context: theia.PluginContext) => {
  const wkspc = await che.workspace.getCurrentWorkspace();
  const COMMAND = "init ... DEV che-theia";
  const tasks = await theia.tasks.fetchTasks();
  const { 0: initTask } = tasks.filter(
    (task) => task.name === "init ... DEV che-theia"
  );
  if (initTask) {
    const { 0: devfileCommand } = (wkspc.devfile &&
      wkspc.devfile.commands &&
      wkspc.devfile.commands.filter((command) => command.name === COMMAND)) || [
      {},
    ];
    const componentAlias =
      (devfileCommand.attributes &&
        devfileCommand.attributes["componentAlias"]) ||
      null;
    console.log("Container retrieved ?", componentAlias ? "Yes" : "No");
    console.log(componentAlias);
    const target = {
      containerName: componentAlias || "che-dev",
      workingDir: "/projects/theia",
    };
    initTask.definition = (initTask.definition && {
      ...initTask.definition,
      target,
    }) || { type: "" };
    theia.tasks.executeTask(initTask);
  }
};
const stop = () => {};
export { start, stop };

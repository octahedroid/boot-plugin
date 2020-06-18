/**
 * Generated using theia-plugin-generator
 */
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
const start = async (context: theia.PluginContext) => {
    const wkspc = await che.workspace.getCurrentWorkspace();
    const COMMAND = "start develop mode";
    const tasks = await theia.tasks.fetchTasks();
    const { 0: initTask } = tasks.filter(
        (task) => task.name === COMMAND
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
            containerName: componentAlias || "nodejs",
            workingDir: "/projects/gatsby-casper",
        };
        initTask.definition = (initTask.definition && {
            ...initTask.definition,
            target,
        }) || { type: "" };
        theia.tasks.executeTask(initTask);
    }
};
const stop = () => { };
export { start, stop };

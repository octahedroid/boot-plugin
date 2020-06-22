/**
 * Generated using theia-plugin-generator
 */
import * as theia from "@theia/plugin";
import * as che from "@eclipse-che/plugin";
const start = async (context: theia.PluginContext) => {
    await che.workspace.getCurrentWorkspace().then(async () => {
        const COMMAND = "start develop mode";
        const tasks = await theia.tasks.fetchTasks({ type: 'che' });
        const { 0: initTask } = tasks.filter(({ name }: theia.Task) => name === COMMAND)
        initTask && theia.tasks.executeTask(initTask)
    });

};
const stop = () => { };
export { start, stop };
import { Task, TaskScope } from "@theia/plugin";

const tasks: {
    bootstrap: Task;
} = {
    bootstrap: {
        name: "dev",
        scope: TaskScope.Workspace,
        definition: {
            type: "shell",
            config: {
                label: "dev",
            },
            target: {
                component: "nodejs",
                containerName: "nodejs",
                workingDir: "/projects/frontend",
            },
        },
        execution: {
            command: "sh",
            args: ["-c", "'yarn && yarn develop'"],
            options: {
                cwd: "/projects/frontend",
            },
        },
    },
};

export { tasks };

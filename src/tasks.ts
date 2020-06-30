import { Task, TaskScope } from "@theia/plugin";

const tasks: {
    bootstrap: Task;
} = {
    bootstrap: {
        name: "install",
        scope: TaskScope.Global,
        definition: {
            type: "che",
            config: {
                label: "install",
                preview: {
                    notifications: "off",
                },
            },
            target: {
                component: "nodejs",
                containerName: "nodejs",
                workingDir: "/projects/frontend",
            },
        },
        execution: {
            command: "bash",
            args: ["-c", "'yarn && yarn develop'"],
            options: {
                cwd: "/projects/frontend",
            },
        },
    },
};

export { tasks };

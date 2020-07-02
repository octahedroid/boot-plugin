import { Task, TaskScope } from "@theia/plugin";

const tasks: {
    install: Task;
    preview: Task;
} = {
    install: {
        name: "yarn-install",
        scope: TaskScope.Workspace,
        definition: {
            type: "shell",
            config: {
                label: "yarn-install",
            },
            target: {
                component: "nodejs",
                containerName: "nodejs",
                workingDir: "/projects/frontend",
            },
        },
        execution: {
            command: "yarn",
            args: [">", "install-log.txt", "--verbose"],
            options: {
                cwd: "/projects/frontend",
            },
        },
    },
    preview: {
        name: "gatsby-preview",
        scope: TaskScope.Workspace,
        definition: {
            type: "shell",
            config: {
                label: "gatsby-preview",
            },
            target: {
                component: "nodejs",
                containerName: "nodejs",
                workingDir: "/projects/frontend",
            },
        },
        execution: {
            command: "yarn",
            args: [">", "preview-log.txt", "develop", "--verbose"],
            options: {
                cwd: "/projects/frontend",
            },
        },
    },
};

export { tasks };

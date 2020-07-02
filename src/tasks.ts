import { Task, TaskScope } from "@theia/plugin";

const tasks: {
  install: Task;
  preview: Task;
} = {
  install: {
    name: "install",
    scope: TaskScope.Workspace,
    definition: {
      type: "shell",
      config: {
        label: "install",
      },
      target: {
        component: "nodejs",
        containerName: "nodejs",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn",
      args: [">", "install-log.txt"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
  preview: {
    name: "preview",
    scope: TaskScope.Workspace,
    definition: {
      type: "shell",
      config: {
        label: "preview",
      },
      target: {
        component: "nodejs",
        containerName: "nodejs",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn",
      args: [">", "preview-log.txt", "develop"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
};

export { tasks };

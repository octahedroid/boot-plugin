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
      command: "sh",
      args: [">", "install-log.txt", "-c", "'yarn install --frozen-lockfile'"],
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
      command: "sh",
      args: [">", "preview-log.txt", "-c", "'yarn develop'"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
};

export { tasks };

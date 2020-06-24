import { Task, TaskScope } from "@theia/plugin";

const bootTasks: {
  install: Task;
  develop: Task;
} = {
  install: {
    name: "install",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      preview: {
        notifications: "off",
      },
      target: {
        component: "che-dev",
        containerName: "che-dev",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn",
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
  develop: {
    name: "develop",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      config: {
        preview: {
          notifications: "off",
        },
      },
      target: {
        component: "che-dev",
        containerName: "che-dev",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "yarn develop",
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
};

export { bootTasks };

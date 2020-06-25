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
        component: "che-dev",
        containerName: "che-dev",
        workingDir: "/projects/frontend",
      },
    },
    execution: {
      command: "bash",
      options: {
        cwd: "/projects/frontend",
        shellArgs: ["-c", "'yarn && yarn develop'"],
      },
    },
  },
};

export { tasks };

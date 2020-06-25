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
      command: "sh",
      args: ["-v -c 'yarn && yarn develop'"],
      options: {
        cwd: "/projects/frontend",
      },
    },
  },
};

export { tasks };

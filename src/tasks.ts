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
      command: "sh",
      options: {
        cwd: "/projects/frontend",
        shellArgs: ["-c", "'yarn && yarn develop'"],
      },
    },
  },
};

export { tasks };

import { Task, TaskScope } from "@theia/plugin";

const tasks: {
  bootstrap: Task;
} = {
  bootstrap: {
    name: "Start develop mode",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      config: {
        label: "Start develop mode",
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
        shellArgs: ["-c", "yarn && yarn develop"],
      },
    },
  },
};

export { tasks };

import { Task, TaskScope } from "@theia/plugin";

const tasks: {
  install: Task;
  preview: Task;
} = {
  install: {
    name: "yarn-install",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      command: "yarn > install-log.txt",
      config: {
        label: "yarn-install",
      },
      target: {
        component: "nodejs",
        workingDir: "${CHE_PROJECTS_ROOT}/frontend",
      },
    },
    // execution: {
    //   command: "yarn",
    //   args: [">", "install-log.txt", "--verbose"],
    //   options: {
    //     cwd: "/projects/frontend",
    //   },
    // },
  },
  preview: {
    name: "gatsby-preview",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      command: "yarn develop > preview-log.txt",
      config: {
        label: "gatsby-preview",
      },
      target: {
        component: "nodejs",
        workingDir: "${CHE_PROJECTS_ROOT}/frontend",
      },
    },
    // execution: {
    //   command: "yarn",
    //   args: [">", "preview-log.txt", "develop", "--verbose"],
    //   options: {
    //     cwd: "/projects/frontend",
    //   },
    // },
  },
};

export { tasks };

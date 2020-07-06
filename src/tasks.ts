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
      command: "yarn",
      config: {
        label: "install",
      },
      target: {
        component: "nodejs",
        workingDir: "${CHE_PROJECTS_ROOT}/frontend",
      },
    },
  },
  preview: {
    name: "gatsby-preview",
    scope: TaskScope.Workspace,
    definition: {
      type: "che",
      command:
        "yarn devevelop -H 0.0.0.0 > preview.log & echo $! > process.pid",
      config: {
        label: "preview",
      },
      target: {
        component: "nodejs",
        workingDir: "${CHE_PROJECTS_ROOT}/frontend",
      },
    },
  },
};

export { tasks };

# Boot plugin
*experimetnal* PoC theia-plugin to interact to workspace containers and run commands from there

This repository provides

- Che-theia plugin 
- `Devfile` to start a development environemt (with theia and che-theia)

## Getting stared

To start hacking with this plugin you need to create a workspace on che based on the `devfile.yaml` provided by this demo

[Here](https://www.eclipse.org/che/docs/che-7/configuring-a-workspace-using-a-devfile/) is a guide about starting workspaces based on an devfile

## Developing and testing this plugin

This repo with the devfile covers most of the work from this [guide](https://www.eclipse.org/che/docs/che-7/developing-che-theia-plug-ins/#developing-che-theia-plug-ins-using-che_developing-che-theia-plug-ins), but is important check the last part of the section that explains how to start and debug our plugin in `Hosted Mode`.

## Todo 


- Full Git integration (start a workspace with git configured to push code to a branch, you can do it at this moment with https providing your user and password)


- Deployment instructions

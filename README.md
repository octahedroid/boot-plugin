# Boot plugin
*experimetnal* PoC che-theia plugin to start a gatsby project on develop mode after is loaded into a workspace

This repository provides

- Che-theia plugin.
- `Devfile` to start a development environemt for this plugin, also has included a gatsby default starter to use in this the development workspace.
- `Devfile` to start a demo example and see this plugin in action.

## Getting stared

To start hacking with this plugin, you only need to create a workspace based on a devfile with che, using `devfiles/plugin-development-env-devfile.yaml` provided by this repo

if you want yo know more details about the additional projects on this devfile, please check the [CONTRIBUTING](https://github.com/eclipse/che-theia/blob/master/CONTRIBUTING.md#just-want-to-build-the-plugin-and-run-with-the-existing-theia-image) section of che-theia project 

## Debug and testing this plugin

This repo with the devfile covers most of the work from this [guide](https://www.eclipse.org/che/docs/che-7/developing-che-theia-plug-ins/#developing-che-theia-plug-ins-using-che_developing-che-theia-plug-ins), if you need debug or test functionality you need to take a look un the last part of the guide to know how `Hosted Mode` works.

## Deployment 

## Todo 


- Full Git integration (start a workspace with git configured to push code to a branch, you can do it at this moment with https providing your user and password)


- Deployment instructions

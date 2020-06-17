
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

import { ContainersService } from './containers-service';

export function start(context: theia.PluginContext) {
    const containersService = new ContainersService();
    containersService.updateContainers().then(() => {
        // treeDataProvider.updateContainersTreeData(containersService.containers);
        const containers = containersService.containers;
        containers.forEach(function(value) {
            theia.window.showInformationMessage(value.name);
        });
    }, error => {
        console.error(error);
        theia.window.showErrorMessage(error);
    });
    console.log(theia.window.state);
}

export function stop() {

}

import * as pc from 'playcanvas';
import { spine } from 'spine-core-import'; // spine-core-import is an alias
import { SpineComponentSystem } from './component/SpineComponentSystem.js';

/**
 * This plugin provides a Component System to PlayCanvas Engine
 * and a spine-core runtime to user scripts as global called spine.
 *
 * For users following spine examples, this plugin is equivalent to
 * the including the standard spine-core iife runtime in the editor.
 */

// register the plugin with playcanvas
(function () {
    const app = pc.Application.getApplication();
    if (!app) {
        console.warn("No Application found. An Application or AppBase must be instantiated before `playcanvas-spine`."
        return
    };
    const system = new SpineComponentSystem(app);
    app.systems.add(system);
}());

// we export spine for compatibility and to allow developers
// to access the full spine library in their code.
// See line 132 of the hero demo.
export default spine;

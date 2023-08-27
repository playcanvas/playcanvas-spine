import * as pc from 'playcanvas';
import { spine } from 'spine-core-import';
import { SpineComponentSystem } from './component/SpineComponentSystem.js';

(function () {
    if (pc.Application.registerPlugin) {
        var register = function (app) {
            // eslint-disable-next-line no-new
            new SpineComponentSystem(app);
        };
        pc.Application.registerPlugin("spine", register);
    } else {
        var app = pc.Application.getApplication();
        var system = new SpineComponentSystem(app);
        app.systems.add(system);
    }
}());

// we export spine for compatibility and to allow developers
// to access the full spine library in their code.
// See line 132 of the hero demo.
export default spine;

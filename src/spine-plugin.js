(function () {
    if (pc.Application.registerPlugin) {
        var register = function (app) {
            new pc.SpineComponentSystem(app);
        };
        pc.Application.registerPlugin("spine", register);
    } else {
        var app = pc.Application.getApplication();
        var system = new pc.SpineComponentSystem(app);
        app.systems.add(system);
    }
}());

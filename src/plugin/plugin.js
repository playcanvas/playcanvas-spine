(function () {
    pc.Mesh.prototype.startUpdate = function () {
        this._iterator = new pc.VertexIterator(this.vertexBuffer);
        this._counter = 0;
    };

    pc.Mesh.prototype.finishUpdate = function () {
        this._iterator.end();
        this._iterator = null;
    };

    pc.Mesh.prototype.updateVertices = function (positions, normals, tangents, uvs, colors) {
        var numVertices = positions.length / 3;
        this._counter += numVertices;
        for (var i = 0; i < numVertices; i++) {
            this._iterator.element[pc.SEMANTIC_POSITION].set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
            if (normals) {
                this._iterator.element[pc.SEMANTIC_NORMAL].set(normals[i * 3], normals[i * 3 + 1], normals[i * 3 + 2]);
            }
            if (tangents) {
                this._iterator.element[pc.SEMANTIC_TANGENT].set(tangents[i * 4], tangents[i * 4 + 1], tangents[i * 4 + 2], tangents[i * 4 + 3]);
            }
            if (uvs) {
                this._iterator.element[pc.SEMANTIC_TEXCOORD0].set(uvs[i * 2], uvs[i * 2 + 1]);
            }
            if (colors) {
                this._iterator.element[pc.SEMANTIC_COLOR].set(colors[i * 4], colors[i * 4 + 1], colors[i * 4 + 2], colors[i * 4 + 3]);
            }
            this._iterator.next();
        }
    };

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

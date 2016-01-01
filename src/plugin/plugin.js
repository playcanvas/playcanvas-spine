(function () {
    pc.Mesh.prototype.updateVertices = function (positions, normals, tangents, uvs) {
        var numVertices = positions.length / 3;
        var iterator = new pc.VertexIterator(this.vertexBuffer);
        for (var i = 0; i < numVertices; i++) {
            iterator.element[pc.SEMANTIC_POSITION].set(positions[i*3], positions[i*3+1], positions[i*3+2]);
            if (normals) {
                iterator.element[pc.SEMANTIC_NORMAL].set(normals[i*3], normals[i*3+1], normals[i*3+2]);
            }
            if (tangents) {
                iterator.element[pc.SEMANTIC_TANGENT].set(tangents[i*4], tangents[i*4+1], tangents[i*4+2], tangents[i*4+3]);
            }
            if (uvs) {
                iterator.element[pc.SEMANTIC_TEXCOORD0].set(uvs[i*2], uvs[i*2+1]);
            }
            iterator.next();
        }
        iterator.end();
    };

    if (pc.Application.registerPlugin) {
        var register = function (app) {
            var spine = new pc.SpineComponentSystem(app);
        };
        pc.Application.registerPlugin("spine", register);
    } else {
        var app = pc.Application.getApplication();
        new pc.SpineComponentSystem(app);
    }
}());

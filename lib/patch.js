// load patch.js first to override some engine behaviours


var prev = pc.ForwardRenderer.prototype.sortCompare;
// updated sort function to spine mesh instances by draw order
pc.ForwardRenderer.prototype.sortCompare = function(drawCallA, drawCallB) {
    if (drawCallA.compare && drawCallB.compare) {
        return drawCallA.compare() - drawCallB.compare();
    }

    return prev.call(this, drawCallA, drawCallB);
};

// override sorting method to prevent sorting by mesh (which is broken for alpha sorting at the moment)
pc.ForwardRenderer.prototype.sortDrawCalls = function(drawCalls, sortFunc, keyType, byMesh) {
    var drawCallsCount = drawCalls.length;
    if (drawCallsCount===0) return;

    // #ifdef PROFILER
    var sortTime = pc.now();
    // #endif

    // Sort meshes into the correct render order
    drawCalls.sort(sortFunc);

    // Disable sort by mesh until fixed in the engine...
    if (0) {
        var i, j, drawCall, prevDrawCall;
        for(i = 1; i < drawCallsCount; i++) {
            drawCall = drawCalls[i];
            prevDrawCall = drawCalls[i - 1];
            j = i;
            while(j > 0 && drawCall.mesh!==prevDrawCall.mesh && drawCall._key[keyType]===prevDrawCall._key[keyType]) {
                drawCalls[j] = prevDrawCall;
                drawCalls[j - 1] = drawCall;
                j--;
                prevDrawCall = drawCalls[j - 1];
            }
        }
    }

    // #ifdef PROFILER
    this._sortTime += pc.now() - sortTime;
    // #endif
};

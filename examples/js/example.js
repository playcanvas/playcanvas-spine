/**
 * Shared setup for the example pages. Each page calls runExample() with the Spine version it
 * shows and the skeletons to display.
 *
 * URL parameters:
 * - device=webgl2|webgpu: the graphics device to create (default webgl2)
 * - engine=<version>|<url>: the engine build to load (default ENGINE_VERSION)
 * - debug: load the debug engine build, which reports deprecated API use
 * - min: load the minified plugin build
 */

// the engine version the examples are tested with
const ENGINE_VERSION = '2.23.1';

const params = new URLSearchParams(window.location.search);

const loadScript = url => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
});

const engineUrl = () => {
    const engine = params.get('engine') ?? ENGINE_VERSION;
    if (engine.includes('/')) {
        return engine;
    }
    return `https://code.playcanvas.com/playcanvas-${engine}${params.has('debug') ? '.dbg' : ''}.js`;
};

const createElement = (tag, props = {}, children = []) => {
    const element = Object.assign(document.createElement(tag), props);
    element.append(...children);
    return element;
};

const createSelect = (options, value, onChange) => {
    const select = createElement('select', {}, options.map(option => createElement('option', { value: option, textContent: option })));
    select.value = value;
    select.addEventListener('change', () => onChange(select.value));
    return select;
};

// reload the page with one URL parameter changed
const reloadWith = (name, value) => {
    if (value === null) {
        params.delete(name);
    } else {
        params.set(name, value);
    }
    window.location.search = params.toString();
};

// errors and warnings are listed on the page, which with the debug engine includes use of
// deprecated engine API
const errors = [];
const warnings = [];
let errorPanel = null;

const updateErrorPanel = () => {
    if (errorPanel && (errors.length || warnings.length)) {
        errorPanel.hidden = false;
        errorPanel.textContent = [...errors, ...warnings.map(warning => `Warning: ${warning}`)].join('\n');
    }
};

const reportError = (message) => {
    errors.push(message);
    updateErrorPanel();
};

window.addEventListener('error', event => reportError(event.message));
window.addEventListener('unhandledrejection', event => reportError(String(event.reason?.message ?? event.reason)));

const consoleError = console.error;
console.error = (...args) => {
    reportError(args.join(' '));
    consoleError(...args);
};

const consoleWarn = console.warn;
console.warn = (...args) => {
    warnings.push(args.join(' '));
    updateErrorPanel();
    consoleWarn(...args);
};

/**
 * Measures the bounds of a skeleton over one loop of the animation on its first track, in
 * entity space, so animations that move outside the setup pose stay in view.
 *
 * @param {object} entity - The entity with the spine component.
 * @returns {{minX: number, minY: number, maxX: number, maxY: number}} The bounds.
 */
const measureBounds = (entity) => {
    const { skeleton, state } = entity.spine;
    const runtime = window.spine;
    const track = state.tracks[0];
    const duration = track ? track.animation.duration : 0;
    const steps = Math.max(1, Math.ceil(duration * 30));

    // spine 4.2 added physics, and 4.3 replaced getBounds with getBoundsRect
    const physics = runtime.Physics ? runtime.Physics.update : undefined;
    const offset = new runtime.Vector2();
    const size = new runtime.Vector2();
    const getBounds = () => {
        if (skeleton.getBoundsRect) {
            return skeleton.getBoundsRect();
        }
        skeleton.getBounds(offset, size, []);
        return { x: offset.x, y: offset.y, width: size.x, height: size.y };
    };

    const bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
    for (let i = 0; i <= steps; i++) {
        state.apply(skeleton);
        skeleton.updateWorldTransform(physics);
        const { x, y, width, height } = getBounds();
        bounds.minX = Math.min(bounds.minX, x);
        bounds.minY = Math.min(bounds.minY, y);
        bounds.maxX = Math.max(bounds.maxX, x + width);
        bounds.maxY = Math.max(bounds.maxY, y + height);
        state.update(duration / steps);
    }

    // restart the animation from the beginning
    if (track) {
        track.trackTime = 0;
    }
    return bounds;
};

/**
 * @typedef {object} SkeletonConfig
 * @property {string} name - The project name, which is also the file name prefix of its exports.
 * @property {number} [scale] - The scale of the entity. Defaults to 1.
 * @property {string} [animation] - The animation to loop on track 0.
 * @property {string} [skin] - The skin to use.
 * @property {number} [row] - The row to show the skeleton in, from the top. Defaults to 0.
 * @property {boolean} [controls] - Whether to show the animation and skin pickers. Defaults to true.
 * @property {function(object, object): void} [setup] - Called with the entity and the spine
 * runtime after the spine component is created, for skeletons that need custom animation logic.
 */

/**
 * Creates the application and shows the skeletons.
 *
 * @param {object} options - The example options.
 * @param {string} options.version - The Spine version, which selects the plugin build and the
 * asset folder.
 * @param {SkeletonConfig[]} options.skeletons - The skeletons to show, left to right.
 */
async function runExample({ version, skeletons }) {
    const deviceType = params.get('device') === 'webgpu' ? 'webgpu' : 'webgl2';
    const pluginFile = `playcanvas-spine.${version}${params.has('min') ? '.min' : ''}.js`;

    // overlay with the example details and controls
    const controls = createElement('div', { className: 'controls' });
    errorPanel = createElement('pre', { className: 'errors', hidden: true });
    const info = createElement('div', { className: 'info' });
    document.body.append(createElement('div', { className: 'overlay' }, [
        createElement('a', { href: './index.html', textContent: '← All versions' }),
        createElement('h1', { textContent: `Spine ${version}` }),
        info,
        createElement('div', { className: 'row' }, [
            createElement('label', { textContent: 'Device' }),
            createSelect(['webgl2', 'webgpu'], deviceType, value => reloadWith('device', value === 'webgl2' ? null : value)),
            createElement('label', { textContent: 'Plugin' }),
            createSelect(['full', 'min'], params.has('min') ? 'min' : 'full', value => reloadWith('min', value === 'min' ? '' : null))
        ]),
        controls,
        errorPanel
    ]));
    updateErrorPanel();

    await loadScript(engineUrl());

    const canvas = document.getElementById('application-canvas');
    const device = await pc.createGraphicsDevice(canvas, { deviceTypes: [deviceType] });
    device.maxPixelRatio = Math.min(window.devicePixelRatio, 2);

    const app = new pc.Application(canvas, {
        graphicsDevice: device,
        mouse: new pc.Mouse(document.body),
        keyboard: new pc.Keyboard(window)
    });
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
    window.addEventListener('resize', () => app.resizeCanvas());
    app.start();

    info.textContent = `Engine ${pc.version} · ${device.deviceType} · ${pluginFile}`;

    // the plugin registers its component system with the application when it loads, so it is
    // loaded as a script asset once the application exists
    const pluginAsset = new pc.Asset(pluginFile, 'script', { url: `../build/${pluginFile}` });

    // the 4.3 plugin renders in gamma space and needs textures without sRGB, earlier plugins
    // render with a StandardMaterial and need sRGB textures
    const srgb = parseFloat(version) < 4.3;

    const skeletonAssets = skeletons.map(({ name }) => {
        const folder = `./assets/spine-${version}/${name}/`;
        return {
            json: new pc.Asset(`${name}-pro.json`, 'json', { url: `${folder}${name}-pro.json` }),
            atlas: new pc.Asset(`${name}-pma.atlas`, 'text', { url: `${folder}${name}-pma.atlas` }),
            // the asset name has to match the page name in the atlas
            texture: new pc.Asset(`${name}-pma.png`, 'texture', { url: `${folder}${name}-pma.png` }, { srgb }),
            license: `${folder}license.txt`
        };
    });

    const allAssets = [pluginAsset, ...skeletonAssets.flatMap(({ json, atlas, texture }) => [json, atlas, texture])];
    await new Promise((resolve) => {
        new pc.AssetListLoader(allAssets, app.assets).load(resolve);
    });

    if (!app.systems.spine) {
        reportError(`${pluginFile} did not register the spine component system`);
        return;
    }

    const entities = [];
    const layout = [];

    skeletons.forEach((config, index) => {
        const { json, atlas, texture, license } = skeletonAssets[index];
        const scale = config.scale ?? 1;

        const entity = new pc.Entity(config.name);
        entity.setLocalScale(scale, scale, scale);
        app.root.addChild(entity);
        entities.push(entity);

        entity.addComponent('spine', {
            atlasAsset: atlas.id,
            skeletonAsset: json.id,
            textureAssets: [texture.id]
        });

        const { skeleton, state } = entity.spine;
        if (!skeleton) {
            reportError(`${config.name}: the skeleton was not created`);
            return;
        }

        const setSkin = (name) => {
            // spine 4.3 renamed these methods
            (skeleton.setSkinByName ?? skeleton.setSkin).call(skeleton, name);
            (skeleton.setSlotsToSetupPose ?? skeleton.setupPoseSlots).call(skeleton);
        };

        if (config.skin) {
            setSkin(config.skin);
        }
        if (config.animation) {
            state.setAnimation(0, config.animation, true);
        }
        config.setup?.(entity, window.spine);

        const { minX, minY, maxX, maxY } = measureBounds(entity);
        layout.push({ entity, row: config.row ?? 0, minX: minX * scale, minY: minY * scale, maxX: maxX * scale, maxY: maxY * scale });

        const row = createElement('div', { className: 'row' }, [
            createElement('a', { href: license, target: '_blank', textContent: config.name, title: 'License' })
        ]);
        if (config.controls !== false) {
            const animations = skeleton.data.animations.map(animation => animation.name);
            row.append(createSelect(animations, config.animation, name => state.setAnimation(0, name, true)));

            const skins = skeleton.data.skins.map(skin => skin.name).filter(name => name !== 'default');
            if (skins.length > 1) {
                row.append(createSelect(skins, config.skin ?? skins[0], setSkin));
            }
        }
        controls.append(row);
    });

    // lay the skeletons out side by side in centered rows, stacked from the top down
    const gap = 1;
    const rows = [];
    for (const item of layout) {
        (rows[item.row] ??= []).push(item);
    }
    const bounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
    for (const row of rows.filter(Boolean)) {
        const width = row.reduce((sum, { minX, maxX }) => sum + maxX - minX, 0) + gap * (row.length - 1);
        const height = Math.max(...row.map(({ minY, maxY }) => maxY - minY));
        const bottom = bounds.minY - height;

        // align the bottoms of the skeletons in the row
        let left = -width / 2;
        for (const { entity, minX, minY, maxX } of row) {
            entity.setLocalPosition(left - minX, bottom - minY, 0);
            left += maxX - minX + gap;
        }

        bounds.minX = Math.min(bounds.minX, -width / 2);
        bounds.maxX = Math.max(bounds.maxX, width / 2);
        bounds.minY = bottom - gap;
    }
    bounds.minY += gap;

    // an orthographic camera framing all the skeletons
    const margin = 1.15;
    const camera = new pc.Entity('camera');
    camera.addComponent('camera', {
        clearColor: new pc.Color(0.16, 0.17, 0.2),
        projection: pc.PROJECTION_ORTHOGRAPHIC,
        nearClip: 0.1,
        farClip: 100
    });
    camera.setLocalPosition((bounds.minX + bounds.maxX) / 2, (bounds.minY + bounds.maxY) / 2, 10);
    app.root.addChild(camera);

    const fitCamera = () => {
        const { width, height } = app.graphicsDevice;
        if (width === 0 || height === 0) {
            return;
        }
        const aspect = width / height;
        const halfWidth = (bounds.maxX - bounds.minX) / 2;
        const halfHeight = (bounds.maxY - bounds.minY) / 2;
        camera.camera.orthoHeight = Math.max(halfHeight, halfWidth / aspect) * margin;
    };
    fitCamera();
    app.graphicsDevice.on('resizecanvas', fitCamera);

    // exposed for automated testing
    window.example = { app, entities, errors, warnings };
}

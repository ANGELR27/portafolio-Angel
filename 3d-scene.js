/**
 * Enhanced 3D Scenes with Three.js
 * Multiple minimalist animated 3D elements throughout the portfolio
 */

class ThreeSceneManager {
    constructor() {
        this.scenes = [];
        this.init();
    }

    init() {
        // Initialize all 3D scenes
        this.createHeroCube();
        this.createAboutSphere();
        this.createProjectsTorus();
        this.createTechIcosahedron();

        // Start animation loop
        this.animate();

        // Add global event listeners
        this.addGlobalListeners();
    }

    addGlobalListeners() {
        // Handle window resize for all scenes
        window.addEventListener('resize', () => {
            this.scenes.forEach(sceneObj => {
                if (sceneObj.camera && sceneObj.renderer && sceneObj.container) {
                    sceneObj.camera.aspect = sceneObj.container.offsetWidth / sceneObj.container.offsetHeight;
                    sceneObj.camera.updateProjectionMatrix();
                    sceneObj.renderer.setSize(sceneObj.container.offsetWidth, sceneObj.container.offsetHeight);
                }
            });
        });

        // Theme toggle listener
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                setTimeout(() => this.updateAllThemeColors(), 100);
            });
        }
    }

    updateAllThemeColors() {
        const isDarkTheme = document.body.classList.contains('dark-theme');
        const newColor = isDarkTheme ? 0x00d9ff : 0x6366f1;

        this.scenes.forEach(sceneObj => {
            if (sceneObj.updateColor) {
                sceneObj.updateColor(newColor);
            }
        });
    }

    createSceneBase(containerId, cameraZ = 5) {
        const container = document.getElementById(containerId);
        if (!container) return null;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            container.offsetWidth / container.offsetHeight,
            0.1,
            1000
        );
        camera.position.z = cameraZ;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        return { scene, camera, renderer, container };
    }

    // Hero Section - Minimalist Rotating Cube
    createHeroCube() {
        const base = this.createSceneBase('canvas-hero-3d', 4);
        if (!base) return;

        const isDarkTheme = document.body.classList.contains('dark-theme');
        const color = isDarkTheme ? 0x00d9ff : 0x6366f1;

        const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.6
        });
        const cube = new THREE.LineSegments(edges, material);
        base.scene.add(cube);

        const sceneObj = {
            ...base,
            mesh: cube,
            updateColor: (newColor) => {
                cube.material.color.setHex(newColor);
            },
            animate: () => {
                cube.rotation.x += 0.003;
                cube.rotation.y += 0.005;
                base.renderer.render(base.scene, base.camera);
            }
        };

        this.scenes.push(sceneObj);
    }

    // About Section - Particle Sphere
    createAboutSphere() {
        const base = this.createSceneBase('canvas-about-3d', 5);
        if (!base) return;

        const isDarkTheme = document.body.classList.contains('dark-theme');
        const color = isDarkTheme ? 0x00d9ff : 0x6366f1;

        const geometry = new THREE.IcosahedronGeometry(2, 4);
        const positions = geometry.attributes.position.array;

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            color: color,
            size: 0.05,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
        base.scene.add(particleSystem);

        const wireframeMaterial = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.15
        });
        const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            wireframeMaterial
        );
        base.scene.add(wireframe);

        const mouse = { x: 0, y: 0 };
        const targetRotation = { x: 0, y: 0 };
        const currentRotation = { x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        const sceneObj = {
            ...base,
            mesh: particleSystem,
            wireframe: wireframe,
            updateColor: (newColor) => {
                particleSystem.material.color.setHex(newColor);
                wireframe.material.color.setHex(newColor);
            },
            animate: () => {
                targetRotation.x = mouse.y * 0.3;
                targetRotation.y = mouse.x * 0.3;

                currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
                currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

                particleSystem.rotation.x = currentRotation.x;
                particleSystem.rotation.y = currentRotation.y + Date.now() * 0.0001;
                particleSystem.position.y = Math.sin(Date.now() * 0.001) * 0.1;

                wireframe.rotation.x = particleSystem.rotation.x;
                wireframe.rotation.y = particleSystem.rotation.y;

                base.renderer.render(base.scene, base.camera);
            }
        };

        this.scenes.push(sceneObj);
    }

    // Projects Section - Floating Torus
    createProjectsTorus() {
        const base = this.createSceneBase('canvas-projects-3d', 3.5);
        if (!base) return;

        const isDarkTheme = document.body.classList.contains('dark-theme');
        const color = isDarkTheme ? 0x00d9ff : 0x6366f1;

        const geometry = new THREE.TorusGeometry(0.8, 0.3, 16, 50);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.5
        });
        const torus = new THREE.LineSegments(edges, material);
        base.scene.add(torus);

        const sceneObj = {
            ...base,
            mesh: torus,
            updateColor: (newColor) => {
                torus.material.color.setHex(newColor);
            },
            animate: () => {
                torus.rotation.x += 0.002;
                torus.rotation.y += 0.004;
                torus.position.y = Math.sin(Date.now() * 0.0008) * 0.3;
                base.renderer.render(base.scene, base.camera);
            }
        };

        this.scenes.push(sceneObj);
    }

    // Tech Stack Section - Minimalist Icosahedron
    createTechIcosahedron() {
        const base = this.createSceneBase('canvas-tech-3d', 3);
        if (!base) return;

        const isDarkTheme = document.body.classList.contains('dark-theme');
        const color = isDarkTheme ? 0x00d9ff : 0x6366f1;

        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4
        });
        const icosahedron = new THREE.LineSegments(edges, material);
        base.scene.add(icosahedron);

        const sceneObj = {
            ...base,
            mesh: icosahedron,
            updateColor: (newColor) => {
                icosahedron.material.color.setHex(newColor);
            },
            animate: () => {
                icosahedron.rotation.x += 0.001;
                icosahedron.rotation.y += 0.002;
                base.renderer.render(base.scene, base.camera);
            }
        };

        this.scenes.push(sceneObj);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.scenes.forEach(sceneObj => {
            if (sceneObj.animate) {
                sceneObj.animate();
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ThreeSceneManager();
    });
} else {
    new ThreeSceneManager();
}

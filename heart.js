// File: heart.js
// 3D heart rendering with Three.js, safely pauses when page is hidden

(function() {
  const width = 200;
  const height = 200;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);

  const container = document.getElementById('heart-3d');
  container.appendChild(renderer.domElement);

  // Heart shape
  const shape = new THREE.Shape()
    .moveTo(0, 1)
    .bezierCurveTo(0, 1, -1, 1.5, -1.5, 0.5)
    .bezierCurveTo(-2, -0.5, 0, -2, 1.5, -0.5)
    .bezierCurveTo(3, 1.5, 2, 1, 1, 1)
    .closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1
  });
  geometry.center(); // Center the geometry for better rotation

  const material = new THREE.MeshPhongMaterial({
    color: 0xff69b4,
    shininess: 100
  });

  const heart = new THREE.Mesh(geometry, material);
  scene.add(heart);

  // Lights
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
  scene.add(ambientLight);

  // Camera position
  camera.position.z = 5;

  // Visibility toggle
  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    if (running) {
      heart.rotation.y += 0.02;
      renderer.render(scene, camera);
    }
  }

  animate();
})();

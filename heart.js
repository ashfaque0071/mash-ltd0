// File: heart.js
// 3D heart rendering with Three.js, paused when page is hidden
(function() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const container = document.getElementById('heart-3d');
  renderer.setSize(200, 200);
  container.appendChild(renderer.domElement);

  // Heart shape
  const shape = new THREE.Shape()
    .moveTo(0,1)
    .bezierCurveTo(0,1,-1,1.5,-1.5,0.5)
    .bezierCurveTo(-2,-0.5,0,-2,1.5,-0.5)
    .bezierCurveTo(3,1.5,2,1,1,1)
    .closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, { depth:0.3, bevelEnabled:true, bevelThickness:0.1, bevelSize:0.1 });
  const material = new THREE.MeshPhongMaterial({ color:0xff69b4, shininess:100 });
  const heart = new THREE.Mesh(geometry, material);
  scene.add(heart);

  scene.add(new THREE.PointLight(0xffffff,1).position.set(5,5,5));
  camera.position.z = 5;

  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) animate();
  });

  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    heart.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
  animate();
})();
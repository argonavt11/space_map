import { TextureLoader, MeshBasicMaterial, Mesh, SphereGeometry } from "three";

const Mercury = function(scene, camera) {
  const loader = new TextureLoader();

  loader.load("/static/texture/mercury.jpg", texture => {
    const geometry = new SphereGeometry(1, 100, 100);
    const material = new MeshBasicMaterial({ map: texture });
    this.mesh = new Mesh(geometry, material);
    scene.add(this.mesh);
    this.mesh.position.x = 0;
    this.mesh.position.z = -50;
  });
};

export default Mercury;

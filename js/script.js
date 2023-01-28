import * as THREE from 'three';

const renderer = THREE.WebGLRenderer();

renderer.setsize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domELement);
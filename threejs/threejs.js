import * as THREE from 'three';
const scene = new THREE.Scene();
/* -------------------------------------- camera attributes ----------------------------------------
field of view
aspect ratio - use width/height of element (otherwise image looks squished)
near - objects closer than near won't be rendered
far - objects further than far won't be rendered
----------------------------------------------------------------------------------------------------
*/
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

/* ------------------------------------------- renderer --------------------------------------------
WebGLRenderer
setSize - set the size at which we want to render our app
renderer has dom element <canvas> - adds to body in HTML
----------------------------------------------------------------------------------------------------
*/
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* ------------------------------------------ BoxGeometry ------------------------------------------
This is an object that contains all the points (vertices) and fill (faces) of the cube
MeshBasicMaterial - material to color
Mesh - an object that takes a geometry and applies material, which we can put in our scene
----------------------------------------------------------------------------------------------------
*/
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

/* ------------------------------------------ Rendering --------------------------------------------
render or animate loop - function that renders the app by creating loop that causes the renderer 
                         to draw the scene every time the screen is refreshed 
requestAnimationFrame - alternative to setInterval, pauses when user goes to another tab
----------------------------------------------------------------------------------------------------
*/
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};
animate();

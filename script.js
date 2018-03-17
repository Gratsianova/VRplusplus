

$(document).ready(function(){

// create a scene that will hold all our objects
var scene = new THREE.Scene();
// set up a perspective camera with sane parameters
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// this creates the actual canvas element where everything is rendered to
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setClearColor( 0x0000FF, 0.5);

// make a cube
var geometry = new THREE.CubeGeometry( 3, 3, 3, 3 );
var materialYellow = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide, color: 0xffdd33 } );
var materialBlack = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide, color: 0x000000 } );
var materialWhite = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide, color: 0xffffff } );

var group = new THREE.Object3D();
scene.add(group);

var cube1 = new THREE.Mesh( geometry, materialWhite );
group.add( cube1 );
cube1.position.set(-5, 0, 0);


var cube2 = new THREE.Mesh( geometry, materialYellow );
group.add( cube2 );
cube2.position.set(-1.5, 3.5, 0);

var cube3 = new THREE.Mesh( geometry, materialBlack );
group.add( cube3 );
cube3.position.set(-1.5, 0, 0);

var cube4 = new THREE.Mesh( geometry, materialBlack );
group.add( cube4 );
cube4.position.set(-1.5, -3.5, 0);

var cube5 = new THREE.Mesh( geometry, materialBlack );
group.add( cube5 );
cube5.position.set(2, 0, 0);

var loader = new THREE.FontLoader();


var font;
loader.load( 'helvetiker_bold.typeface.json', function ( loadedFont ) {
  font = loadedFont;
} );



// group.scale.set(.5,1,.5)

// create a point light that shines from above
var light = new THREE.PointLight(0xffffff, 5, 100);
light.position.set(50, 50, 50);
scene.add(light);

// create ambient light that lights everything slightly
var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// set camera so its not inside the cube
camera.position.z = 20;

// this is the renderloop which runs 60 times per second
// TweenMax.to(group.rotation,4,{z:2})
function animate(timestamp) {
  requestAnimationFrame(animate);
  // rotate the cube a little in every frame
  group.rotation.x += 0.01;
  // group.rotation.z+= 0.01;
  // cube2.rotation.y += 0.01;
  // cube3.rotation.y += 0.01;
  // cube4.rotation.y += 0.01;
  // cube5.rotation.y += 0.01;
  
  
  
	// var geometry = new THREE.TextGeometry( 'Hello three.js!', {
	// 	size: 80,
	// 	height: 5,
	// 	curveSegments: 12,
	// 	bevelEnabled: true,
	// 	bevelThickness: 10,
	// 	bevelSize: 8,
	// 	bevelSegments: 5
	// } );
  
  // camera.position.z += 0.01;

  renderer.render(scene, camera);
}

animate();


document.getElementById('submit').onclick = function(e) {
  var string = document.getElementById('textinput').value; 
  console.log(string);

        var selectedObject = scene.getObjectByName('text_name');
        group.remove(selectedObject);
        console.log(selectedObject);

          var textgeometry = new THREE.TextGeometry(string, {
            font: font,
            size: 2,
            height: 1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0,
            bevelSegments: 0,
          } );

        var text = new THREE.Mesh( textgeometry, materialBlack );
        text.position.set(-3.0,-8.5,0);

        text.name= "text_name"
        group.add(text);



};

})


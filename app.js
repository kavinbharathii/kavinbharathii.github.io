
// ------------------------------------- home page typing animation ------------------------------------- // 

const fullname = "Kavin Bharathi";
let disp_name = document.getElementById('disp_name');
let pointer = 0;
let delta = 1;
let typing = true;

// with typing a blinking underscore
setInterval(() => {
    if (typing) {
        disp_name.innerHTML = fullname.slice(0, pointer) + "_";
        pointer += 1;
        if (pointer > fullname.length) {
            typing = false
            disp_name.innerHTML = fullname;
        }
    }
}, 200);
    
// blinking underscore
let hasUnderScore = false
let underscore = document.getElementById('underscore')
setInterval(() => {
    if (!typing) {
        if (hasUnderScore) {
            underscore.classList.add('bgclass');
        } else {
            underscore.classList.remove('bgclass');
        }
        hasUnderScore = !hasUnderScore;
    }
}, 400);

// "Full stack web developer" subtext
let stacktext = "A full stack web developer."
let fullstack = document.getElementById("fullstack")
let fullstackTyped = false
let fpointer = 0
setInterval(() => {
    if (!fullstackTyped && !typing) {
        fullstack.innerHTML = stacktext.slice(0, fpointer) + "_";
        fpointer += 1;
        if (fpointer > stacktext.length) {
            fullstackTyped = false
            fullstack.innerHTML = stacktext;
        }
    }
}, 150);


const overlay = document.getElementById('overlay')

window.addEventListener('mousemove', (e) => {
    const {clientX, clientY } = e
    const x = Math.round((clientX / window.innerWidth) * 100)
    const y = Math.round((clientY / window.innerHeight) * 100)

    gsap.to(overlay, {
        '--x' : `${x}%`,
        '--y' : `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.bg'),
    alpha: true
})
renderer.setClearColor( 0x000000, 0 );

// const controller = new OrbitControls(camera, renderer.domElement)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)
const geometry = new THREE.BoxGeometry(10, 10, 10)
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
})
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

const light = new THREE.PointLight(0xffffff)
light.position.set(20, 20, 20)
scene.add(light)

function animate()  {
    requestAnimationFrame(animate)
    
    torus.rotation.x += 0.01
    torus.rotation.y += 0.005
    torus.rotation.z += 0.02

    // controller.update()

    renderer.render(scene, camera)
}

animate()

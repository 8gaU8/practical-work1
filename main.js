import * as THREE from 'three';
import { ConeGeometry } from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { seededRandom } from 'three/src/math/MathUtils.js';

const genSolid = (geometry, color) => {
    const meshMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: 1 })
    const solid = new THREE.Mesh(geometry, meshMaterial)
    return solid
}

const genLine = (geometry, color) => {
    const lineMaterial = new THREE.LineBasicMaterial({ color: color })
    const line = new THREE.LineSegments(geometry, lineMaterial)
    return line
}

const createPlane = (size = basicSize * 2, size2 = basicSize * 2, color = 0xffffff) => {
    const geometry = new THREE.PlaneGeometry(size, size2)
    const solid = genSolid(geometry, color)
    return solid
}

const createCircle = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.CircleGeometry(size, 32)
    const solid = genSolid(geometry, color)
    return solid
}

const createRing = (size = basicSize / 2, size2 = basicSize, color = 0xffffff) => {
    const geometry = new THREE.RingGeometry(size, size2, 32)
    const solid = genSolid(geometry, color)
    return solid
}

const createCube = (size = basicSize * 2, size2 = basicSize * 2, color = 0xffffff) => {
    const geometry = new THREE.BoxGeometry(size, size2, size)
    const solid = genSolid(geometry, color)
    return solid
}

const createCone = (size = basicSize, height = basicSize, color = 0xffffff) => {
    const geometry = new ConeGeometry(size, height, 32)
    const solid = genSolid(geometry, color)
    return solid
}

const createCylinder = (size = basicSize, r = 1, color = 0xffffff) => {
    const geometry = new THREE.CylinderGeometry(size, size * r, size * 2, 32)
    const solid = genSolid(geometry, color)
    return solid
}

const createTetrahedron = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.TetrahedronGeometry(size)
    const solid = genSolid(geometry, color)
    return solid
}

const createDodecahedron = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.DodecahedronGeometry(size)
    const solid = genSolid(geometry, color)
    return solid
}

const createIcosahedron = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.IcosahedronGeometry(size)
    const solid = genSolid(geometry, color)
    return solid
}

const createOctahedron = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.OctahedronGeometry(size)
    const solid = genSolid(geometry, color)
    return solid
}

const createSphere = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.SphereGeometry(size, 32, 32)
    const solid = genSolid(geometry, color)
    return solid
}

const createTorus = (size = basicSize, size2 = basicSize / 2, color = 0xffffff) => {
    const geometry = new THREE.TorusGeometry(size, size2, 32, 100)
    const solid = genSolid(geometry, color)
    return solid
}
const createLatheGeometry = (size = basicSize, param, color = 0xffffff) => {
    const points = [];
    for (let i = 0; i < 10; ++i)
        points.push(new THREE.Vector2(Math.sin(i * param) / size, (i - size) * 0.5));

    const geometry = new THREE.LatheGeometry(points);
    const solid = genSolid(geometry, color)
    return solid
}


const createTube = (size = 0.5, length = 1, color = 0xffffff) => {
    const straightCurvePath = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, length))
    const geometry = new THREE.TubeGeometry(straightCurvePath, 32, size, 32, true)
    const solid = genSolid(geometry, color)
    return solid
}

const createExtrude = (size = basicSize, color = 0xffffff) => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0)
    shape.bezierCurveTo(1, 2, 2, size, 3, 0)

    const extrudeSettings = {
        steps: 33,
        depth: 0.5,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 8,
    }

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    const solid = genSolid(geometry, color)
    return solid
}

const createParametric = (size, param, color = 0xffffff) => {
    const geometry = new ParametricGeometry(ParametricGeometry.klein, 25, 25);
    const solid = genSolid(geometry, color)
    return solid
}

const createPolyhedron = (size = basicSize, color = 0xffffff) => {
    const verticesOfCube = [
        -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
        -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
    ]
    const indicesOfFaces = [
        2, 1, 0, 0, 3, 2,
        0, 4, 7, 7, 3, 0,
        0, 1, 5, 5, 4, 0,
        1, 2, 6, 6, 5, 1,
        2, 3, 7, 7, 6, 2,
        4, 5, 6, 6, 7, 4,
    ]

    const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, size, 0);
    const solid = genSolid(geometry, color)
    return solid
}

const addObject = (x, y, object) => {
    console.log(object)
    objects.push(object)
}

const createText = (text = "Hello", size = 0.5, color = 0xffffff) => {
    {
        const loader = new FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json')
        l
        // promisify font loading
        // function loadFont(url) {
        //     return new Promise((resolve, reject) => {
        //         loader.load(url, resolve, undefined, reject);
        //     });
        // }

        async function doit() {
            const font = await loadFont('fonts/helvetiker_regular.typeface.json');  /* threejs.org: url */
            const geometry = new TextGeometry('three.js', {
                font: font,
                size: 4.0,
                depth: .2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.15,
                bevelSize: .3,
                bevelSegments: 5,
                color: 0x006699
            });
            const material =  new THREE.MeshNormalMaterial({ transparent: true, opacity: 1 }) 
            const mesh = new THREE.Mesh(geometry, material);
            geometry.computeBoundingBox();
            geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

            const parent = new THREE.Object3D();
            parent.add(mesh);

            // addObject(-1, -1, parent);
            return parent
        }
        return doit();
    }
}

const createCubeEdge = (size = basicSize, width = basicSize * 2, color = 0xffffff) => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(size * 2, width, size * 2))
    const line = genLine(geometry, color)
    return line
}

const createIcosahedronEdge = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(size))
    const line = genLine(geometry, color)
    return line
}

const createWireframeCube = (size = basicSize, color = 0xffffff) => {
    const geometry = new THREE.WireframeGeometry(new THREE.BoxGeometry(size * 2, size * 2, size * 2))
    const line = genLine(geometry, color)
    return line
}



const createAllPrimitives = (param, color = 0xffffff) => {
    const objects = []
    const basicParam = 0.5
    // createText("Hello", 0.5, color)
    objects.push(createPlane(basicParam, param * basicParam, color))
    objects.push(createCircle(basicParam * param * 1.5, color))
    objects.push(createRing(basicParam * param / 2, basicParam, color))
    objects.push(createCube(basicParam * param, basicParam, color))
    objects.push(createCone(basicParam, basicParam * 2.5 * param, color))
    objects.push(createCylinder(basicParam, param, color))
    objects.push(createTetrahedron(basicParam, color))
    objects.push(createDodecahedron(basicParam, color))
    objects.push(createIcosahedron(basicParam, color))
    objects.push(createOctahedron(basicParam, color))
    objects.push(createSphere(basicParam, color))
    objects.push(createTorus(basicParam, basicParam / param, color))
    objects.push(createTube(basicParam, basicParam * param, color))
    objects.push(createLatheGeometry(basicParam, param, color))
    objects.push(createParametric(basicParam, param, color))

    objects.push(createPolyhedron(basicParam, color))

    objects.push(createCubeEdge(basicParam, basicParam * param, color))
    objects.push(createIcosahedronEdge(basicParam, color))
    objects.push(createWireframeCube(basicParam, color))
    objects.push(createExtrude(basicParam, color))
    // place each object in xy-plane
    const size = parseInt(Math.sqrt(objects.length)) + 1
    for (let i = 0; i < objects.length; i++)
    {
        console.log(objects[i])
        const zPos = size * (i % size) - size
        const yPos = size * Math.floor(i / size) - size
        objects[i].position.z = zPos
        objects[i].position.y = yPos
    }
    return objects
}


const genCross = (size, opacity) => {
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xaaaaaa,
        transparent: true,
        opacity: opacity,
    })

    const cross = new THREE.Group()
    const points = []
    points.push(new THREE.Vector3(-size, 0, 0))
    points.push(new THREE.Vector3(size, 0, 0))
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(geometry, lineMaterial)
    cross.add(line)
    const points2 = []
    points2.push(new THREE.Vector3(0, 0, -size))
    points2.push(new THREE.Vector3(0, 0, size))
    const geometry2 = new THREE.BufferGeometry().setFromPoints(points2)
    const line2 = new THREE.Line(geometry2, lineMaterial)
    cross.add(line2)
    return cross
}


// Create all primitives
const basicSize = 0.75

const objects1 = createAllPrimitives(0.5, 0xff0000)
for (let i = 0; i < objects1.length; i++)
    objects1[i].position.x = 8

const objects2 = createAllPrimitives(1.5, 0x00ff00)
for (let i = 0; i < objects2.length; i++)
    objects2[i].position.x = 0

const objects3 = createAllPrimitives(1, 0x0000ff)
for (let i = 0; i < objects3.length; i++)
    objects3[i].position.x = -8

let objects = objects1.concat(objects2)
objects = objects.concat(objects3)

// Setup scene, camera, and renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// camera.rotateX(
camera.rotation.x = -Math.PI / 3.5
camera.position.y = 25
camera.position.z = 20

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// add to scene
for (let i = 0; i < objects.length; i++)
    scene.add(objects[i])

// Add cross on the floor
const crossSize = 0.5
const nbCross = 20
const baseGroup = new THREE.Group()
const crossInterval = 2
for (let i = 0; i < nbCross; i++)
{
    for (let j = 0; j < nbCross; j++)
    {
        const k = 1.2
        const distance = Math.sqrt((i / nbCross) ** 2 + (j / nbCross) ** 2)
        const opacity = 1 - k * distance

        const cross = genCross(crossSize, opacity)
        cross.position.y = -10

        cross.position.x = i * crossInterval
        cross.position.z = j * crossInterval
        baseGroup.add(cross)

        const cross1 = cross.clone()
        cross1.position.x = - i * crossInterval
        cross1.position.z = j * crossInterval
        baseGroup.add(cross1)

        const cross2 = cross.clone()
        cross2.position.x = i * crossInterval
        cross2.position.z = - j * crossInterval
        baseGroup.add(cross2)

        const cross3 = cross.clone()
        cross3.position.x = - i * crossInterval
        cross3.position.z = - j * crossInterval
        baseGroup.add(cross3)
    }
}
scene.add(baseGroup)


function animate() {
    for (let i = 0; i < objects.length; i++)
    {
        const randnum = seededRandom(i * 0.5)
        const sign = randnum > 0.5 ? 1 : -1
        objects[i].rotation.x -= 0.01 * sign
        objects[i].rotation.z += (randnum * 0.1) * sign
        objects[i].rotation.y -= (randnum * 0.11) * sign
    }
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)

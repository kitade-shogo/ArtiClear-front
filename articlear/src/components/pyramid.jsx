import { Canvas } from '@react-three/fiber'
import {
    AccumulativeShadows,
    RandomizedLight,
    Center,
    OrbitControls,
} from '@react-three/drei'

export default function PyramidScene() {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 4.5], fov: 40 }}
            colormanagement="true"
            gl={{ antialias: true }}
            style={{ background: '#d5f4fd' }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 0]} intensity={2} />
            <group position={[0, -0.65, 0]}>
                <Pyramid />
                <AccumulativeShadows
                    temporal
                    frames={200}
                    color="purple"
                    colorBlend={0.5}
                    opacity={1}
                    scale={10}
                    alphaTest={0.85}
                >
                    <RandomizedLight
                        amount={8}
                        radius={5}
                        ambient={0.5}
                        position={[5, 3, 2]}
                        bias={0.001}
                    />
                </AccumulativeShadows>
            </group>
            <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.1}
                maxPolarAngle={Math.PI / 2.1}
            />
        </Canvas>
    )
}

function Pyramid() {
    return (
        <Center top>
            <mesh castShadow position={[0, 0, 0]}>
                <coneGeometry args={[0.75, 1.5, 3]} />
                <meshStandardMaterial color="white" metalness={1} />
            </mesh>
        </Center>
    )
}

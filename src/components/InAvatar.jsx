import { OrbitControls } from '@react-three/drei'
import { Avatar } from './Avatar'

export const InAavatar = () => {
  return (
    <>
    <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
    
    />
    <group position-y={-1}  >
        <Avatar />
        <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}></mesh>
    </group>
    <ambientLight intensity={3}/>
    </>
  )
}

export default InAavatar
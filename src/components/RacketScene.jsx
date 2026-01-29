import { Environment } from '@react-three/drei';
import { RacketModel } from './RacketModel';

/**
 * RacketScene component - Main 3D scene for racket with lighting and environment
 * @param {number} scrollProgress - Current scroll progress (0 to 1)
 */
export function RacketScene({ scrollProgress = 0 }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4a9eff" />
            <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
            />

            {/* 3D Model with scroll-driven animations */}
            <RacketModel scrollProgress={scrollProgress} />

            {/* Environment for reflections */}
            <Environment preset="city" />
        </>
    );
}

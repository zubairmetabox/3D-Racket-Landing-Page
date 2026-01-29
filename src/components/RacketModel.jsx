import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

/**
 * RacketModel component - Loads and animates the 3D racket model
 * @param {number} scrollProgress - Current scroll progress (0 to 1)
 */
export function RacketModel({ scrollProgress }) {
    const groupRef = useRef();

    // Load the 3D model
    const { scene } = useGLTF('/Racket.glb');

    // Animate based on scroll progress
    useFrame(() => {
        if (!groupRef.current) return;

        // Phase 1: Hero (0-0.2) - Gentle rotation
        if (scrollProgress < 0.2) {
            const phase = scrollProgress / 0.2;
            groupRef.current.rotation.y = phase * Math.PI * 0.5;
            groupRef.current.position.y = -1.7;
            groupRef.current.scale.setScalar(3.5);
        }
        // Phase 2: Opening/Zoom (0.2-0.4) - Rotate and zoom
        else if (scrollProgress < 0.4) {
            const phase = (scrollProgress - 0.2) / 0.2;
            groupRef.current.rotation.y = Math.PI * 0.5 + phase * Math.PI;
            groupRef.current.position.y = -1.7 + phase * 0.5;
            groupRef.current.scale.setScalar(3.5 + phase * 1.0);
        }
        // Phase 3: Feature Focus (0.4-0.6) - Close-up rotation
        else if (scrollProgress < 0.6) {
            const phase = (scrollProgress - 0.4) / 0.2;
            groupRef.current.rotation.y = Math.PI * 1.5 + phase * Math.PI * 0.5;
            groupRef.current.rotation.x = phase * Math.PI * 0.2;
            groupRef.current.position.y = -1.2 + phase * 0.3;
            groupRef.current.scale.setScalar(4.5 + phase * 0.7);
        }
        // Phase 4: Detail View (0.6-0.8) - Detailed rotation
        else if (scrollProgress < 0.8) {
            const phase = (scrollProgress - 0.6) / 0.2;
            groupRef.current.rotation.y = Math.PI * 2 + phase * Math.PI * 0.5;
            groupRef.current.rotation.x = Math.PI * 0.2 - phase * Math.PI * 0.1;
            groupRef.current.position.y = -0.9 - phase * 0.3;
            groupRef.current.scale.setScalar(5.2 - phase * 0.7);
        }
        // Phase 5: Final (0.8-1.0) - Return to hero
        else {
            const phase = (scrollProgress - 0.8) / 0.2;
            groupRef.current.rotation.y = Math.PI * 2.5 + phase * Math.PI * 0.5;
            groupRef.current.rotation.x = Math.PI * 0.1 - phase * Math.PI * 0.1;
            groupRef.current.position.y = -1.2 - phase * 0.5;
            groupRef.current.scale.setScalar(4.5 - phase * 1.0);
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} />
        </group>
    );
}

// Preload the model
useGLTF.preload('/Racket.glb');

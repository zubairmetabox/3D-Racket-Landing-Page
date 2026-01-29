import { Canvas } from '@react-three/fiber';
import { RacketScene } from './components/RacketScene';
import { Section } from './components/Section';
import { useScrollProgress } from './hooks/useScrollProgress';
import './style.css';

export default function App() {
    const scrollProgress = useScrollProgress();

    return (
        <div className="app">
            {/* Fixed 3D Canvas Background */}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
            >
                <RacketScene scrollProgress={scrollProgress} />
            </Canvas>

            {/* Particle overlay effect */}
            <div className="particle-overlay" />

            {/* Scrollable Content Sections */}
            <Section id="hero" align="left">
                <h1 className="text-gradient">Power Without Limits</h1>
                <p>Experience precision and control in every swing</p>
                <a href="#performance" className="section__cta">
                    Explore More ↓
                </a>
            </Section>

            <Section id="performance" align="left">
                <h2>Peak Performance</h2>
                <p>
                    Engineered with advanced carbon fiber technology for maximum power
                    transfer and control. Every shot, every rally, perfectly balanced
                    for your game.
                </p>
            </Section>

            <Section id="design" align="right">
                <h2>Aerodynamic Design</h2>
                <p>
                    Streamlined frame reduces air resistance while maintaining structural
                    integrity. Precision-crafted for speed and maneuverability.
                </p>
            </Section>

            <Section id="grip" align="left">
                <h2>Superior Grip</h2>
                <p>
                    Premium grip technology provides exceptional comfort and control.
                    Moisture-wicking materials keep your hands dry during intense play.
                </p>
            </Section>

            <Section id="durability" align="center">
                <h2>Built to Last</h2>
                <p>
                    Tournament-grade construction withstands the rigors of competitive
                    play. Backed by our lifetime warranty for peace of mind.
                </p>
            </Section>
        </div>
    );
}

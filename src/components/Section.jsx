import { useEffect, useRef, useState } from 'react';
import './Section.css';

/**
 * Reusable section component with fade-in animation
 * Each section takes full viewport height
 */
export function Section({ id, children, align = 'left' }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`section section--${align} ${isVisible ? 'section--visible' : ''}`}
        >
            <div className="section__content">
                {children}
            </div>
        </section>
    );
}

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress (0 to 1)
 * Returns the current scroll position as a normalized value
 */
export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;
            setScrollProgress(Math.max(0, Math.min(1, progress)));
        };

        // Initial calculation
        handleScroll();

        // Throttle scroll events for performance
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return scrollProgress;
}

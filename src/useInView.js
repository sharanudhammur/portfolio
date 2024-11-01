import { useEffect, useRef } from 'react';

const useInView = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        }, {
            threshold: 0.1, // Trigger when at least 10% of the section is visible
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [callback]);

    return ref;
};

export default useInView;

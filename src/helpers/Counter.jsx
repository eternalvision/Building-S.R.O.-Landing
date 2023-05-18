import React, { useState, useEffect, useRef } from "react";

export const Counter = ({ endValue, duration }) => {
    const [count, setCount] = useState(0);
    const targetRef = useRef(null);
    let animationFrameId;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTimestamp;
                    const startAnimation = (timestamp) => {
                        startTimestamp = timestamp;
                        animate(timestamp);
                    };
                    const animate = (timestamp) => {
                        const progress = timestamp - startTimestamp;
                        const increment = Math.ceil(
                            (endValue / duration) * progress
                        );
                        if (
                            progress < duration &&
                            count + increment <= endValue
                        ) {
                            setCount((prevCount) => prevCount + increment);
                            animationFrameId = requestAnimationFrame(animate);
                        } else if (count !== endValue && count < endValue) {
                            setCount(endValue);
                        }
                    };
                    animationFrameId = requestAnimationFrame(startAnimation);
                }
            },
            { threshold: 1 }
        );
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [endValue, duration]);

    return <span ref={targetRef}>{Math.min(count, endValue)}</span>;
};

import React, { useState, useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';



interface scrubProps {
    children?: React.ReactNode;
    scrub?: boolean;
    offsetTop?: string;
    offsetBottom?: string;
}

export default function Scrub<P extends React.ComponentType<any>>(Component: P) {
    

    return function WrappedComponent({ scrub = true, offsetBottom = '0', offsetTop = '0', children, ...rest }: scrubProps & React.ComponentProps<P>) {
        if (!scrub) {
            return <Component {...(rest as any)} />;
        }

        const ref = useRef<any>(null);
        const rectRef = useRef<{ top: number; bottom: number; } | null>(null);
        const offsetRef = useRef<{ top: number; bottom: number; } | null>(null);
        const isInViewRef = useRef<boolean>(false);
        const vwRef = useRef<number>(window.innerWidth);
        const vhRef = useRef<number>(window.innerHeight);
        const [isInView, setIsInView] = useState<boolean>(false);
        const [progress, setProgress] = useState<number>(0);
        const [isBefore, setIsBefore] = useState<boolean>(false);
        const [isPassed, setIsPassed] = useState<boolean>(false);
        const attributes = {
                ref: ref,
                style: { '--scrub': progress} as React.CSSProperties,
                'data-passed': isPassed.toString(),
                'data-inview': isInView.toString(),
        };

        const cssCalcUnitToPx = (val: any, elHeight?: number) => {
            if (typeof val !== 'string') {
                console.error('Invalid argument: val must be a string');
                return null;
            }

            let pixelVal = val.replace(/(\d+)(vw|vh|%|rem|px)?/g, (match: any, number: any, unit: any) => {
                const num = parseFloat(number);
                switch (unit) {
                    case 'vw': return (num * vwRef.current / 100).toString();
                    case 'vh': return (num * vhRef.current / 100).toString();
                    case '%': return (num * (elHeight || 0) / 100).toString();
                    case 'rem': return (num * (typeof window !== 'undefined' ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16)).toString();
                    case 'px': return (num).toString();
                    default: return (num).toString();
                }

            });

            try {
                return eval(pixelVal);
            } catch (error) {
                console.error('Error evaluating expression:', error);
                return null;
            }
        };

        const scrollHandler = (s: number, vh: number) => {
            if (rectRef.current && offsetRef.current) {
                const { top, bottom } = rectRef.current;
                const { top: offsetTop, bottom: offsetBottom } = offsetRef.current;
                const start = top - s + offsetTop - vh;
                const end = bottom - s - offsetBottom;
                const dist = end - start;
                const progress = Math.min(Math.max((end - dist) / -dist, 0), 1);
                setIsBefore(progress === 0);
                setIsPassed(progress === 1);
                setProgress(progress);
            }
        };

        const lenis = useLenis(({ scroll }) => {
            isInViewRef.current === true && scrollHandler(scroll, vhRef.current);
        });

        useEffect(() => {
            const intersectionObserver = new IntersectionObserver(([entry]) => {
                isInViewRef.current = entry.isIntersecting;
                setIsInView(entry.isIntersecting);
            });
            const resizeObserver = new ResizeObserver(() => {
                vwRef.current = window.innerWidth;
                vhRef.current = window.innerHeight;
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    rectRef.current = {
                        top: rect.top + window.scrollY,
                        bottom: rect.bottom + window.scrollY,
                    };
                    offsetRef.current = {
                        top: cssCalcUnitToPx(offsetTop, rect.height),
                        bottom: cssCalcUnitToPx(offsetBottom, rect.height),
                    };
                    scrollHandler(window.scrollY, vhRef.current);
                }
            });
            if (ref.current) {
                intersectionObserver.observe(ref.current);
                resizeObserver.observe(ref.current);
            }
            return () => {
                intersectionObserver.disconnect();
                resizeObserver.disconnect();
                lenis?.destroy();
            };
        }, []);

        return <Component {...attributes} {...(rest as any)} />;
    };
}
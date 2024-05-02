"use client";

import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.css';

interface ImgProps {
    src: string;
    alt?: string;
    className?: string;
    aspectRatio?: '' | '1/1' | '2/3' | '3/2' | '3/4' | '4/3' | '16/9' | '9/16';
    minVh?: boolean;
    offset?: '' | 'left' | 'right' | 'left right';
    place?: '' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top left' | 'top right' | 'top center' | 'center top' | 'center center' | 'center bottom' | 'bottom left' | 'bottom center' | 'bottom right';
    width?: '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    span?: number; // 1—12
    parallax?: boolean;
    parallaxAmount?: '' | 'sm' | 'md' | 'lg';
    marginTop?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    marginBottom?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    sticky?: boolean;
    mobileFullWidth?: boolean;
}

const Img = React.forwardRef(({
    src,
    alt ='',
    className,
    aspectRatio = '3/4',
    minVh = false,
    offset,
    place,
    width = 'xl',
    span = 1,
    parallax = true,
    parallaxAmount,
    marginTop,
    marginBottom,
    sticky = false,
    mobileFullWidth = false,
    ...rest
}: ImgProps, ref: React.Ref<HTMLDivElement>) => {

    const stickyRef = useRef(null);
    const [styleTop, setStyleTop] = useState('0px');

    useEffect(() => {
        const updatePosition = (entries: ResizeObserverEntry[]) => {
            const entry = entries[0];
            if (entry) {
                const height = entry.contentRect.height;
                setStyleTop(`calc(50% - ${height/2}px)`);
            }
        };

        const observer = new ResizeObserver(updatePosition);

        if (stickyRef.current) {
            observer.observe(stickyRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.image} w-full overflow-clip relative grid @container mt-${marginTop ? marginTop : 'none'} mb-${marginBottom ? marginBottom : 'none'} ${className}`}
            data-offset={offset}
            data-observe-inview-scrub={parallax}
            data-plx-amt={parallaxAmount}
            data-col-span={span}
            data-mobile-full-width={mobileFullWidth}
            {...(rest as any)}
        >
            <div
                ref={stickyRef}
                className={`w-full flex overflow-hidden ${sticky ? 'sticky' : 'relative'} ${minVh && 'min-h-svh'}`}
                style={ sticky ? {top: styleTop} : {}}
                data-width={width}
                data-place-self={place}
                data-aspect={aspectRatio}
            >
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                />       
            </div>
        </div>
    );
});

export default Img;
"use client";

import React, { useRef, useEffect, useState } from 'react';

interface ContainerProps {
    children?: React.ReactNode,
    className?: string,
    minVh?: boolean,
    offset?: '' | 'left' | 'right' | 'left right',
    place?: '' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top left' | 'top right' | 'top center' | 'center top' | 'center center' | 'center bottom' | 'bottom left' | 'bottom center' | 'bottom right',
    width?: '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    span?: number, // 1—12
    marginTop?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    marginBottom?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    sticky?: boolean,
    mobileFullWidth?: boolean,
}

const Container = ({
    children,
    className = '',
    minVh = false,
    offset,
    place,
    width = 'xl',
    span = 1,
    marginTop,
    marginBottom,
    sticky = false,
    mobileFullWidth = false,
}: ContainerProps) => {

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
            className={`image w-full overflow-clip relative grid @container mt-${marginTop ? marginTop : 'none'} mb-${marginBottom ? marginBottom : 'none'} ${className}`}
            data-offset={offset}
            data-col-span={span}
            data-mobile-full-width={mobileFullWidth}
        >
            <div
                ref={stickyRef}
                className={`image-container w-full flex-row overflow-hidden ${sticky ? 'sticky' : 'relative'} ${minVh && 'min-h-svh'}`}
                style={sticky ? {top: styleTop} : {}}
                data-width={width}
                data-place-self={place}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
"use client";

import React from 'react';
import Img from '../Img/Img';
import Scrub from '../Scrub/Scrub';
interface ParallaxImgProps {
    src: string;
    parallax?: boolean;
    alt?: string;
    className?: string;
    aspectRatio?: '' | '1/1' | '2/3' | '3/2' | '3/4' | '4/3' | '16/9' | '9/16';
    minVh?: boolean;
    offset?: '' | 'left' | 'right' | 'left right';
    place?: '' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top left' | 'top right' | 'top center' | 'center top' | 'center center' | 'center bottom' | 'bottom left' | 'bottom center' | 'bottom right';
    width?: '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    span?: number; // 1—12
    parallaxAmount?: '' | 'sm' | 'md' | 'lg';
    marginTop?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    marginBottom?: '' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    sticky?: boolean;
    mobileFullWidth?: boolean;
}

const ParallaxImg = ({...props}: ParallaxImgProps) => {
    const Parallax = Scrub(Img);
    return (
        <Parallax {...props} />
    );
};

export default ParallaxImg;
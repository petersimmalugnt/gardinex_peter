"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

/*
    If navlink is current page set navlink className to 'link-current' else 'link'.

    Toggle ${styles.open} to header when clicking on menu button
*/

interface HeaderProps {
  showLargeLogo?: boolean,
  cartLength?: number,
  lang?: string,
  currency?: string,
  invert?: boolean,
}

const Header = ({ showLargeLogo = false, cartLength = 0, lang = 'en', currency = 'eur', invert = false }: HeaderProps) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navTimeoutId = useRef<null | NodeJS.Timeout>(null);

    useEffect(() => {
        return () => {
        if (navTimeoutId.current) {
            clearTimeout(navTimeoutId.current);
        }
        };
    }, []);

    const toggleOpen = () => {
        if (navTimeoutId.current) {
            clearTimeout(navTimeoutId.current);
            navTimeoutId.current = null;
        }

        if (!isVisible) {
            setIsVisible(true);
            navTimeoutId.current = setTimeout(() => {
                setIsOpen(true);
            }, 10);
        } else if (isOpen) {
            setIsOpen(false);
            navTimeoutId.current = setTimeout(() => {
                setIsVisible(false);
            }, 1000);
        } else {
            setIsOpen(true);
        }
    };

    const pathname = usePathname();

    return (
        <>  
            { showLargeLogo && (
            <svg width="100%" height="100%" viewBox="0 0 595 80" fill="none" className={`${invert ? 'text-white' : 'text-black'} overflow-visible flex w-full h-[var(--logoHeight)] pt-[--topSpacing] px-[--sideSpacing] relative top-0 z-50 mb-[-.25rem]`} xmlns="http://www.w3.org/2000/svg">
                <path d="M-1.75759 40.0658C-1.79625 35.8892 -1.65216 22.1333 9.17923 10.7186C16.8371 2.65628 27.7634 -1.7316 39.5121 -1.7316C57.5409 -1.7316 71.6091 8.5368 76.9229 23.4286L62.5419 29.0771C58.4758 19.6294 50.976 12.6476 39.5121 12.6476C25.5493 12.6476 14.5 23.0199 14.5 40.4779C14.5 60.71 29.612 67.3836 40.9705 67.3836C52.3291 67.3836 61.0835 61.1186 63.0621 50.9541H41.5926V38.5281H78.5887C78.7961 40.5749 80.4057 59.5221 65.733 72.3152C55.4253 81.3056 43.2197 81.9013 38.152 81.7628C34.9574 81.6762 22.7413 80.987 12.1138 71.7022C-0.675153 60.516 -1.70839 45.129 -1.75759 40.0658Z" fill="currentColor"/>
                <path d="M118.291 -0.0900421H136.426L167.271 80.0104H150.701L142.572 59.0615H111.515C108.806 66.0468 106.202 73.0286 103.492 80.0104H87.4453L118.291 -0.0900421ZM137.048 44.2736C134.545 37.8043 131.421 29.4857 127.253 18.2926H127.046C124.336 25.5827 120.688 35.0303 117.04 44.2736H137.048Z" fill="currentColor"/>
                <path d="M178.623 -0.0900421H209.993C215.514 -0.0900421 238.234 2.16797 238.234 25.6866C238.234 40.7827 229.167 47.7645 219.893 50.1264V50.2303C226.668 60.09 233.441 70.0502 240.213 80.0104H222.704L203.53 51.3593H194.15V80.0104H178.623V-0.0900421ZM207.178 37.8043C213.011 37.8043 221.977 35.6468 221.977 25.9948C221.977 16.3429 213.12 13.7732 207.388 13.7732H194.153V37.8043H207.181H207.178Z" fill="currentColor"/>
                <path d="M254.484 -0.0900421H285.956C313.052 -0.0900421 324.512 17.7801 324.512 39.4494C324.512 63.2727 310.55 80.0139 286.894 80.0139H254.484V-0.0900421ZM285.018 65.9429C296.794 65.9429 308.258 60.09 308.258 40.2701C308.258 17.2675 292.834 13.981 281.999 13.981H270.015V65.9429H285.021H285.018Z" fill="currentColor"/>
                <path d="M339.934 -0.0900421H355.46V80.0104H339.934V-0.0900421Z" fill="currentColor"/>
                <path d="M375.151 -0.0900421H391.304C403.288 17.4719 415.272 34.6216 427.361 53.2087H427.569V-0.0900421H442.993V80.0104H426.943C414.959 62.6563 402.975 46.0191 390.991 27.8407H390.678V80.0104H375.151V-0.0900421Z" fill="currentColor"/>
                <path d="M462.791 -0.0900421H515.939V13.981H478.317V31.9515H513.851V46.7394H478.317V65.8424H516.979V80.0139H462.787V-0.0900421H462.791Z" fill="currentColor"/>
                <path d="M550.323 40.0658V39.7576L524.897 -0.0865784H543.133C548.865 9.05282 554.492 18.2961 560.224 27.4355H560.431L577.732 -0.0865784H595.969C587.32 13.1602 578.773 26.5108 570.124 39.7576V40.0658L595.656 80.1143H577.001C571.375 70.871 565.956 61.7316 560.329 52.4883H560.122L543.344 80.1143H524.584C533.233 66.7636 541.78 53.413 550.323 40.0658Z" fill="currentColor"/>
            </svg>
            )}

            <header className={`${showLargeLogo ? 'mb-[calc(0px_-_var(--logoHeight)_-_var(--headerHeight)_+_0.25rem)] sticky' : 'fixed inset-x-0' } ${invert ? 'text-white' : 'text-black'} ${styles.header} top-0 w-full grid grid-flow-row grid-cols-[minmax(min-content,_1fr)_auto_minmax(min-content,_1fr)] md:grid-cols-2 gap-x-8 py-[--topSpacing] px-[--sideSpacing]  z-40 ${isOpen ? styles.open : ''}`}>
                <Link href="/" className='flex w-[5.57813em] h-[.75em] self-center z-10'>
                    <svg width="100%" height="100%" viewBox="0 0 595 80" fill="none" className='overflow-visible' xmlns="http://www.w3.org/2000/svg">
                        <path d="M-1.75759 40.0658C-1.79625 35.8892 -1.65216 22.1333 9.17923 10.7186C16.8371 2.65628 27.7634 -1.7316 39.5121 -1.7316C57.5409 -1.7316 71.6091 8.5368 76.9229 23.4286L62.5419 29.0771C58.4758 19.6294 50.976 12.6476 39.5121 12.6476C25.5493 12.6476 14.5 23.0199 14.5 40.4779C14.5 60.71 29.612 67.3836 40.9705 67.3836C52.3291 67.3836 61.0835 61.1186 63.0621 50.9541H41.5926V38.5281H78.5887C78.7961 40.5749 80.4057 59.5221 65.733 72.3152C55.4253 81.3056 43.2197 81.9013 38.152 81.7628C34.9574 81.6762 22.7413 80.987 12.1138 71.7022C-0.675153 60.516 -1.70839 45.129 -1.75759 40.0658Z" fill="currentColor"/>
                        <path d="M118.291 -0.0900421H136.426L167.271 80.0104H150.701L142.572 59.0615H111.515C108.806 66.0468 106.202 73.0286 103.492 80.0104H87.4453L118.291 -0.0900421ZM137.048 44.2736C134.545 37.8043 131.421 29.4857 127.253 18.2926H127.046C124.336 25.5827 120.688 35.0303 117.04 44.2736H137.048Z" fill="currentColor"/>
                        <path d="M178.623 -0.0900421H209.993C215.514 -0.0900421 238.234 2.16797 238.234 25.6866C238.234 40.7827 229.167 47.7645 219.893 50.1264V50.2303C226.668 60.09 233.441 70.0502 240.213 80.0104H222.704L203.53 51.3593H194.15V80.0104H178.623V-0.0900421ZM207.178 37.8043C213.011 37.8043 221.977 35.6468 221.977 25.9948C221.977 16.3429 213.12 13.7732 207.388 13.7732H194.153V37.8043H207.181H207.178Z" fill="currentColor"/>
                        <path d="M254.484 -0.0900421H285.956C313.052 -0.0900421 324.512 17.7801 324.512 39.4494C324.512 63.2727 310.55 80.0139 286.894 80.0139H254.484V-0.0900421ZM285.018 65.9429C296.794 65.9429 308.258 60.09 308.258 40.2701C308.258 17.2675 292.834 13.981 281.999 13.981H270.015V65.9429H285.021H285.018Z" fill="currentColor"/>
                        <path d="M339.934 -0.0900421H355.46V80.0104H339.934V-0.0900421Z" fill="currentColor"/>
                        <path d="M375.151 -0.0900421H391.304C403.288 17.4719 415.272 34.6216 427.361 53.2087H427.569V-0.0900421H442.993V80.0104H426.943C414.959 62.6563 402.975 46.0191 390.991 27.8407H390.678V80.0104H375.151V-0.0900421Z" fill="currentColor"/>
                        <path d="M462.791 -0.0900421H515.939V13.981H478.317V31.9515H513.851V46.7394H478.317V65.8424H516.979V80.0139H462.787V-0.0900421H462.791Z" fill="currentColor"/>
                        <path d="M550.323 40.0658V39.7576L524.897 -0.0865784H543.133C548.865 9.05282 554.492 18.2961 560.224 27.4355H560.431L577.732 -0.0865784H595.969C587.32 13.1602 578.773 26.5108 570.124 39.7576V40.0658L595.656 80.1143H577.001C571.375 70.871 565.956 61.7316 560.329 52.4883H560.122L543.344 80.1143H524.584C533.233 66.7636 541.78 53.413 550.323 40.0658Z" fill="currentColor"/>
                    </svg>
                </Link>
                <nav className={`flex gap-x-8 flex-wrap self-center justify-center font-medium md:absolute md:z-0 md:bg-white md:top-[calc(0.25rem_-_var(--logoHeight))] md:left-0 md:right-0 md:flex-col md:items-center md:text-center md:px-side-xs md:pt-[calc(var(--logoHeight)_+_var(--headerHeight)_+_2.75rem)] md:pb-lg md:gap-y-3xs ${isVisible ? '' : styles.close} `}>
                    <Button href="/shop" isCurrent={pathname === "/shop"} variant='plain' >shop</Button>
                    <Button href="/guide" isCurrent={pathname === "/guide"} variant='plain' >guide</Button>
                    <Button href="/consultation" isCurrent={pathname === "/consultation"} variant='plain' >consultation</Button>
                    <Button href="/journal" isCurrent={pathname === "/journal"} variant='plain' >journal</Button>
                    <Button href="/samples" isCurrent={pathname === "/samples"} variant='plain' >samples</Button>
                    <Button variant='plain' className='link truncate hidden mt-lg md:flex'>{lang} - {currency}</Button>
                </nav>
                <div className='flex justify-self-end gap-x-8 font-medium'>
                    <Button variant='plain' className='truncate md:hidden'>{lang} - {currency}</Button>
                    <Button variant='plain' className='truncate hidden md:block' onClick={toggleOpen}>menu</Button> 
                    <Button variant='plain' className='truncate'>cart ({cartLength})</Button>
                </div>
            </header>
        </>
    );
};

export default Header;
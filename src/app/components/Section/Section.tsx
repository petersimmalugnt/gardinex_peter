import React from 'react';
import styles from './styles.module.css';

/*
    Layouts
        1:  Sticky Left Side
        2:  Center Block
        3:  Horizontal 1fr auto flow grid
        4:  Product grid
        5:  Custom section, wrap to single column on mobile
        6:  Custom section no wrap on mobile
*/

interface SectionProps {
    children: React.ReactNode,
    layout?: number,
    className?: string,
    marginTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
    marginBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
    singleColMobile?: boolean,
}

const Section = ({children, layout = 1, className, marginTop, marginBottom, singleColMobile = true}: SectionProps) => {
    const childArray = React.Children.toArray(children);
    
    let content;

    switch (layout) {
        case 1: // Sticky left side
            content = (
                <section className={`w-full max-w-full relative items-start grid grid-cols-24 grid-flow-row gap-y-xl px-side-xs mt-${marginTop ? marginTop : '3xl'} mb-${marginBottom ? marginBottom : '3xl'} ${className}`}>
                    <div className='flex flex-col sticky top-3xl sm:relative sm:top-0 col-start-2 col-end-7 xl:col-end-9 lg:col-end-11 md:col-start-1 sm:col-end-25'>
                        {childArray[0]}
                    </div>
                    <div className='flex flex-col col-start-13 col-end-23 lg:col-end-24 md:col-end-25 sm:col-start-1'>
                        {childArray.slice(1)}
                    </div>
                </section>
            );
            break;
        
        case 2: // Center block
            content = (
                <section className={`w-full max-w-full grid grid-flow-row grid-cols-1 my-xl px-side-5xl xl:px-side-3xl lg:px-side-xl md:px-side-sm sm:px-side-xs mt-${marginTop ? marginTop : 'xl'} mb-${marginBottom ? marginBottom : 'xl'} ${className}`}>
                    {children}
                </section>
            );
            break;
        
        case 3: // Horizontal 1fr auto flow grid
            content = (
                <section className={`w-full max-w-full grid grid-flow-col px-side-sm sm:px-side-xs mt-${marginTop ? marginTop : 'xl'} mb-${marginBottom ? marginBottom : 'xl'} ${className}`}>
                    {children}
                </section>
            );
            break;
        
        case 4: // Product grid
            content = (
                <section className={`w-full max-w-full flex justify-center flex-wrap gap-col-md lg:gap-y-xl md:gap-y-lg sm:px-side-xs mt-${marginTop ? marginTop : 'xl'} mb-${marginBottom ? marginBottom : 'xl'} ${className}`}>
                    {childArray.map((child, index) => (
                        <div key={index} className='w-col-xl lg:w-col-3xl md:w-col-7xl sm:w-col-8xl'>{child}</div>
                    ))}
                </section>
            );
            break;
        
        case 5: // Custom section, wrap to single column on mobile
            content = (
                <section
                    className={`w-full max-w-full grid auto-cols-fr grid-flow-col md:grid-flow-row px-[--sideSpacing] mt-${marginTop ? marginTop : 'xl'} mb-${marginBottom ? marginBottom : 'xl'} ${className}`}
                >
                    {children}
                </section>
            );
            break;

            case 6: // Custom section no wrap on mobile
            content = (
                <section className={`w-full max-w-full grid auto-cols-fr grid-flow-col px-[--sideSpacing] mt-${marginTop ? marginTop : 'xl'} mb-${marginBottom ? marginBottom : 'xl'} ${className}`}>
                    {children}
                </section>
            );
            break;
        
        default:
            break;
    }

    return (
        <>
            {content}
        </>
    );
};

export default Section;
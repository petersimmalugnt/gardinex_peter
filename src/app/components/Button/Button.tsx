import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "submit" | "button" | "reset";
  className?: string;
  variant?: 'primary' | 'secondary' | 'plain';
  invertColor?: boolean;
  isCurrent?: boolean;
  onClick?: () => void;
};

const Button = ({ children, href, type = "button", className = '', variant, invertColor, isCurrent = false, onClick}: ButtonProps) => {

    const BaseStyle = `flex w-max text-center justify-center px-xs py-3xs text-md font-medium uppercase border border-black ${invertColor && 'invert'}`;
    let VariantStyle = `${BaseStyle} bg-black text-white hover:text-black hover:bg-transparent`;

    if (variant === 'secondary') {
        VariantStyle = `${BaseStyle} bg-transparent text-black hover:text-white hover:bg-black`;
    }

    if (variant === 'plain') {
        VariantStyle = `flex w-max text-center ${isCurrent ? 'link-current' : 'link'} font-medium`;
    }


    if (href) {
    return (
      <Link href={href} className={`${VariantStyle} ${className}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button type={type} className={`${VariantStyle} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }

};

export default Button;
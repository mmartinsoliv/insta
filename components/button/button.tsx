import React, { forwardRef, ButtonHTMLAttributes, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button className='text-black	bg-slate-50 w-80 h-10 rounded-lg' ref={ref} {...props}>
      {!!children && <span>{children}</span>}
    </button>
  )
);

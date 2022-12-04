import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm focus:outline-none font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    teal: 'bg-teal-500 dark:bg-teal-600 text-white hover:bg-teal-600 dark:hover:bg-teal-500 focus-visible:outline-teal-500',
    zinc: 'bg-zinc-600 text-white hover:bg-zinc-500 focus-visible:outline-zinc-500',
    white:
      'bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-200 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-teal-600 focus-visible:ring-slate-300',
    white:
      'border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-zinc-500',
    teal: 'border border-teal-500 focus-visible:outline-teal-500',
  },
};

interface Props {
  variant?: 'solid' | 'outline';
  color?: 'slate' | 'teal' | 'zinc' | 'white';
  className?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  [x: string]: any;
}

export function Button({
  variant = 'solid',
  color = 'teal',
  className = '',
  href,
  children,
  leftIcon,
  rightIcon,
  ...props
}: Props) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Link>
  ) : (
    <button className={className} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}

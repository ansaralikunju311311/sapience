import React from 'react'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-[#00A896] hover:bg-[#00887A] text-white shadow-md shadow-[#00A896]/20 hover:shadow-lg hover:shadow-[#00A896]/30',
    orange: 'bg-[#F95738] hover:bg-[#E04426] text-white shadow-md shadow-[#F95738]/20 hover:shadow-lg hover:shadow-[#F95738]/30',
    secondary: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-slate-300',
    dark: 'bg-[#032B26] hover:bg-[#021F1B] text-white',
    outline: 'bg-transparent border-2 border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700'
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold'
  }

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  )
}

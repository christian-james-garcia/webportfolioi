import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  icon: Icon,
  target,
  rel,
  ariaLabel
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-editorial-accent";

  const variants = {
    primary: "bg-editorial-accent text-white hover:bg-editorial-accentHover shadow-sm active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    secondary: "border border-editorial-ink/70 text-editorial-ink hover:bg-editorial-ink hover:text-white dark:border-editorial-border dark:text-editorial-ink dark:hover:bg-editorial-ink dark:hover:text-editorial-bg active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed",
    outlineAccent: "border border-editorial-accent text-editorial-accent hover:bg-editorial-accent hover:text-white active:scale-[0.98]",
    text: "text-editorial-accent hover:text-editorial-accentHover font-medium p-0 rounded-none underline-offset-4 hover:underline",
    soft: "bg-editorial-accentSoft text-editorial-accent hover:bg-editorial-accent/20 active:scale-[0.98]"
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}

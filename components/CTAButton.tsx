import Link from 'next/link';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  size = 'md',
  className = ''
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zen-leaf focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-zen-leaf text-zen-coffee hover:bg-zen-brown hover:text-zen-coffee",
    secondary: "bg-zen-vanilla text-zen-brown border-2 border-zen-brown hover:bg-zen-brown hover:text-zen-coffee"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
} 
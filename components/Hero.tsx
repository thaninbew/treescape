import Image from 'next/image';
import CTAButton from './CTAButton';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  height?: 'screen' | 'large' | 'medium';
}

export default function Hero({ 
  image, 
  title, 
  subtitle, 
  ctaText = "Book Now",
  ctaHref = "#",
  height = 'large'
}: HeroProps) {
  const heightClasses = {
    screen: 'h-screen',
    large: 'h-[70vh]',
    medium: 'h-[50vh]'
  };
  
  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <CTAButton href={ctaHref} size="lg" className="shadow-lg">
          {ctaText}
        </CTAButton>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
} 
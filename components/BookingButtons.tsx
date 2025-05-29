'use client';

import CTAButton from './CTAButton';

interface BookingButtonsProps {
  resort?: string;
  roomId?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export default function BookingButtons({ 
  resort, 
  roomId, 
  size = 'md', 
  layout = 'horizontal',
  className = '' 
}: BookingButtonsProps) {
  const contactPath = resort ? `/${resort}/contact` : '/contact';
  const contactUrl = roomId ? `${contactPath}?room=${roomId}` : contactPath;
  
  const layoutClasses = layout === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-3' 
    : 'flex flex-col gap-3';

  const handleOnlineBooking = () => {
    window.open('https://ibe.hoteliers.guru/ibe/en/Tree-Scape-Retreat-Resort-Hangdong-Chiangmai-TH?tid=e45117b832284e96bedb1ee28d32553d&', '_blank');
  };

  return (
    <div className={`${layoutClasses} ${className}`}>
      <CTAButton 
        onClick={handleOnlineBooking}
        size={size}
        variant="primary"
        className="flex-1"
      >
        Book Online Now
      </CTAButton>
      <CTAButton 
        href={contactUrl}
        size={size}
        variant="secondary"
        className="flex-1"
      >
        Contact Us Directly
      </CTAButton>
    </div>
  );
} 
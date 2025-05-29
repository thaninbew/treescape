'use client';

import { DayPicker } from 'react-day-picker';
import { addDays, startOfToday } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface RoomAvailabilityCalendarProps {
  roomId: string;
  resort?: string;
}

// Mock availability data - in a real app this would come from an API
const generateAvailability = (roomId: string) => {
  const unavailableDates: Date[] = [];
  const today = startOfToday();
  
  // Generate 90 days of availability data
  for (let i = 0; i < 90; i++) {
    const date = addDays(today, i);
    
    // Mock some unavailable dates (roughly 30% occupancy)
    const hash = date.toISOString().split('T')[0].split('').reduce((a, b) => a + b.charCodeAt(0), 0) + roomId.length;
    if (hash % 10 <= 3) { // Unavailable if hash mod 10 <= 3
      unavailableDates.push(date);
    }
  }
  
  return unavailableDates;
};

export default function RoomAvailabilityCalendar({ roomId, resort }: RoomAvailabilityCalendarProps) {
  const today = startOfToday();
  const unavailableDates = generateAvailability(roomId);
  
  // Disable past dates and unavailable dates
  const disabledDates = [
    { before: today },
    ...unavailableDates
  ];

  // Custom styles for the calendar with zen theme colors
  const customStyles = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #8B7355;
      --rdp-background-color: #F5F1EB;
      --rdp-accent-background-color: #8B7355;
      font-family: inherit;
    }
    
    .rdp-months {
      justify-content: center;
    }
    
    .rdp-month {
      margin: 0;
    }
    
    .rdp-caption {
      color: #4A3F35;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
    .rdp-nav {
      position: absolute;
      top: 0;
      right: 0;
    }
    
    .rdp-nav_button {
      color: #8B7355 !important;
      background: none !important;
      border: none !important;
      cursor: pointer;
      padding: 8px;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    
    .rdp-nav_button:hover {
      background-color: #F5F1EB !important;
      color: #4A3F35 !important;
    }
    
    .rdp-nav_button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    
    .rdp-nav_icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    
    /* Target the SVG chevron specifically */
    .rdp-chevron {
      fill: #8B7355 !important;
      color: #8B7355 !important;
    }
    
    .rdp-nav_button:hover .rdp-chevron {
      fill: #4A3F35 !important;
      color: #4A3F35 !important;
    }
    
    /* Fix any SVG polygon elements */
    .rdp-chevron polygon {
      fill: inherit !important;
    }
    
    .rdp-head_cell {
      color: #4A3F35;
      opacity: 0.8;
      font-weight: 600;
      font-size: 0.8rem;
    }
    
    .rdp-cell {
      color: #4A3F35;
    }
    
    .rdp-day {
      border-radius: 8px;
      transition: all 0.2s ease;
      border: none;
      background: none;
      color: #4A3F35 !important;
      font-weight: 500;
      cursor: default;
    }
    
    /* Improve contrast for regular days */
    .rdp-day_button {
      background: rgba(255, 255, 255, 0.6) !important;
      color: #4A3F35 !important;
      border: 1px solid rgba(139, 115, 85, 0.2) !important;
      border-radius: 8px !important;
      font-weight: 500 !important;
      transition: all 0.2s ease !important;
      cursor: default !important;
    }
    
    .rdp-day:hover:not(.rdp-day_disabled) .rdp-day_button,
    .rdp-day:hover:not(.rdp-day_disabled) {
      background-color: rgba(139, 115, 85, 0.1) !important;
      color: #4A3F35 !important;
      border-color: rgba(139, 115, 85, 0.4) !important;
    }
    
    .rdp-day_disabled .rdp-day_button,
    .rdp-day_disabled {
      opacity: 0.3 !important;
      color: #dc2626 !important;
      text-decoration: line-through !important;
      background-color: rgba(220, 38, 38, 0.1) !important;
      border-color: rgba(220, 38, 38, 0.2) !important;
      cursor: not-allowed !important;
    }
    
    .rdp-day_today .rdp-day_button,
    .rdp-day_today {
      font-weight: bold !important;
      border: 2px solid #8B7355 !important;
      background: rgba(139, 115, 85, 0.1) !important;
      color: #4A3F35 !important;
    }
    
    .rdp-day_outside .rdp-day_button,
    .rdp-day_outside {
      opacity: 0.3;
      color: #8B7355 !important;
    }
    
    /* Override any remaining blue colors */
    .rdp * {
      --rdp-accent-color: #8B7355 !important;
      --rdp-accent-background-color: #8B7355 !important;
    }
  `;

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <DayPicker
        numberOfMonths={1}
        disabled={disabledDates}
        modifiers={{
          booked: unavailableDates,
        }}
        modifiersStyles={{
          booked: {
            textDecoration: 'line-through',
            color: '#dc2626',
            opacity: 0.6,
          },
        }}
        className="mx-auto"
      />

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white border border-zen-green rounded"></div>
          <span className="text-zen-brown">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded opacity-60"></div>
          <span className="text-zen-brown">Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-zen-green rounded"></div>
          <span className="text-zen-brown">Today</span>
        </div>
      </div>

      {/* Booking Info */}
      <div className="mt-4 p-4 bg-zen-vanilla rounded-lg border border-zen-beaver">
        <div className="text-center">
          <h4 className="font-semibold text-zen-brown mb-2">Ready to Book?</h4>
          <p className="text-xs text-zen-brown mb-3">
            <span className="font-medium">Minimum stay:</span> 2 nights
            <br />
            <span className="font-medium">Check-in:</span> 3:00 PM • <span className="font-medium">Check-out:</span> 11:00 AM
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={() => {
                window.open('https://ibe.hoteliers.guru/ibe/en/Tree-Scape-Retreat-Resort-Hangdong-Chiangmai-TH?tid=e45117b832284e96bedb1ee28d32553d&', '_blank');
              }}
              className="px-4 py-2 bg-zen-green text-white rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium"
            >
              Book Online Now
            </button>
            <button
              onClick={() => {
                const contactPath = resort ? `/${resort}/contact` : '/contact';
                window.location.href = contactPath;
              }}
              className="px-4 py-2 bg-zen-brown text-white rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium"
            >
              Contact Us Directly
            </button>
          </div>
          <p className="text-xs text-zen-brown mt-2 opacity-70">
            Book directly online or contact us for personalized assistance
          </p>
        </div>
      </div>
    </div>
  );
} 
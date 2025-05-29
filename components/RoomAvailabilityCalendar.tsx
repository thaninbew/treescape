'use client';

import { useState } from 'react';

interface RoomAvailabilityCalendarProps {
  roomId: string;
}

// Mock availability data - in a real app this would come from an API
const generateAvailability = (roomId: string) => {
  const availability: { [key: string]: boolean } = {};
  const today = new Date();
  
  // Generate 90 days of availability data
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateKey = date.toISOString().split('T')[0];
    
    // Mock some unavailable dates (roughly 30% occupancy)
    const hash = dateKey.split('').reduce((a, b) => a + b.charCodeAt(0), 0) + roomId.length;
    availability[dateKey] = hash % 10 > 3; // Available if hash mod 10 > 3
  }
  
  return availability;
};

const getMonthData = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  const days = [];
  const current = new Date(startDate);
  
  while (current <= lastDay || current.getDay() !== 0) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  
  return days;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
};

export default function RoomAvailabilityCalendar({ roomId }: RoomAvailabilityCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const availability = generateAvailability(roomId);
  
  const monthData = getMonthData(currentDate.getFullYear(), currentDate.getMonth());
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };
  
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return false; // Past dates are not available
    
    const dateKey = date.toISOString().split('T')[0];
    return availability[dateKey] ?? false;
  };
  
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-2 hover:bg-zen-coffee rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-4 h-4 text-zen-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h4 className="text-lg font-semibold text-zen-brown">
          {formatDate(currentDate)}
        </h4>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-2 hover:bg-zen-coffee rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-4 h-4 text-zen-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-zen-brown opacity-70 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {monthData.map((date, index) => {
          const available = isDateAvailable(date);
          const currentMonth = isCurrentMonth(date);
          const today = isToday(date);
          
          return (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center text-xs relative
                ${currentMonth ? 'text-zen-brown' : 'text-zen-brown opacity-30'}
                ${available && currentMonth 
                  ? 'bg-zen-green bg-opacity-20 hover:bg-opacity-30 cursor-pointer' 
                  : currentMonth 
                    ? 'bg-red-100 cursor-not-allowed' 
                    : ''
                }
                ${today ? 'ring-2 ring-zen-green' : ''}
                rounded transition-colors
              `}
              title={`${date.toLocaleDateString()} - ${available ? 'Available' : 'Not Available'}`}
            >
              <span className={`
                ${today ? 'font-bold' : ''}
                ${available && currentMonth ? 'text-zen-green font-medium' : ''}
              `}>
                {date.getDate()}
              </span>
              
              {/* Availability indicator */}
              {currentMonth && (
                <div className={`
                  absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full
                  ${available ? 'bg-zen-green' : 'bg-red-400'}
                `} />
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-zen-green bg-opacity-20 rounded"></div>
          <span className="text-zen-brown">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-100 rounded"></div>
          <span className="text-zen-brown">Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-zen-green rounded"></div>
          <span className="text-zen-brown">Today</span>
        </div>
      </div>

      {/* Booking Note */}
      <div className="mt-4 p-3 bg-zen-leaf bg-opacity-10 rounded-lg">
        <p className="text-xs text-zen-brown text-center">
          <span className="font-medium">Minimum stay:</span> 2 nights
          <br />
          <span className="font-medium">Check-in:</span> 3:00 PM • <span className="font-medium">Check-out:</span> 11:00 AM
        </p>
      </div>
    </div>
  );
} 
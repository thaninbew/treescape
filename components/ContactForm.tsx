'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: 2
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default behavior - could integrate with email service
        console.log('Form submitted:', formData);
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        checkIn: '',
        checkOut: '',
        guests: 2
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full px-4 py-3 bg-zen-vanilla border border-zen-beaver rounded-lg focus:outline-none focus:ring-2 focus:ring-zen-leaf focus:border-transparent text-zen-brown placeholder-zen-brown placeholder-opacity-60";
  
  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zen-brown mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zen-brown mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your email"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-zen-brown mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-zen-brown mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select a subject</option>
            <option value="reservation">Reservation Inquiry</option>
            <option value="general">General Information</option>
            <option value="events">Events & Weddings</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      {/* Booking Information (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-semibold text-zen-brown mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        
        <div>
          <label htmlFor="checkOut" className="block text-sm font-semibold text-zen-brown mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-semibold text-zen-brown mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={inputClasses}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-zen-brown mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your inquiry or special requests..."
        />
      </div>
      
      {/* Submit Button */}
      <div className="flex flex-col items-center space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center font-semibold rounded transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zen-leaf focus:ring-offset-2 bg-zen-leaf text-zen-coffee hover:bg-zen-brown hover:text-zen-coffee px-6 py-3 text-base w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className="text-zen-green text-sm font-medium">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm font-medium">
            Sorry, there was an error sending your message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
} 
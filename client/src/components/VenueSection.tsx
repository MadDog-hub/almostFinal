"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';
import OceanStickers from '@/components/OceanStickers';

import ceremony_and_reception from "@assets/ceremony and reception.jpg";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony & Reception',
      name: 'The Grand Pavilion & Resort',
      address: 'Sta. Maria, Bulacan',
      image: 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759425882812/ceremony%20and%20reception_1759425882812.jpg',
      mapUrl: 'https://maps.app.goo.gl/KNvn2E9bym8hxT5T8',
      description: 'We will exchange vows and celebrate our union at The Grand Pavilion & Resort.',
      details: 'Please arrive early to ensure you are seated before the ceremony begins.',
      additionalInfo: 'UNPLUGGED CEREMONY - We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment.',
      startTime: '2:00 PM',
      locationGuide: 'Location Guide →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-[#e0b246]" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-display text-[#3D3228] mb-3 text-2xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-[#6B5D51] mb-3 text-base" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={ceremony_and_reception}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split('\n').map((line, i) => (
                    <p key={i} className="text-base font-body leading-relaxed text-[#3d3228]" data-testid={`text-${venue.title.toLowerCase()}-description-${i + 1}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p className="text-base font-body text-[#3d3228]" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary-foreground/20">
                  <div className="text-left">
                    <p className="text-sm font-body italic text-[#3d3228]" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <LinkPreview
                      url={venue.mapUrl}
                      className="location-guide-btn font-body text-[#3d3228] hover:text-[#3d3228]/80 transition-colors duration-200"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                    </LinkPreview>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center border border-[#e5e5e5] rounded-lg p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-[#3D3228] mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-[#6B5D51] leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;
import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import OceanStickers from '@/components/OceanStickers';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#B5A18E] text-white py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      {/* Ocean Stickers */}
      <OceanStickers variant="footer" density="medium" />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-white" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Ernesto
              <span className="text-white mx-3">&</span>
              Carmela
            </h2>
            <p className="text-white text-lg">
              November 09, 2025 • The Grand Pavilion & Resort, Sta. Maria, Bulacan
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-white/30"></div>
            <Heart className="w-6 h-6 text-white animate-float" />
            <div className="w-16 h-px bg-white/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-white leading-relaxed italic">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white text-sm">
              With love and gratitude,
            </p>
            <p className="text-white" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Ernesto & Carmela
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#9E7F5E] to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;
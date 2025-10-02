import { motion } from 'framer-motion';
import C_E_Wedding_Invt__pg_2_of_3 from "@assets/C&E Wedding Invt. pg 2 of 3.jpg";
import C_E_Wedding_Invt__pg_3_of_3 from "@assets/C&E Wedding Invt. pg 3 of 3_1759426774103.jpg";

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#C9BAA8] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#C9BAA8] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <img 
            src={C_E_Wedding_Invt__pg_2_of_3}
            alt="Brian - Lawson Wedding Entourage"
            className="w-full max-w-4xl mx-auto object-contain mb-8"
          />
        </motion.div>

        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <img 
            src={C_E_Wedding_Invt__pg_3_of_3}
            alt="Wedding Entourage Details - Veil, Candle, Cord, Ring Bearer, and Special Guests"
            className="w-full max-w-4xl mx-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
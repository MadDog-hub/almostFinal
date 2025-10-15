import { motion } from 'framer-motion';

const VideoSection = () => {

  return (
    <motion.section 
      className="section-hard-blue relative w-full overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-display mb-8 text-center text-[#deae39]" data-testid="text-video-title">
          Save the Date Video
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/S9RQqfamD4U"
            title="Save the Date Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video-youtube-embed"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
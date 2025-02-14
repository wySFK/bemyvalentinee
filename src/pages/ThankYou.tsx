import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { Volume2, VolumeX } from 'lucide-react';
import BackButton from '../components/BackButton';

const ThankYou = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  // Updated with Wave to Earth's "Bad"
  const [play, { stop }] = useSound('/music/wave-to-earth-bad.mp3', { volume: 1, autoplay: true });

  useEffect(() => {
    play();
    return () => stop(); // Cleanup on unmount
  }, [play, stop]);

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-2xl w-full text-center space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Thank you, my loveey!
        </h1>

        <p className="text-black text-lg md:text-xl font-semibold leading-relaxed">
          I'm so grateful to have you as my Valentine, my other half, my true home, 
          and the greatest blessing in my life.  
          <br /><br />
          You are always more than enough for me, and I love you so much  
          for everything that you are, my lolove. 🤍
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
          <img 
            src="images/sleep.gif" 
            alt="Two Cats Hugging and Kissing GIF" 
            className="w-full h-full object-cover" 
          />
        </div>

        <button
          onClick={toggleMusic}
          className="button-secondary flex items-center gap-2"
        >
          {isPlaying ? <VolumeX /> : <Volume2 />}
          {isPlaying ? 'Stop Music' : 'Play Music'}
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/food-choices')}
          className="button-primary mt-8"
        >
          Choose Our Date
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ThankYou;

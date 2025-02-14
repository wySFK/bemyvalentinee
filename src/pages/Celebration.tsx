import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { Heart, Flower, Volume2, VolumeX } from 'lucide-react';
import BackButton from '../components/BackButton';

const Celebration = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { stop }] = useSound('music/iloveyou.mp3', { volume: 1, autoplay: true });

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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <BackButton />

      {/* Floating hearts and flowers animation */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-rose-400/40"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Heart size={Math.random() * 30 + 20} />
        </motion.div>
      ))}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute text-pink-500/50"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
            rotate: [0, 15, -15, 0], // Slight rotation for a natural effect
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Flower size={Math.random() * 30 + 20} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-2xl w-full text-center space-y-8 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Thank You for Being My Valentine
        </h1>

        <p className="text-xl text-gray-700 leading-relaxed">
          My lolove, you are my greatest blessing, and I'm so grateful every day to have you in my life.
          Every moment with you is a reminder of how lucky I am. I can't wait to create more
          beautiful memories together. I love you so much for everything that you are, and I'm excited for all that our future holds. 
          No matter what, we'll face it hand in hand, always and in all ways, my wifee. 🤍
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart
                  size={140 - i * 20}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-lg text-gray-600 italic">
          "In all the world, there is no heart for me like yours.<br />
          In all the world, there is no love for you like mine."
        </p>

        {/* Music Play Button Below the Quote */}
        <button
          onClick={toggleMusic}
          className="button-secondary flex items-center justify-center gap-2 mx-auto mt-4"
        >
          {isPlaying ? <VolumeX /> : <Volume2 />}
          {isPlaying ? 'Stop Music' : 'Play Music'}
        </button>
      </motion.div>
    </div>
  );
};

export default Celebration;

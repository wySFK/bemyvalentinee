
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState(0);
  const [noButtonScale, setNoButtonScale] = useState(1);
  const MAX_SCALE = 2; // Maximum scale limit

  const handleYesClick = () => {
    navigate('/thank-you');
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Only increase scale if it's below the maximum limit
    if (noButtonScale < MAX_SCALE) {
      setNoButtonScale(noButtonScale + 0.2);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-300/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={Math.random() * 30 + 20} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-2xl w-full text-center space-y-8 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="button-primary"
          >
            Yes
          </motion.button>

          <motion.button
            style={{ scale: noButtonScale }}
            whileHover={{ scale: noButtonScale * 1.05 }}
            whileTap={{ scale: noButtonScale * 0.95 }}
            onClick={handleNoClick}
            className="button-secondary"
          >
            No
          </motion.button>
        </div>

        {noCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black italic mt-4"
          >
            Loloveee 🥺
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Index;

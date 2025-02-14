import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import BackButton from '../components/BackButton';

const desserts = [
  { id: 1, name: 'Milk Tea', image: '/images/milktea.png ' },
  { id: 2, name: 'Ice Cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f' },
  { id: 3, name: 'Halo-halo', image: '/images/halo.png ' },
  { id: 4, name: 'Mango Float', image: '/images/mango.png ' },
  { id: 5, name: 'Leche Flan', image: '/images/leche.png' },
  { id: 6, name: 'Maja Blanca', image: '/images/maja.png ' },
];

const DessertChoices = () => {
  const navigate = useNavigate();
  const [selectedDesserts, setSelectedDesserts] = useState<number[]>([]);
  const [comment, setComment] = useState('');

  const toggleDessert = (id: number) => {
    setSelectedDesserts(prev =>
      prev.includes(id)
        ? prev.filter(dessertId => dessertId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Choose Your Desserts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {desserts.map((dessert) => (
            <motion.div
              key={dessert.id}
              whileHover={{ scale: 1.02 }}
              className={`glass-card relative overflow-hidden cursor-pointer
                ${selectedDesserts.includes(dessert.id) ? 'ring-2 ring-black' : ''}`}
              onClick={() => toggleDessert(dessert.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-full object-cover"
                />
                {selectedDesserts.includes(dessert.id) && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Check className="text-white w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{dessert.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 mb-8">
          <label className="block text-lg font-medium text-black mb-2">
            Any special dessert requests?
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent"
            rows={4}
            placeholder="Tell me what other desserts you'd like..."
          />
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/place-choices')}
            className="button-primary"
            disabled={selectedDesserts.length === 0}
          >
            Choose Our Date Location
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DessertChoices;

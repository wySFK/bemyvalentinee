import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import BackButton from '../components/BackButton';

const places = [
  { id: 1, name: 'Arcade', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033' },
  { id: 2, name: 'Cinema', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },
  { id: 3, name: 'Mall', image: 'images/abreeza.png' },
  { id: 4, name: 'Picnic', image: 'images/picnic.png' },
  { id: 5, name: 'Thrift Shop', image: 'images/thrift.png' },
  { id: 6, name: 'Park', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f' },
  { id: 7, name: 'Church', image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092' },
  { id: 8, name: 'Musuem', image: 'images/musuem.png' },
];

const PlaceChoices = () => {
  const navigate = useNavigate();
  const [selectedPlaces, setSelectedPlaces] = useState<number[]>([]);
  const [comment, setComment] = useState('');

  const togglePlace = (id: number) => {
    setSelectedPlaces(prev =>
      prev.includes(id)
        ? prev.filter(placeId => placeId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Where Should We Go?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {places.map((place) => (
            <motion.div
              key={place.id}
              whileHover={{ scale: 1.02 }}
              className={`glass-card relative overflow-hidden cursor-pointer
                ${selectedPlaces.includes(place.id) ? 'ring-2 ring-black' : ''}`}
              onClick={() => togglePlace(place.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                {selectedPlaces.includes(place.id) && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Check className="text-white w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{place.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 mb-8">
          <label className="block text-lg font-medium text-black mb-2">
            Have another place in mind?
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent"
            rows={4}
            placeholder="Tell me where else you'd like to go..."
          />
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/celebration')}
            className="button-primary"
            disabled={selectedPlaces.length === 0}
          >
            Continue to Celebration
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PlaceChoices;

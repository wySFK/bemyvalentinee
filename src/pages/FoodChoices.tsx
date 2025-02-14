import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import BackButton from '../components/BackButton';

const foods = [
  { id: 1, name: 'Chicken and Fries', image: '/images/chicken.png ' },
  { id: 2, name: 'Samgyup', image: '/images/samgyup.png ' },
  { id: 3, name: 'Lasagna', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3' },
  { id: 4, name: 'Spaghetti', image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77' },
  { id: 5, name: 'Korean Food', image: '/images/korean.png ' },
  { id: 6, name: 'Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9' },
  { id: 7, name: 'Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' },
  { id: 8, name: 'Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
  { id: 9, name: 'Steak', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e' },
  { id: 10, name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c' },
  { id: 11, name: 'Ramen', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
  { id: 12, name: 'BBQ', image: '/images/bbq.png' },
];

const FoodChoices = () => {
  const navigate = useNavigate();
  const [selectedFoods, setSelectedFoods] = useState<number[]>([]);

  const toggleFood = (id: number) => {
    setSelectedFoods(prev =>
      prev.includes(id)
        ? prev.filter(foodId => foodId !== id)
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
          Choose Your Foods
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <motion.div
              key={food.id}
              whileHover={{ scale: 1.02 }}
              className={`glass-card relative overflow-hidden cursor-pointer
                ${selectedFoods.includes(food.id) ? 'ring-2 ring-black' : ''}`}
              onClick={() => toggleFood(food.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                {selectedFoods.includes(food.id) && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Check className="text-white w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{food.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Button Section */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dessert-choices')}
            className="button-primary"
            disabled={selectedFoods.length === 0}
          >
            Continue to Desserts
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
  
}
export default FoodChoices;

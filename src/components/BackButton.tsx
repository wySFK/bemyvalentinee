import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 p-2 rounded-full bg-black backdrop-blur-sm hover:bg-gray-900 transition-all duration-300 z-50"
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  );
};

export default BackButton;

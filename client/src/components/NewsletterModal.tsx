import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";

function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Auto show modal after 5s
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setIsOpen(false); // close modal after confetti
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white border border-gray-400 shadow-2xl p-10 w-[90%] max-w-lg relative">
        
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ❌
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter ✉️</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates on projects, blogs, and learning resources.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Button
          onClick={handleSubscribe}
          className="w-full py-2 bg-black text-white font-medium hover:bg-black/90 transition cursor-pointer"
        >
          Subscribe
        </Button>

        {showConfetti && <Confetti />}
      </div>
    </div>
  );
}

export default NewsletterModal;

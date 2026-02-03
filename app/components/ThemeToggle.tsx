'use client';

import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../providers/ThemeProvider';
import { useState, useRef } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // Ref for the audio element to prevent repeated creation
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = () => {
    if (isAnimating) return;

    // Play click sound
    if (!audioRef.current) {
      audioRef.current = new Audio('/click.mp3');
    }
    if (audioRef.current) {
      // Reset and play even if triggered in succession
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setIsAnimating(true);

    // Change theme after clip-path animation completes (covers the screen)
    setTimeout(() => {
      toggleTheme();
      setIsAnimating(false);
    }, 500); // After animation duration
  };

  return (
    <>
      {/* Theme transition overlay with clip-path animation */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-9999 pointer-events-none"
            style={{
              backgroundColor: theme === 'dark' ? '#f5f5f5' : '#101217',
            }}
            initial={{ clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={handleToggle}
        className={`absolute top-14 right-10 md:top-15 md:right-20 lg:right-70 z-50 p-2 md:p-2 rounded-full border border-border hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer
          ${theme === 'light' ? 'bg-white' : 'bg-primary'}`}
        transition={{ duration: 0.2 }}
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={15} className="text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={15} className="text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

import { motion } from "motion/react";

// Helper function to split text while preserving emojis and Unicode characters
function splitText(text: string): string[] {
  // Use Intl.Segmenter if available (modern browsers)
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (segment) => segment.segment);
  }

  // Fallback: Use regex to match emojis and regular characters
  // This regex matches emoji sequences, regular characters, and spaces
  const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|[\u{1F1E6}-\u{1F1FF}]{2})/gu;
  const parts: string[] = [];
  let lastIndex = 0;
  let match;

  while ((match = emojiRegex.exec(text)) !== null) {
    // Add text before emoji
    if (match.index > lastIndex) {
      const before = text.slice(lastIndex, match.index);
      parts.push(...before.split(''));
    }
    // Add emoji as single unit
    parts.push(match[0]);
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex);
    parts.push(...remaining.split(''));
  }

  return parts.length > 0 ? parts : text.split('');
}

// Helper component for letter-by-letter text reveal animation
export function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const segments = splitText(text);

  return (
    <motion.span
      className={` ${className || ''}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.01,
            delayChildren: delay,
          },
        },
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.3,
              },
            },
          }}
          style={{ display: 'inline-flex' }}
        >
          {segment === ' ' ? '\u00A0' : segment}
        </motion.span>
      ))}
    </motion.span>
  );
}
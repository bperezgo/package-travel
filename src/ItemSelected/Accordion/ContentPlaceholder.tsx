import React from 'react';
import { motion } from 'framer-motion';

const randomInt = (min: number, max: number) =>
  Math.round((max - min) * Math.random() + min);
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }: { width: number }) => (
  <div className="word" style={{ width }} />
);

const Paragraph = ({ words }: { words: number[] }) => (
  <div className="paragraph">
    {words.map((width, idx) => (
      <Word key={idx} width={width} />
    ))}
  </div>
);

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    {paragraphs.map((words, idx) => (
      <Paragraph key={idx} words={words} />
    ))}
  </motion.div>
);

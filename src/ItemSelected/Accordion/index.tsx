import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentPlaceholder } from './ContentPlaceholder';
import colors from '../../colors';
import './styles.scss';

type AccordionProps = {
  id: string;
  expanded: string;
  setExpanded: (id: string) => void;
};

export const Accordion = ({ id, expanded, setExpanded }: AccordionProps) => {
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  const isOpen = id === expanded;
  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen ? colors.$color_1 : colors.$color_2,
        }}
        onClick={() => setExpanded(id)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

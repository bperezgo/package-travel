import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentPlaceholder } from './ContentPlaceholder';
import Typography from '@mui/material/Typography';
import { IProps } from '../../types';
import colors from '../../colors';
import './styles.scss';

interface AccordionProps extends IProps {
  expanded: string;
  setExpanded: (id: string) => void;
}

export const Accordion = ({
  expanded,
  setExpanded,
  ...item
}: AccordionProps) => {
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  const isOpen = item.id === expanded;
  return (
    <>
      <motion.div
        className="Header-accordion text-center"
        initial={false}
        animate={{
          backgroundColor: isOpen ? colors.$color_1 : colors.$color_2,
        }}
        onClick={() => setExpanded(item.id)}
      >
        <Typography component="h2">{item.name}</Typography>
      </motion.div>
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

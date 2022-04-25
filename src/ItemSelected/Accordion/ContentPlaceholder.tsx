import React from 'react';
import { motion } from 'framer-motion';
import { IProps } from '../../types';

export const ContentPlaceholder = ({ ...item }: IProps) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    {item.description}
  </motion.div>
);

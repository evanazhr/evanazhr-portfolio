// components/FadeInSection.js
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScaleUp({ children, delay }: { children: React.ReactNode, delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}

            transition={{ delay: delay * 0.3, duration: 2, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }, }}
        >
            {children}
        </motion.div>
    );
}

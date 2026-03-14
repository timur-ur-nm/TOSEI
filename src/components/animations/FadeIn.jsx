// src/animation/FadeIn.jsx
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      viewport={{
        once: false,   // анимация каждый раз при появлении
        amount: 0.3,   // когда 30% элемента видно
      }}
    >
      {children}
    </motion.div>
  );
}
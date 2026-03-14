import { motion } from "framer-motion";

export default function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.4,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
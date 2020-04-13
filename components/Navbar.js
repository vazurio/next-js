import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";

export const Example = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </>
  );
};

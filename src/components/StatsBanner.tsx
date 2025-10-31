'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaUsers } from 'react-icons/fa';

const Counter = ({ from, to, duration, start }: { from: number; to: number; duration: number; start: boolean }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!start) return;
    let startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * easeOut);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, from, to, duration]);

  return <span>{count}+</span>;
};

const StatsBanner = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      setStartCounter(true);
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="w-full px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center gap-10"
      >
        {/* Box 1 */}
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white p-6 rounded-2xl shadow-xl w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300">
          <FaProjectDiagram className="text-5xl mx-auto mb-4" />
          <div className="text-4xl font-extrabold">
            <Counter from={0} to={100} duration={5} start={startCounter} />
          </div>
          <p className="mt-2 text-lg font-semibold">Successful Projects</p>
        </div>

        {/* Box 2 */}
        <div className="bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-white p-6 rounded-2xl shadow-xl w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300">
          <FaUsers className="text-5xl mx-auto mb-4" />
          <div className="text-4xl font-extrabold">
            <Counter from={0} to={1000} duration={5.5} start={startCounter} />
          </div>
          <p className="mt-2 text-lg font-semibold">Happy Customers</p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsBanner;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type TextRotatorProps = {
    words?: string[];
    duration?: number; // time before changing words
};

const list1 = [
        "REACT",
        "NEXTJS",
        "TYPESCRIPT",
        "PRISMA",
        "NEON",
        "REDUX",
    ]
const list2 = [
        "DESIGN",
        "SCALE",
        "MAINTAIN",
        'DEPLOY',
        "REPEAT",
        
    ]
export default function TextRotater({
    words = list2    ,
    duration = 2000,
}: TextRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words.length, duration]);

    return (
        <div className="   overflow-hidden h-[10em] w-full text-stone-300 border-0 border-white">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="  text-5xl font-bold flex justify-start border-0  "
                >
                    <span className="text-yellow-300">
                        {words[index]}
                    </span>
                </motion.span>
            </AnimatePresence>
        </div>
        /*  <div className="relative inline-block overflow-hidden h-[4em] w-full text-white border-0 border-white">
           <AnimatePresence mode="wait">
             <motion.span
               key={words[index]}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="absolute left-0 top-0 text-5xl font-bold flex justify-center mx-auto border"
             >
               <span className="">
                 {words[index]}
               </span>
             </motion.span>
           </AnimatePresence>
         </div> */
    );
}

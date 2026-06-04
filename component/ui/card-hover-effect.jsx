import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
         className={cn(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-10",
    className

      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link || "#"}
          key={idx}
          className="relative group block"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>

         <Card className="h-60 w-full bg-white">
            <div className="flex flex-col items-center ">
              <img
                src={item.image}
                alt="card"
                className="w-full h-20 object-contain rounded-xl"
              />

              <CardDescription className="text-center mt-6 ">
                {item.description}
              </CardDescription>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-gray-200 group-hover:border-slate-400 relative z-20 shadow-md",
        className
      )}
    >
      <div className="relative z-50 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-gray-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
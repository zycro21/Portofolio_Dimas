import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface HistoryCardProps {
  logo: string;
  title: string;
  role: string;
  place: string;
  duration: string;
  details: string[];
}

const HistoryCard = ({
  logo,
  title,
  role,
  place,
  duration,
  details,
}: HistoryCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      whileHover={{
        borderColor: "#34D399",
        transition: { duration: 0.3 },
      }}
      className="w-full max-w-7xl min-h-[100px] p-6 rounded-md bg-gray-800 border border-gray-700 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 rounded-full border border-gray-500 shadow-md bg-white overflow-hidden flex items-center justify-center"
        >
          <Image
            src={logo}
            alt={title}
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-lg text-gray-300">
            <strong>{role}</strong> – {place}
          </p>
          <p className="text-base text-gray-400">{duration}</p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showMore && (
          <motion.ul
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4 text-gray-300 text-lg list-disc pl-6 ml-2 space-y-2 marker:text-green-400"
          >
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        className="mt-4 flex items-center gap-2 text-green-400 text-sm hover:underline hover:text-green-300 transition-colors"
        onClick={() => setShowMore((prev) => !prev)}
      >
        Show {showMore ? "Less" : "More"}
        <motion.div
          animate={{ rotate: showMore ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default HistoryCard;

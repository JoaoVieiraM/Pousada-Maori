import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
  color: 'turquoise' | 'coral' | 'orange' | 'yellow';
  highlight?: boolean;
  link?: string;
}

const InfoCard = ({ icon, title, items, color, highlight = false, link }: InfoCardProps) => {
  const colorClasses = {
    turquoise: {
      bg: 'bg-maori-turquoise',
      text: 'text-maori-turquoise',
      border: 'border-maori-turquoise',
      hover: 'hover:shadow-maori-turquoise/30'
    },
    coral: {
      bg: 'bg-maori-coral',
      text: 'text-maori-coral',
      border: 'border-maori-coral',
      hover: 'hover:shadow-maori-coral/30'
    },
    orange: {
      bg: 'bg-maori-orange',
      text: 'text-maori-orange',
      border: 'border-maori-orange',
      hover: 'hover:shadow-maori-orange/30'
    },
    yellow: {
      bg: 'bg-maori-yellow',
      text: 'text-maori-yellow',
      border: 'border-maori-yellow',
      hover: 'hover:shadow-maori-yellow/30'
    }
  };

  const colors = colorClasses[color];

  const cardContent = (
    <motion.div
      className={`
        relative bg-white rounded-2xl p-6 shadow-lg
        ${highlight ? `border-2 ${colors.border}` : 'border border-gray-200'}
        transition-all duration-300
        hover:shadow-2xl ${colors.hover}
        h-full flex flex-col
        ${link ? 'cursor-pointer' : ''}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white text-2xl shadow-md`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={`text-xl font-display font-semibold mb-4 ${colors.text}`}>
        {title}
      </h3>

      {/* Items List */}
      <ul className="space-y-2 flex-grow">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="text-gray-700 text-sm leading-relaxed flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={`${colors.text} mr-2 mt-1 flex-shrink-0`}>•</span>
            <span className={item.includes(':') ? 'font-medium' : ''}>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Highlight Badge */}
      {highlight && (
        <motion.div
          className={`absolute -top-3 -right-3 ${colors.bg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          ★
        </motion.div>
      )}
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default InfoCard;

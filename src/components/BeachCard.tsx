import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaWalking, FaCar, FaChevronDown, FaWater, FaUmbrellaBeach, FaStar, FaUtensils } from 'react-icons/fa';

interface BeachInfo {
  profile: string;
  sea: string;
  highlight: string;
  activities?: string;
  infrastructure?: string;
}

interface BeachCardProps {
  name: string;
  distance: string;
  walkTime: string;
  color: 'turquoise' | 'coral' | 'orange' | 'yellow';
  info: BeachInfo;
  image: string;
}

const BeachCard = ({ name, distance, walkTime, color, info, image }: BeachCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    turquoise: {
      bg: 'bg-maori-turquoise',
      text: 'text-maori-turquoise',
      gradient: 'from-maori-turquoise/20 to-maori-turquoise/5',
      hover: 'hover:bg-maori-turquoise/10'
    },
    coral: {
      bg: 'bg-maori-coral',
      text: 'text-maori-coral',
      gradient: 'from-maori-coral/20 to-maori-coral/5',
      hover: 'hover:bg-maori-coral/10'
    },
    orange: {
      bg: 'bg-maori-orange',
      text: 'text-maori-orange',
      gradient: 'from-maori-orange/20 to-maori-orange/5',
      hover: 'hover:bg-maori-orange/10'
    },
    yellow: {
      bg: 'bg-maori-yellow',
      text: 'text-maori-yellow',
      gradient: 'from-maori-yellow/20 to-maori-yellow/5',
      hover: 'hover:bg-maori-yellow/10'
    }
  };

  const colors = colorClasses[color];
  const isByFoot = walkTime.includes('pé');

  return (
    <motion.div
      className={`relative overflow-hidden bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Beach wave decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="currentColor"
            className={colors.text}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className={`text-xl font-display font-bold ${colors.text} flex-1`}>
            {name}
          </h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${colors.text} ml-2 flex-shrink-0`}
          >
            <FaChevronDown />
          </motion.div>
        </div>

        {/* Beach Image */}
        <div className="mb-4 -mx-6 -mt-2">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Distance & Time */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className={colors.text} />
            <span className="text-gray-700 font-semibold">{distance}</span>
          </div>

          <div className="flex items-center gap-2">
            {isByFoot ? (
              <FaWalking className={colors.text} />
            ) : (
              <FaCar className={colors.text} />
            )}
            <span className="text-gray-600">{walkTime}</span>
          </div>
        </div>

        {/* Click hint when collapsed */}
        {!isExpanded && (
          <motion.p
            className="text-xs text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Clique para mais informações
          </motion.p>
        )}

        {/* Expanded Information */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-300 space-y-3">
                {/* Profile */}
                <div className="flex gap-3">
                  <FaUmbrellaBeach className={`${colors.text} flex-shrink-0 mt-1`} />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Perfil:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{info.profile}</p>
                  </div>
                </div>

                {/* Sea */}
                <div className="flex gap-3">
                  <FaWater className={`${colors.text} flex-shrink-0 mt-1`} />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Mar:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{info.sea}</p>
                  </div>
                </div>

                {/* Highlight */}
                <div className="flex gap-3">
                  <FaStar className={`${colors.text} flex-shrink-0 mt-1`} />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Destaque:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{info.highlight}</p>
                  </div>
                </div>

                {/* Activities (if available) */}
                {info.activities && (
                  <div className="flex gap-3">
                    <FaUmbrellaBeach className={`${colors.text} flex-shrink-0 mt-1`} />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-1">Atividades:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{info.activities}</p>
                    </div>
                  </div>
                )}

                {/* Infrastructure (if available) */}
                {info.infrastructure && (
                  <div className="flex gap-3">
                    <FaUtensils className={`${colors.text} flex-shrink-0 mt-1`} />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-1">Infraestrutura:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{info.infrastructure}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default BeachCard;

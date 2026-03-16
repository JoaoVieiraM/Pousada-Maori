import { motion } from 'framer-motion';

// Logo oficial da Pousada Maori - Tartaruga Maori em SVG
const MaoriLogo = () => {
  return (
    <motion.svg
      viewBox="0 0 200 240"
      className="w-full h-full drop-shadow-2xl"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
    >
      {/* Tartaruga Maori - Baseada no logo oficial */}

      {/* Nadadeira Esquerda Superior */}
      <motion.path
        d="M 50 100 Q 30 90, 35 80 Q 40 70, 50 75 Q 55 80, 50 100 Z"
        fill="white"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      {/* Padrões na nadadeira esquerda */}
      <motion.path
        d="M 40 82 Q 42 80, 44 82"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      {/* Nadadeira Direita Superior */}
      <motion.path
        d="M 150 100 Q 170 90, 165 80 Q 160 70, 150 75 Q 145 80, 150 100 Z"
        fill="white"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      {/* Padrões na nadadeira direita */}
      <motion.path
        d="M 160 82 Q 158 80, 156 82"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      {/* Cabeça */}
      <motion.ellipse
        cx="100"
        cy="70"
        rx="18"
        ry="28"
        fill="white"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />

      {/* Padrões na cabeça */}
      <motion.circle
        cx="100"
        cy="65"
        r="3"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />

      {/* Corpo Principal (Casco) */}
      <motion.ellipse
        cx="100"
        cy="130"
        rx="65"
        ry="55"
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      {/* Padrões Maori no Casco - Círculo Central */}
      <motion.circle
        cx="100"
        cy="130"
        r="25"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />

      {/* Padrão interno do círculo central */}
      <motion.path
        d="M 85 130 Q 92 122, 100 130 Q 108 122, 115 130"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      />

      {/* Círculos decorativos ao redor */}
      <motion.circle
        cx="70"
        cy="115"
        r="8"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.3 }}
      />

      <motion.circle
        cx="130"
        cy="115"
        r="8"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.3 }}
      />

      <motion.circle
        cx="70"
        cy="145"
        r="7"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />

      <motion.circle
        cx="130"
        cy="145"
        r="7"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />

      {/* Espirais decorativas */}
      <motion.path
        d="M 58 130 Q 62 125, 66 130"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />

      <motion.path
        d="M 134 130 Q 138 125, 142 130"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />

      {/* Padrões geométricos superiores */}
      <motion.circle
        cx="100"
        cy="105"
        r="5"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
      />

      <motion.circle
        cx="100"
        cy="155"
        r="5"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
      />

      {/* Nadadeira Esquerda Inferior */}
      <motion.path
        d="M 55 165 Q 35 170, 40 180 Q 45 185, 55 180 Q 58 175, 55 165 Z"
        fill="white"
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />

      {/* Padrões na nadadeira inferior esquerda */}
      <motion.circle
        cx="48"
        cy="175"
        r="3"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, duration: 0.3 }}
      />

      {/* Nadadeira Direita Inferior */}
      <motion.path
        d="M 145 165 Q 165 170, 160 180 Q 155 185, 145 180 Q 142 175, 145 165 Z"
        fill="white"
        initial={{ x: 25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />

      {/* Padrões na nadadeira inferior direita */}
      <motion.circle
        cx="152"
        cy="175"
        r="3"
        fill="currentColor"
        className="text-maori-turquoise"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, duration: 0.3 }}
      />

      {/* Detalhes finais - pequenos círculos decorativos */}
      <motion.circle
        cx="85"
        cy="130"
        r="4"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="1.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.9, duration: 0.3 }}
      />

      <motion.circle
        cx="115"
        cy="130"
        r="4"
        fill="none"
        stroke="currentColor"
        className="text-maori-turquoise"
        strokeWidth="1.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.9, duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default MaoriLogo;

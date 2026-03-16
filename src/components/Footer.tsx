import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-maori-dark text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Turtle Icon */}
          <div className="mb-4 flex justify-center">
            <svg viewBox="0 0 100 100" className="w-12 h-12 opacity-50">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="38" cy="42" r="3" fill="currentColor" />
              <circle cx="62" cy="42" r="3" fill="currentColor" />
              <circle cx="38" cy="58" r="3" fill="currentColor" />
              <circle cx="62" cy="58" r="3" fill="currentColor" />
            </svg>
          </div>

          <p className="text-sm opacity-75 mb-2">
            Pousada Maori - Sua experiência inesquecível
          </p>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span>Feito com</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-maori-coral" />
            </motion.div>
            <span>para nossos hóspedes</span>
          </motion.div>

          <p className="text-xs opacity-50 mt-4">
            © {new Date().getFullYear()} Pousada Maori. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

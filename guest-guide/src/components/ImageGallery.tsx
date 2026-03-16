import { motion } from 'framer-motion';
import { FaImage } from 'react-icons/fa';

const ImageGallery = () => {
  const images = [
    {
      src: '/area-comum.jpg',
      alt: 'Área Comum da Pousada Maori',
      title: 'Área Comum'
    },
    {
      src: '/quarto.jpg',
      alt: 'Quarto da Pousada Maori',
      title: 'Nossos Quartos'
    },
    {
      src: '/arte-parede.jpg',
      alt: 'Arte na Parede',
      title: 'Design Único'
    },
    {
      src: '/pousada-exterior.jpg',
      alt: 'Fachada da Pousada Maori',
      title: 'Fachada'
    }
  ];

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-10">
        <FaImage className="text-5xl text-maori-turquoise mx-auto mb-4" />
        <h2 className="text-3xl font-display font-bold text-maori-dark mb-3">
          Conheça Nossa Pousada
        </h2>
        <p className="text-gray-600">
          Veja alguns dos nossos espaços aconchegantes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-display font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>

            {/* Decorative corner */}
            <motion.div
              className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative wave divider */}
      <motion.div
        className="mt-12 mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-12 text-maori-turquoise/20"
        >
          <path
            d="M0,30 Q300,10 600,30 T1200,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0,40 Q300,20 600,40 T1200,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery;

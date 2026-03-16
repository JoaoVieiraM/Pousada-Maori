import { motion } from 'framer-motion';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import BeachCard from './components/BeachCard';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import {
  FaClock,
  FaWifi,
  FaCoffee,
  FaBed,
  FaSwimmingPool,
  FaPaw,
  FaPlug,
  FaCalendarCheck,
  FaUmbrellaBeach
} from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import './App.css';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maori-beige via-white to-maori-turquoise/10">
      <Hero />

      <motion.div
        className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-display font-bold text-maori-dark mb-4">
            Bem-vindo à Pousada Maori
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos felizes em recebê-lo! Este guia contém todas as informações importantes para tornar sua estadia memorável.
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <ImageGallery />

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <InfoCard
            icon={<FaCalendarCheck />}
            title="Check-in"
            color="turquoise"
            items={[
              "Horário: 14h às 21h",
              "Check-in após 21h: pagamento integral antecipado necessário"
            ]}
          />

          <InfoCard
            icon={<FaClock />}
            title="Check-out"
            color="coral"
            items={[
              "Horário: até às 11h",
              "Deixe as chaves na recepção"
            ]}
          />

          <InfoCard
            icon={<FaWifi />}
            title="Internet Wi-Fi"
            color="orange"
            highlight={true}
            items={[
              "Rede: Pousada Maori",
              "Senha: pousada007"
            ]}
          />

          <InfoCard
            icon={<FaCoffee />}
            title="Café da Manhã"
            color="yellow"
            items={[
              "Horário: 7h às 9:30h",
              "Importante: Reservas via Booking.com não incluem café da manhã no valor"
            ]}
          />

          <InfoCard
            icon={<FaBed />}
            title="Seu Quarto"
            color="turquoise"
            items={[
              "SmartTV com streaming",
              "Frigobar",
              "Ar condicionado",
              "Roupa de cama premium",
              "Banheiro privativo"
            ]}
          />

          <InfoCard
            icon={<FaPlug />}
            title="Tomadas"
            color="coral"
            items={[
              "Todas as tomadas: 220V",
              "Traga adaptador se necessário"
            ]}
          />

          <InfoCard
            icon={<FaSwimmingPool />}
            title="Piscina"
            color="orange"
            items={[
              "Horário: 10h às 21h",
              "Verifique dias de manutenção na recepção"
            ]}
          />

          <InfoCard
            icon={<FaPaw />}
            title="Política de Pets"
            color="yellow"
            items={[
              "Não aceitamos animais de estimação",
              "Obrigado pela compreensão"
            ]}
          />

          <InfoCard
            icon={<MdRestaurant />}
            title="Reserve Conosco"
            color="turquoise"
            highlight={true}
            items={[
              "Faça sua próxima reserva pelo Booking.com",
              "Avalie sua experiência!"
            ]}
            link="https://www.booking.com/hotel/br/maori-pousada.pt-br.html"
          />
        </div>

        {/* Beaches Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <FaUmbrellaBeach className="text-5xl text-maori-turquoise mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-maori-dark mb-3">
              Praias na Vizinhança
            </h2>
            <p className="text-gray-600">
              Descubra as praias paradisíacas próximas à pousada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BeachCard
              name="Boicucanga Beach"
              distance="450 m"
              walkTime="~6 min a pé"
              color="turquoise"
              image="/praia-boicucanga.jpg"
              info={{
                profile: "Uma das praias com melhor infraestrutura comercial da região (shoppings, bancos, supermercados).",
                sea: "Mar de tombo (profundidade aumenta rápido), mas geralmente com poucas ondas.",
                highlight: "Famosa pelo pôr do sol no mar, um dos mais bonitos do litoral norte.",
                activities: "Passeios de barco para as ilhas (Ilha das Couves, Montão de Trigo) e acesso a trilhas para cachoeiras (Ribeirão de Itu)."
              }}
            />
            <BeachCard
              name="Brava Beach"
              distance="850 m"
              walkTime="~11 min a pé"
              color="coral"
              image="/praia-brava.jpg"
              info={{
                profile: "Praia selvagem e deserta, cercada por Mata Atlântica preservada. Acesso apenas por trilha (aprox. 1 hora de caminhada com nível moderado) ou barco.",
                sea: "Ondas fortes e agitadas, muito procurada por surfistas.",
                highlight: "Natureza intocada e isolamento total (não há quiosques ou vendedores)."
              }}
            />
            <BeachCard
              name="Praia de Camburizinho"
              distance="2,7 km"
              walkTime="~8 min de carro"
              color="orange"
              image="/praia-camburizinho.jpg"
              info={{
                profile: "Separada da Praia de Camburi por um rio que deságua no mar. É mais tranquila e familiar que a vizinha.",
                sea: "Águas mais calmas e rasas no canto esquerdo (próximo ao rio), ideal para crianças.",
                highlight: "O encontro do rio com o mar e o visual do ilhote em frente à praia.",
                infrastructure: "Bons hotéis e alguns quiosques/restaurantes pé na areia."
              }}
            />
            <BeachCard
              name="Praia de Camburi"
              distance="3,4 km"
              walkTime="~10 min de carro"
              color="yellow"
              image="/praia-camburi.png"
              info={{
                profile: "Praia badalada, frequentada por um público jovem e sofisticado.",
                sea: "Mar agitado com boas ondas, excelente para o surf.",
                highlight: "Gastronomia de alto nível (alguns dos melhores restaurantes do litoral norte estão aqui) e vida noturna.",
                infrastructure: "Excelente, com muitas opções de hospedagem e serviços."
              }}
            />
            <BeachCard
              name="Maresias Beach"
              distance="6 km"
              walkTime="~15 min de carro"
              color="turquoise"
              image="/praia-maresias.jpg"
              info={{
                profile: "A praia mais famosa e cosmopolita de São Sebastião.",
                sea: "Famosa mundialmente pelas ondas tubulares (palco de campeonatos internacionais de surf).",
                highlight: "Vida noturna agitada (baladas famosas) e o 'Canto do Moreira' (melhor ponto para surf).",
                infrastructure: "Completa, com hotéis de luxo, pousadas, bares e restaurantes variados."
              }}
            />
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-maori-turquoise"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-display font-bold text-maori-dark mb-4">
            Precisa de Ajuda?
          </h3>
          <p className="text-gray-600 mb-4">
            Nossa equipe está sempre disponível para atendê-lo!
          </p>
          <p className="text-lg font-semibold text-maori-turquoise">
            Entre em contato com a recepção
          </p>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;

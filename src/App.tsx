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
  FaUmbrellaBeach,
  FaHiking,
  FaPhone
} from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import { GiWaterfall, GiSailboat } from 'react-icons/gi';
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

        {/* Restaurants Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <MdRestaurant className="text-5xl text-maori-coral mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-maori-dark mb-3">
              Restaurantes Recomendados
            </h2>
            <p className="text-gray-600">
              Sabores imperdíveis próximos à pousada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={<MdRestaurant />}
              title="Sebasthiana Beach Bar"
              color="coral"
              highlight={true}
              items={[
                "Ambiente descontraído 'pé na areia' de frente para o mar",
                "Especialidade: Frutos do mar e linguado grelhado",
                "Serviço de praia com astral único do litoral",
                "📍 Praia de Boiçucanga (Rua Capitão Salinas, 80)"
              ]}
            />
            <InfoCard
              icon={<MdRestaurant />}
              title="Acarajé da Nê"
              color="orange"
              highlight={true}
              items={[
                "Autêntica comida baiana com ambiente colorido",
                "Especialidade: Acarajé, moquecas e bobó de camarão",
                "Buffet e à la carte com sabor da Bahia",
                "📍 Praia de Boiçucanga (Rua Benjamin Manoel dos Santos, 96)"
              ]}
            />
          </div>
        </motion.div>

        {/* Boat Tour Contact */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-maori-turquoise to-blue-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <GiSailboat className="text-6xl mx-auto mb-4" />
            <h3 className="text-3xl font-display font-bold mb-3">
              Passeio de Barco
            </h3>
            <p className="text-lg mb-4 opacity-90">
              Explore as ilhas paradisíacas da região (Ilha das Couves, Montão de Trigo)
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block">
              <FaPhone className="inline-block mr-2" />
              <a href="tel:+5512982614502" className="text-xl font-semibold hover:underline">
                +55 12 98261-4502
              </a>
              <p className="text-sm mt-1 opacity-90">(Rodrigo)</p>
            </div>
          </div>
        </motion.div>

        {/* Trails and Waterfalls Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="flex justify-center gap-4 mb-4">
              <FaHiking className="text-5xl text-maori-orange" />
              <GiWaterfall className="text-5xl text-maori-turquoise" />
            </div>
            <h2 className="text-3xl font-display font-bold text-maori-dark mb-3">
              Trilhas e Cachoeiras
            </h2>
            <p className="text-gray-600">
              Aventure-se pela natureza exuberante da região
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              icon={<GiWaterfall />}
              title="Cachoeiras do Ribeirão de Itu"
              color="turquoise"
              highlight={true}
              image="/cachoeiraribeiraodeitu.webp"
              items={[
                "Complexo de quedas d'água na Mata Atlântica",
                "Inclui: Hidromassagem, Pedra Lisa e Samambaiaçu (20m)",
                "Trilha fácil/moderada: ~2km (40-60 min)",
                "Piscinas naturais de águas cristalinas",
                "📍 Boiçucanga"
              ]}
            />
            <InfoCard
              icon={<FaHiking />}
              title="Trilha Maresias - Paúba"
              color="coral"
              image="/trilhapauba.jpg"
              items={[
                "Trilha famosa e acessível entre duas praias",
                "Mirante de Maresias com vista panorâmica",
                "Duração: 30-40 minutos",
                "Nível: Fácil com subida leve",
                "📍 Inicia no canto norte de Maresias"
              ]}
            />
            <InfoCard
              icon={<FaHiking />}
              title="Trilha da Praia Brava"
              color="orange"
              image="/praia-brava.jpg"
              items={[
                "Leva à praia mais isolada e preservada",
                "Praia deserta cercada por encostas verdes",
                "Duração: ~1 hora de caminhada",
                "Nível: Moderado com trechos íngremes",
                "Mirante com vista para as ilhas no caminho"
              ]}
            />
            <InfoCard
              icon={<GiWaterfall />}
              title="Cachoeira de Camburi"
              color="yellow"
              image="/cachoeirariodaspedras(sertaocambury).webp"
              items={[
                "Localizada no Sertão do Cacau, Camburi",
                "Queda d'água charmosa com poço profundo",
                "Refúgio de paz em meio à mata",
                "Trilha curta e fácil",
                "📍 Final da estrada do Sertão do Cacau"
              ]}
            />
          </div>
        </motion.div>

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
                highlight: "Natureza intocada e isolamento total (não há quiosques ou vendedores).",
                activities: "Trilha: Nível moderado com trechos íngremes partindo de Boiçucanga (~1h). No caminho há um mirante com vista espetacular para as ilhas."
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
            <BeachCard
              name="Praia da Baleia"
              distance="12 km"
              walkTime="~20 min de carro"
              color="yellow"
              image="/praia-da-baleia.jpg"
              info={{
                profile: "Uma das praias mais exclusivas e tranquilas de São Sebastião. Larga faixa de areia compacta, ideal para esportes.",
                sea: "Águas claras e calmas no canto esquerdo (ideal para crianças e natação) e ondas mais constantes no canto direito (bom para surfistas iniciantes).",
                highlight: "Perfeita para caminhadas, corridas e andar de bicicleta na areia. Ambiente estritamente residencial garantindo paz e sossego.",
                activities: "Stand-up paddle, caiaque e observação da natureza.",
                infrastructure: "Sem comércio ambulante agitado, proporcionando tranquilidade total."
              }}
            />
          </div>
        </motion.div>

      </motion.div>

      <Footer />
    </div>
  );
}

export default App;

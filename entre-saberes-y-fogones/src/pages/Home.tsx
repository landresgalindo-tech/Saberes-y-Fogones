import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section — solo la foto */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="/hero.jpeg"
          alt="Cocina tradicional colombiana"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Welcome Section — debajo de la foto */}
      <section className="bg-hueso/60 py-20 border-b border-carbon/10">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <p className="font-sans tracking-[0.25em] uppercase text-terracota text-sm">
              Investigación y memoria de la cocina tradicional
            </p>

            {/* Título */}
            <h1 className="font-serif text-4xl md:text-6xl text-carbon uppercase tracking-wider leading-tight">
              Entre Saberes y Fogones
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4">
              <span className="block w-12 h-px bg-terracota/50" />
              <span className="text-terracota text-lg">✦</span>
              <span className="block w-12 h-px bg-terracota/50" />
            </div>

            {/* Texto de bienvenida */}
            <p className="font-sub text-carbon/75 text-lg md:text-xl leading-relaxed">
              Este es un espacio dedicado a documentar los saberes culinarios que se transmiten de generación en generación, muchas veces sin que nadie los escriba. Aquí encontrarás recetas con historia, técnicas ancestrales, relatos de quienes las conservan, y una mirada investigativa que busca darle a la cocina tradicional colombiana el lugar que merece.
            </p>

            {/* Divisor */}
            <div className="flex items-center justify-center gap-4">
              <span className="block w-12 h-px bg-carbon/15" />
              <span className="text-terracota text-base">✦</span>
              <span className="block w-12 h-px bg-carbon/15" />
            </div>

            {/* Llamado a explorar */}
            <p className="font-sub text-carbon/75 text-lg leading-relaxed">
              Recorre las regiones de Colombia y descubre lo que allí se cocina, se recuerda y se transmite. Entra a
              la sección Editorial para leer investigaciones y ensayos sobre patrimonio gastronómico.
            </p>

            {/* Llamado a participar */}
            <p className="font-sub text-carbon/75 text-lg leading-relaxed">
              Si conoces una receta familiar sin documentar, una técnica que casi nadie recuerda, o a alguien que debería ser entrevistado, este espacio también es tuyo.
            </p>
          </motion.div>
        </div>
      </section>





    </div>
  );
};

export default Home;

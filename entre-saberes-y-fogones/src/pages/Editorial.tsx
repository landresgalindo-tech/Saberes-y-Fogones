import { motion } from 'framer-motion';

const Editorial = () => {
  return (
    <div className="w-full bg-hueso/20 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="block text-oliva text-sm font-sans tracking-widest uppercase mb-4">
            Investigación y Ensayos
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-carbon uppercase tracking-wide">
            Editorial
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mock Article Cards */}
          {[1, 2, 3, 4].map((item) => (
            <motion.article 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer flex flex-col md:flex-row gap-6 bg-crema p-6 shadow-sm border border-carbon/5 hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden w-full md:w-1/2 h-[250px] shrink-0">
                <img 
                  src={`https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1784&auto=format&fit=crop&sig=${item + 10}`} 
                  alt="Artículo" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <span className="text-oliva text-xs font-sans tracking-widest uppercase">
                  Patrimonio • Oct 12, 2026
                </span>
                <h3 className="font-serif text-2xl text-carbon group-hover:text-terracota transition-colors leading-snug">
                  ¿Por qué documentar la cocina tradicional es una carrera contra el tiempo?
                </h3>
                <p className="font-sub text-carbon/70 line-clamp-3 text-sm">
                  Un análisis sobre la pérdida sistemática de saberes culinarios en las comunidades andinas y la urgencia de establecer metodologías de registro participativo.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editorial;

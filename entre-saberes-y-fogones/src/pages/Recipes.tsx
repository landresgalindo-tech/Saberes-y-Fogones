import { motion } from 'framer-motion';

const Recipes = () => {
  return (
    <div className="w-full bg-crema min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="block text-oliva text-sm font-sans tracking-widest uppercase mb-4">
            Archivo Culinario
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-carbon uppercase tracking-wide">
            Recetas Documentadas
          </h1>
          <p className="font-sub text-carbon/70 max-w-2xl mx-auto mt-6 text-lg">
            Fichas patrimoniales que detallan historia, origen, importancia cultural y procedimiento de las preparaciones tradicionales.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mock Recipe Cards */}
          {[1, 2].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer border border-carbon/10 bg-hueso/10"
            >
              <div className="overflow-hidden h-[300px] border-b border-carbon/10 relative">
                <img 
                  src={`https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&sig=${item + 20}`} 
                  alt="Receta" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-crema px-3 py-1 border border-carbon/20">
                  <span className="font-serif text-xs uppercase tracking-widest text-carbon">Ficha N°00{item}</span>
                </div>
              </div>
              <div className="p-8 text-center space-y-4 relative">
                <h3 className="font-serif text-3xl text-carbon group-hover:text-terracota transition-colors">
                  Ajiaco Santafereño de Leña
                </h3>
                <div className="w-12 h-px bg-terracota mx-auto my-4"></div>
                <p className="font-sub text-carbon/80 text-sm">
                  Cundinamarca, Región Andina
                </p>
                <div className="pt-4 flex justify-center gap-6 font-sans text-xs uppercase tracking-widest text-oliva">
                  <span>Preparación: 3h</span>
                  <span>Origen: S. XIX</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;

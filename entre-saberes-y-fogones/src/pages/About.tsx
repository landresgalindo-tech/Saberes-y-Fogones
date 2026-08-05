import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full bg-crema min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="font-serif text-4xl md:text-6xl text-carbon text-center uppercase tracking-wide mb-16">
            Sobre Nosotros
          </h1>

          <div className="prose prose-lg prose-headings:font-serif prose-p:font-sub prose-p:text-carbon/80 max-w-none">

            {/* Párrafo intro con letra capital */}
            <div className="mb-16">
              <p className="font-sub text-carbon/85 text-lg md:text-xl leading-[1.9] mb-8">
                <span className="float-left font-serif text-7xl md:text-8xl leading-[0.8] mr-3 mt-1 text-terracota select-none">E</span>
                ntre Saberes y Fogones nace de una preocupación simple: gran parte de la cocina
                tradicional colombiana vive únicamente en la memoria de quienes la practican, sin haber
                sido documentada jamás. Cuando esa persona ya no está, ese conocimiento no se hereda
                automáticamente — se pierde, salvo que alguien se haya tomado el trabajo de preguntar,
                observar y anotar.
              </p>

              <p className="font-sub text-carbon/80 text-lg leading-[1.9] mb-8">
                Mi trabajo consiste en ir al encuentro de ese conocimiento antes de que desaparezca:
                hablar con quienes lo poseen, registrar sus técnicas, entender el contexto histórico y
                cultural detrás de cada preparación, y devolverle a esos saberes el reconocimiento que
                merecen.
              </p>

              {/* Línea de acento */}
              <div className="flex items-center gap-4 my-10">
                <span className="block flex-1 h-px bg-carbon/10" />
                <span className="text-terracota text-base">✦</span>
                <span className="block flex-1 h-px bg-carbon/10" />
              </div>

              <p className="font-sub text-carbon/80 text-lg leading-[1.9] mb-8">
                Este proyecto combina investigación bibliográfica rigurosa con trabajo de campo directo —
                entrevistas a cocineras y cocineros tradicionales, revisión de fuentes históricas y
                documentación fotográfica. No es un espacio de recetas nuevas ni de tendencias
                culinarias: <span className="text-carbon font-medium">es un esfuerzo de memoria.</span>
              </p>

              <p className="font-sub text-carbon/80 text-lg leading-[1.9]">
                El nombre <em>"Entre Saberes y Fogones"</em> resume esa idea: un puente entre el
                conocimiento que se guarda en la memoria de nuestras comunidades (los saberes) y la
                cocina viva de nuestros hogares (los fogones), para que ese conocimiento siga vivo en
                las generaciones que vienen.
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;

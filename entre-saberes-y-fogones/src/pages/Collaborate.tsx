import { motion } from 'framer-motion';

const ContactItem = ({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start gap-5 group"
  >
    <div className="mt-1 w-10 h-10 flex items-center justify-center border border-terracota/40 text-terracota group-hover:bg-terracota group-hover:text-crema transition-all duration-300 flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-sans text-xs uppercase tracking-widest text-carbon/50 mb-1">{label}</p>
      <p className="font-sub text-carbon group-hover:text-terracota transition-colors duration-300 text-base">
        {value}
      </p>
    </div>
  </motion.a>
);

const Collaborate = () => {
  return (
    <div className="w-full bg-hueso/20 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Header — centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="block text-oliva text-sm font-sans tracking-widest uppercase mb-5">
            Estamos aquí para ayudarte
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-carbon uppercase tracking-wide leading-none mb-8">
            Contáctanos
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="block w-12 h-px bg-terracota/50" />
            <span className="text-terracota text-lg">✦</span>
            <span className="block w-12 h-px bg-terracota/50" />
          </div>
        </motion.div>

        {/* Subpárrafo introductorio — centrado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto text-center mb-20 space-y-5"
        >
          <p className="font-sub text-carbon/75 text-lg leading-relaxed">
            Entre Saberes y Fogones no puede sostenerse solo desde un escritorio. Se construye con la
            memoria de quienes cocinan, recuerdan y transmiten estos saberes día a día.
          </p>
          <p className="font-sub text-carbon/65 text-lg leading-relaxed">
            Si en tu familia hay una receta que se ha pasado de mano en mano, si conoces una técnica
            que casi nadie practica, o si conoces a alguien que debería ser entrevistado — cuéntanos.
            Cada aporte suma a este archivo colectivo de memoria.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-xs uppercase tracking-widest text-oliva"
            >
              Medios de contacto
            </motion.p>

            <div className="space-y-8">
              <ContactItem
                delay={0.25}
                label="Correo electrónico"
                value="entresaberesyfogones@gmail.com"
                href="mailto:entresaberesyfogones@gmail.com"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
              />
              <ContactItem
                delay={0.35}
                label="WhatsApp"
                value="+57 314 2526594"
                href="https://wa.me/573142526594"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                }
              />
            </div>

            {/* Tiempo de respuesta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="border-t border-carbon/10 pt-8"
            >
              <p className="font-sans text-xs uppercase tracking-widest text-carbon/40">
                Tiempo de respuesta
              </p>
              <p className="font-sub text-carbon/60 mt-2 text-sm">
                Respondemos en un plazo máximo de 48 horas hábiles.
              </p>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 bg-crema p-8 md:p-12 shadow-sm border border-carbon/10"
          >
            <p className="font-sans text-xs uppercase tracking-widest text-oliva mb-8">
              Envíanos un mensaje
            </p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-carbon">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-carbon/20 py-3 focus:outline-none focus:border-terracota transition-colors font-sub text-carbon placeholder:text-carbon/30"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-carbon">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-carbon/20 py-3 focus:outline-none focus:border-terracota transition-colors font-sub text-carbon placeholder:text-carbon/30"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-carbon">
                  Asunto
                </label>
                <select
                  defaultValue=""
                  className="w-full bg-transparent border-b border-carbon/20 py-3 focus:outline-none focus:border-terracota transition-colors font-sub text-carbon cursor-pointer"
                >
                  <option value="" disabled className="bg-crema text-carbon/50">
                    Selecciona una opción
                  </option>
                  <option value="Consulta" className="bg-crema text-carbon">
                    Consulta
                  </option>
                  <option value="Aporte" className="bg-crema text-carbon">
                    Aporte
                  </option>
                  <option value="Investigación" className="bg-crema text-carbon">
                    Investigación
                  </option>
                  <option value="Invitación" className="bg-crema text-carbon">
                    Invitación
                  </option>
                  <option value="Otros" className="bg-crema text-carbon">
                    Otros
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-carbon">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-carbon/20 p-4 focus:outline-none focus:border-terracota transition-colors font-sub text-carbon resize-none mt-2 placeholder:text-carbon/30"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-carbon text-crema font-sans uppercase tracking-widest text-sm py-4 hover:bg-terracota transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Collaborate;

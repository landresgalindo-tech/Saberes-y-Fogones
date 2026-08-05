import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  { src: '/2.jpeg', alt: 'Fotografía culinaria 1' },
  { src: '/3.jpeg', alt: 'Fotografía culinaria 2' },
  { src: '/4.jpeg', alt: 'Fotografía culinaria 3' },
  { src: '/5.jpeg', alt: 'Fotografía culinaria 4' },
  { src: '/11.jpeg', alt: 'Fotografía culinaria 5' },
  { src: '/6.png', alt: 'Fotografía culinaria 6' },
  { src: '/7.png', alt: 'Fotografía culinaria 7' },
  { src: '/8.png', alt: 'Fotografía culinaria 8' },
  { src: '/9.png', alt: 'Fotografía culinaria 9' },
  { src: '/10.png', alt: 'Fotografía culinaria 10' },
  { src: '/WhatsApp Image 2026-07-20 at 12.05.34 PM (1).jpeg', alt: 'Fotografía de campo 1' },
  { src: '/WhatsApp Image 2026-08-04 at 5.21.59 PM.jpeg', alt: 'Fotografía de campo 2' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.00 PM (1).jpeg', alt: 'Fotografía de campo 3' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.00 PM (2).jpeg', alt: 'Fotografía de campo 4' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.00 PM (3).jpeg', alt: 'Fotografía de campo 5' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.00 PM (4).jpeg', alt: 'Fotografía de campo 6' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.00 PM.jpeg', alt: 'Fotografía de campo 7' },
  { src: '/WhatsApp Image 2026-08-04 at 5.22.01 PM.jpeg', alt: 'Fotografía de campo 8' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Cerrar con Escape y navegar con flechas
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i! + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  return (
    <div className="w-full bg-crema min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h1 className="font-serif text-4xl md:text-6xl text-carbon uppercase tracking-wide">
            Galería
          </h1>
          <p className="font-sub text-carbon/70 max-w-2xl mx-auto mt-6 text-lg">
            Fotografía documental de campo, ingredientes crudos y procesos culinarios.
          </p>
        </motion.div>

        {/* Grid de imágenes */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              className="w-full overflow-hidden break-inside-avoid group relative cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-carbon/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-crema text-xl uppercase tracking-widest border border-crema px-6 py-2">
                  Ver Imagen
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-carbon/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Imagen */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-crema/70 hover:text-crema transition-colors"
              aria-label="Cerrar"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Flecha anterior */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + images.length) % images.length); }}
              className="absolute left-4 text-crema/60 hover:text-crema transition-colors"
              aria-label="Anterior"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Flecha siguiente */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % images.length); }}
              className="absolute right-4 text-crema/60 hover:text-crema transition-colors"
              aria-label="Siguiente"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Contador */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs uppercase tracking-widest text-crema/40">
              {selectedIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

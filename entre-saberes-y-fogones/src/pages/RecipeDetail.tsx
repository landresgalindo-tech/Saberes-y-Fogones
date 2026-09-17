import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  MapPin,
  Award,
  Flame,
  BookOpen,
  Utensils,
  CheckCircle2,
  Share2,
  Info,
  Maximize2,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Camera
} from 'lucide-react';
import { getRecipeById } from '../data/recipes';

const RecipeDetail = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const recipe = recipeId ? getRecipeById(recipeId) : undefined;

  const [activeTab, setActiveTab] = useState<'historia' | 'ingredientes' | 'preparacion' | 'memoria' | 'fuentes'>('historia');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipeId]);

  const handleNextImage = useCallback(() => {
    if (!recipe) return;
    setDirection(1);
    setActiveImageIndex((prev) => (prev + 1) % recipe.gallery.length);
  }, [recipe]);

  const handlePrevImage = useCallback(() => {
    if (!recipe) return;
    setDirection(-1);
    setActiveImageIndex((prev) => (prev - 1 + recipe.gallery.length) % recipe.gallery.length);
  }, [recipe]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenImage) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextImage, handlePrevImage, fullscreenImage]);

  if (!recipe) {
    return (
      <div className="w-full bg-crema min-h-screen pt-32 pb-24 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-3xl md:text-5xl text-carbon mb-4">Receta No Encontrada</h1>
        <p className="font-sub text-carbon/75 text-lg mb-8 max-w-md">
          La ficha patrimonial que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/recetas"
          className="bg-carbon text-crema font-sans uppercase tracking-widest text-xs py-3.5 px-8 hover:bg-terracota transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Recetas Documentadas</span>
        </Link>
      </div>
    );
  }

  const currentGalleryItem = recipe.gallery[activeImageIndex] || {
    url: recipe.featuredImage,
    caption: recipe.title
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96
    })
  };

  return (
    <div className="w-full bg-crema min-h-screen pt-28 md:pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Navigation Breadcrumb / Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/recetas')}
            className="inline-flex items-center gap-2 text-carbon/70 hover:text-terracota font-sans text-xs uppercase tracking-widest transition-colors py-2 px-4 rounded-full hover:bg-hueso/60 border border-transparent hover:border-carbon/10 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Recetas Documentadas</span>
          </button>
        </div>

        {/* Recipe Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-hueso/30 border border-carbon/15 rounded-sm p-6 md:p-10 mb-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-carbon text-crema font-serif text-xs px-3 py-1 uppercase tracking-widest shadow-sm">
              {recipe.code}
            </span>
            {recipe.recognition && (
              <span className="bg-terracota text-crema font-sans text-xs px-3 py-1 uppercase tracking-wider font-medium shadow-sm flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> {recipe.recognition}
              </span>
            )}
            <span className="bg-oliva/15 text-oliva border border-oliva/30 font-sans text-xs px-3 py-1 uppercase tracking-wider font-semibold">
              {recipe.identityTag}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-carbon leading-snug tracking-wide mb-4">
            {recipe.title}
          </h1>

          <p className="font-serif italic text-lg md:text-xl text-terracota/90 mb-6">
            {recipe.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-carbon/15 text-xs font-sans text-carbon/80 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-terracota" /> {recipe.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-terracota" /> {recipe.cookingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-terracota" /> {recipe.region}
            </span>
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="space-y-12">
          
          {/* ELEGANT INTERACTIVE PHOTO CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-carbon rounded-sm p-4 md:p-6 border border-carbon/20 shadow-2xl space-y-4 overflow-hidden relative"
          >
            {/* Main Carousel Frame */}
            <div className="relative h-[380px] sm:h-[460px] md:h-[560px] w-full flex items-center justify-center overflow-hidden bg-carbon/95 rounded-xs select-none">
              
              {/* Animated Slide */}
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 }
                  }}
                  className="absolute inset-0 flex items-center justify-center p-2 md:p-6"
                >
                  <img
                    src={currentGalleryItem.url}
                    alt={currentGalleryItem.caption}
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-xs drop-shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Photo Index Badge (Top Left) */}
              <div className="absolute top-4 left-4 z-20 bg-carbon/80 backdrop-blur-md text-crema text-xs font-sans px-3.5 py-1.5 rounded-full border border-crema/20 flex items-center gap-2 shadow-md">
                <Camera className="w-3.5 h-3.5 text-terracota" />
                <span>Fotografía {activeImageIndex + 1} de {recipe.gallery.length}</span>
              </div>

              {/* Fullscreen Button (Top Right) */}
              <button
                onClick={() => setFullscreenImage(currentGalleryItem.url)}
                className="absolute top-4 right-4 z-20 bg-carbon/80 backdrop-blur-md text-crema hover:bg-terracota transition-all duration-300 p-2.5 rounded-full border border-crema/20 shadow-md flex items-center gap-2 text-xs font-sans px-4"
                title="Ampliar fotografía a pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Pantalla Completa</span>
              </button>

              {/* Left Arrow Controls */}
              {recipe.gallery.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-carbon/75 hover:bg-terracota text-crema p-3 rounded-full backdrop-blur-md border border-crema/20 transition-all duration-300 transform hover:scale-110 shadow-lg group"
                  aria-label="Fotografía anterior"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
              )}

              {/* Right Arrow Controls */}
              {recipe.gallery.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-carbon/75 hover:bg-terracota text-crema p-3 rounded-full backdrop-blur-md border border-crema/20 transition-all duration-300 transform hover:scale-110 shadow-lg group"
                  aria-label="Siguiente fotografía"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              {/* Gradient Overlay for Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-carbon via-carbon/90 to-transparent pt-12 pb-5 px-6 z-10 text-crema">
                <p className="font-sub text-xs md:text-sm leading-relaxed italic max-w-4xl mx-auto text-center md:text-left drop-shadow-sm">
                  {currentGalleryItem.caption}
                </p>
              </div>

            </div>

            {/* Carousel Thumbnails Bar & Dots */}
            <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-crema/10">
              
              {/* Slide Dots Indicator */}
              <div className="flex items-center gap-2">
                {recipe.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeImageIndex ? 1 : -1);
                      setActiveImageIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx
                        ? 'w-8 bg-terracota'
                        : 'w-2.5 bg-crema/40 hover:bg-crema/70'
                    }`}
                    aria-label={`Ir a foto ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Interactive Thumbnail Selector Strip */}
              <div className="flex gap-3 overflow-x-auto max-w-full pb-1">
                {recipe.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeImageIndex ? 1 : -1);
                      setActiveImageIndex(idx);
                    }}
                    className={`h-20 w-24 md:h-22 md:w-28 bg-carbon rounded-xs overflow-hidden shrink-0 border-2 transition-all duration-300 relative group ${
                      activeImageIndex === idx
                        ? 'border-terracota ring-2 ring-terracota/50 scale-105 shadow-md'
                        : 'border-crema/20 opacity-60 hover:opacity-100 hover:border-crema/50'
                    }`}
                  >
                    <img src={img.url} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-1 left-1 bg-carbon/90 text-crema text-[10px] px-1.5 py-0.5 font-mono rounded-xs">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Sticky Navigation Tabs */}
          <div className="bg-hueso/40 border border-carbon/15 p-2 rounded-sm sticky top-20 z-30 backdrop-blur-md shadow-sm">
            <div className="flex overflow-x-auto gap-2 text-xs font-sans uppercase tracking-widest no-scrollbar">
              {[
                { key: 'historia', label: 'Historia y Contexto', icon: BookOpen },
                { key: 'ingredientes', label: 'Ingredientes & Acompañamientos', icon: Utensils },
                { key: 'preparacion', label: 'Preparación & Ciencia', icon: Flame },
                { key: 'memoria', label: 'Lugar de Memoria', icon: Info },
                { key: 'fuentes', label: 'Fuentes & Créditos', icon: Share2 }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`py-3 px-4 flex items-center gap-2 transition-all rounded-xs whitespace-nowrap font-medium ${
                      isActive
                        ? 'bg-carbon text-crema shadow-sm'
                        : 'text-carbon/75 hover:text-carbon hover:bg-carbon/5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-carbon/60'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="bg-crema border border-carbon/10 p-6 md:p-12 rounded-sm shadow-sm min-h-[400px]">
            
            {/* TAB: HISTORIA */}
            {activeTab === 'historia' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="border-l-4 border-terracota bg-terracota/5 p-6 rounded-r-sm italic font-serif text-carbon/90 text-lg md:text-xl leading-relaxed">
                  "{recipe.summary}"
                </div>

                <div className="space-y-6">
                  {recipe.historyText.map((paragraph, index) => (
                    <p key={index} className="font-sub text-carbon/85 text-base md:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {recipe.historyCitation && (
                  <div className="p-5 bg-hueso/40 border border-carbon/15 rounded-xs text-xs font-sans text-carbon/75 flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-oliva shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-oliva uppercase tracking-wider block mb-1">Referencia Histórica Destacada</strong>
                      <span>{recipe.historyCitation}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB: INGREDIENTES */}
            {activeTab === 'ingredientes' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                <div>
                  <h3 className="font-serif text-2xl text-carbon mb-4 flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-terracota" />
                    Ingredientes Principales
                  </h3>
                  <p className="font-sub text-carbon/75 text-base mb-6">
                    Componentes fundamentales seleccionados para esta preparación patrimonial:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recipe.ingredients.main.map((ing, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-hueso/30 border border-carbon/10 rounded-xs">
                        <CheckCircle2 className="w-5 h-5 text-terracota shrink-0 mt-0.5" />
                        <span className="font-sub text-carbon text-base">{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-carbon/15 pt-8">
                  <h3 className="font-serif text-xl text-carbon mb-4 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-oliva" />
                    Sistema de Acompañamiento
                  </h3>
                  <p className="font-sub text-carbon/75 text-base mb-6">
                    Acompañamientos indispensables que completan el perfil sensorial del plato:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recipe.ingredients.sides.map((side, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-terracota/10 border border-terracota/20 rounded-xs">
                        <Sparkles className="w-5 h-5 text-terracota shrink-0 mt-0.5" />
                        <span className="font-sub text-carbon font-medium text-base">{side}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: PREPARACIÓN */}
            {activeTab === 'preparacion' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-carbon mb-2">Procedimiento & Ciencia Culinaria</h3>
                  <p className="font-sub text-carbon/75 text-base">
                    Pasos etnográficos documentados y principios físicos/químicos involucrados en la cocción.
                  </p>
                </div>

                <div className="space-y-6">
                  {recipe.steps.map((step) => (
                    <div key={step.number} className="border border-carbon/15 bg-hueso/20 p-6 md:p-8 rounded-xs space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-carbon/10 pb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-full bg-carbon text-crema font-serif text-base flex items-center justify-center font-bold shrink-0">
                            {step.number}
                          </span>
                          <h4 className="font-serif text-xl text-carbon">{step.title}</h4>
                        </div>

                        {step.concept && (
                          <span className="bg-oliva/15 text-oliva border border-oliva/30 text-xs font-sans px-3 py-1 uppercase tracking-wider font-semibold">
                            Concepto: {step.concept}
                          </span>
                        )}
                      </div>

                      <p className="font-sub text-carbon/85 text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {step.citationRef && (
                        <div className="pt-2 text-xs font-sans text-terracota font-medium flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Concepto clave citado: {step.citationRef}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB: MEMORIA */}
            {activeTab === 'memoria' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                <div className="p-8 bg-hueso/30 border border-carbon/15 rounded-sm space-y-4">
                  <h3 className="font-serif text-2xl text-carbon">Lugar de Memoria y Patrimonio Viviente</h3>
                  {recipe.memoryText.map((p, i) => (
                    <p key={i} className="font-sub text-carbon/85 text-base md:text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="font-serif text-2xl text-terracota border-b border-terracota/30 pb-3">
                    Reflexión Etnográfica
                  </h3>
                  {recipe.reflectionText.map((p, i) => (
                    <p key={i} className="font-sub text-carbon/80 text-base md:text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB: FUENTES */}
            {activeTab === 'fuentes' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-carbon mb-6">Fuentes Etnográficas y Bibliográficas</h3>
                  <div className="space-y-4">
                    {recipe.sources.map((src, i) => (
                      <div key={i} className="p-5 bg-hueso/30 border border-carbon/15 rounded-xs space-y-2 font-sub">
                        <p className="font-semibold text-carbon text-base">{src.author} ({src.year})</p>
                        <p className="italic text-carbon/80 text-base">{src.title}. {src.publisher}</p>
                        {src.url && (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-sans text-oliva hover:text-terracota underline pt-1"
                          >
                            <span>Ver fuente o enlace externo</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-terracota/10 border-l-4 border-terracota text-carbon font-sub text-base italic rounded-r-xs">
                  {recipe.credits}
                </div>
              </motion.div>
            )}

          </div>

        </div>

      </div>

      {/* Fullscreen Image Zoom Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 bg-carbon/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-6 right-6 text-crema bg-carbon/80 p-3 rounded-full hover:bg-terracota transition-colors z-50 shadow-lg"
              title="Cerrar imagen"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={fullscreenImage}
              alt="Fotografía original ampliada"
              className="max-w-full max-h-[92vh] object-contain rounded-xs shadow-2xl border border-crema/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RecipeDetail;

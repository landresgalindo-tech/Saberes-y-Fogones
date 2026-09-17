import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  MapPin,
  Award,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { allRecipes } from '../data/recipes';

const Recipes = () => {
  // Store active image index per recipe ID
  const [activeImageMap, setActiveImageMap] = useState<Record<string, number>>({});

  const getImageIndex = (recipeId: string) => activeImageMap[recipeId] || 0;

  const setImageIndex = (recipeId: string, index: number) => {
    setActiveImageMap((prev) => ({ ...prev, [recipeId]: index }));
  };

  return (
    <div className="w-full bg-crema min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-2 text-oliva text-xs font-sans tracking-widest uppercase border border-oliva/30 px-4 py-1.5 rounded-full bg-hueso/30">
            <Sparkles className="w-3.5 h-3.5" />
            Archivo Culinario Patrimonial
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-carbon uppercase tracking-wide">
            Recetas Documentadas
          </h1>
          <p className="font-sub text-carbon/75 max-w-3xl mx-auto text-lg leading-relaxed">
            Fichas etnográficas que detallan la historia, el saber hacer tácito, la ciencia física del fuego y el procedimiento tradicional de las preparaciones del Tolima Grande.
          </p>
        </motion.div>

        {/* Recipes Grid / List */}
        <div className="space-y-16">
          {allRecipes.map((recipe, index) => {
            const currentImgIndex = getImageIndex(recipe.id);
            const currentImg = recipe.gallery[currentImgIndex]?.url || recipe.featuredImage;

            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-hueso/20 border border-carbon/15 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Interactive Image Preview Column */}
                  <div className="lg:col-span-6 bg-carbon relative flex items-center justify-center p-6 min-h-[380px] lg:min-h-[460px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImgIndex}
                        initial={{ opacity: 0.4, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.4, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        src={currentImg}
                        alt={recipe.title}
                        className="max-h-[380px] w-auto h-auto object-contain rounded-xs shadow-xl"
                      />
                    </AnimatePresence>

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      <span className="bg-carbon text-crema font-serif text-xs px-3 py-1 uppercase tracking-widest shadow-sm border border-crema/20">
                        {recipe.code}
                      </span>
                      {recipe.recognition && (
                        <span className="bg-terracota text-crema font-sans text-xs px-3 py-1 uppercase tracking-wider font-medium shadow-sm flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" /> {recipe.recognition}
                        </span>
                      )}
                    </div>

                    {/* Interactive Thumbnail Carousel Strip */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2.5 overflow-x-auto pb-1 p-2 rounded-xs justify-center bg-carbon/80 backdrop-blur-md border border-crema/10">
                      {recipe.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImageIndex(recipe.id, idx)}
                          className={`w-14 h-14 rounded overflow-hidden shrink-0 border-2 transition-all relative ${
                            currentImgIndex === idx
                              ? 'border-terracota ring-2 ring-terracota/50 scale-105 shadow-md'
                              : 'border-crema/30 opacity-60 hover:opacity-100'
                          }`}
                          title={img.caption}
                        >
                          <img src={img.url} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-crema">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-oliva uppercase tracking-widest">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-terracota" /> {recipe.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-terracota" /> {recipe.cookingTime}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl md:text-3xl text-carbon leading-snug">
                        {recipe.title}
                      </h2>

                      <div className="inline-block bg-terracota/10 border-l-2 border-terracota px-3 py-1 text-terracota font-sans text-xs uppercase tracking-wider font-semibold">
                        {recipe.identityTag}
                      </div>

                      <p className="font-sub text-carbon/75 text-sm md:text-base leading-relaxed">
                        {recipe.summary}
                      </p>
                    </div>

                    {/* Direct Link Action Button */}
                    <div className="pt-4 border-t border-carbon/10">
                      <Link
                        to={`/recetas/${recipe.id}`}
                        className="w-full bg-carbon text-crema font-sans uppercase tracking-widest text-xs py-4 px-6 hover:bg-terracota transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                      >
                        <BookOpen className="w-4 h-4 text-terracota group-hover:text-crema transition-colors" />
                        <span>Explorar Ficha Patrimonial Completa</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Recipes;

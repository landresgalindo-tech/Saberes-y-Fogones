import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  authors: string;
  journal: string;
  doi?: string;
  url: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Técnicas de cocción ancestrales: saberes que permanecen',
    description:
      'Una investigación etnográfica sobre las técnicas tradicionales de cocción conservadas en el Magdalena Centro, Cundinamarca, y su relación con la memoria, el territorio y el patrimonio gastronómico.',
    authors: 'Luis Galindo Galeano & Angielo Bolaños Vásquez (2023)',
    journal: 'Sosquua, Revista Especializada en Gastronomía, 5(2)',
    doi: '10.52948/sosquua.v5i2.951',
    url: 'https://cipres.sanmateo.edu.co/ojs/index.php/sosquua/article/view/951',
    category: 'Investigación • Patrimonio • Cocina Tradicional',
    image: '/sosquua.jpg'
  },
  {
    id: 2,
    title: 'Patrimonio gastronómico e investigación aplicada',
    subtitle: 'Reflexiones metodológicas a partir del estudio de la lechona tolimense',
    description:
      'Una investigación que analiza la participación de las comunidades portadoras, los saberes tradicionales y los desafíos metodológicos y éticos de investigar el patrimonio gastronómico.',
    authors: 'Gómez Bonett, Galindo Galeano & Rayo Vargas (2026)',
    journal: 'Sage Sphere Multidisciplinary Studies, 3(1), 1–19',
    doi: '10.63688/ze3tzy94',
    url: 'https://doi.org/10.63688/ze3tzy94',
    category: 'Patrimonio Gastronómico • Investigación Aplicada',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1774&auto=format&fit=crop'
  }
];

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
          <p className="mt-4 text-carbon/70 max-w-2xl mx-auto font-sub text-base">
            Publicaciones académicas e investigaciones sobre patrimonio gastronómico y técnicas tradicionales.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col bg-crema shadow-sm border border-carbon/5 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden"
            >
              <div className="overflow-hidden w-full h-[260px] relative bg-carbon/5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-hueso/90 backdrop-blur-sm px-3 py-1 text-xs text-oliva font-sans font-medium uppercase tracking-wider rounded-xs shadow-xs">
                  {article.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-carbon group-hover:text-terracota transition-colors leading-snug">
                    {article.title}
                  </h2>
                  {article.subtitle && (
                    <p className="font-serif italic text-lg text-terracota/90 leading-snug">
                      {article.subtitle}
                    </p>
                  )}
                  <p className="font-sub text-carbon/75 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-carbon/10 space-y-4">
                  <div className="text-xs font-sans text-carbon/60 space-y-1">
                    <p className="font-medium text-carbon/80 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-oliva inline shrink-0" />
                      <span>{article.authors}</span>
                    </p>
                    <p className="italic">{article.journal}</p>
                    {article.doi && (
                      <p className="font-mono text-[11px] text-oliva/80">DOI: {article.doi}</p>
                    )}
                  </div>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-carbon text-hueso text-xs font-sans font-medium uppercase tracking-wider hover:bg-terracota transition-colors rounded-xs group/btn"
                  >
                    <span>Consulta el artículo completo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editorial;

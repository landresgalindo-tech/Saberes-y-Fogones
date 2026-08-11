import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-carbon text-crema py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-crema flex items-center justify-center">
              <span className="font-serif text-lg leading-none">E</span>
            </div>
            <span className="font-serif text-xl tracking-wider uppercase">
              Entre Saberes y Fogones
            </span>
          </div>
          <p className="text-crema/70 max-w-sm font-sub text-sm leading-relaxed">
            Investigación, análisis y documentación de las manifestaciones culinarias 
            tradicionales, entendidas como patrimonio cultural inmaterial.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-serif uppercase tracking-widest text-sm mb-2 text-hueso">Navegación</h4>
          <Link to="/" className="text-crema/70 hover:text-terracota transition-colors w-fit">Inicio</Link>
          <Link to="/sobre-nosotros" className="text-crema/70 hover:text-terracota transition-colors w-fit">Sobre Nosotros</Link>
          <Link to="/editorial" className="text-crema/70 hover:text-terracota transition-colors w-fit">Editorial</Link>
          <Link to="/recetas" className="text-crema/70 hover:text-terracota transition-colors w-fit">Recetas Documentadas</Link>
          <Link to="/galeria" className="text-crema/70 hover:text-terracota transition-colors w-fit">Galería</Link>
          <Link to="/colabora" className="text-crema/70 hover:text-terracota transition-colors w-fit">Contáctanos</Link>
        </div>

        <div className="flex flex-col space-y-6">
          <h4 className="font-serif uppercase tracking-widest text-sm mb-2 text-hueso">Contacto</h4>
          <div className="flex gap-4">
            <a href="mailto:entresaberesyfogones@gmail.com" className="w-10 h-10 rounded-full border border-crema/20 flex items-center justify-center hover:bg-terracota hover:border-terracota transition-all">
              <Mail size={18} />
            </a>
            <a href="https://instagram.com/entresaberesyfogones" target="_blank" rel="noopener noreferrer" className="font-sans text-xs uppercase tracking-widest text-crema/70 hover:text-terracota flex items-center">
              Instagram
            </a>
          </div>
          <p className="text-crema/50 text-xs">
            © {new Date().getFullYear()} Entre Saberes y Fogones.<br />
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  MapPin,
  Award,
  Flame,
  BookOpen,
  ChevronRight,
  Sparkles,
  Utensils,
  CheckCircle2,
  Share2,
  Info,
  Maximize2
} from 'lucide-react';

interface Citation {
  author: string;
  year: string;
  title: string;
  publisher: string;
  url?: string;
}

interface Step {
  number: number;
  title: string;
  concept?: string;
  citationRef?: string;
  description: string;
}

interface Recipe {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  location: string;
  region: string;
  cookingTime: string;
  recognition: string;
  identityTag: string;
  featuredImage: string;
  gallery: { url: string; caption: string }[];
  summary: string;
  historyText: string[];
  historyCitation?: string;
  ingredients: {
    main: string[];
    sides: string[];
  };
  steps: Step[];
  memoryText: string[];
  reflectionText: string[];
  sources: Citation[];
  credits: string;
}

const lechonaRecipe: Recipe = {
  id: 'lechona-tolimense',
  code: 'Ficha N°001',
  title: 'La lechona tolimense: un cerdo entero, más de 10 horas de horno y un saber que no cabe en una receta',
  subtitle: 'En El Espinal, Tolima, decir "lechona" sin apellido es decir algo impreciso.',
  location: 'El Espinal, Tolima',
  region: 'Región Andina / Tolima Grande',
  cookingTime: '~13 Horas de Horneo',
  recognition: '#1 Mejor plato con cerdo del mundo (TasteAtlas 2024)',
  identityTag: 'Sin Arroz (100% Arveja Amarilla)',
  featuredImage: '/foto_cliente_3_hd.png',
  gallery: [
    {
      url: '/foto_cliente_1_hd.png',
      caption: '1. Relleno artesanal de carne de cerdo con arveja amarilla seca y costura manual del cuero con piola.'
    },
    {
      url: '/foto_cliente_2_hd.png',
      caption: '2. Salida de la lechona horneada con carne desmechada jugosa y corteza dorada crocante.'
    },
    {
      url: '/foto_cliente_3_hd.png',
      caption: '3. Servicio final en el plato: lechona espinaluna con cuero crocante, insulso de maíz y arepa blanca.'
    }
  ],
  summary:
    'La lechona espinaluna representa una síntesis histórica entre técnicas castellanas de asado y saberes locales andinos. Se caracteriza por no llevar arroz, una cocción de 13 horas en horno de barro y un saber hacer tácito transmitido entre generaciones.',
  historyText: [
    'En El Espinal, Tolima, decir "lechona" sin apellido es decir algo impreciso. Ahí se prepara una versión particular de este plato —quizás la más reconocida del país tras el título que le otorgó TasteAtlas en 2024 como mejor plato con cerdo del mundo—, cuya seña de identidad es tan simple de enunciar como difícil de imitar: no lleva arroz. Ese detalle, que a primera vista parece menor, es justamente lo que los maestros lechoneros de mayor trayectoria revisan primero cuando alguien les presenta una lechona y les pregunta si es "de las de verdad".',
    'Detrás de esa exigencia hay una historia larga. El cerdo llegó a América en 1493, en el segundo viaje de Colón, y su técnica de asado castellano se encontró siglos después, en el territorio del antiguo Tolima Grande, con insumos y saberes locales: la arveja amarilla que baja de las zonas frías de Boyacá y Nariño, el horno de barro que sustituyó al horno de leña ibérico, las especias de la despensa andina.',
    'El historiador Gregorio Saldarriaga (2011) describe este tipo de encuentros coloniales como una construcción de identidades alimentarias en doble vía, en la que ni la cocina española se impuso intacta ni la local desapareció. La lechona espinaluna es, en ese sentido, resultado de una síntesis y no de un origen único.'
  ],
  historyCitation: 'Saldarriaga, G. (2011). Alimentación e identidades en el Nuevo Reino de Granada, siglos XVI y XVII.',
  ingredients: {
    main: [
      'Un cerdo entero, preferiblemente de 50 a 80 kilos en canal, criado en condiciones adecuadas.',
      'Pulpa de carne de cerdo, con grasa entreverada (de ser necesario).',
      'Arveja amarilla seca precocida al punto exacto.',
      'Cebolla larga y cebolla cabezona picadas finamente.',
      'Ajo machacado, comino, pimienta y sal al gusto.',
      'Leña seca de monte para alimentar el horno de barro.'
    ],
    sides: [
      'Insulso de maíz (una elaboración dulce tradicional a base de maíz con panela).',
      'Arepa blanca (ya sea de maíz pilado o de arroz).'
    ]
  },
  steps: [
    {
      number: 1,
      title: 'Selección y deshuesado',
      description:
        'El proceso comienza con el animal ya sacrificado. Se retira toda la carne, las vísceras y los huesos, dejando la piel intacta como envoltura exterior: es ese cuero, sin roturas, el que sostendrá después el relleno durante toda la cocción.'
    },
    {
      number: 2,
      title: 'El adobo y la arveja',
      description:
        'La pulpa se pica en sendos cortes y se marina con los adobos debidamente licuados. Mientras tanto se cocina la arveja en ese punto en donde el lechonero identifica que quedará perfecta después del horneo. La proporción exacta varía de una familia a otra —cada maestro lechonero guarda su combinación propia—, pero el principio es el mismo: dejar reposar el adobo para que la carne tome sabor antes de rellenar.'
    },
    {
      number: 3,
      title: 'Relleno y costura',
      concept: 'Saber hacer tácito',
      citationRef: 'Contreras Hernández & Gracia Arnaiz (2005)',
      description:
        'El cuero se extiende y se rellena con las capas de carne y arveja precocida, distribuida de manera uniforme. Después viene el paso que ninguna receta escrita transmite del todo: coser el cuero con piola, ajustándolo sin apretarlo, para que resista las trece horas siguientes sin romperse. "Toca saber cómo se le da la forma al lechón ya relleno, hacerle las costuras para que no se rompa en la cocción, y eso solo lo da la práctica", resume un maestro lechonero. Este conocimiento corporal se aprende haciendo, no leyendo.'
    },
    {
      number: 4,
      title: 'El horno de barro',
      concept: 'Transformación del colágeno en gelatina',
      citationRef: 'Harold McGee (2004)',
      description:
        'Precalentado con leña durante al menos una hora, el horno recibe la lechona para una cocción lenta de aproximadamente trece horas. Ese tiempo no es capricho: el colágeno de la piel necesita calor sostenido y prolongado para transformarse en gelatina, un proceso que una cocción corta a alta temperatura no reproduce. La gelatina resultante retiene la jugosidad de la carne por dentro mientras el cuero se vuelve crujiente por fuera.'
    },
    {
      number: 5,
      title: 'El punto de cocción',
      concept: 'Reacción de Maillard',
      citationRef: 'El Hosry et al. (2025)',
      description:
        'El maestro lechonero reconoce que la piel está lista por el color dorado parejo y por el sonido seco que hace al golpearla con el cabo de un cuchillo. Este indicador sensorial corresponde a la reacción de Maillard: una reacción química entre aminoácidos y azúcares activada por calor seco que produce la textura crocante y el dorado perfecto. El horno de barro a leña genera esa ausencia de humedad de manera natural.'
    },
    {
      number: 6,
      title: 'El servicio patrimonial',
      description:
        'Se sirve en porciones que incluyen abundante carne desmechada mezclada con arveja cocinada, un trozo de crocante cuero, acompañada obligatoriamente de insulso y arepa blanca. Separar este sistema altera su sentido cultural.'
    }
  ],
  memoryText: [
    'El horno de barro no es solo una herramienta. El historiador Pierre Nora (1989) acuñó el concepto de "lugar de memoria" para describir espacios físicos que condensan una memoria colectiva transmitida de generación en generación.',
    'El horno de patio cumple exactamente esa función entre los portadores de la lechona espinaluna: ahí no solo se cocina, ahí se enseña, se corrige, se hereda un oficio. Por eso su sustitución progresiva por hornos industriales, motivada por exigencias sanitarias contemporáneas, no es un simple cambio de equipo. Es la transformación de un espacio que durante generaciones fue, a la vez, cocina y escuela.'
  ],
  reflectionText: [
    'Hay algo que aprendí viendo trabajar a los maestros lechoneros de El Espinal, y es que el Tolima no guarda su historia solo en los archivos ni en las piedras de sus iglesias coloniales. La guarda también en el humo de un horno de barro a las cuatro de la mañana, en las manos de una mujer que cose un cuero de cerdo con la misma aguja y técnica que usó su madre, en el silencio concentrado de quien golpea la piel con el cabo de un cuchillo para escuchar si ya está lista.',
    'Esas son las venas del departamento. No las que aparecen en los mapas hidrográficos, sino las que corren por debajo de la vida cotidiana de sus pueblos, alimentando algo que ningún decreto ha terminado de proteger todavía.',
    'Mas de diez horas de cocción son momentos continuos de vigilancia, de ajustar el fuego, de no dejar sola la lechona ni un momento. Ese tiempo tiene un peso grabado: es el mismo tiempo que ha tomado, generación tras generación, que este saber no se pierda. Nadie lo aprendió en un curso. Se aprendió mirando, repitiendo, equivocándose, hasta que las manos entendieron lo que las palabras no alcanzan a explicar del todo. En el lenguaje de la gente de El Espinal, simplemente se llama "así me enseñó mi madre, padre o abuelos".',
    'Y ahí está el problema inquietante: ese tipo de saber es precisamente el más frágil. No está escrito en ninguna parte con la fuerza suficiente para sobrevivir el paso de una generación a otra si nadie se ocupa de sostenerlo. Un horno industrial puede reemplazar a un horno de barro en cuestión de semanas. Una receta puede simplificarse, puede perder la arveja amarilla que ya no siembra nadie cerca, puede ceder ante la lógica de vender rápido y vender mucho.',
    'Cuando una persona conocedora se va sin haber enseñado a alguien más, no se pierde una receta. Se pierde una manera entera de entender el mundo a través del fuego y de la comida.',
    'Por eso documentar la lechona tolimense no es un ejercicio de nostalgia ni una tarea puramente académica. Es un acto de responsabilidad. Escribir sobre ella, nombrar a sus portadores, explicar por qué el horno de barro importa tanto como el relleno, es una forma de decirle a esta tradición que todavía tiene lugar en el futuro, no solo en el recuerdo.'
  ],
  sources: [
    {
      author: 'Contreras Hernández, J., & Gracia Arnaiz, M.',
      year: '2005',
      title: 'Alimentación y cultura: perspectivas antropológicas',
      publisher: 'Editorial Ariel',
      url: 'https://dialnet.unirioja.es/servlet/libro?codigo=254460'
    },
    {
      author: 'El Hosry, L., Elias, V., Chamoun, V., Halawi, M., Cayot, P., Nehme, A., & Bou-Maroun, E.',
      year: '2025',
      title: 'Maillard Reaction: Mechanism, Influencing Parameters, Advantages, Disadvantages, and Food Industrial Applications: A Review',
      publisher: 'Foods, 14(11), 1881',
      url: 'https://doi.org/10.3390/foods14111881'
    },
    {
      author: 'McGee, H.',
      year: '2004',
      title: 'On Food and Cooking: The Science and Lore of the Kitchen (ed. rev.)',
      publisher: 'Scribner'
    },
    {
      author: 'Nora, P.',
      year: '1989',
      title: 'Between Memory and History: Les Lieux de Mémoire',
      publisher: 'Representations, 26, 7–24',
      url: 'https://doi.org/10.2307/2928520'
    },
    {
      author: 'Saldarriaga, G.',
      year: '2011',
      title: 'Alimentación e identidades en el Nuevo Reino de Granada, siglos XVI y XVII',
      publisher: 'Editorial Universidad del Rosario',
      url: 'https://editorial.urosario.edu.co/catalog/product/view/id/6303/'
    }
  ],
  credits:
    'Reseña elaborada con base en trabajo de campo con portadores del saber lechonero de El Espinal, Tolima, en el marco de una investigación en curso sobre patrimonio culinario del departamento.'
};

const chanfainaRecipe: Recipe = {
  id: 'chanfaina-pepitoria',
  code: 'Ficha N°002',
  title: 'Entre asaduras y fogones: la chanfaina como manifestación gastronómica y cultural en Colombia',
  subtitle: 'Una preparación culinaria construida alrededor del aprovechamiento de las vísceras animales, transformada por las comunidades según sus territorios.',
  location: 'Natagaima (Tolima) · Santander · Boyacá',
  region: 'Colombia · Hispanoamérica',
  cookingTime: '~2 Horas de Cocción',
  recognition: 'Patrimonio culinario de aprovechamiento integral del animal',
  identityTag: 'Asadura de Chivo / Cordero / Res',
  featuredImage: '/chanfaina_cocina.jpg',
  gallery: [
    {
      url: '/chanfaina_cocina.jpg',
      caption: '1. Cocinera tradicional preparando chanfaina en fogón de leña con vísceras, cebolla larga, ajo y condimentos ancestrales.'
    },
    {
      url: '/chanfaina_plato.png',
      caption: '2. Pepitoria / chanfaina santandereana servida en plato: vísceras de cabro con arroz, acompañada de yuca cocida.'
    }
  ],
  summary:
    'La chanfaina colombiana puede estudiarse como una familia de preparaciones construida alrededor del aprovechamiento culinario de las asaduras, cuya forma concreta depende del territorio y de la comunidad que la practica. Su estudio revela sistemas de conocimiento relacionados con el territorio, los animales, las técnicas culinarias y la transmisión intergeneracional.',
  historyText: [
    'Hablar de chanfaina en Colombia supone adentrarse en una preparación cuya identidad no puede reducirse a una receta única. Su presencia en diferentes territorios evidencia una práctica culinaria construida alrededor del aprovechamiento de las vísceras animales, pero transformada por las comunidades de acuerdo con los recursos disponibles, las tradiciones familiares, las técnicas de preparación y los significados atribuidos al alimento.',
    'En Natagaima, Tolima, la Gobernación departamental registra específicamente la "chanfaina (asadura de chivo)" dentro del repertorio de preparaciones tradicionales del municipio. En Bucaramanga, Santander, investigaciones recientes documentan la chanfaina como parte de la cocina popular y de los saberes transmitidos por cocineras tradicionales. En Boyacá, fuentes especializadas describen una preparación elaborada con vísceras y sangre de cordero.',
    'El Diccionario de la lengua española (RAE-ASALE, 2023) registra dos acepciones para el término: la primera, general, la define como "guisado hecho de bofes o livianos picados"; la segunda, marcada como uso propio de Málaga, la describe como "guiso de carne, morcilla o asadura de cerdo, en una salsa espesa hecha con aceite, vinagre, miga de pan, almendras, ajo, pimentón, orégano y tomillo". Esta variabilidad no es una anomalía colombiana: es un rasgo constitutivo del término desde su origen peninsular.',
    'El elemento que permite establecer una relación entre las diferentes expresiones de la chanfaina es la utilización de las llamadas asaduras o vísceras. Hígado, corazón, riñones, bofe y pajarilla aparecen en diferentes repertorios culinarios asociados con esta preparación, aunque su composición exacta cambia según el territorio y el animal empleado.',
    'En Natagaima, la documentación territorial relaciona la preparación con familias campesinas y con los espacios de mercado, especialmente durante los fines de semana en la plaza de ferias y la galería. En Santander, la investigación etnográfica de Quiroga Dallos y Hernández Jaimes (2024) demuestra que la preparación permanece vinculada a restaurantes y espacios populares de Bucaramanga, particularmente en torno a las plazas de mercado. En Boyacá, la chanfaina aparece relacionada con los asaderos y con la cocina tradicional campesina boyacense, elaborada con vísceras y sangre de cordero.'
  ],
  historyCitation: 'Quiroga Dallos & Hernández Jaimes (2024). Apropiación social del patrimonio culinario: El oficio de la cocina tradicional en Bucaramanga. Sosquua, 6(2).',
  ingredients: {
    main: [
      'Vísceras de cabro (hígado, riñón, corazón, chunchullo), aprox. 700 gramos.',
      'Sangre de cabro fresca, ya cuajada.',
      'Cebolla larga y cebolla cabezona picadas finamente.',
      'Ajo machacado al gusto.',
      'Comino, pimienta y sal al gusto.',
      'Achiote o color para el sofrito.',
      'Arroz blanco cocido (variante más extendida en pepitoria santandereana).',
      'Aceite o manteca de cerdo.',
      'Limón, para la limpieza inicial de las vísceras.'
    ],
    sides: [
      'Yuca cocida, papa, arepa o patacones.',
      'Cabro asado como plato principal del que es acompañamiento.'
    ]
  },
  steps: [
    {
      number: 1,
      title: 'Limpieza de las vísceras',
      description:
        'Lavar las vísceras con abundante agua, frotarlas con limón y luego con cebolla larga para neutralizar el olor característico. Repetir el enjuague. Este paso es fundamental y difiere según el portador: cada cocinera tiene su propia técnica heredada de frotado y tiempo de reposo en agua con limón.'
    },
    {
      number: 2,
      title: 'Cocción lenta de las vísceras',
      description:
        'Cocinar las vísceras en agua con sal durante aproximadamente una hora y media, hasta que estén blandas. La duración exacta varía según el animal: las vísceras de chivo requieren tiempos distintos a las de cordero o res. Este punto de cocción lo identifica el maestro cocinero por textura, no por cronómetro.'
    },
    {
      number: 3,
      title: 'Picado y sofrito',
      concept: 'Saber hacer tácito',
      citationRef: 'Quiroga Dallos & Hernández Jaimes (2024)',
      description:
        'Picar finamente las vísceras ya cocidas y reservarlas. Preparar un sofrito con cebolla cabezona, ajo y achiote en aceite o manteca de cerdo, sazonado con comino, pimienta y sal. Incorporar las vísceras picadas al sofrito y cocinar a fuego lento, revolviendo con frecuencia. Las cocineras tradicionales transmiten sus conocimientos mediante la observación y la práctica familiar.'
    },
    {
      number: 4,
      title: 'Incorporación de la sangre cuajada',
      description:
        'Añadir la sangre de cabro ya cuajada, desmenuzada con las manos, y continuar la cocción entre quince y veinte minutos, integrando bien los ingredientes. Este paso —desmenuzar la sangre con las manos para que se integre de manera pareja— es uno de los gestos que ninguna receta escrita explica del todo bien: hay que verlo hacer, hay que aprenderlo de cerca, hay que heredarlo de alguien.'
    },
    {
      number: 5,
      title: 'Mezcla con arroz y servicio',
      description:
        'Mezclar con arroz blanco previamente cocido (en la variante santandereana más extendida). Servir como acompañamiento del cabro asado, con yuca, papa, arepa o patacones. La pepitoria admite variaciones familiares en la proporción de vísceras, el uso o no de arroz, y la inclusión ocasional de huevo o queso.'
    }
  ],
  memoryText: [
    'Hay comidas que se sirven en un plato y comidas que se sirven en la memoria. La chanfaina, la pepitoria, cada guiso hecho de lo que otros descartaron, pertenecen sin duda a la segunda categoría.',
    'La comparación con España y Perú muestra que esta misma lógica de variabilidad territorial ya operaba en el punto de origen documentado de la preparación. En la comarca leonesa se documenta una chanfaina elaborada con callos de ternera; en Fuente de Cantos (Extremadura) existe una variante de vísceras de cordero de los antiguos pastores de la Mesta, con fiesta de interés turístico regional. En Perú, la chanfaina dio lugar a la chanfainita, guiso de bofe de res con papa, transformada por los insumos altoandinos disponibles en el nuevo territorio.'
  ],
  reflectionText: [
    'Detrás del hígado picado, del bofe cocido a fuego lento, de la sangre cuajada que una mujer desmenuza con las manos en una cocina de Bucaramanga o de Natagaima, hay una inteligencia antigua que decidió, hace siglos, que nada del animal merecía perderse. Esa decisión, tomada muchas veces desde la pobreza y no desde la abundancia, terminó por convertirse en una de las formas más honestas de identidad que puede tener un territorio.',
    'El chivo de Natagaima no es el cordero de Boyacá, y ninguno de los dos es el bofe limeño ni la asadura malagueña, y sin embargo los tres llevan el mismo apellido, chanfaina, como si la lengua misma se resistiera a olvidar que alguna vez, en algún lugar, alguien tuvo la idea de que las vísceras también podían ser un festín.',
    'Lo que más conmueve, sin embargo, no es la palabra. Es la mano que la sostiene viva. Cada cocinera que lava un menudo con limón y cebolla larga, cada familia que vende su chanfaina los sábados en la galería de Natagaima, cada anciano que todavía recuerda cómo se hacía la pepitoria antes de que llegara el arroz a la receta, está haciendo un acto de resistencia silenciosa.',
    'Mientras existan esas manos y esas cocinas de fogón encendido, la chanfaina y la pepitoria seguirán siendo mucho más que un guiso de aprovechamiento. Serán la prueba de que ningún pueblo se resigna del todo a que su memoria se apague, siempre que alguien, en algún patio, siga encendiendo el fuego a tiempo.'
  ],
  sources: [
    {
      author: 'Castellón Valdés, L. M., & Fontecha Fontecha, J.',
      year: '2018',
      title: 'La gastronomía: una fuente para el desarrollo del turismo y el fortalecimiento de la identidad cultural en Santander',
      publisher: 'Turismo y Sociedad, 22, 167–193',
      url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6496335'
    },
    {
      author: 'Gobernación del Tolima',
      year: 's. f.',
      title: 'Municipio de Natagaima: Gastronomía',
      publisher: 'Gobernación del Tolima'
    },
    {
      author: 'Instituto Distrital de Patrimonio Cultural',
      year: '2020',
      title: 'Bogotálogo: usos, desusos y abusos del español hablado en Bogotá',
      publisher: 'Alcaldía Mayor de Bogotá'
    },
    {
      author: 'Quiroga Dallos, I. A., & Hernández Jaimes, J. L.',
      year: '2024',
      title: 'Apropiación social del patrimonio culinario: El oficio de la cocina tradicional en Bucaramanga, Santander',
      publisher: 'Sosquua. Revista Especializada en Gastronomía, 6(2), 10–43',
      url: 'https://doi.org/10.52948/sosquua.v6i2.1039'
    },
    {
      author: 'Real Academia Española & ASALE',
      year: '2023',
      title: 'Chanfaina. En Diccionario de la lengua española (23.ª ed.)',
      publisher: 'RAE-ASALE',
      url: 'https://dle.rae.es/chanfaina'
    },
    {
      author: 'Guardia, S. B. (Ed.)',
      year: '2019',
      title: 'Gastronomía peruana: Patrimonio cultural de la humanidad',
      publisher: 'Universidad de San Martín de Porres, Fondo Editorial',
      url: 'https://catedraunesco.usmp.edu.pe/wp-content/uploads/2020/11/gp-patrimonio-cultural-humanidad-294.pdf'
    }
  ],
  credits:
    'Investigación documental y etnográfica sobre la chanfaina en Colombia, basada en fuentes académicas indexadas y documentación territorial, en el marco del proyecto Entre Saberes y Fogones.'
};

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<'historia' | 'ingredientes' | 'preparacion' | 'memoria' | 'fuentes'>('historia');
  const [activeImageIndex, setActiveImageIndex] = useState(2);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [selectedChanfaina, setSelectedChanfaina] = useState<Recipe | null>(null);
  const [chanfainaTab, setChanfainaTab] = useState<'historia' | 'ingredientes' | 'preparacion' | 'memoria' | 'fuentes'>('historia');
  const [chanfainaImageIndex, setChanfainaImageIndex] = useState(0);

  return (
    <div className="w-full bg-crema min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header Header */}
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

        {/* Featured Main Recipe Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-hueso/20 border border-carbon/15 rounded-sm overflow-hidden shadow-md mb-16 hover:shadow-xl transition-shadow duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Column: Clean display of exact client photo */}
            <div className="lg:col-span-6 bg-hueso relative flex items-center justify-center p-4 min-h-[360px] lg:min-h-[460px]">
              <img
                src={lechonaRecipe.featuredImage}
                alt={lechonaRecipe.title}
                className="max-h-[420px] w-auto h-auto object-contain rounded-xs shadow-md transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span className="bg-carbon text-crema font-serif text-xs px-3 py-1 uppercase tracking-widest shadow-sm border border-crema/20">
                  {lechonaRecipe.code}
                </span>
                <span className="bg-terracota text-crema font-sans text-xs px-3 py-1 uppercase tracking-wider font-medium shadow-sm flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> TasteAtlas 2024
                </span>
              </div>

              {/* Gallery Mini Previews (ONLY the 3 client images, served plate as LAST) */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 overflow-x-auto pb-1 p-2 rounded-xs justify-center">
                {lechonaRecipe.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedRecipe(lechonaRecipe);
                      setActiveImageIndex(idx);
                    }}
                    className={`w-16 h-16 rounded overflow-hidden shrink-0 border-2 transition-all relative ${
                      idx === lechonaRecipe.gallery.length - 1
                        ? 'border-terracota ring-2 ring-terracota/40'
                        : 'border-crema/40 hover:border-crema'
                    }`}
                    title={img.caption}
                  >
                    <img src={img.url} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                    <span className="absolute top-0.5 left-0.5 bg-carbon/90 text-crema text-[9px] px-1 font-mono">
                      {idx === 2 ? '3. Plato Final' : `#${idx + 1}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-crema">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-oliva uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-terracota" /> {lechonaRecipe.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-terracota" /> {lechonaRecipe.cookingTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-carbon leading-snug">
                  {lechonaRecipe.title}
                </h2>

                <div className="inline-block bg-terracota/10 border-l-2 border-terracota px-3 py-1 text-terracota font-sans text-xs uppercase tracking-wider font-semibold">
                  {lechonaRecipe.identityTag}
                </div>

                <p className="font-sub text-carbon/75 text-sm md:text-base leading-relaxed">
                  {lechonaRecipe.summary}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-carbon/10">
                <button
                  onClick={() => {
                    setSelectedRecipe(lechonaRecipe);
                    setActiveTab('historia');
                  }}
                  className="w-full bg-carbon text-crema font-sans uppercase tracking-widest text-xs py-4 px-6 hover:bg-terracota transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                >
                  <span>Explorar Ficha Patrimonial Completa</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Featured Chanfaina Recipe Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="bg-hueso/20 border border-carbon/15 rounded-sm overflow-hidden shadow-md mb-16 hover:shadow-xl transition-shadow duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column */}
            <div className="lg:col-span-6 bg-hueso relative flex items-center justify-center p-4 min-h-[360px] lg:min-h-[460px]">
              <img
                src={chanfainaRecipe.featuredImage}
                alt={chanfainaRecipe.title}
                className="max-h-[420px] w-auto h-auto object-contain rounded-xs shadow-md transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span className="bg-carbon text-crema font-serif text-xs px-3 py-1 uppercase tracking-widest shadow-sm border border-crema/20">
                  {chanfainaRecipe.code}
                </span>
                <span className="bg-hueso text-carbon font-sans text-xs px-3 py-1 uppercase tracking-wider font-medium shadow-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Tolima · Santander · Boyacá
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 overflow-x-auto pb-1 p-2 rounded-xs justify-center">
                {chanfainaRecipe.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedChanfaina(chanfainaRecipe);
                      setChanfainaImageIndex(idx);
                    }}
                    className={`w-16 h-16 rounded overflow-hidden shrink-0 border-2 transition-all relative ${
                      idx === chanfainaRecipe.gallery.length - 1
                        ? 'border-hueso ring-2 ring-hueso/40'
                        : 'border-crema/40 hover:border-crema'
                    }`}
                    title={img.caption}
                  >
                    <img src={img.url} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                    <span className="absolute top-0.5 left-0.5 bg-carbon/90 text-crema text-[9px] px-1 font-mono">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-crema">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-oliva uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-oliva" /> {chanfainaRecipe.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-oliva" /> {chanfainaRecipe.cookingTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-carbon leading-snug">
                  {chanfainaRecipe.title}
                </h2>

                <div className="inline-block bg-hueso border-l-2 border-carbon px-3 py-1 text-carbon font-sans text-xs uppercase tracking-wider font-semibold">
                  {chanfainaRecipe.identityTag}
                </div>

                <p className="font-sub text-carbon/75 text-sm md:text-base leading-relaxed">
                  {chanfainaRecipe.summary}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-carbon/10">
                <button
                  onClick={() => {
                    setSelectedChanfaina(chanfainaRecipe);
                    setChanfainaTab('historia');
                  }}
                  className="w-full bg-carbon text-crema font-sans uppercase tracking-widest text-xs py-4 px-6 hover:bg-hueso hover:text-carbon transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                >
                  <span>Explorar Ficha Patrimonial Completa</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>



      </div>

      {/* FULL RECIPE MODAL READER */}
      <AnimatePresence>
        {selectedRecipe && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-carbon/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-crema w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-carbon/20 shadow-2xl rounded-sm flex flex-col relative"
            >
              {/* Sticky Top Header */}
              <div className="sticky top-0 bg-crema/95 backdrop-blur-sm border-b border-carbon/15 p-5 z-20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif uppercase tracking-widest text-terracota block">
                    {selectedRecipe.code} • {selectedRecipe.location}
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-carbon uppercase tracking-wide leading-tight">
                    {selectedRecipe.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="p-2 text-carbon/60 hover:text-carbon hover:bg-carbon/10 rounded-full transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 space-y-10">

                {/* Photo Viewer showing exact client photos with high definition enhancement */}
                <div className="space-y-3 bg-carbon/95 p-4 border border-carbon/20 rounded-xs">
                  <div className="relative h-[360px] md:h-[480px] flex items-center justify-center overflow-hidden bg-carbon/90 rounded-xs">
                    <img
                      src={selectedRecipe.gallery[activeImageIndex].url}
                      alt="Fotografía original del cliente mejorada"
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300"
                    />

                    {/* Expand Fullscreen Button */}
                    <button
                      onClick={() => setFullscreenImage(selectedRecipe.gallery[activeImageIndex].url)}
                      className="absolute top-3 right-3 bg-carbon/80 text-crema p-2 rounded-full hover:bg-terracota transition-colors flex items-center gap-1.5 text-xs font-sans px-3 shadow-md"
                      title="Ver fotografía en tamaño completo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ver foto completa</span>
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent p-4 text-crema">
                      <p className="font-sub text-xs md:text-sm italic">
                        {selectedRecipe.gallery[activeImageIndex].caption}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row (STRICTLY the 3 client images in order: 1. Relleno, 2. Horno, 3. Plato servido - ÚLTIMO) */}
                  <div className="grid grid-cols-3 gap-3">
                    {selectedRecipe.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-24 bg-carbon border-2 overflow-hidden transition-all flex items-center justify-center p-1 rounded-xs relative ${
                          activeImageIndex === idx
                            ? 'border-terracota ring-2 ring-terracota/40 shadow-md'
                            : 'border-carbon/50 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                        <span className="absolute top-1 left-1 bg-carbon/90 text-crema text-[10px] px-1.5 py-0.5 font-mono">
                          {idx === 2 ? '3. Plato Final' : `#${idx + 1}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Attributes Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-hueso/40 border-y border-carbon/15 text-center">
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-carbon/50">Origen</span>
                    <span className="font-serif text-sm text-carbon font-semibold">{selectedRecipe.location}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-carbon/50">Tiempo Horneo</span>
                    <span className="font-serif text-sm text-carbon font-semibold">{selectedRecipe.cookingTime}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-carbon/50">Identidad</span>
                    <span className="font-serif text-sm text-terracota font-semibold">{selectedRecipe.identityTag}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-carbon/50">Reconocimiento</span>
                    <span className="font-serif text-xs text-oliva font-semibold">TasteAtlas 2024</span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap border-b border-carbon/20 gap-2 md:gap-6 font-sans text-xs uppercase tracking-widest">
                  {[
                    { key: 'historia', label: 'Historia y Contexto', icon: BookOpen },
                    { key: 'ingredientes', label: 'Ingredientes', icon: Utensils },
                    { key: 'preparacion', label: 'Preparación y Ciencia', icon: Flame },
                    { key: 'memoria', label: 'Lugar de Memoria', icon: Info },
                    { key: 'fuentes', label: 'Fuentes & Créditos', icon: Share2 }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as any)}
                        className={`pb-3 px-2 flex items-center gap-1.5 transition-colors border-b-2 font-medium ${
                          activeTab === tab.key
                            ? 'border-terracota text-terracota'
                            : 'border-transparent text-carbon/60 hover:text-carbon'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <div className="space-y-6 min-h-[300px]">

                  {/* TAB: HISTORIA */}
                  {activeTab === 'historia' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="bg-terracota/5 border-l-4 border-terracota p-4 italic font-serif text-carbon/90 text-base">
                        "En El Espinal, Tolima, decir 'lechona' sin apellido es decir algo impreciso... No lleva arroz. Ese detalle es justamente lo que los maestros lechoneros revisan primero para saber si es 'de las de verdad'."
                      </div>

                      {selectedRecipe.historyText.map((paragraph, index) => (
                        <p key={index} className="font-sub text-carbon/80 text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      {selectedRecipe.historyCitation && (
                        <div className="p-4 bg-hueso/30 border border-carbon/10 text-xs font-sans text-carbon/70">
                          <strong className="text-oliva">Referencia Histórica:</strong> {selectedRecipe.historyCitation}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* TAB: INGREDIENTES */}
                  {activeTab === 'ingredientes' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <div>
                        <h4 className="font-serif text-xl text-carbon mb-4 flex items-center gap-2">
                          <Utensils className="w-5 h-5 text-terracota" />
                          Ingredientes de la Receta Espinaluna
                        </h4>
                        <p className="font-sub text-carbon/70 text-sm mb-6">
                          La receta espinaluna se distingue por su sobriedad. No hay papa, no hay arroz, no hay relleno mixto de varias carnes. Cada ingrediente cumple una función precisa.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedRecipe.ingredients.main.map((ing, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-hueso/20 border border-carbon/10">
                              <CheckCircle2 className="w-4 h-4 text-terracota shrink-0 mt-0.5" />
                              <span className="font-sub text-carbon text-sm">{ing}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-carbon/15 pt-6">
                        <h5 className="font-serif text-lg text-carbon mb-3">
                          Sistema Completo de Acompañamiento (Infaltables)
                        </h5>
                        <p className="font-sub text-carbon/70 text-sm mb-4">
                          Ninguno de los dos es opcional: el sistema completo de consumo es parte de lo que hace reconocible al plato.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedRecipe.ingredients.sides.map((side, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-terracota/10 border border-terracota/30">
                              <Sparkles className="w-4 h-4 text-terracota shrink-0 mt-0.5" />
                              <span className="font-sub text-carbon font-medium text-sm">{side}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB: PREPARACIÓN */}
                  {activeTab === 'preparacion' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="space-y-6">
                        {selectedRecipe.steps.map((step) => (
                          <div key={step.number} className="border border-carbon/15 bg-hueso/20 p-6 space-y-3 relative">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-carbon text-crema font-serif text-sm flex items-center justify-center font-bold">
                                  {step.number}
                                </span>
                                <h4 className="font-serif text-xl text-carbon">{step.title}</h4>
                              </div>

                              {step.concept && (
                                <span className="bg-oliva/15 text-oliva border border-oliva/30 text-xs font-sans px-3 py-1 uppercase tracking-wider font-semibold">
                                  {step.concept}
                                </span>
                              )}
                            </div>

                            <p className="font-sub text-carbon/80 text-sm md:text-base leading-relaxed pl-11">
                              {step.description}
                            </p>

                            {step.citationRef && (
                              <div className="pl-11 pt-2 text-xs font-sans text-terracota font-medium flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Concepto clave citado: {step.citationRef}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB: MEMORIA Y REFLEXIÓN */}
                  {activeTab === 'memoria' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      {/* Pierre Nora Section */}
                      <div className="p-6 bg-hueso/30 border border-carbon/15 space-y-4">
                        <h4 className="font-serif text-2xl text-carbon">Un Horno que También es Memoria</h4>
                        {selectedRecipe.memoryText.map((p, i) => (
                          <p key={i} className="font-sub text-carbon/85 text-base leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Author Reflection Section */}
                      <div className="space-y-5">
                        <h4 className="font-serif text-2xl text-terracota border-b border-terracota/30 pb-2">
                          Para Reflexionar...
                        </h4>
                        {selectedRecipe.reflectionText.map((p, i) => (
                          <p key={i} className="font-sub text-carbon/80 text-base leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB: FUENTES & CRÉDITOS */}
                  {activeTab === 'fuentes' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <div>
                        <h4 className="font-serif text-xl text-carbon mb-4">Fuentes Consultadas</h4>
                        <ul className="space-y-4">
                          {selectedRecipe.sources.map((src, i) => (
                            <li key={i} className="p-4 bg-hueso/20 border border-carbon/10 space-y-1 font-sub text-sm">
                              <p className="font-semibold text-carbon">{src.author} ({src.year})</p>
                              <p className="italic text-carbon/80">{src.title}. {src.publisher}</p>
                              {src.url && (
                                <a
                                  href={src.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block text-xs font-sans text-oliva hover:underline mt-1"
                                >
                                  Ver publicación / enlace ↗
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 bg-terracota/10 border-l-4 border-terracota text-carbon font-sub text-sm italic">
                        {selectedRecipe.credits}
                      </div>
                    </motion.div>
                  )}

                </div>

              </div>

              {/* Modal Bottom Footer */}
              <div className="p-6 bg-hueso/40 border-t border-carbon/15 flex justify-end">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="bg-carbon text-crema font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-terracota transition-colors"
                >
                  Cerrar Ficha
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHANFAINA FULL MODAL READER */}
      <AnimatePresence>
        {selectedChanfaina && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-carbon/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-crema w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-carbon/15 bg-hueso/30 shrink-0">
                <div className="space-y-1 pr-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-oliva font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-terracota" />
                    {selectedChanfaina.code} · Ficha Patrimonial
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-carbon leading-tight">
                    {selectedChanfaina.title}
                  </h2>
                  <p className="font-serif italic text-base text-terracota/80">
                    {selectedChanfaina.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedChanfaina(null)}
                  className="shrink-0 p-2 text-carbon/50 hover:text-terracota hover:bg-terracota/10 transition-colors rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Meta Bar */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 px-6 md:px-8 py-3 bg-carbon/5 border-b border-carbon/10 text-xs font-sans uppercase tracking-widest shrink-0">
                <span className="flex items-center gap-1.5 text-carbon/70">
                  <MapPin className="w-3.5 h-3.5 text-terracota" />
                  {selectedChanfaina.location}
                </span>
                <span className="flex items-center gap-1.5 text-carbon/70">
                  <Clock className="w-3.5 h-3.5 text-terracota" />
                  {selectedChanfaina.cookingTime}
                </span>
                <span className="flex items-center gap-1.5 text-carbon/70">
                  <Flame className="w-3.5 h-3.5 text-terracota" />
                  {selectedChanfaina.identityTag}
                </span>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8">

                {/* Photo Viewer */}
                <div className="space-y-3 bg-carbon/95 p-4 border border-carbon/20 rounded-xs">
                  <div className="relative h-[300px] md:h-[420px] flex items-center justify-center overflow-hidden bg-carbon/90 rounded-xs">
                    <img
                      src={selectedChanfaina.gallery[chanfainaImageIndex].url}
                      alt="Fotografía de la chanfaina"
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300"
                    />
                    <button
                      onClick={() => setFullscreenImage(selectedChanfaina.gallery[chanfainaImageIndex].url)}
                      className="absolute top-3 right-3 bg-carbon/80 text-crema p-2 rounded-full hover:bg-terracota transition-colors flex items-center gap-1.5 text-xs font-sans px-3 shadow-md"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ver foto completa</span>
                    </button>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent p-4 text-crema">
                      <p className="font-sub text-xs md:text-sm italic">
                        {selectedChanfaina.gallery[chanfainaImageIndex].caption}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedChanfaina.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setChanfainaImageIndex(idx)}
                        className={`h-24 bg-carbon border-2 overflow-hidden transition-all flex items-center justify-center p-1 rounded-xs relative ${
                          chanfainaImageIndex === idx
                            ? 'border-terracota ring-2 ring-terracota/40 shadow-md'
                            : 'border-carbon/50 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                        <span className="absolute top-1 left-1 bg-carbon/90 text-crema text-[10px] px-1.5 py-0.5 font-mono">
                          #{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 flex-wrap border-b border-carbon/20 text-xs font-sans overflow-x-auto">
                  {[
                    { key: 'historia', label: 'Historia y Contexto', icon: BookOpen },
                    { key: 'ingredientes', label: 'Ingredientes', icon: Utensils },
                    { key: 'preparacion', label: 'Preparación', icon: Flame },
                    { key: 'memoria', label: 'Lugar de Memoria', icon: Info },
                    { key: 'fuentes', label: 'Fuentes & Créditos', icon: Share2 }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setChanfainaTab(tab.key as any)}
                        className={`pb-3 px-2 flex items-center gap-1.5 transition-colors border-b-2 font-medium ${
                          chanfainaTab === tab.key
                            ? 'border-terracota text-terracota'
                            : 'border-transparent text-carbon/60 hover:text-carbon'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <div className="space-y-6 min-h-[300px]">

                  {chanfainaTab === 'historia' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="bg-terracota/5 border-l-4 border-terracota p-4 italic font-serif text-carbon/90 text-base">
                        "Hablar de chanfaina en Colombia supone adentrarse en una preparación cuya identidad no puede reducirse a una receta única."
                      </div>
                      {selectedChanfaina.historyText.map((paragraph, index) => (
                        <p key={index} className="font-sub text-carbon/80 text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      {selectedChanfaina.historyCitation && (
                        <p className="text-xs font-sans text-oliva/80 italic border-t border-carbon/10 pt-4">
                          Fuente: {selectedChanfaina.historyCitation}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {chanfainaTab === 'ingredientes' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-serif text-lg text-carbon flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-terracota" /> Ingredientes Principales
                          </h4>
                          <ul className="space-y-2">
                            {selectedChanfaina.ingredients.main.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm font-sub text-carbon/80">
                                <CheckCircle2 className="w-4 h-4 text-terracota shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-serif text-lg text-carbon flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-oliva" /> Acompañamientos
                          </h4>
                          <ul className="space-y-2">
                            {selectedChanfaina.ingredients.sides.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm font-sub text-carbon/80">
                                <ChevronRight className="w-4 h-4 text-oliva shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {chanfainaTab === 'preparacion' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      {selectedChanfaina.steps.map((step) => (
                        <div key={step.number} className="border border-carbon/10 bg-hueso/30 rounded-xs overflow-hidden">
                          <div className="flex items-center gap-4 p-4 bg-carbon/5 border-b border-carbon/10">
                            <span className="w-10 h-10 bg-terracota text-crema rounded-full flex items-center justify-center font-serif text-lg font-bold shrink-0">
                              {step.number}
                            </span>
                            <div>
                              <h4 className="font-serif text-lg text-carbon">{step.title}</h4>
                              {step.concept && (
                                <span className="text-xs font-sans text-oliva uppercase tracking-wider">
                                  Concepto: {step.concept}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="p-4 font-sub text-carbon/80 text-sm leading-relaxed">
                            {step.description}
                          </p>
                          {step.citationRef && (
                            <div className="px-4 pb-3 text-xs font-sans text-oliva/70 italic border-t border-carbon/10 pt-2">
                              Referencia: {step.citationRef}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {chanfainaTab === 'memoria' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      {selectedChanfaina.memoryText.map((paragraph, index) => (
                        <p key={index} className="font-sub text-carbon/80 text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      <div className="border-t border-carbon/10 pt-6 space-y-4">
                        <h4 className="font-serif text-lg text-carbon">Reflexión Final</h4>
                        {selectedChanfaina.reflectionText.map((paragraph, index) => (
                          <p key={index} className="font-sub text-carbon/80 text-base leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {chanfainaTab === 'fuentes' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <h4 className="font-serif text-xl text-carbon">Referencias Bibliográficas</h4>
                      <ul className="space-y-4">
                        {selectedChanfaina.sources.map((source, index) => (
                          <li key={index} className="border-b border-carbon/10 pb-4 last:border-0 space-y-1">
                            <p className="font-sub text-carbon/90 text-sm">
                              <span className="font-medium">{source.author}</span> ({source.year}). <em>{source.title}</em>. {source.publisher}.
                            </p>
                            {source.url && (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-oliva hover:text-terracota underline"
                              >
                                Ver publicación / enlace ↗
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="p-5 bg-terracota/10 border-l-4 border-terracota text-carbon font-sub text-sm italic">
                        {selectedChanfaina.credits}
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-hueso/40 border-t border-carbon/15 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedChanfaina(null)}
                  className="bg-carbon text-crema font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-terracota transition-colors"
                >
                  Cerrar Ficha
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 bg-carbon/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-6 right-6 text-crema bg-carbon/80 p-3 rounded-full hover:bg-terracota transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullscreenImage}
              alt="Fotografía original del cliente en alta definición"
              className="max-w-full max-h-[92vh] object-contain rounded-xs shadow-2xl border border-crema/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Recipes;

export interface Citation {
  author: string;
  year: string;
  title: string;
  publisher: string;
  url?: string;
}

export interface Step {
  number: number;
  title: string;
  concept?: string;
  citationRef?: string;
  description: string;
}

export interface Recipe {
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

export const lechonaRecipe: Recipe = {
  id: 'lechona-tolimense',
  code: 'Ficha N°001',
  title: 'La lechona tolimense: un cerdo entero, más de 10 horas de horno y un saber que no cabe en una receta',
  subtitle: 'En El Espinal, Tolima, decir "lechona" sin apellido es decir algo impreciso.',
  location: 'El Espinal, Tolima',
  region: 'Región Andina / Tolima Grande',
  cookingTime: '~13 Horas de Horneo',
  recognition: '#1 Mejor plato con cerdo del mundo (TasteAtlas 2024)',
  identityTag: 'Sin Arroz (100% Arveja Amarilla)',
  featuredImage: '/lechona_plato_nuevo.png',
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
      url: '/lechona_plato_nuevo.png',
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
        'Precalentado con leña durante al menos una hora, el horno recibe la lechona para una cocción lenta de aproximadamente trece horas. Ese tiempo no es capricho: el colágeno de la piel necesita calor sustained y prolongado para transformarse en gelatina, un proceso que una cocción corta a alta temperatura no reproduce. La gelatina resultante retiene la jugosidad de la carne por dentro mientras el cuero se vuelve crujiente por fuera.'
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

export const chanfainaRecipe: Recipe = {
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

export const allRecipes: Recipe[] = [lechonaRecipe, chanfainaRecipe];

export const getRecipeById = (id: string): Recipe | undefined => {
  return allRecipes.find((recipe) => recipe.id === id);
};

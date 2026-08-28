/**
 * Base de datos patrimonial de Recetas Tradicionales de Chile
 * Incluye platillos icónicos con pasos minuciosos, tiempos exactos por etapa,
 * técnicas culinarias, temperaturas, historia cultural, costos estimados y secretos.
 */

const RECETAS_CHILE = [
  {
    "id": "pastel-de-choclo",
    "name": "Pastel de Choclo Criollo",
    "tagline": "El rey indiscutido de la mesa veraniega del campo chileno",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Valle Central / Campo)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 45,
    "cookTime": 55,
    "totalTime": 100,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 16500,
      "perServing": 2750,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Calculado a precios de feria libre y carnicería local"
    },
    "image": "assets/recipes/pastel-de-choclo.jpg",
    "history": "Nacido en las cocinas coloniales mestizas de la zona central de Chile, el pastel de choclo combina la milenaria tradición andina del maíz tierno (choclo humero) con la técnica hispana del pino de carne molida, pollo, cebolla y aliños. Tradicionalmente horneado en fuentes de greda de Pomaire o Pañul, este plato representa el apogeo de las cosechas de verano y fiestas familiares campestres.",
    "grandmasSecret": "Para lograr la auténtica pasta de choclo, añade una ramita fresca de albahaca bien picada al procesar el maíz y una pizca generosa de azúcar antes de hornear para lograr ese dorado y crocante caramelizado superficial inconfundible.",
    "winePairing": "Carménère Reserva del Valle de Colchagua o un vino tinto País campesino servido a temperatura de bodega.",
    "tags": [
      "Maíz",
      "Greda",
      "Verano",
      "Pino",
      "Tradición Huasa"
    ],
    "ingredients": [
      {
        "name": "Choclos humeros desgranados",
        "quantity": 8,
        "unit": "unidades",
        "note": "o 1.2 kg de choclo pastelero"
      },
      {
        "name": "Carne de vacuno picada en cubos finos (posta o asiento)",
        "quantity": 600,
        "unit": "g"
      },
      {
        "name": "Pechugas o presas de pollo cocidas al caldo",
        "quantity": 6,
        "unit": "presas pequeñas"
      },
      {
        "name": "Cebollas grandes picadas en cubitos parejos",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Leche entera tibia",
        "quantity": 250,
        "unit": "ml"
      },
      {
        "name": "Hojas frescas de albahaca chilena",
        "quantity": 1,
        "unit": "ramo mediano"
      },
      {
        "name": "Huevos duros cortados en cuartos",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Aceitunas negras chilenas (de Huasco o Azapa)",
        "quantity": 12,
        "unit": "unidades"
      },
      {
        "name": "Pasas de uva rubias o morenas",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name": "Mantequilla o manteca de cerdo",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name": "Azúcar granulada para caramelizar la corteza",
        "quantity": 3,
        "unit": "cucharadas colmadas"
      },
      {
        "name": "Comino molido, orégano entero y ají de color",
        "quantity": 1,
        "unit": "cda de c/u"
      },
      {
        "name": "Sal de mar y pimienta negra recién molida",
        "quantity": 1,
        "unit": "al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Picado y Sellado Dorado de la Carne",
        "timeMinutes": 12,
        "technique": "Sellado a fuego vivo (200°C)",
        "text": "Pica la carne de vacuno en cubitos milimétricos de 0.5 cm con un cuchillo bien afilado (evita la carne molida para mantener la textura clásica campestre). Calienta 2 cucharadas de manteca o aceite en una paila grande de hierro o greda a fuego fuerte. Agrega la carne y séllala vigorosamente durante 8 a 10 minutos hasta que tome un color dorado profundo por fuera pero conserve sus jugos internos. Retira y reserva.",
        "tip": "Sellar la carne a fuego muy fuerte evita que suelte agua y quede hervida."
      },
      {
        "step": 2,
        "title": "Sofrito Prolongado del Pino Criollo",
        "timeMinutes": 35,
        "technique": "Pochado a fuego bajo (110°C)",
        "text": "En la misma paila con los restos dorados de la carne, agrega la cebolla picada en cubos finos. Añade el comino, el ají de color, el orégano desmenuzado con las palmas y una cucharadita de sal. Reduce el fuego al mínimo, tapa y cocina despacio durante 25 a 30 minutos, revolviendo cada 5 minutos hasta que la cebolla quede completamente translúcida, dulce y tierna. Incorpora la carne reservada con sus jugos y cocina destapado 5 minutos más. Deja enfriar a temperatura ambiente (idealmente refrigerar toda la noche).",
        "tip": "El reposo del pino es el gran secreto de la cocina chilena: asienta los jugos y evita que la pastelera se hunda."
      },
      {
        "step": 3,
        "title": "Cocción Previa de las Presas de Pollo",
        "timeMinutes": 20,
        "technique": "Hervor suave (95°C)",
        "text": "En una cacerola con agua hirviendo sazonada con sal, apio, zanahoria y una pizca de orégano, cocina las 6 presas de pollo durante 18 a 20 minutos hasta que la carne esté tierna y cocida hasta el hueso. Retira y deja escurrir. Puedes retirar la piel si prefieres un plato más magro.",
        "tip": "Guarda este caldo concentrado de pollo para utilizarlo en sopas o para aligerar la pastelera si queda muy espesa."
      },
      {
        "step": 4,
        "title": "Molienda de Choclos con Albahaca Fresca",
        "timeMinutes": 10,
        "technique": "Procesado / Triturado",
        "text": "Desgrana los choclos humeros frescos. Coloca los granos en una procesadora de alimentos o molino de maíz junto con las hojas de albahaca fresca lavadas y una pizca de sal. Muele hasta obtener una pulpa húmeda y fragante con pequeños trozos reconocibles de maíz, sin llegar a licuar por completo.",
        "tip": "El almidón natural del choclo fresco humero es el único espesante que necesita esta receta."
      },
      {
        "step": 5,
        "title": "Cocción y Espesado de la Pastelera",
        "timeMinutes": 20,
        "technique": "Cocción continua a fuego medio (85°C-90°C)",
        "text": "En una olla de fondo grueso, derrite 50 g de mantequilla a fuego medio. Vierte el choclo molido con la albahaca y añade los 250 ml de leche tibia poco a poco. Cocina durante 18 a 20 minutos revolviendo sin descanso con una cuchara de madera trazando formas de '8' en el fondo para evitar que se pegue. Sabrás que está lista cuando la crema espese, brille y al probar no sienta sabor a almidón crudo.",
        "tip": "No te descuides ni un segundo mientras la pastelera hierve: tiende a salpicar cuando alcanza el punto de espesor."
      },
      {
        "step": 6,
        "title": "Armado Estratificado en Fuentes de Greda",
        "timeMinutes": 10,
        "technique": "Ensamblaje tradicional",
        "text": "Precalienta el horno a 200°C. En 6 pailas individuales de greda (o una gran fuente rectangular de greda de 30x20 cm), distribuye una capa abundante de pino caliente en la base. Sobre el pino acomoda una presa de pollo cocido, 2 cuartos de huevo duro, 2 aceitunas negras y un puñado de pasas. Cubre todo generosamente con la pastelera caliente hasta el borde, alisando la superficie con una cuchara mojada.",
        "tip": "Curar previamente la greda asegura una cocción uniforme y el aroma a tierra cocida característico."
      },
      {
        "step": 7,
        "title": "Caramelizado y Horneado Dorado",
        "timeMinutes": 30,
        "technique": "Horneado con grill (200°C - 220°C)",
        "text": "Espolvorea media cucharada de azúcar granulada sobre la superficie de cada paila. Lleva al horno a 200°C durante 25 minutos; luego activa el grill superior a 220°C durante los últimos 5 minutos hasta que la cubierta burbujee y el azúcar forme una costra tostada, crujiente y de color caramelo ámbar.",
        "tip": "Vigila el horno en los últimos 5 minutos para que el azúcar caramelice sin quemarse."
      },
      {
        "step": 8,
        "title": "Reposo Térmico y Servicio en la Mesa",
        "timeMinutes": 10,
        "technique": "Atemperado y reposo",
        "text": "Retira las fuentes del horno con guantes gruesos y déjalas reposar sobre tablas de madera durante 8 a 10 minutos antes de servir. Este reposo permite que la pastelera se asiente y tome consistencia firme para comer con cuchara sin quemar el paladar. Acompaña con ensalada chilena de tomates frescos y cebolla amortiguada.",
        "tip": "¡La greda retiene el calor por más de 30 minutos en la mesa!"
      }
    ]
  },
  {
    "id": "empanadas-de-pino",
    "name": "Empanadas de Pino al Horno",
    "tagline": "El emblema de la identidad criolla y de las Fiestas Patrias",
    "category": "masas",
    "categoryLabel": "Masas y Panes",
    "zone": "centro",
    "zoneLabel": "Zona Centro / Nacional",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 60,
    "cookTime": 35,
    "totalTime": 95,
    "servingsBase": 12,
    "estimatedCost": {
      "totalBase": 18000,
      "perServing": 1500,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 12 empanadas de pino grandes (~1.500 CLP c/u)"
    },
    "image": "assets/recipes/empanadas-de-pino.jpg",
    "history": "Traída por los conquistadores españoles pero transformada profundamente en suelo chileno, la empanada de pino se consolidó en los conventos y chinganas del siglo XIX. Su nombre 'pino' proviene del mapudungun 'pirru', que hace referencia a la mezcla de carne picada y cebolla sazonada que constituye su alma jugosa.",
    "grandmasSecret": "El pino debe cocinarse el día anterior y refrigerarse: esto concentra los sabores de los aliños y solidifica los jugos naturales para armar las empanadas con facilidad sin romper la masa.",
    "winePairing": "Vino tinto Cabernet Sauvignon del Valle del Maipo o Pipeño en cacho de chicha.",
    "tags": [
      "Horno",
      "Fiestas Patrias",
      "Pino",
      "Masa Casera",
      "Criollo"
    ],
    "ingredients": [
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Manteca de vacuno o vegetal derretida tibia",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "Agua tibia con salmuera (sal disuelta)",
        "quantity": 450,
        "unit": "ml"
      },
      {
        "name": "Vino blanco seco chileno",
        "quantity": 50,
        "unit": "ml"
      },
      {
        "name": "Carne de vacuno (posta negra o lomo) picada en cubos de 0.5 cm",
        "quantity": 800,
        "unit": "g"
      },
      {
        "name": "Cebollas grandes picadas en cubitos finos",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Comino molido, orégano entero y ají de color",
        "quantity": 1,
        "unit": "cda sopera c/u"
      },
      {
        "name": "Huevos duros (para cuartos)",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Aceitunas negras enteras chilenas (de Huasco)",
        "quantity": 12,
        "unit": "unidades"
      },
      {
        "name": "Pasas de uva morenas",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name": "Yemas de huevo batidas con una cucharada de leche",
        "quantity": 2,
        "unit": "unidades"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Preparación del Pino Tradicional (Día Anterior)",
        "timeMinutes": 45,
        "technique": "Sofrito lento tapado (100°C)",
        "text": "En una olla grande, calienta 3 cucharadas de aceite o manteca. Dora la carne picada a fuego medio-alto por 10 minutos. Agrega las 4 cebollas picadas finas, el comino, ají de color, orégano, 1 cucharada de sal y pimienta. Baja el fuego a mínimo, tapa y cocina durante 35 minutos hasta que la cebolla esté tierna, dulce y translúcida. Apaga el fuego y añade 1 cucharada de harina disuelta en 3 cucharadas de agua para ligar el jugo. Deja enfriar y refrigera toda la noche.",
        "tip": "La grasa y los jugos se solidifican en el refrigerador, lo que permite rellenar las masas sin escurrimientos."
      },
      {
        "step": 2,
        "title": "Preparación de la Salmuera Tibia",
        "timeMinutes": 5,
        "technique": "Disolución térmica (45°C)",
        "text": "Calienta los 450 ml de agua con 1 cucharada sopera colmada de sal gruesa hasta que esté bien tibia (alrededor de 45°C, que puedas tocar sin quemarte) y la sal esté completamente disuelta. Agrega los 50 ml de vino blanco seco.",
        "tip": "El agua debe estar tibia para fundir suavemente la manteca y no endurecer la masa."
      },
      {
        "step": 3,
        "title": "Amasado Enérgico de la Masa Quebrada",
        "timeMinutes": 15,
        "technique": "Amasado manual continuo",
        "text": "Cierne el kilo de harina sobre el mesón limpio formando una corona o volcán amplio. En el centro vierte la manteca derretida tibia y la mezcla de salmuera poco a poco. Amasa con fuerza usando la palma de la mano durante 12 a 15 minutos hasta obtener una masa elástica, tibia, sedosa y que no se pegue en los dedos ni en la mesa.",
        "tip": "Un buen amasado activa el gluten necesario para que la masa resista el vapor del pino en el horno sin romperse."
      },
      {
        "step": 4,
        "title": "Porcionado y Uslereado de Discos",
        "timeMinutes": 20,
        "technique": "Estirado parejo (2 mm)",
        "text": "Divide la masa en 12 bollos iguales de unos 120 g cada uno. Cúbrelos con un paño limpio para que no se sequen. Toma un bollo y usleréalo sobre la mesa ligeramente enharinada desde el centro hacia afuera, rotando la masa hasta formar un círculo regular de unos 20 a 22 cm de diámetro y 2 a 3 mm de espesor uniforme.",
        "tip": "Puedes usar un plato mediano invertido como guía para recortar discos con bordes perfectos."
      },
      {
        "step": 5,
        "title": "Relleno Equilibrado y Plegado",
        "timeMinutes": 15,
        "technique": "Ensamblaje y sellado",
        "text": "Coloca en el centro de cada disco 2 cucharadas colmadas de pino frío y espeso. Agrega un cuarto de huevo duro, una aceituna negra y algunas pasas. Humedece el borde de la mitad inferior de la masa con una brocha mojada en agua tibia o clara de huevo.",
        "tip": "No sobrecargues la empanada de líquido para evitar que reviente en el horno."
      },
      {
        "step": 6,
        "title": "Repulgue Tradicional de 3 Pliegues",
        "timeMinutes": 10,
        "technique": "Doblado en trapecio criollo",
        "text": "Dobla la masa cubriendo el pino de adelante hacia atrás, formando un semicírculo. Presiona los bordes con la yema de los dedos expulsando el aire atrapado. Dobla los dos extremos laterales hacia adentro unos 2 cm y luego dobla la solapa superior hacia el centro, formando el clásico trapecio criollo. Aprieta firmemente las esquinas ('orejas') con los dedos.",
        "tip": "Asegúrate de expulsar el aire antes de cerrar para que la empanada no se infle desmedidamente."
      },
      {
        "step": 7,
        "title": "Barnizado Dorado y Respiradero",
        "timeMinutes": 5,
        "technique": "Pintado con dorador",
        "text": "Coloca las 12 empanadas sobre latas de horno limpias o con papel mantequilla, dejando 3 cm de separación entre ellas. Pinta toda la superficie con la mezcla de yemas y leche usando una brocha de repostería. Con un mondadientes, haz 2 o 3 perforaciones pequeñas en el lomo superior de cada empanada.",
        "tip": "Las perforaciones son esenciales: actúan como chimeneas para dejar salir el exceso de vapor caliente sin fisurar la masa."
      },
      {
        "step": 8,
        "title": "Horneado a Piso Fuerte",
        "timeMinutes": 25,
        "technique": "Horneado estático a 200°C - 210°C",
        "text": "Lleva las latas al horno precalentado a 200°C durante 20 a 25 minutos en la parte media-baja del horno, hasta que las empanadas adquieran un color dorado brillante y la base esté crujiente y firme al levantarla con una espátula. Deja reposar 5 minutos sobre una canasta forrada con paño antes de morder.",
        "tip": "¡El pino estará hirviendo al salir del horno! El reposo de 5 minutos permite saborearla sin quemarse."
      }
    ]
  },
  {
    "id": "cazuela-de-vacuno",
    "name": "Cazuela de Vacuno Tradicional",
    "tagline": "El caldo madre de la gastronomía chilena que abriga el alma",
    "category": "sopas",
    "categoryLabel": "Sopas y Guisos",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Sur",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 25,
    "cookTime": 70,
    "totalTime": 95,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 15000,
      "perServing": 2500,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Incluye corte de vacuno con hueso y verduras de estación"
    },
    "image": "assets/recipes/cazuela-de-vacuno.jpg",
    "history": "Heredera directa de la 'olla podrida' española y del ancestral 'korü' mapuche, la cazuela representa el mestizaje culinario perfecto: en un caldo aromático conviven el vacuno o ave traídos de Europa con los dones nativos del Nuevo Mundo: el zapallo camote, la papa y el choclo chileno.",
    "grandmasSecret": "Dora los trozos de carne previamente en la olla con orégano y un toque de pimentón antes de verter el agua hirviendo; esto sella los jugos y otorga un color ámbar dorado inigualable al caldo.",
    "winePairing": "Vino tinto joven Merlot o Pinot Noir del Valle de Casablanca.",
    "tags": [
      "Caldo",
      "Zapallo",
      "Choclo",
      "Invierno",
      "Familiar"
    ],
    "ingredients": [
      {
        "name": "Cortes de vacuno con hueso (osobuco, asado de tira o tapapecho)",
        "quantity": 1,
        "unit": "kg",
        "note": "cortado en 6 porciones"
      },
      {
        "name": "Papas medianas peladas y lavadas",
        "quantity": 6,
        "unit": "unidades"
      },
      {
        "name": "Trozos de zapallo camote con su cáscara limpia",
        "quantity": 6,
        "unit": "trozos generosos"
      },
      {
        "name": "Choclos frescos cortados en rodajas gruesas",
        "quantity": 2,
        "unit": "unidades (6 rodajas)"
      },
      {
        "name": "Arroz blanco de grano largo crudo",
        "quantity": 6,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Porotos verdes desvainados y cortados en juliana",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "Zanahoria cortada en bastones delgados",
        "quantity": 1,
        "unit": "unidad grande"
      },
      {
        "name": "Pimentón rojo cortado en tiras finas",
        "quantity": 0.5,
        "unit": "unidad"
      },
      {
        "name": "Cebolla cortada en pluma",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Dientes de ajo picados",
        "quantity": 2,
        "unit": "dientes"
      },
      {
        "name": "Orégano seco, comino y ají de color",
        "quantity": 1,
        "unit": "cucharadita c/u"
      },
      {
        "name": "Agua hirviendo",
        "quantity": 2.5,
        "unit": "litros"
      },
      {
        "name": "Cilantro fresco recién picado para coronar",
        "quantity": 0.5,
        "unit": "taza"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sellado Aromático y 'Color' de la Carne",
        "timeMinutes": 12,
        "technique": "Sellado a fuego medio-alto (180°C)",
        "text": "En una olla grande y profunda, calienta 2 cucharadas de aceite. Sazona los 6 trozos de carne con sal, comino y pimienta. Dóralos por todos sus lados durante 8 minutos hasta formar una costra apetitosa. Agrega la cebolla en pluma, los dientes de ajo, los bastones de zanahoria, el pimentón y el orégano. Sofríe 4 minutos hasta perfumar.",
        "tip": "El colágeno del hueso de osobuco o asado de tira le otorgará un cuerpo untuoso inigualable al caldo."
      },
      {
        "step": 2,
        "title": "Cocción Lenta y Espumado Constante del Fondo",
        "timeMinutes": 40,
        "technique": "Simmer / Hervor suave continuo (90°C)",
        "text": "Vierte los 2.5 litros de agua hirviendo sobre la carne y verduras sofritas. Al romper hervor, baja el fuego a suave y cocina tapado durante 35 a 40 minutos. Con una espumadera o cuchara ancha, retira cuidadosamente cada 10 minutos las impurezas y grasas que suban a la superficie.",
        "tip": "Espumar pacientemente garantiza un caldo transparente, limpio, brillante y libre de amargor."
      },
      {
        "step": 3,
        "title": "Incorporación de las Papas y Zapallo Camote",
        "timeMinutes": 15,
        "technique": "Cocción de tubérculos a fuego medio",
        "text": "Añade las 6 papas enteras peladas, las 6 rodajas gruesas de choclo y los 6 trozos de zapallo camote con su cáscara (la cáscara evita que el zapallo se desarme en el caldo). Agrega 1 cucharadita adicional de sal. Cocina a fuego medio tapado durante 15 minutos.",
        "tip": "Asegúrate de que las papas queden sumergidas en el caldo para que se cocinen parejo."
      },
      {
        "step": 4,
        "title": "Lluvia de Arroz Campestre",
        "timeMinutes": 12,
        "technique": "Cocción de grano en caldo hirviendo",
        "text": "Espolvorea las 6 cucharadas de arroz crudo en forma de lluvia uniforme entre los espacios libres de las verduras. Revuelve suavemente con una cuchara de madera solo una vez para distribuir el arroz sin quebrar el zapallo ni las papas. Cocina a fuego medio-bajo por 12 minutos.",
        "tip": "El arroz absorbe los aromas de la carne y aporta almidón suave para espesar el caldo."
      },
      {
        "step": 5,
        "title": "Toque Crujiente de Porotos Verdes",
        "timeMinutes": 6,
        "technique": "Escalfado corto (95°C)",
        "text": "Agrega los porotos verdes cortados en juliana delgada. Cocina durante solo 5 a 6 minutos destapado. Apaga el fuego inmediatamente para que los porotos conserven su textura crujiente y su color verde esmeralda vibrante.",
        "tip": "Nunca sobrecocines los porotos verdes en la cazuela; deben conservar su frescura de huerta."
      },
      {
        "step": 6,
        "title": "Emplatado Tradicional en Plato Hondo",
        "timeMinutes": 5,
        "technique": "Montaje patrimonial",
        "text": "En cada plato hondo de loza o greda, coloca con espumadera: un trozo de carne con hueso, una papa entera, un trozo de zapallo y una rodaja de choclo. Vierte con un cucharón abundante caldo caliente con arroz y porotos verdes. Corona generosamente con cilantro fresco recién picado.",
        "tip": "Sírvela acompañada de una salsa de ají verde picado fino o pasta de ají cacho de cabra ahumado."
      }
    ]
  },
  {
    "id": "curanto-en-olla-pulmay",
    "name": "Curanto en Olla (Pulmay Chilote)",
    "tagline": "El gran festín del archipiélago de Chiloé que reúne el mar y la tierra",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "sur",
    "zoneLabel": "Zona Sur (Chiloé / Los Lagos)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 40,
    "cookTime": 50,
    "totalTime": 90,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 24000,
      "perServing": 4000,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Incluye mariscos frescos, costillar ahumado y vino blanco"
    },
    "image": "assets/recipes/curanto-en-olla-pulmay.jpg",
    "history": "Nacido en la mística isla de Chiloé hace más de 6.000 años, el curanto original se cocina en un hoyo en la tierra con piedras volcánicas al rojo vivo cubiertas por hojas de nalca o pangue. El 'Pulmay' es la magistral adaptación urbana y de cocina en olla de este rito comunitario chilote, destilando un caldo reparador famoso en todo el país.",
    "grandmasSecret": "Utiliza vino blanco seco de buena acidez y una capa generosa de hojas de repollo en el fondo y superficie para simular las hojas de nalca nativas y atrapar todo el vapor concentrado de mariscos y ahumados.",
    "winePairing": "Sauvignon Blanc crocante del Valle de Leyda o cerveza artesanal rubia sureña.",
    "tags": [
      "Mariscos",
      "Chiloé",
      "Ahumados",
      "Pulmay",
      "Patrimonio Austral"
    ],
    "ingredients": [
      {
        "name": "Choros zapato o mejillones frescos en concha limpia",
        "quantity": 1.5,
        "unit": "kg"
      },
      {
        "name": "Almejas frescas en concha lavadas y purgadas",
        "quantity": 1.5,
        "unit": "kg"
      },
      {
        "name": "Presas de pollo (trutros cortos o pechugas)",
        "quantity": 6,
        "unit": "presas"
      },
      {
        "name": "Costillar de cerdo ahumado artesanal cortado en trozos",
        "quantity": 600,
        "unit": "g"
      },
      {
        "name": "Longanizas parrilleras artesanales o chorizos ahumados",
        "quantity": 6,
        "unit": "unidades"
      },
      {
        "name": "Papas nativas chilotas con piel bien cepillada",
        "quantity": 6,
        "unit": "unidades"
      },
      {
        "name": "Botella de vino blanco seco (Sauvignon Blanc o Chardonnay)",
        "quantity": 750,
        "unit": "ml"
      },
      {
        "name": "Hojas grandes de repollo blanco bien lavadas",
        "quantity": 10,
        "unit": "hojas grandes"
      },
      {
        "name": "Cebollas grandes cortadas en cuartos gruesos",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Dientes de ajo machacados con cáscara",
        "quantity": 5,
        "unit": "dientes"
      },
      {
        "name": "Hojas de laurel y granos de pimienta negra",
        "quantity": 3,
        "unit": "hojas / pizca"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Limpieza y Purga Rigurosa de Mariscos",
        "timeMinutes": 15,
        "technique": "Mise en place de mariscos",
        "text": "Revisa cada choro y almeja: desecha cualquier marisco con la concha rota o que esté abierto y no se cierre al darle un golpe ligero. Cepilla las conchas bajo un chorro de agua fría para retirar toda arena y retira las barbas fibrosas de los choros tirando con firmeza.",
        "tip": "La limpieza exhaustiva evita que caiga arena en el caldo dorado del pulmay."
      },
      {
        "step": 2,
        "title": "Sellado Previo de Carnes y Embutidos",
        "timeMinutes": 12,
        "technique": "Dorado a fuego medio-alto",
        "text": "En un sartén amplio con un hilo de aceite, dora las presas de pollo y las longanizas durante 4 a 5 minutos por lado hasta que la piel tome color dorado y comiencen a liberar sus aromas ahumados. No es necesario cocinarlas por completo por dentro.",
        "tip": "Dorar las carnes previamente aporta una profundidad tostada superior al caldo final."
      },
      {
        "step": 3,
        "title": "Base de la Olla y Primera Cama de Repollo",
        "timeMinutes": 8,
        "technique": "Acomodo de base aromática",
        "text": "En una olla muy grande y de fondo grueso (mínimo 10 a 12 litros), coloca 2 cucharadas de aceite en el fondo. Distribuye las cebollas en cuartos, los ajos machacados, las hojas de laurel y la pimienta. Cubre completamente el fondo con 3 hojas grandes de repollo superpuestas.",
        "tip": "Las hojas de repollo impiden que las carnes toquen el metal directo evitando que se quemen durante el hervor."
      },
      {
        "step": 4,
        "title": "Estratificación de Carnes y Papas Sureñas",
        "timeMinutes": 10,
        "technique": "Capas ordenadas por densidad térmica",
        "text": "Coloca sobre el repollo los trozos de costillar ahumado, las presas de pollo doradas y las longanizas enteras. Encima de las carnes, acomoda las 6 papas nativas lavadas enteras con su piel.",
        "tip": "Colocar las papas en medio permite que absorban todos los vapores de la carne ahumada y el jugo de los mariscos."
      },
      {
        "step": 5,
        "title": "Corona de Mariscos y Baño de Vino Blanco",
        "timeMinutes": 5,
        "technique": "Vertido de líquido de vaporización",
        "text": "Vierte cuidadosamente las almejas y los choros zapato limpios sobre las papas formando una montaña marina. Vierte toda la botella de vino blanco seco (750 ml) sobre los mariscos.",
        "tip": "No agregues agua: el vino blanco y los jugos naturales de los mariscos formarán más de 2 litros de caldo puro."
      },
      {
        "step": 6,
        "title": "Sellado Hermético y Cocción al Vapor",
        "timeMinutes": 45,
        "technique": "Cocción al vapor sellado a fuego medio (100°C)",
        "text": "Cubre toda la montaña de mariscos con las hojas de repollo restantes, metiendo los bordes hacia adentro como si arroparas un bulto. Tapa la olla con firmeza (si tu tapa baila, coloca un plato hondo con agua encima para hacer peso). Cocina a fuego alto durante 10 minutos hasta que veas escapar vapor intenso por los bordes; luego baja a fuego medio y cocina sin destapar durante 35 minutos.",
        "tip": "¡No abras la tapa durante los primeros 35 minutos para no romper la cámara de vapor sellada!"
      },
      {
        "step": 7,
        "title": "Servicio Chilote en Bandejas y Tazas de Caldo",
        "timeMinutes": 10,
        "technique": "Servicio comunitario",
        "text": "Destapa la olla con cuidado del vapor. Retira las hojas superiores de repollo. Sirve en fuentes grandes compartidas los choros y almejas abiertos, las carnes, longanizas y papas. Pasa el caldo hirviendo por un colador fino y sírvelo en tazones o pocillos hondos para beber con las manos.",
        "tip": "El caldo caliente del pulmay es considerado un tónico revitalizante legendario en todo el sur de Chile."
      }
    ]
  },
  {
    "id": "porotos-granados-mazamorra",
    "name": "Porotos Granados con Mazamorra",
    "tagline": "El guiso veraniego por excelencia con aroma a albahaca de huerta",
    "category": "sopas",
    "categoryLabel": "Sopas y Guisos",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Valle Central)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 30,
    "cookTime": 50,
    "totalTime": 80,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 8500,
      "perServing": 1420,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Plato campesino de huerta muy rendidor y accesible"
    },
    "image": "assets/recipes/porotos-granados-mazamorra.jpg",
    "history": "Un plato 100% autóctono que celebra la generosidad de la huerta chilena en los meses de enero y febrero. Combina el poroto tierno recién desvainado con la mazamorra de choclo humero y el zapallo amarillo, perfumado con la albahaca fresca cultivada junto a los surcos.",
    "grandmasSecret": "El secreto de la textura cremosa perfecta es rallar o procesar el choclo crudo junto con la albahaca e incorporarlo recién en los últimos 15 minutos de hervor, revolviendo constantemente para que espese sin pegarse.",
    "winePairing": "Vino tinto Cinsault del Valle del Itata o un refrescante vaso de agüita de hierbas.",
    "tags": [
      "Porotos",
      "Vegetariano",
      "Verano",
      "Albahaca",
      "Tradición"
    ],
    "ingredients": [
      {
        "name": "Porotos granados frescos recién desvainados",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Zapallo amarillo camote cortado en cubos de 2 cm",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Choclos humeros frescos desgranados para mazamorra",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Hojas frescas de albahaca chilena",
        "quantity": 1,
        "unit": "taza bien compacta"
      },
      {
        "name": "Cebolla picada en cubitos finos",
        "quantity": 1,
        "unit": "unidad grande"
      },
      {
        "name": "Dientes de ajo finamente picados",
        "quantity": 2,
        "unit": "dientes"
      },
      {
        "name": "Ají de color (pimentón dulce molido) y comino",
        "quantity": 1,
        "unit": "cucharadita c/u"
      },
      {
        "name": "Caldo de verduras o agua hirviendo",
        "quantity": 1.2,
        "unit": "litros"
      },
      {
        "name": "Aceite vegetal o manteca",
        "quantity": 3,
        "unit": "cucharadas"
      },
      {
        "name": "Sal de mar y pimienta blanca",
        "quantity": 1,
        "unit": "al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Desvainado y Lavado de Legumbres Frescas",
        "timeMinutes": 15,
        "technique": "Mise en place de huerta",
        "text": "Desvaina los porotos granados frescos retirando cualquier grano dañado o manchado. Lávalos bajo un chorro de agua fría y escúrrelos. Pela el zapallo camote y córtalo en cubos regulares de unos 2 cm de lado.",
        "tip": "A diferencia de las legumbres secas, los porotos frescos no requieren horas previas de remojo."
      },
      {
        "step": 2,
        "title": "Cocción Inicial de Porotos y Zapallo",
        "timeMinutes": 25,
        "technique": "Hervor medio continuo (95°C)",
        "text": "En una olla amplia, coloca los porotos granados y los cubos de zapallo. Cubre con 1.2 litros de agua hirviendo o caldo de verduras (el líquido debe tapar los ingredientes por dos dedos de altura). Añade una cucharadita de sal. Cocina a fuego medio semi-tapado durante 25 minutos hasta que los porotos estén tiernos al morder.",
        "tip": "No agregues agua en exceso para que el guiso quede con cuerpo espeso y no como caldo ralo."
      },
      {
        "step": 3,
        "title": "Elaboración del Sofrito con 'Color'",
        "timeMinutes": 10,
        "technique": "Sofrito en sartén a fuego medio (140°C)",
        "text": "En un sartén con 3 cucharadas de aceite o manteca, sofríe la cebolla picada con los dientes de ajo, el ají de color, el comino y una pizca de sal. Cocina durante 8 a 10 minutos revolviendo hasta que la cebolla tome un color dorado intenso y suelte su aroma acaramelado.",
        "tip": "El ají de color disuelto en aceite caliente desprende un tono anaranjado brillante que bautiza al plato."
      },
      {
        "step": 4,
        "title": "Triturado de la Mazamorra con Albahaca",
        "timeMinutes": 8,
        "technique": "Molienda en procesadora o rallador",
        "text": "Desgrana los 4 choclos humeros. Procesa los granos junto con la taza de albahaca fresca y media taza de caldo de la olla en la licuadora o procesadora durante 2 minutos hasta obtener una pasta cremosa y verde brillante.",
        "tip": "Moler la albahaca cruda con el choclo impregna cada molécula de almidón con su perfume de verano."
      },
      {
        "step": 5,
        "title": "Machacado Parcial de Zapallo y Unión",
        "timeMinutes": 5,
        "technique": "Emulsión rústica",
        "text": "Con una cuchara de madera o pisapapas, aplasta ligeramente unos 4 o 5 trozos de zapallo contra las paredes de la olla. Vierte todo el sofrito dorado a la olla e integra con movimientos envolventes.",
        "tip": "El zapallo aplastado se disuelve en el caldo dándole un color dorado aterciopelado inconfundible."
      },
      {
        "step": 6,
        "title": "Espesado Lento de la Mazamorra",
        "timeMinutes": 15,
        "technique": "Cocción lenta con cuchara de madera (85°C)",
        "text": "Vierte la crema de choclo y albahaca a la olla hirviendo. Reduce el fuego a medio-bajo. Cocina durante 12 a 15 minutos revolviendo continuamente con la cuchara de madera en forma de ocho para evitar que el almidón del maíz se pegue en el fondo. El guiso debe tomar una consistencia untuosa y cremosa.",
        "tip": "Si notas que espesa demasiado rápido, añade medio cucharón de agua caliente para equilibrar."
      },
      {
        "step": 7,
        "title": "Servicio Tradicional en Plato de Greda",
        "timeMinutes": 5,
        "technique": "Servicio campesino",
        "text": "Sirve en platos hondos de greda bien calientes. Riega cada porción con unas gotas de aceite con ají de color caliente por encima y sirve acompañado de una fresca ensalada chilena de tomates de campo con cebolla en pluma y ají verde.",
        "tip": "Al día siguiente, recalentado a fuego lento, ¡los porotos granados multiplican su sabor!"
      }
    ]
  },
  {
    "id": "cancato-de-salmon",
    "name": "Cancato de Salmón Chilote",
    "tagline": "El pescado a las brasas relleno de queso fundido, longaniza y tomate",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "sur",
    "zoneLabel": "Zona Sur (Llanquihue / Chiloé)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 20,
    "cookTime": 25,
    "totalTime": 45,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 22000,
      "perServing": 5500,
      "tier": "gourmet",
      "tierLabel": "Gourmet / Especial",
      "note": "Basado en 1 kg de salmón fresco y queso mantecoso artesanal"
    },
    "image": "assets/recipes/cancato-de-salmon.png",
    "history": "Originario de los canales del sur de Chile y de la cultura marinera chilota, el cancato nació como una forma ingeniosa de asar los pescados frescos sobre las brasas de luma, abriéndolos en mariposa e intercalando queso de campo mantecoso, embutidos ahumados locales y hierbas silvestres.",
    "grandmasSecret": "Utiliza queso mantecoso artesanal del sur (como Chanco o Los Muermos) que funda generosamente, y baña el pescado con unas gotas de vino blanco antes de cerrar y hornear para mantenerlo jugoso y tierno.",
    "winePairing": "Chardonnay con barrica del Valle de Malleco o cerveza de trigo artesanal.",
    "tags": [
      "Pescado",
      "Salmón",
      "Queso Fundido",
      "Sur de Chile",
      "Rápido"
    ],
    "ingredients": [
      {
        "name": "Filete de salmón fresco con piel y sin espinas",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Queso mantecoso chileno (de Chanco o Los Muermos) laminado grueso",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "Longaniza artesanal ahumada cortada en rodajas finas de 0.5 cm",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Tomates maduros y firmes cortados en rodajas",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Cebolla cortada en pluma muy fina",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Dientes de ajo machacados",
        "quantity": 2,
        "unit": "dientes"
      },
      {
        "name": "Orégano fresco o seco, sal marina y pimienta negra recién molida",
        "quantity": 1,
        "unit": "al gusto"
      },
      {
        "name": "Vino blanco seco chileno",
        "quantity": 50,
        "unit": "ml"
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": 2,
        "unit": "cucharadas"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Acondicionamiento y Marinado del Salmón",
        "timeMinutes": 10,
        "technique": "Mise en place y sazón",
        "text": "Lava y seca el filete de salmón con toalla de papel. Con una pinza de cocina, retira con cuidado cualquier espina residual palpable en el lomo. Coloca el salmón con la piel hacia abajo sobre una bandeja para horno aceitada (o papel aluminio resistente si cocinas en parrilla). Sazona la carne con sal de mar, pimienta recién molida, ajo machacado y rocía con los 50 ml de vino blanco.",
        "tip": "La piel del salmón actúa como un escudo térmico perfecto reteniendo la humedad natural del pescado."
      },
      {
        "step": 2,
        "title": "Dorado Crocante de la Longaniza",
        "timeMinutes": 5,
        "technique": "Salteado rápido a fuego vivo",
        "text": "Pasa las rodajas de longaniza ahumada por un sartén caliente sin aceite durante 3 a 4 minutos, dándoles vuelta para que liberen el exceso de grasa y queden ligeramente doradas y crujientes por los bordes. Retira a un plato con papel absorbente.",
        "tip": "Dorar la longaniza previamente evita que el pescado quede grasoso y potencia el sabor ahumado."
      },
      {
        "step": 3,
        "title": "Armado en Capas de Sabores Sureños",
        "timeMinutes": 8,
        "technique": "Montaje estratificado sobre pescado",
        "text": "Sobre la carne del salmón sazonada, esparce una cama uniforme de cebolla en pluma fina. Encima acomoda las rodajas de tomate sin superponerlas demasiado. Distribuye las rodajas de longaniza dorada y, finalmente, cubre todo por completo con las láminas generosas de queso mantecoso sureño. Espolvorea orégano fresco por encima.",
        "tip": "El queso fundido formará un manto sellador que atrapará el vapor del tomate y los jugos del pescado."
      },
      {
        "step": 4,
        "title": "Horneado y Gratinado Burbujeante",
        "timeMinutes": 20,
        "technique": "Horneado a 200°C con grill final",
        "text": "Lleva la bandeja al horno precalentado a 200°C durante 15 a 18 minutos. Cuando el salmón esté cocido y tierno al tacto, activa el grill superior a máxima potencia durante los últimos 3 minutos hasta que el queso esté completamente derretido, burbujeante y con manchas doradas.",
        "tip": "No extiendas la cocción más de 20 minutos para que el salmón no pierda sus ácidos grasos omega-3 y quede jugoso."
      },
      {
        "step": 5,
        "title": "Reposo Breve y Emplatado",
        "timeMinutes": 5,
        "technique": "Atemperado y porcionado",
        "text": "Retira del horno y deja reposar 3 minutos antes de cortar. Con una espátula ancha, corta en 4 porciones individuales asegurándote de llevar la piel crujiente inferior con la porción. Sirve con papas cocidas al vapor salpicadas de perejil y una copa de vino blanco bien helado.",
        "tip": "¡El contraste del queso fundido con el ahumado de la longaniza y la frescura marina es inolvidable!"
      }
    ]
  },
  {
    "id": "calapurca-nortina",
    "name": "Calapurca Ancestral Nortina",
    "tagline": "El sagrado caldo andino cocinado con piedras ardientes al amanecer",
    "category": "sopas",
    "categoryLabel": "Sopas y Guisos",
    "zone": "norte",
    "zoneLabel": "Zona Norte (Tarapacá / Arica y Parinacota)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 35,
    "cookTime": 65,
    "totalTime": 100,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 16000,
      "perServing": 2670,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Fondo ceremonial con vacuno, ave y maíz mote andino"
    },
    "image": "assets/recipes/calapurca-nortina.jpg",
    "history": "Originaria de los pueblos originarios Aymara y Quechua del altiplano y valles precordilleranos, la 'Qala phurk'a' (guiso de piedras calientes) es la reina indiscutida de las fiestas patronales, carnavales andinos y celebraciones como La Tirana. Tradicionalmente se cocina al alba para reanimar el cuerpo con maíz mote, carnes desmenuzadas y rocoto.",
    "grandmasSecret": "El toque ahumado distintivo de la calapurca se logra tradicionalmente introduciendo piedras de río calentadas a las brasas directo a la olla; en casa se puede emular tostando bien el ají de color con orégano y comino en manteca antes de integrar las carnes.",
    "winePairing": "Pintatani de Codpa (vino patrimonial andino) o cerveza lager bien helada.",
    "tags": [
      "Andino",
      "Altiplano",
      "Maíz Mote",
      "Picante Suave",
      "Patrimonio"
    ],
    "ingredients": [
      {
        "name": "Carne de vacuno (tapapecho o falda) para caldo",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Pechuga o trutro de pollo cocido",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "Carne de cordero o llamo (opcional tradicional)",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Maíz mote pelado cocido al dente",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Papas cocidas machacadas rústicamente con las manos",
        "quantity": 4,
        "unit": "unidades grandes"
      },
      {
        "name": "Cebollas picadas en cubitos pequeños",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Dientes de ajo molidos",
        "quantity": 3,
        "unit": "dientes"
      },
      {
        "name": "Pasta de ají panca o ají colorado andino",
        "quantity": 2,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Rocoto o ají verde picado fino (al gusto)",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Caldo enriquecido de la cocción de las carnes",
        "quantity": 1.8,
        "unit": "litros"
      },
      {
        "name": "Cilantro fresco y cebollín picado fino para servir",
        "quantity": 0.5,
        "unit": "taza"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Cocción Concentrada de Carnes para Fondo",
        "timeMinutes": 45,
        "technique": "Hervor lento aromatizado (95°C)",
        "text": "En una olla grande con 2 litros de agua fría con sal, apio y orégano, coloca la carne de vacuno, el pollo y el cordero. Lleva a hervor y cocina a fuego suave tapado durante 45 minutos hasta que las carnes estén extremadamente tiernas. Retira las carnes a una fuente y cuela el caldo caliente, reservándolo.",
        "tip": "La mezcla de carnes (vacuno, ave y cordero) es la base de la riqueza proteica de este caldo reconstituyente."
      },
      {
        "step": 2,
        "title": "Desmenuzado Rústico en Hebras",
        "timeMinutes": 10,
        "technique": "Deshebrado manual",
        "text": "Con dos tenedores (o con las manos limpias una vez tibia la carne), desmecha las carnes en hebras gruesas y rústicas, descartando grasas duras y huesos.",
        "tip": "No piques con cuchillo: las hebras irregulares absorben mucho mejor el caldo espeso."
      },
      {
        "step": 3,
        "title": "Elaboración del Sofrito Colorado Andino",
        "timeMinutes": 12,
        "technique": "Sofrito a fuego medio (130°C)",
        "text": "En una olla grande de fondo grueso con 2 cucharadas de manteca o aceite, sofríe la cebolla picada con los dientes de ajo, la pasta de ají colorado, una cucharadita de comino y orégano seco durante 10 a 12 minutos hasta obtener una pasta brillante y aromática sin restos de cebolla cruda.",
        "tip": "Cocinar a fondo el ají colorado suaviza su acidez natural y potencia su aroma tostado."
      },
      {
        "step": 4,
        "title": "Machacado Manual de Papas y Maíz Mote",
        "timeMinutes": 8,
        "technique": "Triturado rústico manual",
        "text": "Toma las 4 papas cocidas y aplástalas toscamente con las manos limpias o un tenedor dejando trozos grandes y pequeños. Añade a la olla del sofrito el maíz mote cocido y las papas machacadas. Revuelve para que se impregnen del sofrito.",
        "tip": "El almidón de la papa rota a mano le da la textura espesa y untuosa característica a la calapurca."
      },
      {
        "step": 5,
        "title": "Unión de Caldo y Carnes con Hervor Vigoroso",
        "timeMinutes": 25,
        "technique": "Hervor continuo a fuego medio (98°C)",
        "text": "Vierte el caldo caliente reservado (1.8 litros) y las carnes deshebradas a la olla. Ajusta sal y pimienta. Hierve a fuego medio durante 20 a 25 minutos revolviendo de vez en cuando para que el maíz y la papa espesen el caldo formando un guiso caldoso homogéneo.",
        "tip": "Si dispones de una piedra volcánica de río bien lavada y calentada en brasas, ¡introdúcela en este momento para escuchar el legendario chisporroteo!"
      },
      {
        "step": 6,
        "title": "Servicio Festivo al Amanecer",
        "timeMinutes": 5,
        "technique": "Emplatado andino",
        "text": "Sirve en platos hondos de greda humeantes. Corona con abundante cebollín picado fino, cilantro fresco recién picado y acompaña con rodajas de rocoto para quienes gusten del toque picante altiplánico.",
        "tip": "Tradicionalmente se disfruta a primera hora de la mañana para renovar las energías en las fiestas de pueblo."
      }
    ]
  },
  {
    "id": "chumbeque-tradicional",
    "name": "Chumbeque Tradicional Iquiqueño",
    "tagline": "El dulce de capas crocantes y miel de limón de Pica",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "norte",
    "zoneLabel": "Zona Norte (Tarapacá / Iquique)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 45,
    "cookTime": 30,
    "totalTime": 75,
    "servingsBase": 16,
    "estimatedCost": {
      "totalBase": 9600,
      "perServing": 600,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 16 porciones de lingotes dulces iquiqueños"
    },
    "image": "assets/recipes/chumbeque-tradicional.jpg",
    "history": "Creado en la década de 1920 en Iquique por el repostero cantonés Kau-Poling (Chung) y su esposa chilena Petronila Bustillo, el chumbeque fusionó la galletería tradicional china con la harina chilena y las prodigiosas mieles aromatizadas con el afamado Limón de Pica del desierto de Atacama. Es hoy Patrimonio Cultural Inmaterial de Tarapacá.",
    "grandmasSecret": "La masa debe llevar manteca y yemas, sin azúcar, quedando bien seca y crocante tras hornearse para que absorba lentamente la miel cítrica sin volverse gomosa.",
    "winePairing": "Té negro aromatizado con canela o Late Harvest del Valle del Huasco.",
    "tags": [
      "Dulce",
      "Iquique",
      "Limón de Pica",
      "Patrimonio",
      "Crujiente"
    ],
    "ingredients": [
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Manteca vegetal o de cerdo derretida tibia",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Yemas de huevo fresco de campo",
        "quantity": 5,
        "unit": "unidades"
      },
      {
        "name": "Agua tibia con una pizca de sal y canela",
        "quantity": 150,
        "unit": "ml"
      },
      {
        "name": "Azúcar granulada para el almíbar",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Miel pura de abejas",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "Jugo natural recién exprimido de limón (idealmente Limón de Pica)",
        "quantity": 120,
        "unit": "ml"
      },
      {
        "name": "Ralladura fina de limón",
        "quantity": 1,
        "unit": "cucharada sopera"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Amasado de las Láminas Crujientes Neutras",
        "timeMinutes": 15,
        "technique": "Amasado manual sin azúcar",
        "text": "En un tazón amplio, coloca la harina y haz un volcán en el centro. Añade las 5 yemas de huevo, la manteca derretida tibia y el agua tibia con pizca de sal y canela. Amasa con fuerza durante 10 a 12 minutos hasta obtener una masa homogénea, suave, elástica y consistente que no se pegue en las manos.",
        "tip": "La masa no lleva nada de azúcar: el contraste entre la galleta neutra y la miel dulce es el alma del chumbeque."
      },
      {
        "step": 2,
        "title": "Reposo de la Masa",
        "timeMinutes": 20,
        "technique": "Reposo de relajación del gluten",
        "text": "Forma una bola compacta con la masa, envuélvela en un paño limpio o film plástico y déjala reposar a temperatura ambiente durante 20 minutos para que el gluten se relaje y facilite el estirado delgado.",
        "tip": "El reposo evita que la masa se recoja al uslerear."
      },
      {
        "step": 3,
        "title": "Uslereado Fino y Pinchado Exhaustivo",
        "timeMinutes": 15,
        "technique": "Laminado milimétrico (1.5 mm)",
        "text": "Divide la masa en 3 o 4 porciones iguales. Con el uslero, estira cada porción sobre papel mantequilla hasta dejar láminas rectangulares muy delgadas de solo 1.5 mm de espesor del tamaño de la lata de tu horno. Pincha toda la superficie de cada lámina repetidamente con un tenedor.",
        "tip": "Pincharlas exhaustivamente es indispensable para que no formen bolsas de aire al hornearse."
      },
      {
        "step": 4,
        "title": "Horneado Seco de las Galletas Hojaldradas",
        "timeMinutes": 12,
        "technique": "Secado al horno a 180°C",
        "text": "Hornea cada lámina a 180°C durante 10 a 12 minutos hasta que adquieran un suave color dorado pálido y estén completamente rígidas y crujientes. Retíralas con espátula con sumo cuidado de no quebrarlas y déjalas enfriar en rejilla.",
        "tip": "Deben quedar secas como galletas de soda para que puedan absorber la miel caliente."
      },
      {
        "step": 5,
        "title": "Cocción del Almíbar Cítrico de Limón de Pica",
        "timeMinutes": 20,
        "technique": "Punto de hilo medio (108°C)",
        "text": "En una cacerola, mezcla el azúcar, el jugo de limón natural, la ralladura y la miel de abejas. Lleva a hervor a fuego medio durante 15 a 18 minutos hasta que se forme un almíbar espeso y dorado que forme un hilo continuo al levantar la cuchara.",
        "tip": "El ácido cítrico del Limón de Pica corta el dulzor empalagoso y crea ese balance agridulce adictivo."
      },
      {
        "step": 6,
        "title": "Montaje Estratificado en Caliente",
        "timeMinutes": 10,
        "technique": "Ensamblaje y prensado",
        "text": "En una bandeja rectangular con papel mantequilla, coloca la primera lámina horneada. Vierte de inmediato un tercio de la miel caliente esparciéndola con una espátula. Cubre con la segunda lámina presionando suavemente con la palma plana. Repite el proceso con las capas restantes y corona con la última lámina.",
        "tip": "La miel debe estar muy caliente al verterse para penetrar los poros de la masa crujiente."
      },
      {
        "step": 7,
        "title": "Reposo de Cuajado y Corte en Lingotes",
        "timeMinutes": 15,
        "technique": "Corte limpio en frío (tras 4 horas de reposo)",
        "text": "Deja reposar el chumbeque a temperatura ambiente durante al menos 4 a 6 horas para que la miel cuaje y una las capas. Con un cuchillo de sierra grande bien afilado, recorta los bordes irregulares y luego córtalo en los clásicos lingotes rectangulares de 8x3 cm.",
        "tip": "¡Guardados en frasco de hojalata o caja hermética se conservan perfectos durante más de un mes!"
      }
    ]
  },
  {
    "id": "mote-con-huesillo",
    "name": "Mote con Huesillo Tradicional",
    "tagline": "El elixir callejero chileno más refrescante de todos los tiempos",
    "category": "bebidas",
    "categoryLabel": "Bebidas Típicas",
    "zone": "centro",
    "zoneLabel": "Zona Centro / Nacional",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 15,
    "cookTime": 40,
    "totalTime": 55,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 6500,
      "perServing": 1080,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 6 vasos largos tradicionales bien cargados"
    },
    "image": "assets/recipes/mote-con-huesillo.jpg",
    "history": "Tan chileno que dio origen al popular dicho '¡Más chileno que el mote con huesillo!'. Nacido en el siglo XIX de la combinación del trigo mote campesino hervido con ceniza y los duraznos deshidratados al sol (huesillos) aromatizados con canela y chancaca o azúcar quemada. Se sirve helado como postre bebible.",
    "grandmasSecret": "Hierve los huesillos con un trocito de cáscara de naranja limpia junto a la canela en rama y usa un toque de chancaca o azúcar acaramelada para darle ese característico color caoba profundo al jugo.",
    "winePairing": "Se disfruta solo y bien helado, o como postre tras un buen asado.",
    "tags": [
      "Refrescante",
      "Verano",
      "Bebestible",
      "Trigo Mote",
      "Dulce"
    ],
    "ingredients": [
      {
        "name": "Huesillos secos (duraznos deshidratados enteros con o sin cuesco)",
        "quantity": 12,
        "unit": "unidades grandes"
      },
      {
        "name": "Trigo mote cocido y limpio",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Agua purificada",
        "quantity": 2.2,
        "unit": "litros"
      },
      {
        "name": "Azúcar granulada o rubia",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Pan de chancaca auténtica disuelta",
        "quantity": 60,
        "unit": "g"
      },
      {
        "name": "Palos grandes de canela entera en rama",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Tiras finas de cáscara de naranja fresca sin parte blanca",
        "quantity": 2,
        "unit": "tiras"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Hidratación Prolongada de los Duraznos Secos",
        "timeMinutes": 10,
        "technique": "Remojo en frío (mínimo 8 horas)",
        "text": "Lava muy bien los huesillos secos bajo el chorro de agua fría para retirar cualquier polvillo. Colócalos en un tazón hondo y cúbrelos con los 2.2 litros de agua. Déjalos remojar a temperatura ambiente durante toda la noche (al menos 8 a 10 horas) para que absorban líquido, se hinchen y suelten sus azúcares naturales.",
        "tip": "¡Bajo ninguna circunstancia botes el agua del remojo! Es la base dorada concentrada del almíbar."
      },
      {
        "step": 2,
        "title": "Infusión Aromática con Canela y Naranja",
        "timeMinutes": 20,
        "technique": "Hervor suave aromatizado (95°C)",
        "text": "Vierte los huesillos junto con toda el agua de remojo en una olla grande. Agrega los 2 palos de canela entera, las tiras de cáscara de naranja fresca y los 200 g de azúcar. Lleva a hervor a fuego medio durante 20 minutos revolviendo hasta disolver el azúcar.",
        "tip": "La cáscara de naranja sin la parte blanca amarga aporta un brillo cítrico celestial al jugo."
      },
      {
        "step": 3,
        "title": "Color Caoba con Chancaca Tradicional",
        "timeMinutes": 15,
        "technique": "Caramelizado y reducción",
        "text": "Agrega los 60 g de chancaca cortada en trocitos. Baja el fuego a medio-bajo y cocina durante 15 minutos más, hasta que los duraznos estén extremadamente tiernos al pincharlos y el jugo adquiera un color caoba oscuro y transparente.",
        "tip": "La chancaca aporta ese color tostado ámbar profundo imposible de lograr solo con azúcar blanca."
      },
      {
        "step": 4,
        "title": "Enfriado Escalonado y Refrigeración Intensa",
        "timeMinutes": 10,
        "technique": "Enfriado a 4°C (mínimo 4 horas)",
        "text": "Retira la olla del fuego, desecha la canela y la cáscara de naranja. Deja enfriar a temperatura ambiente hasta que esté templado y luego traslada al refrigerador por un mínimo de 4 a 6 horas (o toda la noche) hasta que esté muy frío.",
        "tip": "El mote con huesillo nunca debe servirse tibio; debe estar tan helado que empañe el vaso de cristal."
      },
      {
        "step": 5,
        "title": "Acondicionamiento del Trigo Mote",
        "timeMinutes": 5,
        "technique": "Lavado y escurrido en frío",
        "text": "Lava el trigo mote cocido bajo un colador con abundante agua fría para que los granos se separen y queden frescos y sueltos. Escurre muy bien.",
        "tip": "Mantén el mote en un pocillo tapado en el refrigerador hasta el momento exacto del armado."
      },
      {
        "step": 6,
        "title": "Armado Clásico en Vaso Largo de Vidrio",
        "timeMinutes": 5,
        "technique": "Servicio tradicional chileno",
        "text": "En vasos largos de vidrio transparente, coloca 2 a 3 cucharadas colmadas de trigo mote en la base. Acomoda 2 huesillos tiernos y vierte el jugo helado almibarado hasta llenar el vaso. Sirve siempre acompañado de una cuchara larga de postre.",
        "tip": "¡El ritual consiste en alternar tragos del jugo refrescante con bocados del mote y la pulpa dulce del durazno!"
      }
    ]
  },
  {
    "id": "sopaipillas-pasadas",
    "name": "Sopaipillas Pasadas con Chancaca",
    "tagline": "El ritual sagrado chileno para los días de lluvia y frío invernal",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Sur",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 30,
    "cookTime": 30,
    "totalTime": 60,
    "servingsBase": 8,
    "estimatedCost": {
      "totalBase": 6000,
      "perServing": 750,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 8 porciones de 3 sopaipillas bañadas en chancaca"
    },
    "image": "assets/recipes/sopaipillas-pasadas.jpg",
    "history": "Las sopaipillas con zapallo son una insignia de la mesa chilena. Cuando el invierno trae lluvia a los techos de zinc, las casas de todo Chile se llenan del aroma a masa frita de zapallo bañada en una salsa caliente de chancaca perfumada con cáscara de naranja, clavo de olor y canela.",
    "grandmasSecret": "Agrega una cucharadita de maicena disuelta en un poco de agua fría al final de la salsa de chancaca; esto le dará un brillo satinado y la consistencia espesa perfecta para bañar las sopaipillas.",
    "winePairing": "Café de grano recién pasado, té negro sureño o un vino navegado caliente con especias.",
    "tags": [
      "Zapallo",
      "Chancaca",
      "Lluvia",
      "Invierno",
      "Frituras"
    ],
    "ingredients": [
      {
        "name": "Puré de zapallo camote cocido al vapor y tibio",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Manteca vegetal o de vacuno derretida tibia",
        "quantity": 60,
        "unit": "g"
      },
      {
        "name": "Sal fina",
        "quantity": 1,
        "unit": "cucharadita"
      },
      {
        "name": "Aceite vegetal abundante para freír",
        "quantity": 500,
        "unit": "ml"
      },
      {
        "name": "Pan de chancaca auténtica en trozos",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Agua caliente para la salsa",
        "quantity": 650,
        "unit": "ml"
      },
      {
        "name": "Cáscara de naranja limpia sin parte blanca",
        "quantity": 3,
        "unit": "tiras"
      },
      {
        "name": "Palos de canela entera y clavos de olor",
        "quantity": 2,
        "unit": "unidades c/u"
      },
      {
        "name": "Almidón de maíz (maicena) para dar brillo y ligar",
        "quantity": 1,
        "unit": "cucharada colmada"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Cocción al Vapor y Puré de Zapallo Camote",
        "timeMinutes": 15,
        "technique": "Cocción al vapor (100°C)",
        "text": "Pela el zapallo camote, córtalo en cubos y cocínalo al vapor durante 12 a 15 minutos hasta que esté muy tierno al pincharlo. Escúrrelo bien y muélelo de inmediato en caliente con un tenedor o prensapapas hasta obtener un puré suave sin grumos. Deja entibiar.",
        "tip": "Cocinar el zapallo al vapor (en vez de hervido en agua) evita el exceso de agua residual, requiriendo menos harina."
      },
      {
        "step": 2,
        "title": "Amasado Suave de la Masa de Zapallo",
        "timeMinutes": 12,
        "technique": "Amasado manual suave",
        "text": "En un tazón grande, cierne la harina con la cucharadita de sal. Forma un hueco central y añade la manteca derretida tibia y los 300 g de puré de zapallo tibio. Amasa con las manos durante 8 a 10 minutos hasta obtener una masa lisa, flexible, suave y de un hermoso color anaranjado brillante que no se pegue.",
        "tip": "No agregues harina de más aunque se sienta suave: a medida que amasas la manteca y el zapallo se integran solos."
      },
      {
        "step": 3,
        "title": "Uslereado y Corte de las Sopaipillas",
        "timeMinutes": 10,
        "technique": "Laminado y troquelado (5 mm)",
        "text": "Uslerea la masa sobre el mesón enharinado hasta dejarla de 5 mm de grosor parejo. Con un cortapastas redondo o un vaso de unos 8 cm de diámetro, corta los círculos de sopaipilla. Con un tenedor, pincha cada sopaipilla 3 o 4 veces en el centro.",
        "tip": "Pincharlas a fondo evita que se inflen como globos al freírse y permite que absorban la salsa de chancaca."
      },
      {
        "step": 4,
        "title": "Fritura Dorada y Crujiente",
        "timeMinutes": 12,
        "technique": "Fritura profunda a 180°C",
        "text": "Calienta abundante aceite en una sartén profunda o paila a 180°C (un trocito de masa debe flotar y chisporrotear de inmediato). Fríe las sopaipillas en tandas de 3 o 4 durante 2 minutos por lado hasta que tomen un suave tono dorado. Retira con espumadera a una fuente con papel absorbente.",
        "tip": "No las dores en exceso si las vas a pasar por chancaca, para que queden tiernas al absorber el almíbar."
      },
      {
        "step": 5,
        "title": "Elaboración de la Salsa Especiada de Chancaca",
        "timeMinutes": 20,
        "technique": "Hervor e infusión de almíbar (95°C)",
        "text": "En una olla mediana, coloca los 400 g de chancaca en trozos con los 650 ml de agua caliente, las tiras de naranja, los palos de canela y los clavos de olor. Lleva a fuego medio durante 15 minutos revolviendo ocasionalmente hasta que la chancaca se disuelva por completo y perfume toda la cocina.",
        "tip": "El aroma a naranja y canela combinado con el azúcar de caña tostada es el sello inconfundible de los días de lluvia."
      },
      {
        "step": 6,
        "title": "Ligado y Brillo con Maicena",
        "timeMinutes": 3,
        "technique": "Ligazón espesante suave",
        "text": "En un pocillo pequeño, disuelve 1 cucharada de maicena en 3 cucharadas de agua fría. Vierte esta mezcla a la salsa de chancaca hirviendo suavemente, revolviendo con batidor de mano durante 2 minutos hasta que la salsa adquiera un brillo satinado y cuerpo espeso.",
        "tip": "La maicena evita que la salsa quede aguada y ayuda a que se adhiera como un manto a las sopaipillas."
      },
      {
        "step": 7,
        "title": "El 'Pasado' Tradicional y Servicio Caliente",
        "timeMinutes": 8,
        "technique": "Inmersión a fuego lento (80°C)",
        "text": "Sumerge las sopaipillas fritas dentro de la olla de chancaca caliente a fuego mínimo durante 6 a 8 minutos, dándoles vuelta con cuidado para que se hinchen y absorban el almíbar por dentro. Sirve 2 o 3 sopaipillas por plato hondo bañadas con abundante salsa caliente.",
        "tip": "¡El mejor consuelo del mundo frente a una tarde lluviosa de invierno!"
      }
    ]
  },
  {
    "id": "charquican-con-huevo",
    "name": "Charquicán con Huevo Frito",
    "tagline": "El guiso mestizo de charqui, papas y zapallo con su yema perfecta",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Norte Chico",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 20,
    "cookTime": 40,
    "totalTime": 60,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 9800,
      "perServing": 2450,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Incluye huevo de campo fresco a caballo por comensal"
    },
    "image": "assets/recipes/charquican-con-huevo.jpg",
    "history": "Plato de profundas raíces precolombinas, su nombre proviene del quechua 'ch'arki kanka' (asado de carne seca al sol). Fue el alimento fundamental de arrieros y del Ejército de Los Andes en su gesta libertadora. Con el tiempo se combinó con las papas, el choclo y el zapallo machacados rústicamente en una sartenada coronada por un huevo frito a caballo.",
    "grandmasSecret": "No hagas un puré fino con minipimer: el verdadero charquicán debe conservar trozos rústicos de papa y zapallo machacados toscamente con el prensapapas para sentir las texturas de la huerta.",
    "winePairing": "Vino tinto Syrah o Carménère del Valle de Cachapoal.",
    "tags": [
      "Guiso",
      "Huevo Frito",
      "Zapallo",
      "Campo",
      "Económico"
    ],
    "ingredients": [
      {
        "name": "Carne de vacuno picada o charqui tradicional desmenuzado",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Papas peladas cortadas en cubos medianos",
        "quantity": 4,
        "unit": "unidades grandes"
      },
      {
        "name": "Zapallo camote cortado en cubos regulares",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Choclo tierno desgranado fresco",
        "quantity": 1,
        "unit": "taza colmada"
      },
      {
        "name": "Porotos verdes desvainados picados en trozos",
        "quantity": 1,
        "unit": "taza"
      },
      {
        "name": "Cebolla picada en cubitos pequeños",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Dientes de ajo finamente picados",
        "quantity": 2,
        "unit": "dientes"
      },
      {
        "name": "Comino molido, orégano entero y ají de color",
        "quantity": 1,
        "unit": "cucharadita de c/u"
      },
      {
        "name": "Caldo de carne caliente o agua hirviendo",
        "quantity": 500,
        "unit": "ml"
      },
      {
        "name": "Huevos de campo frescos para freír",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Aceite vegetal o manteca",
        "quantity": 3,
        "unit": "cucharadas"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Tostado del Charqui o Sellado de la Carne",
        "timeMinutes": 8,
        "technique": "Dorado a fuego medio-alto",
        "text": "Si usas charqui tradicional: tuéstalo brevemente en sartén seco durante 2 minutos y luego machácalo en mortero para deshilacharlo en hebras. Si usas carne fresca: córtala en cubitos chicos y séllala en una olla con 2 cucharadas de aceite caliente durante 6 minutos hasta dorar.",
        "tip": "El charqui deshidratado al sol aporta un toque ahumado salino ancestral inigualable."
      },
      {
        "step": 2,
        "title": "Sofrito Aromático de la Base",
        "timeMinutes": 8,
        "technique": "Sofrito a fuego medio (130°C)",
        "text": "Agrega a la olla la cebolla picada y los ajos picados junto con la carne. Añade el comino, orégano, ají de color y media cucharadita de sal. Cocina durante 6 a 8 minutos hasta que la cebolla quede transparente y caramelizada.",
        "tip": "La cebolla bien sofrita es el fondo dulce que equilibra la papa y el zapallo."
      },
      {
        "step": 3,
        "title": "Cocción de Tubérculos en Caldo",
        "timeMinutes": 18,
        "technique": "Hervor tapado a fuego medio (95°C)",
        "text": "Incorpora los cubos de papa y zapallo camote a la olla. Vierte los 500 ml de caldo caliente (el líquido debe quedar al ras de las verduras, no taparlas por completo). Tapa y cocina a fuego medio durante 15 a 18 minutos hasta que la papa y el zapallo se atraviesen fácilmente con un tenedor.",
        "tip": "Cocinar con poco caldo concentra los sabores y evita que el guiso quede como sopa suelta."
      },
      {
        "step": 4,
        "title": "Incorporación de Verduras Verdes",
        "timeMinutes": 6,
        "technique": "Cocción corta tierna",
        "text": "Destapa la olla y añade el choclo desgranado y los porotos verdes picados. Cocina a fuego destapado durante 5 a 6 minutos para que se cocinen sin perder su color vivo.",
        "tip": "Añadirlos al final conserva la crocancia dulce del choclo y el verdor del poroto verde."
      },
      {
        "step": 5,
        "title": "Machacado Rústico Tradicional",
        "timeMinutes": 5,
        "technique": "Machacado manual con pisapapas",
        "text": "Retira la olla del fuego momentáneamente. Con un pisapapas o cuchara de madera grande, aplasta de manera irregular las papas y el zapallo dentro de la olla. Mezcla todo con energía hasta formar un guiso espeso con tropezones enteros de verdura y hebras de carne.",
        "tip": "¡Nunca uses procesadora ni licuadora! El encanto del charquicán reside en su textura tosca campesina."
      },
      {
        "step": 6,
        "title": "Fritura del Huevo de Campo a Caballo",
        "timeMinutes": 4,
        "technique": "Fritura con borde crocante (puntilla)",
        "text": "En una sartén antiadherente con 1 cucharada de aceite caliente a fuego medio, casca un huevo fresco con cuidado. Cocina durante 2 a 3 minutos bañando la clara con el aceite tibio hasta que la clara esté cuajada con orilla crocante y la yema permanezca líquida y brillante.",
        "tip": "La yema líquida es fundamental: al romperla sobre el charquicán caliente se funde como salsa cremosísima."
      },
      {
        "step": 7,
        "title": "Presentación Campesina",
        "timeMinutes": 2,
        "technique": "Montaje a caballo",
        "text": "Sirve una porción abundante de charquicán en plato hondo o paila de greda. Corona de inmediato con el huevo frito caliente y espolvorea una pizca de ají de color o merkén sobre la yema.",
        "tip": "Acompaña con pan amasado caliente y pebre criollo."
      }
    ]
  },
  {
    "id": "cordero-magallanico-calafate",
    "name": "Cordero Magallánico con Salsa de Calafate",
    "tagline": "El sabor indómito de la Patagonia chilena con el fruto que sella tu destino",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "austral",
    "zoneLabel": "Zona Austral (Patagonia / Magallanes)",
    "difficulty": "dificil",
    "difficultyLabel": "Difícil",
    "prepTime": 40,
    "cookTime": 120,
    "totalTime": 160,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 36000,
      "perServing": 6000,
      "tier": "gourmet",
      "tierLabel": "Gourmet / Ocasión Especial",
      "note": "Corte patagónico con vino tinto y frutos silvestres"
    },
    "image": "assets/recipes/cordero-magallanico-calafate.jpg",
    "history": "En las inmensas estepas azotadas por el viento patagónico, el asado de cordero al palo sobre brasas de lenga es el mayor ritual de hospitalidad gaucha. Esta receta recrea el cordero confitado al horno aromatizado con hierbas silvestres y bañado en una profunda reducción agridulce de calafate, la legendaria baya azulada de la que dice la leyenda: 'El que come calafate, siempre vuelve a la Patagonia'.",
    "grandmasSecret": "Unta la carne de cordero con un machacado de ajo, romero fresco, sal gruesa y manteca antes de hornear a baja temperatura, logrando que la grasa se desgrase lentamente dejando una carne tiernísima que se desprende del hueso.",
    "winePairing": "Cabernet Franc o Syrah robusto con crianza en roble.",
    "tags": [
      "Patagonia",
      "Cordero",
      "Calafate",
      "Austral",
      "Gourmet"
    ],
    "ingredients": [
      {
        "name": "Garrón o paleta de cordero magallánico con hueso",
        "quantity": 2,
        "unit": "kg"
      },
      {
        "name": "Frutos de calafate frescos o pulpa pura congelada (o arándanos silvestres)",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "Vino tinto chileno de buen cuerpo (Syrah o Cabernet)",
        "quantity": 300,
        "unit": "ml"
      },
      {
        "name": "Dientes de ajo chilote machacados",
        "quantity": 5,
        "unit": "dientes"
      },
      {
        "name": "Ramas de romero fresco y tomillo silvestre",
        "quantity": 4,
        "unit": "ramitas"
      },
      {
        "name": "Miel pura de ulmo o abeja nativa",
        "quantity": 2,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Caldo de carne oscuro concentrado",
        "quantity": 250,
        "unit": "ml"
      },
      {
        "name": "Sal marina gruesa y pimienta negra en grano recién molida",
        "quantity": 1,
        "unit": "al gusto"
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": 3,
        "unit": "cucharadas"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Acondicionamiento y Cortes Superficiales",
        "timeMinutes": 10,
        "technique": "Mise en place de carnicería",
        "text": "Limpia la paleta o garrón de cordero secando la superficie con papel absorbente. Con la punta de un cuchillo afilado, realiza cortes transversales en forma de rombo de 0.5 cm de profundidad sobre la capa de grasa externa sin cortar la carne profunda.",
        "tip": "Los cortes en la grasa facilitan que se desgrase en el horno y permiten que el adobo penetre en la fibra muscular."
      },
      {
        "step": 2,
        "title": "Majado Patagónico y Marinado",
        "timeMinutes": 15,
        "technique": "Adobo y masajeado aromático",
        "text": "En un mortero, machaca los ajos chilotes con las hojas picadas de romero, tomillo, 1 cucharada sopera colmada de sal de mar gruesa, pimienta negra molida y 3 cucharadas de aceite de oliva hasta formar una pasta. Frota vigorosamente toda la carne de cordero con este majado. Deja reposar a temperatura ambiente durante al menos 45 minutos (o 2 horas en refrigeración).",
        "tip": "El ajo y el romero neutralizan el perfil fuerte de la grasa ovina aportando un aroma silvestre patagónico."
      },
      {
        "step": 3,
        "title": "Asado Lento con Humedad Controlada",
        "timeMinutes": 90,
        "technique": "Asado lento a 160°C",
        "text": "Precalienta el horno a 160°C. Coloca el cordero sobre una rejilla dentro de una asadera grande. Vierte 1 vaso de agua o caldo en el fondo de la asadera para crear humedad y recoger los jugos. Hornea durante 1 hora y 30 minutos a temperatura baja y constante, bañando la carne con sus propios jugos cada 25 minutos con una cuchara.",
        "tip": "El calor moderado disuelve lentamente el colágeno y el tejido conectivo dejando la carne tiernísima como mantequilla."
      },
      {
        "step": 4,
        "title": "Golpe de Calor para Costra Dorada Crocante",
        "timeMinutes": 15,
        "technique": "Gratinado / Dorado a 210°C",
        "text": "Sube la temperatura del horno a 210°C durante los últimos 15 minutos de cocción hasta que la corteza exterior esté dorada, crujiente y tostada. Retira el cordero del horno, cúbrelo holgadamente con papel de aluminio y déjalo reposar sobre una tabla durante 10 minutos antes de cortar.",
        "tip": "El reposo es fundamental: redistribuye los jugos internos hacia el centro para que no se pierdan al trinchar."
      },
      {
        "step": 5,
        "title": "Reducción Agridulce de Salsa de Calafate",
        "timeMinutes": 20,
        "technique": "Reducción a fuego medio (100°C)",
        "text": "En una cacerola pequeña a fuego medio, vierte los 300 ml de vino tinto junto con los jugos desgrasados de la asadera del cordero, los 250 ml de caldo de carne y las 2 cucharadas de miel de ulmo. Reduce a la mitad durante 10 minutos. Añade los 250 g de frutos de calafate y cocina a fuego lento por 8 a 10 minutos más hasta que la salsa espese, tome un brillo violáceo oscuro y las bayas liberen su acidez salvaje.",
        "tip": "Puedes colar la salsa para una textura sedosa de restaurante o dejar los frutos enteros para una presentación rústica."
      },
      {
        "step": 6,
        "title": "Trinchado y Emplatado Austral",
        "timeMinutes": 10,
        "technique": "Servicio de alta cocina patagónica",
        "text": "Trincha el cordero en cortes generosos que se desprenderán fácilmente del hueso. Coloca sobre un puré rústico de papas nativas con ajo asado y salsea generosamente con la reducción tibia de calafate.",
        "tip": "¡Una experiencia gastronómica que traslada tus sentidos a los vientos australes del Estrecho de Magallanes!"
      }
    ]
  },
  {
    "id": "leche-nevada",
    "name": "Leche Nevada Tradicional",
    "tagline": "Los copos de merengue flotando sobre una crema inglesa de canela",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "centro",
    "zoneLabel": "Zona Centro / Conventual",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 25,
    "cookTime": 20,
    "totalTime": 45,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 5500,
      "perServing": 920,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Postre conventual muy económico con leche y huevos de campo"
    },
    "image": "assets/recipes/leche-nevada.jpg",
    "history": "Uno de los postres más antiguos de la dulcería de conventos coloniales chilenos, adaptación local de la 'isla flotante' francesa. Las monjas de claustro aprovechaban la abundante leche fresca de las haciendas del valle central y los huevos de campo para crear este etéreo postre donde nubes de merengue navegan sobre natilla perfumada con cáscara de limón y canela.",
    "grandmasSecret": "Cocina los copos de merengue en la leche aromatizada a fuego muy suave sin que llegue a hervir a borbotones; esto evita que las 'islas' se desarmen y las deja con una textura esponjosa y ligera como una nube.",
    "winePairing": "Vino dulce Moscatel del Valle del Huasco o Mistela casera.",
    "tags": [
      "Merengue",
      "Colonial",
      "Vainilla",
      "Clásico",
      "Delicado"
    ],
    "ingredients": [
      {
        "name": "Leche entera fresca de campo",
        "quantity": 1,
        "unit": "litro"
      },
      {
        "name": "Huevos frescos (separadas claras de yemas)",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Azúcar granulada blanca",
        "quantity": 180,
        "unit": "g"
      },
      {
        "name": "Almidón de maíz (maicena)",
        "quantity": 2,
        "unit": "cucharadas rasas"
      },
      {
        "name": "Palito de canela entera en rama",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Trocito de cáscara de limón amarillo sin parte blanca",
        "quantity": 1,
        "unit": "trozo"
      },
      {
        "name": "Esencia de vainilla pura",
        "quantity": 1,
        "unit": "cucharadita"
      },
      {
        "name": "Canela en polvo para espolvorear la superficie",
        "quantity": 1,
        "unit": "cucharadita"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Infusión Aromática de la Leche",
        "timeMinutes": 12,
        "technique": "Infusión a fuego medio-bajo (80°C)",
        "text": "En una cacerola ancha y de paredes bajas, vierte el litro de leche entera con el palito de canela, el trozo de cáscara de limón, la cucharadita de vainilla y la mitad del azúcar (90 g). Calienta a fuego medio hasta que comience a desprender vapor y esté a punto de hervir. Reduce el fuego al mínimo para mantener la leche caliente sin borbotones.",
        "tip": "La cacerola ancha facilita colocar varios copos de merengue simultáneamente sin amontonarlos."
      },
      {
        "step": 2,
        "title": "Batido de Copos de Nieve (Merengue Francés)",
        "timeMinutes": 8,
        "technique": "Batido a punto de nieve firme",
        "text": "En un tazón limpio y seco, bate las 4 claras de huevo con batidora eléctrica a velocidad media. Cuando comiencen a formar espuma blanca, añade una pizca de sal y sube a velocidad alta. Cuando se formen picos suaves, incorpora los 90 g restantes de azúcar en forma de lluvia fina, batiendo 3 minutos más hasta obtener un merengue brillante, denso y firme que no caiga al dar vuelta el tazón.",
        "tip": "Asegúrate de que no caiga ni una gota de yema en las claras para lograr el máximo volumen."
      },
      {
        "step": 3,
        "title": "Pochado Delicado de las 'Islas de Nieve'",
        "timeMinutes": 10,
        "technique": "Pochado en leche caliente (80°C)",
        "text": "Con dos cucharas soperas humedecidas en agua, toma porciones generosas de merengue formando quenelles ovaladas y déjalas flotar suavemente sobre la leche tibia (que no debe hervir con fuerza). Cocina durante 1 minuto y medio por lado, dándoles vuelta con delicadeza usando una espumadera. Retira con cuidado y acomódalas sobre una fuente amplia.",
        "tip": "El merengue duplicará ligeramente su tamaño con el vapor de la leche cocinándose por dentro."
      },
      {
        "step": 4,
        "title": "Colado y Templado de Yemas",
        "timeMinutes": 5,
        "technique": "Colado y atemperado",
        "text": "Retira el palito de canela y la cáscara de limón de la leche caliente pasando la leche por un colador fino. En un tazón aparte, bate las 4 yemas con las 2 cucharadas de maicena y 4 cucharadas de leche fría hasta disolver por completo. Agrega un cucharón de la leche tibia a las yemas batiendo enérgicamente para templarlas.",
        "tip": "Atemperar las yemas vertiendo un poco de leche tibia evita que se corten al entrar a la cacerola caliente."
      },
      {
        "step": 5,
        "title": "Cocción de la Crema Natilla Satinada",
        "timeMinutes": 6,
        "technique": "Espesado a fuego bajo continuo (82°C)",
        "text": "Vierte la mezcla de yemas y maicena de regreso a la cacerola con la leche. Cocina a fuego medio-bajo revolviendo sin cesar con un batidor de alambre o cuchara de madera durante 4 a 6 minutos hasta que la crema espese con textura de natilla sedosa. Apaga inmediatamente antes de que hierva a borbotones.",
        "tip": "No dejes hervir la crema de yemas para preservar su textura suave y sedosa sin grumos."
      },
      {
        "step": 6,
        "title": "Montaje y Enfriado",
        "timeMinutes": 5,
        "technique": "Emplatado en cristal",
        "text": "Vierte la crema inglesa caliente en copas de postre individuales o en una gran fuente honda de cristal. Con una espátula, toma con sumo cuidado los copos de merengue cocidos y colócalos sobre la natilla para que floten. Espolvorea con lluvia de canela en polvo pasada por colador.",
        "tip": "Deja enfriar a temperatura ambiente y luego refrigera al menos 2 horas antes de servir."
      }
    ]
  },
  {
    "id": "poe-de-platano-rapa-nui",
    "name": "Po'e de Plátano de Rapa Nui",
    "tagline": "El bizcocho ancestral polinesio cocinado tradicionalmente en el 'Umu",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "insular",
    "zoneLabel": "Zona Insular (Rapa Nui / Isla de Pascua)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 20,
    "cookTime": 50,
    "totalTime": 70,
    "servingsBase": 8,
    "estimatedCost": {
      "totalBase": 7200,
      "perServing": 900,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Bizcocho ceremonial de plátano maduro y leche de coco"
    },
    "image": "assets/recipes/poe-de-platano-rapa-nui.jpg",
    "history": "El Po'e es el dulce sagrado y omnipresente de la cultura Rapa Nui. Elaborado con plátanos maduros locales (o zapallo/calabaza), harina o tapioca y leche de coco, se envuelve en hojas de plátano y se cuece en el 'Umu Pae' (horno subterráneo de piedras volcánicas incandescentes) durante ceremonias ancestrales y festivales como la Tapati Rapa Nui.",
    "grandmasSecret": "Utiliza plátanos que tengan la cáscara muy manchada o casi negra; mientras más maduros, mayor será la dulzura natural caramelizada del Po'e sin requerir exceso de azúcar añadida.",
    "winePairing": "Jugo de piña natural con hielo o un cóctel tropical de coco.",
    "tags": [
      "Polinesia",
      "Rapa Nui",
      "Plátano",
      "Coco",
      "Sin Lácteos"
    ],
    "ingredients": [
      {
        "name": "Plátanos muy maduros (cáscara con pecas negras)",
        "quantity": 6,
        "unit": "unidades grandes"
      },
      {
        "name": "Harina de trigo o almidón de mandioca/tapioca",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "Leche de coco espesa sin azúcar",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "Azúcar rubia o miel de caña",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "Aceite de coco o mantequilla derretida",
        "quantity": 3,
        "unit": "cucharadas"
      },
      {
        "name": "Coco rallado tostado para coronar",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name": "Esencia de vainilla o canela en polvo",
        "quantity": 1,
        "unit": "cucharadita"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Macerado y Puré Manual de Plátanos Maduros",
        "timeMinutes": 8,
        "technique": "Machacado manual con tenedor",
        "text": "Pela los 6 plátanos muy maduros y colócalos en un tazón amplio. Muélelos con un tenedor o prensapapas con energía durante 4 a 5 minutos hasta obtener una pasta jugosa y elástica con pequeños trocitos de fruta natural.",
        "tip": "La maduración extrema del plátano es clave: aporta los azúcares caramelizables y la pectina natural espesante."
      },
      {
        "step": 2,
        "title": "Integración de la Leche de Coco y Aromas",
        "timeMinutes": 5,
        "technique": "Emulsión manual en frío",
        "text": "Agrega al puré de plátano los 100 g de azúcar rubia, los 200 ml de leche de coco cremosa, las 3 cucharadas de aceite de coco y la cucharadita de vainilla. Bate con cuchara de madera durante 3 minutos hasta que todo quede perfectamente integrado.",
        "tip": "La leche de coco otorga la humedad untuosa característica y ese perfume isleño inigualable."
      },
      {
        "step": 3,
        "title": "Incorporación de Harina o Tapioca",
        "timeMinutes": 7,
        "technique": "Batido denso con cuchara de madera",
        "text": "Añade la harina o almidón de mandioca tamizada poco a poco, batiendo con fuerza con la cuchara de madera. La masa resultante debe ser espesa, densa, pegajosa y con consistencia gomosa (mucho más densa que la mezcla de un queque tradicional).",
        "tip": "Si usas almidón de mandioca o tapioca obtendrás la textura gelatinosa elástica más autóctona de la Polinesia."
      },
      {
        "step": 4,
        "title": "Preparación de la Fuente con Hojas de Plátano",
        "timeMinutes": 5,
        "technique": "Acondicionamiento de molde",
        "text": "Precalienta el horno a 180°C. Enmantequilla una fuente rectangular para horno (o fórrala con hojas de plátano pasadas rápidamente por la llama de la cocina para hacerlas flexibles). Vierte la masa alisando la superficie con el dorso de una cuchara mojada.",
        "tip": "Hornear sobre hojas de plátano aporta un aroma ahumado vegetal auténtico de la isla."
      },
      {
        "step": 5,
        "title": "Horneado Lento y Caramelización Caoba",
        "timeMinutes": 50,
        "technique": "Horneado estático a 180°C",
        "text": "Hornea a 180°C durante 45 a 50 minutos. El Po'e estará listo cuando la superficie tome un color caramelo oscuro brillante, los bordes se despeguen ligeramente de la fuente y al clavar un palillo en el centro salga firme y limpio.",
        "tip": "El color caoba profundo es señal de que los azúcares naturales del plátano se caramelizaron."
      },
      {
        "step": 6,
        "title": "Enfriado de Cuajado y Servicio Isleño",
        "timeMinutes": 10,
        "technique": "Enfriado y corte en rombos",
        "text": "Deja enfriar por completo a temperatura ambiente (al menos 1 hora) para que adquiera su consistencia gomosa y elástica tradicional. Corta en cuadrados o rombos y espolvorea con coco rallado tostado por encima.",
        "tip": "¡En Rapa Nui se disfruta tanto de postre como de acompañamiento de pescados frescos a la brasa!"
      }
    ]
  },
  {
    "id": "ceviche-rapa-nui",
    "name": "Ceviche Rapa Nui con Atún y Leche de Coco",
    "tagline": "El tesoro oceánico del Pacífico con atún fresco de aleta amarilla",
    "category": "fondos",
    "categoryLabel": "Entradas y Pescados",
    "zone": "insular",
    "zoneLabel": "Zona Insular (Rapa Nui / Océano Pacífico)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 20,
    "cookTime": 0,
    "totalTime": 20,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 19000,
      "perServing": 4750,
      "tier": "gourmet",
      "tierLabel": "Gourmet / Especial",
      "note": "Atún fresco de calidad sashimi con leche de coco pura"
    },
    "image": "assets/recipes/ceviche-rapa-nui.jpg",
    "history": "A diferencia del ceviche continental chileno o peruano, el ceviche de la Isla de Pascua (Rapa Nui) tiene una clara identidad polinesia: se elabora exclusivamente con atún fresco recién pescado en sus aguas cristalinas, marinado apenas unos minutos con jugo de limón y bañado en rica leche de coco con pimentones multicolores y cebollín fresco.",
    "grandmasSecret": "No marines el atún por más de 5 a 10 minutos en el jugo de limón antes de verter la leche de coco; de esta manera la carne conserva su textura sedosa, rosada y mantecosa sin 'cocinarse' en exceso por el ácido cítrico.",
    "winePairing": "Sauvignon Blanc costero muy frío o agua de coco helada.",
    "tags": [
      "Atún Fresco",
      "Leche de Coco",
      "Pacífico",
      "Sin Fuego",
      "Saludable"
    ],
    "ingredients": [
      {
        "name": "Atún fresco de calidad sashimi limpio cortado en cubos de 1.5 cm",
        "quantity": 600,
        "unit": "g"
      },
      {
        "name": "Leche de coco espesa sin endulzar",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "Jugo de limones frescos recién exprimidos en el momento",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Cebolla morada cortada en pluma muy fina",
        "quantity": 1,
        "unit": "unidad pequeña"
      },
      {
        "name": "Pimentón rojo y verde cortados en cubitos minúsculos de 3 mm",
        "quantity": 0.5,
        "unit": "unidad c/u"
      },
      {
        "name": "Cebollín fresco picado fino (parte blanca y tallos verdes)",
        "quantity": 3,
        "unit": "tallos"
      },
      {
        "name": "Cilantro fresco recién picado",
        "quantity": 0.5,
        "unit": "taza"
      },
      {
        "name": "Sal marina gruesa y pimienta negra recién molida",
        "quantity": 1,
        "unit": "al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Corte Milimétrico del Atún Oceánico",
        "timeMinutes": 8,
        "technique": "Corte en frío (Sashimi grade)",
        "text": "Mantén el filete de atún fresco refrigerado hasta el último minuto. Con un cuchillo de hoja larga bien afilado, corta el atún en cubos regulares y perfectos de 1.5 cm de lado sin desgarrar la carne. Coloca los cubos en un tazón de vidrio sobre una cama de hielo picado para mantener la cadena de frío.",
        "tip": "La temperatura fría y el corte limpio preservan la textura sedosa y el color carmesí brillante del atún."
      },
      {
        "step": 2,
        "title": "Amortiguado de la Cebolla y Vegetales",
        "timeMinutes": 5,
        "technique": "Amortiguado en agua con hielo",
        "text": "Coloca la cebolla morada cortada en pluma fina en un tazón con agua helada y una pizca de sal durante 4 minutos; luego escúrrela con toalla de papel. Pica los pimentones en cubitos diminutos y el cebollín en aros finos.",
        "tip": "Remojar la cebolla en agua helada le quita el picor fuerte manteniendo su textura súper crocante."
      },
      {
        "step": 3,
        "title": "Marinado Cítrico Relámpago",
        "timeMinutes": 4,
        "technique": "Marinado flash de 3 a 4 minutos",
        "text": "Espolvorea una cucharadita de sal marina sobre los cubos de atún frío y añade una pizca de pimienta recién molida. Exprime los 4 limones frescos colando las semillas directamente sobre el pescado. Revuelve con una cuchara de madera durante exactamente 3 a 4 minutos.",
        "tip": "¡No dejes marinar más tiempo! El atún polinesio debe quedar crudo y rosado en su núcleo."
      },
      {
        "step": 4,
        "title": "Emulsión de Leche de Coco y Vegetales",
        "timeMinutes": 3,
        "technique": "Emulsión cremosa con leche de coco",
        "text": "Inmediatamente vierte los 200 ml de leche de coco fría sobre el atún. Añade la cebolla amortiguada, los pimentones en cubitos, el cebollín y el cilantro picado. Mezcla con movimientos suaves y envolventes hasta que la leche de coco emulsione con el jugo de limón creando una salsa cremosa blanquecina.",
        "tip": "La grasa dulce de la leche de coco neutraliza de golpe el ácido del limón creando un equilibrio celestial."
      },
      {
        "step": 5,
        "title": "Servicio Inmediato en Mitades de Coco",
        "timeMinutes": 2,
        "technique": "Presentación polinésica fresca",
        "text": "Sirve de inmediato en mitades de coco limpias, conchas de mar o pocillos hondos fríos. Decora con hojas de cilantro y gajos de limón. Acompaña con chips de camote frito o plátano barraganete.",
        "tip": "¡Consúmelo inmediatamente para disfrutar de la frescura insular en su máxima expresión!"
      }
    ]
  },
  {
    "id": "chupe-de-centolla-austral",
    "name": "Chupe de Centolla Austral Magallánica",
    "tagline": "El festín cremoso de la reina de las gélidas aguas del Cabo de Hornos",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "austral",
    "zoneLabel": "Zona Austral (Magallanes / Tierra del Fuego)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 25,
    "cookTime": 25,
    "totalTime": 50,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 32000,
      "perServing": 8000,
      "tier": "gourmet",
      "tierLabel": "Gourmet / Premium",
      "note": "Centolla magallánica pura de exportación y crema espesa"
    },
    "image": "assets/recipes/chupe-de-centolla-austral.jpg",
    "history": "Capturada artesanalmente en las gélidas aguas del Canal Beagle y el Estrecho de Magallanes, la centolla austral es el mayor manjar marino de Chile. El 'chupe' es un clásico mestizo colonial donde la carne dulce y tierna del crustáceo se amalgama con una pasta cremosa de pan remojado en crema, cebollas estofadas y queso parmesano gratinado.",
    "grandmasSecret": "Remoja pan de marraqueta o molde en crema de leche y un chorrito de vino blanco en vez de agua o leche sola; esto brinda una textura aterciopelada de alta cocina que realza la nobleza de la centolla.",
    "winePairing": "Chardonnay de alta gama fermentado en barrica o un espumante brut nature del sur.",
    "tags": [
      "Centolla",
      "Mariscos",
      "Magallanes",
      "Gratinado",
      "Gourmet"
    ],
    "ingredients": [
      {
        "name": "Carne limpia de centolla magallánica desmenuzada fresca o descongelada",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Pan de marraqueta chilena o pan de molde sin corteza",
        "quantity": 4,
        "unit": "rebanadas gruesas"
      },
      {
        "name": "Crema espesa de leche fresca",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "Leche entera",
        "quantity": 100,
        "unit": "ml"
      },
      {
        "name": "Vino blanco seco chileno",
        "quantity": 60,
        "unit": "ml"
      },
      {
        "name": "Cebolla picada en cubitos muy finos",
        "quantity": 1,
        "unit": "unidad grande"
      },
      {
        "name": "Diente de ajo finamente picado",
        "quantity": 1,
        "unit": "diente"
      },
      {
        "name": "Mantequilla fresca sin sal",
        "quantity": 40,
        "unit": "g"
      },
      {
        "name": "Queso parmesano o chanco rallado para gratinar",
        "quantity": 120,
        "unit": "g"
      },
      {
        "name": "Ají de color (pimentón dulce), nuez moscada y pimienta blanca",
        "quantity": 1,
        "unit": "pizca de c/u"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Remojo y Pasta Aterciopelada de Pan",
        "timeMinutes": 10,
        "technique": "Hidratación y licuado de miga",
        "text": "Desmenuza la miga de pan en un tazón. Vierte los 100 ml de leche entera, los 200 ml de crema y los 60 ml de vino blanco. Deja que el pan absorba los líquidos durante 8 minutos; luego tritúralo con minipimer o tenedor hasta formar una pasta cremosa y homogénea sin grumos secos.",
        "tip": "Esta emulsión de pan, crema y vino blanco es la base espesante noble tradicional del chupe criollo."
      },
      {
        "step": 2,
        "title": "Pochado Lento y Dulce de la Cebolla",
        "timeMinutes": 12,
        "technique": "Pochado en mantequilla a fuego bajo (110°C)",
        "text": "En una sartén amplia a fuego bajo, derrite los 40 g de mantequilla. Sofríe la cebolla picada muy fina con el ajo, una pizca de nuez moscada y media cucharadita de ají de color durante 10 a 12 minutos hasta que la cebolla esté tierna, transparente y dulce, sin dorarse.",
        "tip": "No dores la cebolla para no alterar el color marfil crema característico del chupe."
      },
      {
        "step": 3,
        "title": "Integración de la Pasta de Pan y Espesado",
        "timeMinutes": 8,
        "technique": "Ligado a fuego suave (85°C)",
        "text": "Vierte la pasta de pan hidratada en la sartén con la cebolla pochada. Cocina a fuego suave revolviendo continuamente con una cuchara de madera durante 5 a 6 minutos hasta que la mezcla espese y tome una consistencia untuosa y aterciopelada.",
        "tip": "El vino blanco aportará la acidez necesaria para equilibrar la riqueza láctea de la crema."
      },
      {
        "step": 4,
        "title": "Incorporación de la Centolla Austral",
        "timeMinutes": 5,
        "technique": "Cocción corta delicada",
        "text": "Reserva las patas o pinzas más vistosas de la centolla para la cubierta. Agrega el resto de la carne deshebrada de centolla y la mitad del queso rallado a la mezcla caliente. Cocina durante solo 3 minutos ajustando sal marina y pimienta blanca al gusto.",
        "tip": "La centolla es delicadísima; cocinarla en exceso la reseca y endurece."
      },
      {
        "step": 5,
        "title": "Montaje en Pailas de Greda y Cobertura de Queso",
        "timeMinutes": 5,
        "technique": "Ensamblado para horno",
        "text": "Precalienta el horno a 220°C. Distribuye la mezcla en 4 pocillos individuales de greda o moldes refractarios. Corona cada pocillo con los trozos más hermosos de centolla reservados y espolvorea generosamente con el resto del queso parmesano rallado.",
        "tip": "Las pailas de greda conservan el calor hirviendo del gratinado durante todo el servicio."
      },
      {
        "step": 6,
        "title": "Gratinado al Horno a Máxima Potencia",
        "timeMinutes": 10,
        "technique": "Gratinado con grill superior a 220°C",
        "text": "Lleva las pailas al horno con grill superior encendido durante 8 a 10 minutos hasta que el queso esté completamente derretido, con una costra dorada crujiente y burbujas aromáticas en los bordes. Sirve de inmediato.",
        "tip": "¡El rey indiscutido de la gastronomía marina de las frías aguas australes de Chile!"
      }
    ]
  },
  {
    "id": "torta-mil-hojas-manjar",
    "name": "Torta de Mil Hojas con Manjar Casero",
    "tagline": "El monumento de la repostería criolla con masa crujiente y dulce de leche",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Curicó / Ligua / Central)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 50,
    "cookTime": 30,
    "totalTime": 80,
    "servingsBase": 12,
    "estimatedCost": {
      "totalBase": 14400,
      "perServing": 1200,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 12 porciones generosas de torta criolla"
    },
    "image": "assets/recipes/torta-mil-hojas-manjar.jpg",
    "history": "Inspirada en el 'mille-feuille' europeo pero completamente reinventada en los campos y ciudades dulceras como La Ligua y Curicó. La torta chilena de mil hojas se caracteriza por delgadísimas hojarascas crocantes hechas con yemas y manteca, intercaladas con generosas capas del mejor manjar blanco de campo cocinado a leña.",
    "grandmasSecret": "Para que la torta corte perfecta sin desarmarse, ármala el día anterior y déjala reposar a temperatura ambiente con una tabla de cocina encima que haga peso ligero; así las hojarascas absorben la humedad justa del manjar.",
    "winePairing": "Café de grano recién tostado o licor artesanal de oro de Chiloé.",
    "tags": [
      "Manjar",
      "Hojarasca",
      "Cumpleaños",
      "Tradición",
      "Repostería"
    ],
    "ingredients": [
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Yemas de huevo fresco de campo",
        "quantity": 6,
        "unit": "unidades"
      },
      {
        "name": "Mantequilla sin sal a temperatura ambiente (pomada)",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "Leche entera o agua fría con vinagre blanco",
        "quantity": 100,
        "unit": "ml"
      },
      {
        "name": "Pisco chileno o aguardiente artesanal",
        "quantity": 2,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Manjar blanco chileno artesanal de campo de alta densidad",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Nueces chilenas tostadas picadas (opcional tradicional)",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "Azúcar flor cernida para espolvorear la cubierta",
        "quantity": 50,
        "unit": "g"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Amasado de la Hojarasca con Yemas y Pisco",
        "timeMinutes": 15,
        "technique": "Amasado elástico de repostería",
        "text": "Forma una corona amplia con la harina sobre la mesa. Agrega en el centro las 6 yemas de huevo, la mantequilla blanda, las 2 cucharadas de pisco chileno y la leche poco a poco. Amasa enérgicamente con ambas manos durante 12 a 15 minutos hasta lograr una masa lisa, flexible, elástica y compacta que no se pegue.",
        "tip": "El pisco o aguardiente se evapora rápidamente en el horno creando microburbujas crocantes en la masa."
      },
      {
        "step": 2,
        "title": "Porcionado y Reposo de los Bollos",
        "timeMinutes": 20,
        "technique": "Reposo tapado a temperatura ambiente",
        "text": "Divide la masa en 12 a 14 porciones exactamente iguales (de unos 50 g cada una). Boléalas y cúbrelas con film plástico o un paño húmedo durante 20 minutos para que el gluten descanse y no se recoja al estirar.",
        "tip": "El descanso de la masa permite estirarla tan delgada como una hoja de papel sin que se rompa."
      },
      {
        "step": 3,
        "title": "Uslereado Casi Transparente y Troquelado",
        "timeMinutes": 15,
        "technique": "Laminado ultrafino (1 mm)",
        "text": "Uslerea cada bollo sobre el mesón apenas enharinado desde el centro hacia afuera hasta dejar un disco casi transparente de 1 mm de espesor y unos 22 a 24 cm de diámetro. Con un tenedor, pincha repetidamente toda la superficie de cada disco.",
        "tip": "Pinchar toda la superficie es crucial: si no se pincha, se formará una sola ampolla gigante que arruinará la capa plana."
      },
      {
        "step": 4,
        "title": "Horneado Relámpago de los Discos Crocantes",
        "timeMinutes": 15,
        "technique": "Horneado rápido a 200°C (5m por disco)",
        "text": "Precalienta el horno a 200°C. Hornea los discos sobre latas limpias sin engrasar durante solo 4 a 5 minutos cada uno, hasta que adquieran un suave color dorado pálido y textura completamente seca y quebradiza. Deja enfriar sobre una rejilla plana.",
        "tip": "Puedes hornear de a dos latas a la vez para agilizar el proceso."
      },
      {
        "step": 5,
        "title": "Atemperado del Manjar Artesanal",
        "timeMinutes": 5,
        "technique": "Atemperado térmico",
        "text": "Asegúrate de que el kilo de manjar blanco chileno esté a temperatura ambiente tibia (puedes entibiarlo unos segundos a baño maría o microondas para que sea suave y fácil de untar sin quebrar las frágiles hojarascas).",
        "tip": "Si el manjar está muy frío de refrigerador, su densidad romperá los finos discos al esparcirlo."
      },
      {
        "step": 6,
        "title": "Montaje Estratificado Capa por Capa",
        "timeMinutes": 20,
        "technique": "Armado milimétrico alternado",
        "text": "Sobre una base de torta o plato plano, coloca una cucharadita de manjar para fijar la primera hojarasca. Úntala con una capa uniforme de manjar. Coloca encima otro disco presionando suavemente con la palma de la mano plana. Repite el proceso alternando con nueces picadas cada 3 capas hasta terminar todas las hojarascas.",
        "tip": "Guarda 1 hojarasca horneada para molerla con las manos y decorar los bordes laterales."
      },
      {
        "step": 7,
        "title": "Prensado Ligero y Reposo Nocturno",
        "timeMinutes": 10,
        "technique": "Prensado de asentamiento (12 horas)",
        "text": "Coloca sobre la torta armada una tabla de cocina limpia con un peso ligero (un libro o paquete de 500 g) y déjala reposar a temperatura ambiente durante al menos 8 a 12 horas.",
        "tip": "El reposo es el milagro de esta torta: las hojarascas absorben la humedad justa del manjar, compactándose para cortarse limpiamente sin desmoronarse."
      },
      {
        "step": 8,
        "title": "Acabado Tradicional con Azúcar Flor",
        "timeMinutes": 5,
        "technique": "Decoración criolla",
        "text": "Cubre los laterales de la torta con una capa fina de manjar y adhiere la hojarasca molida y nueces picadas. Espolvorea profusamente la superficie superior con azúcar flor cernida con un colador fino.",
        "tip": "¡El monumento cumbre de los cumpleaños y fiestas familiares chilenas!"
      }
    ]
  },
  {
    "id": "milcao-y-chapalele",
    "name": "Milcaos Tradicionales de Chiloé",
    "tagline": "El pan de papas ralladas y prensadas con sabrosos chicharrones",
    "category": "masas",
    "categoryLabel": "Masas y Panes",
    "zone": "sur",
    "zoneLabel": "Zona Sur (Chiloé / Los Lagos)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 40,
    "cookTime": 30,
    "totalTime": 70,
    "servingsBase": 8,
    "estimatedCost": {
      "totalBase": 7200,
      "perServing": 900,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 8 milcaos grandes rellenos con chicharrones"
    },
    "image": "assets/recipes/milcao-y-chapalele.jpg",
    "history": "Nacido en la mágica cultura de la papa chilota (que cuenta con más de 200 variedades nativas), el milcao combina la papa cruda rallada y fuertemente exprimida en paño de lino con papa cocida en puré y manteca con chicharrones. Se puede freír, hornear o cocer al vapor en el curanto sobre las hojas de pangue.",
    "grandmasSecret": "El secreto del milcao perfecto radica en exprimir al máximo la papa rallada en un paño limpio hasta que quede absolutamente seca como aserrín; esto garantiza que quede crocante al freírse y no absorba aceite de más.",
    "winePairing": "Sidra artesanal de manzana chilota o mate caliente con hojas de poleo.",
    "tags": [
      "Chiloé",
      "Papa",
      "Chicharrones",
      "Ancestral",
      "Pan Típico"
    ],
    "ingredients": [
      {
        "name": "Papas chilotas peladas crudas para rallar",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Papas chilotas cocidas calientes para puré",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Manteca de cerdo artesanal o de campo derretida",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "Chicharrones de cerdo crocantes bien picados",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Sal marina gruesa",
        "quantity": 1,
        "unit": "cucharada sopera colmada"
      },
      {
        "name": "Aceite o manteca abundante para freír u hornear",
        "quantity": 300,
        "unit": "ml"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Cocción al Vapor y Puré de Papas Calientes",
        "timeMinutes": 25,
        "technique": "Cocción y machacado en caliente",
        "text": "Pela 1 kg de papas y cocínalas en agua hirviendo con sal durante 20 minutos hasta que estén tiernas. Escúrrelas inmediatamente y muélelas en caliente con un pisapapas hasta lograr un puré suave y sin grumos. Mantén tibio.",
        "tip": "Hacer el puré mientras las papas están bien calientes evita que la masa quede chiclosa."
      },
      {
        "step": 2,
        "title": "Rallado Fino de la Papa Cruda",
        "timeMinutes": 15,
        "technique": "Rallado fino manual",
        "text": "Pela el otro kilo de papas crudas. Ráyalas con el lado más fino del rallador de cocina sobre un tazón hondo. La papa soltará abundante líquido almidonado oscuro.",
        "tip": "Ralla rápido para evitar que la papa se oxide en exceso con el aire."
      },
      {
        "step": 3,
        "title": "Exprimido Extremo en Paño de Cocina",
        "timeMinutes": 10,
        "technique": "Prensado y deshidratación manual",
        "text": "Coloca toda la papa rallada en el centro de un paño de cocina de algodón limpio o gasa. Cierra el paño formando un bulto y tuércelo con ambas manos con toda tu fuerza sobre un tazón, exprimiendo hasta que no caiga ni una sola gota de agua. La pulpa resultante debe quedar absolutamente seca y desmenuzable como aserrín.",
        "tip": "Este es el paso sagrado chilote: cuanto más seca la papa cruda, más crujiente y liviano será el milcao."
      },
      {
        "step": 4,
        "title": "Amasado y Fusión de Papas con Manteca",
        "timeMinutes": 10,
        "technique": "Unión manual equilibrada 1:1",
        "text": "En un tazón grande, desmenuza la papa cruda exprimida y mézclala con el puré tibio de papas cocidas, los 100 g de manteca derretida tibia y la cucharada de sal. Amasa con las manos durante 6 a 8 minutos hasta formar una masa suave, homogénea y maleable.",
        "tip": "La fórmula legendaria chilota es proporción exacta 1 a 1 de papa cruda y papa cocida."
      },
      {
        "step": 5,
        "title": "Porcionado y Relleno con Chicharrones",
        "timeMinutes": 10,
        "technique": "Formado y sellado de discos",
        "text": "Divide la masa en 8 porciones iguales de unos 150 g cada una. Aplana cada porción formando un disco de 2 cm de grosor. Haz un hueco generoso en el centro de cada disco, introduce una cucharada colmada de chicharrones crocantes picados y sella cerrando la masa sobre el relleno, aplanando nuevamente.",
        "tip": "Sella bien los bordes para que los chicharrones queden atrapados dentro de la masa tierna."
      },
      {
        "step": 6,
        "title": "Cocción Tradicional: Fritura Dorada u Horneado",
        "timeMinutes": 15,
        "technique": "Fritura a 170°C u horneado a 200°C",
        "text": "Opción frita tradicional: Calienta abundante manteca o aceite a 170°C en una sartén honda. Fríe los milcaos durante 6 a 8 minutos por lado hasta que la corteza esté de un color dorado tostado muy crujiente. Escurre en papel absorbente. (Opción al horno: hornea sobre lata engrasada a 200°C por 30 minutos).",
        "tip": "Los milcaos fritos quedan con una costra crocante inigualable por fuera y un corazón cremoso por dentro."
      },
      {
        "step": 7,
        "title": "Degustación Chilota",
        "timeMinutes": 2,
        "technique": "Servicio tradicional",
        "text": "Sírvelos inmediatamente muy calientes, acompañados de un trozo de queso fresco de campo, pebre chilote picante con cilantro y mate caliente.",
        "tip": "¡El auténtico sabor del archipiélago de Chiloé en su máxima expresión!"
      }
    ]
  },
  {
    "id": "pastel-de-papas",
    "name": "Pastel de Papas Criollo",
    "tagline": "El reconfortante abrazo de puré cremoso gratinado y pino campesino",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Valle Central)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 40,
    "cookTime": 45,
    "totalTime": 85,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 13800,
      "perServing": 2300,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Papas de guarda, carne molida o picada, cebollas y huevos de campo"
    },
    "image": "assets/recipes/pastel-de-papas.jpg",
    "history": "Clásico dominical de los hogares chilenos, el pastel de papas adapta el concepto del cottage pie británico a las costumbres campesinas del valle central. Se compone de una base jugosa de pino de vacuno con cuartos de huevo duro, pasas y aceitunas negras, cubierta por un suave puré de papas casero batido con leche y mantequilla, marcado con los dientes de un tenedor y espolvoreado con azúcar para un dorado inconfundible.",
    "grandmasSecret": "Para que el puré quede sedoso y mantenga su consistencia al hornear, incorpora una yema de huevo cruda al puré caliente junto con una pizca de nuez moscada, y dibuja ondas con un tenedor antes de espolvorear azúcar granulada para un crocante caramelizado.",
    "winePairing": "Vino tinto Carménère o Merlot campesino del Valle del Cachapoal.",
    "tags": [
      "Papas",
      "Pino",
      "Horno",
      "Greda",
      "Familiar"
    ],
    "ingredients": [
      {
        "name": "Papas de guarda o variedad patagónica peladas",
        "quantity": 1.5,
        "unit": "kg"
      },
      {
        "name": "Carne de vacuno molida o picada en cubos finos (posta o asiento)",
        "quantity": 600,
        "unit": "g"
      },
      {
        "name": "Cebollas grandes picadas en cubitos finos",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Mantequilla fresca",
        "quantity": 60,
        "unit": "g"
      },
      {
        "name": "Leche entera tibia",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "Huevos duros cortados en cuartos",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Yema de huevo cruda para el puré",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Aceitunas negras chilenas deshuesadas",
        "quantity": 12,
        "unit": "unidades"
      },
      {
        "name": "Pasas de uva rubias o morenas",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name": "Azúcar granulada para espolvorear la cubierta",
        "quantity": 2,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Comino molido, orégano entero y ají de color",
        "quantity": 1,
        "unit": "cucharadita de c/u"
      },
      {
        "name": "Nuez moscada recién rallada, sal y pimienta",
        "quantity": 1,
        "unit": "al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Cocción de las Papas para Puré Suave",
        "timeMinutes": 25,
        "technique": "Hervor a fuego medio (100°C)",
        "text": "Pela las papas y córtalas en cubos regulares de 3 cm para que se cocinen de forma pareja. Colócalas en una olla grande con abundante agua fría con 1 cucharada sopera de sal. Lleva a hervor y cocina durante 20 a 25 minutos hasta que estén muy tiernas al pincharlas con un cuchillo. Escurre inmediatamente.",
        "tip": "Comenzar la cocción desde agua fría asegura que el interior de la papa se cocine al mismo tiempo que el exterior."
      },
      {
        "step": 2,
        "title": "Elaboración del Puré Enriquecido con Yema",
        "timeMinutes": 10,
        "technique": "Prensado y emulsión en caliente",
        "text": "Prensa las papas en caliente con prensapapas en la misma olla. Agrega los 60 g de mantequilla y los 200 ml de leche tibia poco a poco, batiendo con cuchara de madera. Añade una pizca de nuez moscada y la yema de huevo cruda, batiendo enérgicamente hasta lograr un puré cremoso, consistente y sedoso.",
        "tip": "La yema de huevo cruda batida en caliente liga el puré y le da firmeza al hornear sin dejar que se hunda."
      },
      {
        "step": 3,
        "title": "Sellado de la Carne y Pino Criollo",
        "timeMinutes": 25,
        "technique": "Sofrito a fuego medio-bajo (110°C)",
        "text": "En una sartén grande, dora la carne picada o molida en 2 cucharadas de manteca o aceite durante 6 minutos. Agrega las cebollas picadas, el comino, ají de color, orégano, sal y pimienta. Reduce el fuego y cocina durante 20 minutos tapado hasta que la cebolla esté tierna, dulce y translúcida.",
        "tip": "Deja reposar el pino 10 minutos antes de armar para que los jugos se concentren y no humedezcan en exceso la base."
      },
      {
        "step": 4,
        "title": "Armado en Fuente o Pailas de Greda",
        "timeMinutes": 10,
        "technique": "Ensamblaje tradicional",
        "text": "Precalienta el horno a 200°C. En una fuente grande de greda o vidrio refractario (o 6 pailas individuales), vierte una cama uniforme de pino jugoso en el fondo. Distribuye sobre la carne los cuartos de huevo duro, las aceitunas negras y las pasas. Cubre todo con el puré de papas alisando con una espátula mojada.",
        "tip": "Untar la espátula con leche tibia facilita alisar la superficie del puré sin levantar el pino inferior."
      },
      {
        "step": 5,
        "title": "Marcado con Tenedor y Azúcar Caramelizada",
        "timeMinutes": 5,
        "technique": "Texturizado superficial",
        "text": "Pasa los dientes de un tenedor por toda la superficie del puré creando surcos u ondas diagonales decorativas. Espolvorea las 2 cucharadas de azúcar granulada de forma pareja sobre toda la cubierta.",
        "tip": "Los surcos del tenedor multiplican los puntos de contacto con el calor del horno logrando una costra súper crujiente."
      },
      {
        "step": 6,
        "title": "Horneado Dorado y Reposo",
        "timeMinutes": 20,
        "technique": "Horneado a 200°C con grill final",
        "text": "Lleva al horno a 200°C durante 15 minutos; luego activa el grill superior a máxima potencia durante 5 minutos hasta que la superficie esté dorada, crujiente y caramelizada. Deja reposar 8 minutos antes de cortar y servir.",
        "tip": "¡El contraste entre el puré dulce caramelizado y el pino salado con comino es pura gloria chilena!"
      }
    ]
  },
  {
    "id": "churros-con-manjar",
    "name": "Churros Caseros Rellenos con Manjar",
    "tagline": "El crujiente deleite de las tardes en la playa y ferias costeras",
    "category": "postres",
    "categoryLabel": "Postres y Dulces",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Costera / Nacional)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 30,
    "cookTime": 20,
    "totalTime": 50,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 4800,
      "perServing": 800,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 18 a 20 churros dorados rellenos con manjar artesanal"
    },
    "image": "assets/recipes/churros-con-manjar.jpg",
    "history": "Inmortalizados en las playas chilenas desde Arica hasta Pichilemu y Cartagena, el aroma a churros recién fritos con manjar caliente es parte de la memoria estival del país. Con una masa cocida a base de harina, agua y sal (pâte à choux simplificada) extruida con boquilla estrellada, se fríen hasta quedar dorados y crujientes por fuera y tiernos por dentro, inyectados con generoso manjar blanco.",
    "grandmasSecret": "El agua con mantequilla y sal debe estar hirviendo a borbotones al agregar la harina de golpe. Cocina la masa en la olla a fuego medio hasta que se despegue por completo de los bordes; esto evita que los churros salpiquen o revienten al freírse.",
    "winePairing": "Chocolate caliente espeso, café con leche o un té negro bien cargado.",
    "tags": [
      "Fritura",
      "Manjar",
      "Playa",
      "Dulce",
      "Crujiente"
    ],
    "ingredients": [
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "Agua purificada",
        "quantity": 350,
        "unit": "ml"
      },
      {
        "name": "Mantequilla sin sal",
        "quantity": 40,
        "unit": "g"
      },
      {
        "name": "Sal fina",
        "quantity": 1,
        "unit": "cucharadita rasa"
      },
      {
        "name": "Esencia de vainilla pura",
        "quantity": 1,
        "unit": "cucharadita"
      },
      {
        "name": "Manjar blanco chileno espeso para rellenar",
        "quantity": 350,
        "unit": "g"
      },
      {
        "name": "Azúcar flor o granulada fina para espolvorear",
        "quantity": 80,
        "unit": "g"
      },
      {
        "name": "Aceite vegetal abundante para freír",
        "quantity": 750,
        "unit": "ml"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Ebullición del Agua con Mantequilla",
        "timeMinutes": 6,
        "technique": "Hervor aromatizado (100°C)",
        "text": "En una olla mediana de fondo grueso, coloca los 350 ml de agua con los 40 g de mantequilla, la sal y la cucharadita de vainilla. Lleva a fuego alto hasta que rompa en hervor vigoroso y la mantequilla esté completamente fundida.",
        "tip": "El agua debe estar hirviendo con fuerza para pregelatinizar instantáneamente el almidón de la harina."
      },
      {
        "step": 2,
        "title": "Agregado de Harina de Golpe y Cocción de Masa",
        "timeMinutes": 8,
        "technique": "Cocción en olla (secado de masa)",
        "text": "Retira la olla del fuego por un segundo, vierte toda la harina tamizada de un solo golpe y revuelve enérgicamente con cuchara de madera. Vuelve a poner la olla a fuego medio-bajo y continúa batiendo durante 2 a 3 minutos hasta que la masa forme una bola homogénea y compacta que se despegue limpiamente de las paredes y fondo de la olla. Deja entibiar 10 minutos.",
        "tip": "Secar bien la masa en el fuego elimina el exceso de humedad evitando burbujas de vapor peligrosas al freír."
      },
      {
        "step": 3,
        "title": "Cargado en Churrera o Manga con Boquilla Estrella",
        "timeMinutes": 8,
        "technique": "Extrusión con boquilla estrellada",
        "text": "Coloca la masa tibia en una churrera metálica o en una manga pastelera de tela reforzada con boquilla estrella abierta grande (mínimo 10-12 mm). Presiona para expulsar cualquier burbuja de aire atrapada en el interior de la manga.",
        "tip": "La forma estrellada no es solo decorativa: crea canaletas que permiten expandir el calor y lograr la máxima crocancia exterior."
      },
      {
        "step": 4,
        "title": "Formado y Fritura Dorada",
        "timeMinutes": 15,
        "technique": "Fritura profunda a 180°C",
        "text": "Calienta el aceite en una sartén honda a 180°C. Ve extruyendo tiras de masa de 12 a 15 cm de largo cortándolas con una tijera limpia directamente sobre el aceite caliente. Fríe de a 4 o 5 churros por tanda durante 3 a 4 minutos dándoles vuelta hasta que adquieran un hermoso color dorado tostado y suenen crujientes al chocarlos con la pinza. Escurre sobre papel absorbente.",
        "tip": "No llenes la sartén para no bajar la temperatura del aceite, así los churros no absorberán grasa."
      },
      {
        "step": 5,
        "title": "Inyección Generosa de Manjar Blanco",
        "timeMinutes": 8,
        "technique": "Relleno con boquilla fina",
        "text": "Con una varilla o palillo de brocheta de madera, realiza una perforación longitudinal en el centro de cada churro caliente de lado a lado. Carga una manga pastelera con boquilla larga de relleno con los 350 g de manjar artesanal e inyecta hasta que asome por ambos extremos.",
        "tip": "Rellénalos mientras aún estén tibios para que el manjar fluya suavemente por el túnel central."
      },
      {
        "step": 6,
        "title": "Espolvoreado con Azúcar y Servicio",
        "timeMinutes": 3,
        "technique": "Acabado final",
        "text": "Haz rodar los churros rellenos sobre un plato hondo con azúcar granulada o espolvoréalos profusamente con azúcar flor cernida con colador. Sírvelos inmediatamente bien calientes y crujientes.",
        "tip": "¡El recuerdo más dulce de las vacaciones chilenas en cada bocado crujiente!"
      }
    ]
  },
  {
    "id": "chorrillana-portena",
    "name": "Chorrillana Porteña Tradicional",
    "tagline": "La mítica fuente porteña de papas doradas, carne salteada, cebolla y huevos",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Valparaíso / Costa)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 25,
    "cookTime": 30,
    "totalTime": 55,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 12500,
      "perServing": 3125,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Fuente generosa para compartir entre 4 personas con carne, papas y longaniza"
    },
    "image": "assets/recipes/chorrillana-portena.jpg",
    "history": "Nacida en los cerros y bohemia del puerto de Valparaíso (popularizada en el legendario rincón del J. Cruz en la década de 1970), la chorrillana fue concebida como un plato comunitario y contundente para estudiantes y marineros tras largas jornadas en los cerros. Se sirve en bandejas de metal humeantes al centro de la mesa.",
    "grandmasSecret": "Carameliza la cebolla en pluma a fuego muy lento con una pizca de azúcar y orégano en la misma sartén donde doraste la carne para que absorba todos sus jugos tostados, y coloca los huevos fritos con la yema bien tierna justo al momento de servir para que bañen las papas.",
    "winePairing": "Cerveza artesanal rubia porteña, Pipeño helado o una jarra de borgoña con frutillas.",
    "tags": [
      "Valparaíso",
      "Papas Fritas",
      "Para Compartir",
      "Carne",
      "Bohemia"
    ],
    "ingredients": [
      {
        "name": "Papas cortadas en bastones tradicionales para freír",
        "quantity": 1.2,
        "unit": "kg"
      },
      {
        "name": "Carne de vacuno (lomo liso, posta o churrasco) en tiras delgadas",
        "quantity": 500,
        "unit": "g"
      },
      {
        "name": "Longanizas parrilleras artesanales en rodajas diagonales",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Cebollas grandes cortadas en pluma",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Huevos de campo frescos para freír",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Aceite vegetal abundante para fritura",
        "quantity": 700,
        "unit": "ml"
      },
      {
        "name": "Orégano seco, comino molido y sal marina",
        "quantity": 1,
        "unit": "cucharadita de c/u"
      },
      {
        "name": "Pizca de azúcar para caramelizar la cebolla",
        "quantity": 0.5,
        "unit": "cucharadita"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Corte y Doble Fritura de Papas Crujientes",
        "timeMinutes": 20,
        "technique": "Doble fritura a 150°C y 180°C",
        "text": "Pela las papas y córtalas en bastones uniformes de 1 cm. Lávalas con agua fría y sécalas minuciosamente con paño limpio. Primera fritura: Fríelas en abundante aceite a 150°C durante 6 a 7 minutos hasta que estén tiernas por dentro pero aún pálidas. Retira y escurre. Segunda fritura: Justo antes de servir, pásalas por aceite muy caliente a 180°C durante 3 minutos hasta dejarlas doradas y extra crocantes. Sala de inmediato.",
        "tip": "La doble fritura es la técnica maestra de los locales porteños para lograr papas crocantes que no se ablandan con los jugos."
      },
      {
        "step": 2,
        "title": "Salteado Rápido de Carnes y Longanizas",
        "timeMinutes": 8,
        "technique": "Sellado a fuego vivo (200°C)",
        "text": "En una sartén de hierro muy caliente con 2 cucharadas de aceite, saltea las tiras de carne de vacuno sazonadas con sal, pimienta y comino durante 4 minutos a fuego máximo hasta dorar. En los últimos 2 minutos añade las rodajas de longaniza para que doren y suelten sus aromas ahumados. Retira a una fuente y reserva con sus jugos.",
        "tip": "No recargues la sartén para que la carne se dore rápidamente y conserve sus jugos tiernos."
      },
      {
        "step": 3,
        "title": "Caramelizado Lento de Cebolla en Pluma",
        "timeMinutes": 15,
        "technique": "Pochado y caramelizado a fuego suave",
        "text": "En la misma sartén con los restos dorados de la carne, agrega la cebolla en pluma, una pizca de azúcar, orégano y sal. Cocina a fuego medio-bajo durante 12 a 15 minutos revolviendo con cuchara de madera hasta que la cebolla esté tierna, dulce y de un color dorado tostado brillante.",
        "tip": "La cebolla absorbe todos los fondos de cocción de la carne aportando una melosidad inigualable."
      },
      {
        "step": 4,
        "title": "Fritura de los Huevos de Campo con Yema Tierna",
        "timeMinutes": 4,
        "technique": "Fritura a fuego medio",
        "text": "En una sartén antiadherente con un hilo de aceite caliente, fríe los 4 huevos de campo durante 2 a 3 minutos hasta que la clara esté cuajada con orilla crocante y la yema permanezca líquida, brillante y templada.",
        "tip": "La yema líquida es esencial: al romperse sobre la fuente actúa como la salsa que une las papas y la carne."
      },
      {
        "step": 5,
        "title": "Montaje Porteño en Fuente Comunitaria",
        "timeMinutes": 3,
        "technique": "Ensamblaje en capas",
        "text": "En una gran fuente de metal o cerámica ovalada, coloca la montaña de papas fritas recién hechas bien crujientes. Distribuye por encima la carne salteada y longanizas con sus jugos calientes. Cubre con la cebolla caramelizada y corona la cima con los 4 huevos fritos. Espolvorea orégano fresco y sirve al centro de la mesa con tenedores para compartir.",
        "tip": "¡Acompaña con una buena cerveza helada y disfruta entre amigos!"
      }
    ]
  },
  {
    "id": "caldillo-de-congrio",
    "name": "Caldillo de Congrio Tradicional",
    "tagline": "El poema culinario de la costa chilena inmortalizado por Pablo Neruda",
    "category": "sopas",
    "categoryLabel": "Sopas y Guisos",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Costa / San Antonio / Valparaíso)",
    "difficulty": "media",
    "difficultyLabel": "Media",
    "prepTime": 30,
    "cookTime": 40,
    "totalTime": 70,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 21000,
      "perServing": 3500,
      "tier": "medio",
      "tierLabel": "Medio",
      "note": "Congrio dorado fresco, camarones, vino blanco chileno y crema"
    },
    "image": "assets/recipes/caldillo-de-congrio.jpg",
    "history": "Celebrado por Pablo Neruda en su célebre 'Oda al Caldillo de Congrio' ('En el mar tormentoso de Chile vive el rosado congrio...'), este caldo es el orgullo marinero de los puertos de San Antonio, Valparaíso e Isla Negra. En pailas de greda humeantes se combinan los medallones de congrio tierno con un caldo enriquecido con cabezas de pescado, vino blanco, sofrito de cebolla, tomate, papas, camarones y un toque de crema.",
    "grandmasSecret": "Prepara primero un fondo sustancioso hirviendo la cabeza y espinazo del congrio con vino blanco, laurel y verduras; este caldo concentrado es el alma líquida que baña los medallones de pescado sin sobrecocinarlos.",
    "winePairing": "Sauvignon Blanc crocante de Leyda o Casablanca.",
    "tags": [
      "Pescado",
      "Congrio",
      "Neruda",
      "Caldo",
      "Greda"
    ],
    "ingredients": [
      {
        "name": "Medallones gruesos de congrio dorado o colorado limpio",
        "quantity": 1,
        "unit": "kg (6 medallones)"
      },
      {
        "name": "Cabeza y espinazo de congrio para el fondo",
        "quantity": 1,
        "unit": "unidad limpia"
      },
      {
        "name": "Camarones pelados frescos o descongelados",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Papas medianas peladas cortadas en rodajas gruesas",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Cebolla cortada en pluma fina",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Tomates maduros pelados picados en cubitos",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Zanahoria picada en rodajas finas",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Vino blanco seco chileno",
        "quantity": 300,
        "unit": "ml"
      },
      {
        "name": "Crema espesa de leche",
        "quantity": 100,
        "unit": "ml"
      },
      {
        "name": "Dientes de ajo picados, hojas de laurel y orégano",
        "quantity": 1,
        "unit": "al gusto"
      },
      {
        "name": "Cilantro fresco recién picado",
        "quantity": 0.5,
        "unit": "taza"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Fondo Marino Concentrado de Congrio",
        "timeMinutes": 25,
        "technique": "Fumet a fuego medio (95°C)",
        "text": "En una olla con 1.8 litros de agua fría, coloca la cabeza y espinazo de congrio limpios, 150 ml de vino blanco, la zanahoria en rodajas, ramas de apio, hojas de laurel y una cucharadita de sal. Lleva a hervor y cocina a fuego medio durante 20 minutos espumando la superficie. Cuela el caldo reservando el fondo limpio y fragante.",
        "tip": "El colágeno de la cabeza de congrio le confiere al caldillo su cuerpo aterciopelado característico."
      },
      {
        "step": 2,
        "title": "Sofrito Marino Aromático",
        "timeMinutes": 10,
        "technique": "Sofrito en paila a fuego medio (130°C)",
        "text": "En una olla grande o paila honda de greda con 3 cucharadas de aceite de oliva, sofríe las cebollas en pluma con los ajos picados, el orégano y los tomates en cubitos durante 8 a 10 minutos hasta que el tomate se deshaga en una salsa aromática y dulce.",
        "tip": "El tomate maduro aporta la acidez justa que complementa la grasa noble del pescado."
      },
      {
        "step": 3,
        "title": "Cocción de las Papas en el Caldo",
        "timeMinutes": 15,
        "technique": "Hervor de tubérculos en fondo marino",
        "text": "Vierte los 150 ml restantes de vino blanco sobre el sofrito y deja evaporar el alcohol 2 minutos. Añade el fondo de congrio colado caliente y las rodajas de papa. Cocina tapado a fuego medio durante 12 a 15 minutos hasta que las papas estén tiernas.",
        "tip": "Las papas absorben todo el sabor del fumet de pescado cocinándose a la perfección."
      },
      {
        "step": 4,
        "title": "Pochado Suave de los Medallones de Congrio",
        "timeMinutes": 10,
        "technique": "Pochado delicado a fuego bajo (85°C)",
        "text": "Sazona los medallones de congrio con sal y limón. Introdúcelos cuidadosamente en la olla hirviendo suavemente junto con los camarones. Reduce el fuego al mínimo, tapa y cocina durante exactamente 8 a 10 minutos sin revolver para no quebrar el pescado.",
        "tip": "El congrio tiene una carne blanquísima y firme pero delicada; jamás debe hervir a borbotones violentos."
      },
      {
        "step": 5,
        "title": "Toque de Crema y Corona de Cilantro",
        "timeMinutes": 3,
        "technique": "Acabado emulsionado",
        "text": "Vierte los 100 ml de crema espesa en hilo fino sobre el caldo moviendo la olla suavemente por las asas para integrar. Apaga el fuego inmediatamente y espolvorea abundante cilantro fresco picado.",
        "tip": "La crema aporta la nota cremosa que suaviza los matices marinos y redondea el caldo."
      },
      {
        "step": 6,
        "title": "Servicio en Paila de Greda Humeante",
        "timeMinutes": 2,
        "technique": "Emplatado nerudiano",
        "text": "Sirve en pailas de greda bien calientes colocando un medallón de congrio entero con camarones y rodajas de papa, bañado con abundante caldo humeante. Acompaña con pan amasado caliente y una copa de vino blanco.",
        "tip": "¡Como decía Neruda: 'en este plato tú conoces el cielo'!"
      }
    ]
  },
  {
    "id": "pan-amasado",
    "name": "Pan Amasado Criollo al Horno",
    "tagline": "La joya caliente de la panadería campesina chilena con aroma a leña",
    "category": "masas",
    "categoryLabel": "Masas y Panes",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Sur (Campesina)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 35,
    "cookTime": 20,
    "totalTime": 55,
    "servingsBase": 10,
    "estimatedCost": {
      "totalBase": 3500,
      "perServing": 350,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 10 a 12 pancitos amasados grandes dorados al horno"
    },
    "image": "assets/recipes/pan-amasado.jpg",
    "history": "Símbolo máximo de la hospitalidad y calidez del campo chileno, el pan amasado se prepara en cada rincón rural del país desde tiempos coloniales. Horneado tradicionalmente en hornos de barro abovedados calentados con leña de espino, su corteza dorada y miga densa perfumada con manteca caliente lo convierten en el compañero inseparable del mate, pebre y la once campesina.",
    "grandmasSecret": "La manteca debe incorporarse derretida pero tibia (no hirviendo) y la salmuera debe añadirse en tandas. Amasa con fuerza hasta que la masa 'grite' o cruja (haga globitos de aire), y pincha la superficie 3 veces con tenedor antes de hornear.",
    "winePairing": "Mate de poleo, té negro caliente o una copa de chicha dulce.",
    "tags": [
      "Panadería",
      "Horno de Barro",
      "Manteca",
      "Once",
      "Tradición"
    ],
    "ingredients": [
      {
        "name": "Harina de trigo sin polvos de hornear",
        "quantity": 1,
        "unit": "kg"
      },
      {
        "name": "Manteca de vacuno o de cerdo derretida tibia",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "Levadura seca instantánea (o 30 g de levadura fresca)",
        "quantity": 10,
        "unit": "g"
      },
      {
        "name": "Agua tibia para salmuera",
        "quantity": 500,
        "unit": "ml"
      },
      {
        "name": "Sal de mar gruesa",
        "quantity": 1,
        "unit": "cucharada sopera colmada"
      },
      {
        "name": "Pizca de azúcar para activar levadura",
        "quantity": 1,
        "unit": "cucharadita"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Activación de la Levadura y Salmuera Tibia",
        "timeMinutes": 8,
        "technique": "Activación enzimática a 37°C",
        "text": "En una taza con 100 ml de agua tibia, disuelve la levadura con la cucharadita de azúcar y deja reposar 5 minutos hasta que espume. En el resto del agua tibia (400 ml), disuelve completamente la cucharada de sal gruesa.",
        "tip": "Nunca mezcles la sal directa sobre la levadura concentrada para no inhibir su fermentación."
      },
      {
        "step": 2,
        "title": "Amasado Enérgico hasta que la Masa 'Cante'",
        "timeMinutes": 15,
        "technique": "Amasado manual continuo",
        "text": "Coloca el kilo de harina en un tazón grande formando una corona. Vierte la levadura espumosa en el centro, la manteca derretida tibia y la salmuera poco a poco. Amasa con fuerza sobre el mesón durante 12 a 15 minutos estirando y doblando la masa con la base de las palmas hasta que esté tibia, sedosa, elástica y sientas pequeñas burbujas crujir bajo tus manos.",
        "tip": "En el campo dicen que el pan amasado está listo cuando la masa 'canta' o 'chilla' al apretarla."
      },
      {
        "step": 3,
        "title": "Porcionado y Boleado de Pancitos",
        "timeMinutes": 10,
        "technique": "Boleado parejo",
        "text": "Divide la masa en 10 a 12 porciones iguales de unos 120 g cada una. Haz rodar cada porción sobre la mesa formando una bola lisa y sin arrugas; luego aplástala con la palma de la mano formando discos de 1.5 cm de grosor.",
        "tip": "Aplanar parejo asegura que todos los pancitos se horneen al mismo tiempo sin quedar crudos en el centro."
      },
      {
        "step": 4,
        "title": "Pinchado con Tenedor y Leudado Corto",
        "timeMinutes": 15,
        "technique": "Pinchado tradicional y reposo tibio",
        "text": "Coloca los panes sobre bandejas de horno enharinadas dejando 3 cm de espacio entre ellos. Pincha el centro de cada pan 3 veces con los dientes de un tenedor. Cubre con un paño limpio y deja reposar en un lugar tibio durante 15 a 20 minutos para que doblen ligeramente su volumen.",
        "tip": "Los pinchazos de tenedor evitan que el pan se infle en exceso y le dan su firma campesina inconfundible."
      },
      {
        "step": 5,
        "title": "Horneado a Piso Fuerte",
        "timeMinutes": 20,
        "technique": "Horneado a 200°C - 210°C",
        "text": "Lleva las latas al horno precalentado a 200°C durante 18 a 20 minutos hasta que la corteza esté dorada brillante y la base suene hueca al darle un golpecito con los nudillos.",
        "tip": "Si tienes horno de barro o piedra refractaria, ¡el resultado será idéntico al de las picadas campesinas!"
      },
      {
        "step": 6,
        "title": "Servicio Caliente Recién Salido del Horno",
        "timeMinutes": 2,
        "technique": "Servicio tradicional",
        "text": "Saca los panes del horno y envuélvelos de inmediato en un canasto forrado con paño de algodón para que mantengan su calor y humedad. Ábrelos calientes y úntalos con mantequilla de campo, pebre o palta molida.",
        "tip": "¡El aroma a pan amasado recién horneado es el abrazo más cálido del campo chileno!"
      }
    ]
  },
  {
    "id": "pantrucas",
    "name": "Pantrucas Campestres Tradicionales",
    "tagline": "La sopa reconfortante de masitas caseras cortadas a mano en rico caldo",
    "category": "sopas",
    "categoryLabel": "Sopas y Guisos",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Sur",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 25,
    "cookTime": 35,
    "totalTime": 60,
    "servingsBase": 6,
    "estimatedCost": {
      "totalBase": 8400,
      "perServing": 1400,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Plato de invierno muy rendidor con carne de vacuno, verduras y masa casera"
    },
    "image": "assets/recipes/pantrucas.jpg",
    "history": "También conocidas en el campo como 'pancutras', este guiso caldoso es uno de los platos más antiguos y queridos de la cocina hogareña chilena de invierno. Nació de la necesidad de alimentar a familias numerosas con ingredientes sencillos: un caldo de carne bien condimentado donde se echan a cocer al vuelo pequeñas tiras o cuadrados de masa de harina fresca, coronado al final con un huevo que se pocha en el mismo caldo.",
    "grandmasSecret": "Corta las masitas con los dedos directamente sobre la olla hirviendo o con cuchillo en tiras delgadas; la harina suelta que desprenden las masas espesará naturalmente el caldo dándole una textura sedosa.",
    "winePairing": "Vino tinto País campesino o un vaso de caldo caliente en tazón.",
    "tags": [
      "Sopa",
      "Masitas",
      "Invierno",
      "Casero",
      "Económico"
    ],
    "ingredients": [
      {
        "name": "Carne de vacuno (asiento o posta) cortada en tiritas",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "Harina de trigo sin polvos de hornear para las masas",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "Agua tibia para la masa",
        "quantity": 150,
        "unit": "ml"
      },
      {
        "name": "Manteca o aceite para la masa",
        "quantity": 1,
        "unit": "cucharada sopera"
      },
      {
        "name": "Papas peladas cortadas en bastones delgados",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Zanahoria rallada o cortada en juliana",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Cebolla picada en cubitos",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Pimentón rojo en tiritas y dientes de ajo picados",
        "quantity": 1,
        "unit": "al gusto"
      },
      {
        "name": "Caldo de carne caliente o agua hirviendo",
        "quantity": 1.8,
        "unit": "litros"
      },
      {
        "name": "Huevos frescos enteros",
        "quantity": 3,
        "unit": "unidades"
      },
      {
        "name": "Cilantro u orégano fresco recién picado",
        "quantity": 0.5,
        "unit": "taza"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Amasado Rápido de las Masitas",
        "timeMinutes": 10,
        "technique": "Amasado elástico simple",
        "text": "En un tazón, mezcla la harina con 1 cucharadita de sal, la cucharada de manteca derretida y el agua tibia. Amasa durante 5 a 6 minutos hasta lograr una masa suave, firme y elástica. Tapa con un paño y deja reposar 10 minutos.",
        "tip": "La masa debe quedar firme para poder uslerearla muy delgada sin que se rompa."
      },
      {
        "step": 2,
        "title": "Uslereado Fino y Corte de Pantrucas",
        "timeMinutes": 8,
        "technique": "Laminado y corte en cintas",
        "text": "Uslerea la masa sobre el mesón enharinado hasta dejarla de apenas 1.5 mm de espesor. Corta tiras de 2 cm de ancho y luego córtalas transversalmente formando pequeños rectángulos o rombos de 3x2 cm. Enharínalos ligeramente para que no se peguen entre sí.",
        "tip": "En el campo muchas abuelas las cortan directamente pellizcando la masa con los dedos sobre la olla."
      },
      {
        "step": 3,
        "title": "Sofrito de Carne y Verduras de Invierno",
        "timeMinutes": 10,
        "technique": "Sofrito en olla profunda (140°C)",
        "text": "En una olla grande con 2 cucharadas de aceite, dora las tiritas de carne durante 5 minutos. Agrega la cebolla picada, el ajo, la zanahoria rallada, el pimentón, orégano, comino y ají de color. Sofríe 5 minutos hasta que la cebolla esté tierna y desprenda sus aromas.",
        "tip": "Rallar la zanahoria disuelve sus azúcares y le da un color dorado precioso al caldo."
      },
      {
        "step": 4,
        "title": "Hervor del Caldo con Papas",
        "timeMinutes": 12,
        "technique": "Cocción a fuego medio (95°C)",
        "text": "Vierte los 1.8 litros de caldo de carne hirviendo y añade los bastones de papa. Cocina a fuego medio durante 10 a 12 minutos hasta que las papas comiencen a ablandarse.",
        "tip": "Mantén el caldo hirviendo suavemente para recibir las masitas."
      },
      {
        "step": 5,
        "title": "Cocción Relámpago de las Masitas y Pochado de Huevo",
        "timeMinutes": 8,
        "technique": "Cocción directa al caldo (escalfado)",
        "text": "Ve dejando caer las masitas una por una en el caldo hirviendo, revolviendo suavemente con cuchara de madera para que no se peguen. Cocina durante 5 a 6 minutos hasta que floten y estén tiernas. Casca los 3 huevos directamente en el caldo sin revolver durante 2 minutos para que se pochen enteros en la sopa.",
        "tip": "La harina superficial de las masitas espesará el caldo hasta dejarlo aterciopelado."
      },
      {
        "step": 6,
        "title": "Servicio Abundante con Cilantro Fresco",
        "timeMinutes": 2,
        "technique": "Emplatado campesino",
        "text": "Sirve en platos hondos humeantes asegurándote de que cada plato lleve abundante masitas, carne, papas y medio huevo pochado con su yema cremosa. Corona con cilantro fresco picado.",
        "tip": "¡El plato más restaurador que existe para combatir el frío de invierno en Chile!"
      }
    ]
  },
  {
    "id": "completo-italiano",
    "name": "Completo Italiano Tradicional",
    "tagline": "La obra cumbre de la cultura urbana y sanguchera de Chile",
    "category": "fondos",
    "categoryLabel": "Plato de Fondo / Sánguches",
    "zone": "centro",
    "zoneLabel": "Zona Centro (Nacional / Santiago)",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 15,
    "cookTime": 10,
    "totalTime": 25,
    "servingsBase": 4,
    "estimatedCost": {
      "totalBase": 7600,
      "perServing": 1900,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde 4 completos italianos gigantes con palta hass y tomate maduro"
    },
    "image": "assets/recipes/completo-italiano.jpg",
    "history": "Creado en la década de 1920 en el histórico Quick Lunch Bahamondes de la Plaza de Armas de Santiago, el 'Completo' chileno superó por lejos al hot dog estadounidense. La versión 'Italiano' debe su nombre a los colores de la bandera italiana formados por sus capas: el tomate rojo maduro en cubitos, la abundante palta hass molida cremosa (verde) y una generosa corona de mayonesa casera (blanca).",
    "grandmasSecret": "El orden de las capas no se altera jamás: primero el pan tibio con la vienesa caliente, luego el tomate con su jugo para humedecer el pan, después el manto protector de palta molida y finalmente la mayonesa para sellar.",
    "winePairing": "Bebida gaseosa helada, cerveza lager o té dulce en taza de loza.",
    "tags": [
      "Completo",
      "Palta Hass",
      "Urbano",
      "Rápido",
      "Popular"
    ],
    "ingredients": [
      {
        "name": "Panes de completo (pan copihue) frescos",
        "quantity": 4,
        "unit": "unidades grandes"
      },
      {
        "name": "Vienesas tradicionales de vacuno o cerdo de buena calidad",
        "quantity": 4,
        "unit": "unidades"
      },
      {
        "name": "Paltas Hass maduras",
        "quantity": 3,
        "unit": "unidades medianas"
      },
      {
        "name": "Tomates maduros y firmes pelados picados en cubitos pequeños",
        "quantity": 2,
        "unit": "unidades"
      },
      {
        "name": "Mayonesa casera cremosa o de buena consistencia",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "Sal fina y aceite vegetal para sazonar tomate y palta",
        "quantity": 1,
        "unit": "al gusto"
      },
      {
        "name": "Mostaza y ají verde en pasta para acompañar",
        "quantity": 1,
        "unit": "opcional al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Picado y Sazón del Tomate Jugoso",
        "timeMinutes": 5,
        "technique": "Mise en place en cubos finos",
        "text": "Pela los tomates maduros y córtalos en cubos pequeños de 0.5 cm. Colócalos en un tazón con una pizca de sal y una cucharadita de aceite vegetal. Deja que suelten su jugo natural durante 4 minutos.",
        "tip": "No descartes el jugo del tomate: al caer sobre el pan tostado aporta la humedad exacta para que no quede seco."
      },
      {
        "step": 2,
        "title": "Machacado Manual de Palta Hass",
        "timeMinutes": 5,
        "technique": "Machacado rústico con tenedor",
        "text": "Corta las paltas Hass por la mitad, retira el cuesco y extrae la pulpa con una cuchara a un tazón. Machaca con un tenedor sazonando solo con sal fina hasta lograr una textura cremosa con pequeños trocitos enteros reconocibles.",
        "tip": "¡No agregues limón a la palta del completo chileno! Solo sal para respetar la cremosidad pura de la palta Hass."
      },
      {
        "step": 3,
        "title": "Cocción de las Vienesas y Calentado de Pan",
        "timeMinutes": 8,
        "technique": "Calentado al vapor / Tostado suave",
        "text": "Cocina las vienesas en agua hirviendo suave durante 5 a 6 minutos sin que revienten. Simultáneamente, calienta los panes de completo al tostador de pan o al vapor en la boca de la olla para que queden tibios, suaves y crocantes por fuera.",
        "tip": "Un pan tibio y esponjoso es el 50% del éxito de una fuente de soda tradicional."
      },
      {
        "step": 4,
        "title": "Armado Sagrado en Capas Cromáticas",
        "timeMinutes": 5,
        "technique": "Estratificación de capas",
        "text": "Abre el pan tibio con cuidado. Coloca la vienesa caliente en el fondo. Sobre la vienesa, distribuye una generosa capa de tomate en cubitos con su jugo. Cubre por completo el tomate con una montaña cremosa de palta Hass molida, sellando los bordes.",
        "tip": "La capa de palta debe sellar el tomate para que al morder no se desmorone."
      },
      {
        "step": 5,
        "title": "Corona Monumental de Mayonesa",
        "timeMinutes": 2,
        "technique": "Acabado clásico de fuente de soda",
        "text": "Corona la cima de la palta con una franja generosa y continua de mayonesa casera de punta a punta. Sirve de inmediato en servilletero de papel o platillo alargado acompañado de mostaza y ají chileno.",
        "tip": "¡El rey de las fuentes de soda y del bajón nocturno chileno!"
      }
    ]
  },
  {
    "id": "pebre-criollo",
    "name": "Pebre Criollo Tradicional",
    "tagline": "El condimento patrio infaltable que enciende las mesas de Chile",
    "category": "fondos",
    "categoryLabel": "Salsas y Acompañamientos",
    "zone": "centro",
    "zoneLabel": "Zona Centro y Nacional",
    "difficulty": "facil",
    "difficultyLabel": "Fácil",
    "prepTime": 15,
    "cookTime": 0,
    "totalTime": 15,
    "servingsBase": 8,
    "estimatedCost": {
      "totalBase": 3600,
      "perServing": 450,
      "tier": "economico",
      "tierLabel": "Económico",
      "note": "Rinde un pocillo de greda generoso para acompañar panes y asados"
    },
    "image": "assets/recipes/pebre-criollo.jpg",
    "history": "Rey indiscutido de las mesas chilenas, fuentes de soda y ramadas dieciocheras. El pebre criollo es una salsa viva y aromática de hierbas y vegetales frescos picados en cubitos milimétricos: cilantro, cebolla amortiguada, ajo, ají verde y tomate maduro, emulsionado con aceite de maravilla y vinagre de vino tinto.",
    "grandmasSecret": "Pica todos los ingredientes a mano con un cuchillo bien afilado (jamás en procesadora para no oxidar el cilantro) y añade un chorrito de agua tibia o caldo al final para amalgamar los jugos del tomate y el aceite.",
    "winePairing": "Marida a la perfección con empanadas, asados y pan amasado caliente.",
    "tags": [
      "Pebre",
      "Salsa",
      "Cilantro",
      "Ají Verde",
      "Fiestas Patrias"
    ],
    "ingredients": [
      {
        "name": "Tomate maduro pelado picado en cubitos diminutos",
        "quantity": 2,
        "unit": "unidades medianas"
      },
      {
        "name": "Cebolla picada en cubitos finos amortiguada",
        "quantity": 1,
        "unit": "unidad pequeña"
      },
      {
        "name": "Hojas frescas de cilantro chileno recién picadas",
        "quantity": 1,
        "unit": "taza colmada"
      },
      {
        "name": "Ají verde fresco (cristal o cacho de cabra) picado fino sin venas",
        "quantity": 1,
        "unit": "unidad"
      },
      {
        "name": "Dientes de ajo finamente picados o machacados",
        "quantity": 2,
        "unit": "dientes"
      },
      {
        "name": "Aceite vegetal neutro o de maravilla",
        "quantity": 3,
        "unit": "cucharadas soperas"
      },
      {
        "name": "Vinagre de vino tinto chileno o jugo de limón",
        "quantity": 1,
        "unit": "cucharada sopera"
      },
      {
        "name": "Agua tibia",
        "quantity": 3,
        "unit": "cucharadas"
      },
      {
        "name": "Sal de mar fina y pimienta negra molida",
        "quantity": 1,
        "unit": "al gusto"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Amortiguado Suave de la Cebolla",
        "timeMinutes": 4,
        "technique": "Amortiguado en agua con sal",
        "text": "Pica la cebolla en cubitos milimétricos de 3 mm. Colócala en un tazón con agua tibia y media cucharadita de sal durante 3 minutos. Enjuaga con agua fría y escurre muy bien apretando con las manos.",
        "tip": "Amortiguar la cebolla elimina la acidez fuerte preservando su frescura dulce y crujiente."
      },
      {
        "step": 2,
        "title": "Picado a Mano de Cilantro y Ají Verde",
        "timeMinutes": 5,
        "technique": "Corte chiffonade y brunoise fina",
        "text": "Lava y seca meticulosamente el cilantro fresco. Pícalo finamente con cuchillo afilado de una sola pasada (evita repasarlo para que no se ennegrezca). Despepita el ají verde y córtalo en cubitos milimétricos.",
        "tip": "Picar el cilantro una sola vez conserva sus aceites esenciales aromáticos intactos."
      },
      {
        "step": 3,
        "title": "Unión en Pocillo de Greda y Emulsión",
        "timeMinutes": 4,
        "technique": "Emulsión manual en frío",
        "text": "En un pocillo tradicional de greda de Pomaire, mezcla el tomate en cubitos con la cebolla amortiguada, el cilantro, el ají verde y el ajo machacado. Agrega la sal de mar, el vinagre de vino tinto y el aceite de maravilla. Vierte las 3 cucharadas de agua tibia y revuelve con cuchara de madera.",
        "tip": "El agua tibia emulsiona el aceite y los jugos del tomate creando ese caldito adictivo que se unta con el pan."
      },
      {
        "step": 4,
        "title": "Reposo y Servicio a la Mesa",
        "timeMinutes": 2,
        "technique": "Macerado breve",
        "text": "Deja reposar el pebre a temperatura ambiente durante al menos 10 minutos antes de servir para que los sabores se armonicen y perfumen. Colócalo al centro de la mesa con una cuchara sopera junto a una canasta de pan amasado caliente o sopaipillas recién fritas.",
        "tip": "¡El alma líquida y picante de cualquier asado o empanada en Chile!"
      }
    ]
  }
];

const ZONAS_CHILE = [
  {
    "id": "all",
    "name": "Todo Chile",
    "icon": "🇨🇱",
    "description": "Todas las tradiciones gastronómicas del territorio"
  },
  {
    "id": "norte",
    "name": "Zona Norte",
    "icon": "☀️",
    "description": "Tarapacá, Antofagasta y Atacama: herencia andina y oasis"
  },
  {
    "id": "centro",
    "name": "Zona Centro",
    "icon": "🌾",
    "description": "Valle Central y Campo: la cuna huasa y criolla chilena"
  },
  {
    "id": "sur",
    "name": "Zona Sur",
    "icon": "🌲",
    "description": "Llanquihue y Archipiélago de Chiloé: mariscos, papas y ahumados"
  },
  {
    "id": "austral",
    "name": "Patagonia Austral",
    "icon": "🏔️",
    "description": "Magallanes y Tierra del Fuego: cordero, centolla y calafate"
  },
  {
    "id": "insular",
    "name": "Rapa Nui / Insular",
    "icon": "🌺",
    "description": "Isla de Pascua: atún oceánico, coco y el ancestral Po'e"
  }
];

const CATEGORIAS_PLATILLO = [
  {
    "id": "all",
    "name": "Todos los Platillos",
    "icon": "🍽️"
  },
  {
    "id": "fondos",
    "name": "Platos de Fondo",
    "icon": "🥘"
  },
  {
    "id": "postres",
    "name": "Postres y Dulces",
    "icon": "🍯"
  },
  {
    "id": "sopas",
    "name": "Sopas y Guisos",
    "icon": "🥣"
  },
  {
    "id": "masas",
    "name": "Masas y Panes",
    "icon": "🥟"
  },
  {
    "id": "bebidas",
    "name": "Bebidas Típicas",
    "icon": "🍹"
  }
];

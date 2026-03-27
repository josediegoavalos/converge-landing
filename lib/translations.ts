export type Language = 'es' | 'en'

export const translations = {
  es: {
    navbar: {
      langLabel: 'Idioma',
    },
    hero: {
      badge: 'Acceso anticipado — únete a la lista de espera',
      h1: ['Deja de discutir', 'sobre dónde', 'encontrarse.'],
      subtitle:
        'Converge encuentra el punto medio perfecto entre todos tus amigos y les recomienda los mejores lugares para salir — no más chats de 60 mensajes.',
      socialProof: 'Usado por grupos de amigos en más de 12 ciudades',
      socialProofBold: 'grupos de amigos',
    },
    mapMockup: {
      findingFor: 'Buscando punto medio para',
      groupName: 'El Grupo (4)',
      live: 'En vivo',
      midpoint: 'Punto medio',
      topVenues: 'Mejores lugares cercanos',
      venueTypes: ['Café', 'Bar & Parrilla'],
    },
    waitlistForm: {
      placeholder: 'tu@correo.com',
      cta: 'Únete a la lista de espera',
      joining: 'Uniéndose...',
      successTitle: '¡Ya estás en la lista!',
      successDesc: 'Te avisaremos en cuanto Converge lance.',
      counter: 'personas ya esperando',
      errors: {
        alreadyOnList: '¡Ya estás en la lista! Te avisaremos pronto.',
        generic: 'Algo salió mal. Por favor intenta de nuevo.',
        network: 'Error de red. Revisa tu conexión.',
      },
    },
    problem: {
      eyebrow: '¿Te suena familiar?',
      h2: ['La lucha por coordinar', 'es real.'],
      subtitle:
        'Quieren salir. Sus amigos quieren salir. ¿Entonces por qué parece imposible?',
      cards: [
        {
          title: 'El debate interminable en el grupo',
          description:
            '"¿Vamos al centro?" "Queda lejos para mí." "¿Y la otra zona?" — 2 horas después, todavía no se ponen de acuerdo.',
        },
        {
          title: 'Siempre hay uno que maneja más lejos',
          description:
            'De alguna forma siempre queda "céntrico" para todos — menos para ese amigo que maneja 45 minutos mientras los demás manejan 10.',
        },
        {
          title: 'Terminando en el mismo lugar de siempre',
          description:
            'Se rinden buscando algo nuevo y van al mismo sitio de siempre porque nadie puede ponerse de acuerdo en nada más.',
        },
      ],
    },
    howItWorks: {
      eyebrow: '¿Cómo funciona?',
      h2: ['Del chat grupal a la salida', 'en tres pasos.'],
      steps: [
        {
          title: 'Selecciona a tus amigos',
          description:
            'Agrega amigos compartiendo un link o ingresando sus direcciones. Sin cuentas necesarias — solo pega de dónde sale cada quien.',
        },
        {
          title: 'Ve tu punto medio',
          description:
            'Converge calcula al instante el punto más justo — no solo el centro geográfico, sino ponderado por tiempo de viaje para que nadie salga perdiendo.',
        },
        {
          title: 'Explora y vota por los lugares',
          description:
            'Explora lugares seleccionados cerca del punto medio, filtrados por ambiente y presupuesto. Todos votan por sus favoritos — el grupo decide solo.',
        },
      ],
    },
    features: {
      eyebrow: 'Características',
      h2: ['Todo lo que tu grupo necesita.', 'Nada más.'],
      items: [
        {
          title: 'Motor de Punto Medio Inteligente',
          description:
            'Nuestro algoritmo va más allá de la geografía simple — considera tiempos de viaje reales, tráfico y opciones de transporte para encontrar el punto genuinamente más justo.',
          badge: 'Principal',
        },
        {
          title: 'Votación Grupal',
          description:
            'Todos en el grupo tienen voz. Explora lugares, desliza a los favoritos y ve cómo emerge el consenso en tiempo real sin discusiones.',
          badge: 'Popular',
        },
        {
          title: 'Chat Integrado',
          description:
            'Mantén toda la coordinación en un solo lugar. Sin cambiar de app — chatea, vota y planifica en el mismo hilo.',
          badge: null,
        },
        {
          title: 'Calendario Compartido',
          description:
            'Ve cuándo todos están libres de un vistazo. Encuentra el hueco en común y confirma la fecha antes de que se pierda el momentum.',
          badge: null,
        },
        {
          title: 'Puntajes de Compatibilidad',
          description:
            'Cada lugar recibe un puntaje basado en equidad de distancia, preferencias del grupo y ambiente. Sin adivinar si el lugar es bueno de verdad.',
          badge: 'Nuevo',
        },
        {
          title: 'Controles de Privacidad',
          description:
            'Comparte solo tu barrio, no tu dirección exacta. Tu ubicación nunca se guarda después de terminar la sesión.',
          badge: null,
        },
      ],
    },
    socialProof: {
      eyebrow: 'Lo que dicen',
      h2: ['Hecho para grupos de amigos que', 'de verdad quieren salir.'],
      subtitle:
        'Los primeros beta testers de nuestra lista de espera ya están usando Converge. Esto es lo que dicen.',
      stats: [
        { label: 'Más salidas por mes' },
        { label: 'Reducen el tiempo de planificación' },
        { label: 'Ciudades en beta' },
        { label: 'Satisfacción promedio del grupo' },
      ],
      testimonials: [
        {
          quote:
            'Llevamos dos meses en el beta y hemos salido más veces que en todo el año pasado. Converge básicamente salvó nuestra amistad.',
          role: 'Estudiante de medicina, Lima',
        },
        {
          quote:
            'Siempre soy el que maneja más lejos en nuestro grupo. Converge por fin lo comprobó — y ahora todos turnamos para elegir el lugar.',
          role: 'Ingeniero de software, NYC',
        },
        {
          quote:
            'La función de votación es genial. Antes pasábamos 30 minutos debatiendo por texto. Ahora toma como 2 minutos y nadie se siente ignorado.',
          role: 'Diseñadora, San Francisco',
        },
      ],
    },
    finalCta: {
      badge: 'Próximo lanzamiento',
      h2: ['Sé el primero en saber', 'cuándo lanzamos.'],
      subtitle:
        'Los miembros con acceso anticipado obtienen la app gratis por 3 meses y ayudan a definir las funciones más importantes para sus grupos.',
      disclaimer:
        'Sin spam. Cancela cuando quieras. Solo te escribiremos cuando Converge esté listo.',
    },
    footer: {
      tagline:
        'La app que encuentra el punto medio perfecto para tu grupo de amigos y los ayuda a salir de verdad.',
      links: {
        Producto: ['Características', '¿Cómo funciona?', 'Precios', 'Novedades'],
        Empresa: ['Nosotros', 'Blog', 'Trabaja con nosotros', 'Prensa'],
        Legal: ['Privacidad', 'Términos de servicio', 'Política de cookies'],
      },
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    navbar: {
      langLabel: 'Language',
    },
    hero: {
      badge: 'Early access — join the waitlist',
      h1: ['Stop arguing', 'about where', 'to meet.'],
      subtitle:
        'Converge finds the perfect midpoint between everyone in your friend group, then recommends the best venues to actually hang out — no more 60-message group chats.',
      socialProof: 'Trusted by friend groups across 12+ cities',
      socialProofBold: 'friend groups',
    },
    mapMockup: {
      findingFor: 'Finding midpoint for',
      groupName: 'Weekend Crew (4)',
      live: 'Live',
      midpoint: 'Midpoint',
      topVenues: 'Top venues near midpoint',
      venueTypes: ['Coffee', 'Bar & Grill'],
    },
    waitlistForm: {
      placeholder: 'your@email.com',
      cta: 'Join the Waitlist',
      joining: 'Joining...',
      successTitle: "You're on the list!",
      successDesc: "We'll let you know the moment Converge launches.",
      counter: 'people already waiting',
      errors: {
        alreadyOnList: "You're already on the list! We'll be in touch.",
        generic: 'Something went wrong. Please try again.',
        network: 'Network error. Please check your connection.',
      },
    },
    problem: {
      eyebrow: 'Sound familiar?',
      h2: ['The group hangout struggle', 'is real.'],
      subtitle:
        "You want to hang out. Your friends want to hang out. So why does it feel impossible?",
      cards: [
        {
          title: 'The endless group chat debate',
          description:
            '"How about downtown?" "Too far for me." "What about the east side?" — 2 hours later, you still haven\'t decided.',
        },
        {
          title: 'One person always drives further',
          description:
            'Every single time it\'s somehow "central" for everyone — except that one friend who drives 45 minutes while everyone else drives 10.',
        },
        {
          title: 'Settling for the same boring spot',
          description:
            "You give up finding somewhere new and just go to the same place you've been to 20 times because nobody can agree on anything else.",
        },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      h2: ['From group chat to hangout', 'in three steps.'],
      steps: [
        {
          title: 'Select your friends',
          description:
            'Add friends by sharing a link or entering addresses. No accounts required — just paste in where everyone is starting from.',
        },
        {
          title: 'See your midpoint',
          description:
            'Converge instantly calculates the fairest meeting point — not just geographic center, but weighted by travel time so nobody gets the short end.',
        },
        {
          title: 'Browse and vote on venues',
          description:
            'Browse curated spots near the midpoint, filtered by vibe and budget. Everyone votes on favorites — the group picks itself.',
        },
      ],
    },
    features: {
      eyebrow: 'Features',
      h2: ['Everything your group needs.', "Nothing it doesn't."],
      items: [
        {
          title: 'Smart Midpoint Engine',
          description:
            'Our algorithm goes beyond simple geography — it accounts for real travel times, traffic patterns, and transit options to find the genuinely fairest spot.',
          badge: 'Core',
        },
        {
          title: 'Group Voting',
          description:
            'Everyone in the group gets a say. Browse venues, swipe right on favorites, and watch consensus emerge in real-time without any arguments.',
          badge: 'Popular',
        },
        {
          title: 'Built-in Chat',
          description:
            'Keep all the coordination in one place. No switching between apps — chat, vote, and plan all in the same thread.',
          badge: null,
        },
        {
          title: 'Shared Calendar',
          description:
            "See when everyone's free at a glance. Find the overlap and lock in a date before momentum dies.",
          badge: null,
        },
        {
          title: 'Venue Match Scores',
          description:
            'Every venue gets a match score based on distance fairness, group preferences, and vibe. No more guessing if a place is actually good.',
          badge: 'New',
        },
        {
          title: 'Privacy Controls',
          description:
            'Share only your neighborhood, not your exact address. Your location data is never stored after the session ends.',
          badge: null,
        },
      ],
    },
    socialProof: {
      eyebrow: 'Social proof',
      h2: ['Built for friend groups who', 'actually want to hang out.'],
      subtitle:
        "Early beta testers from our waitlist are already using Converge. Here's what they say.",
      stats: [
        { label: 'More hangouts per month' },
        { label: 'Reduce planning time' },
        { label: 'Cities in beta' },
        { label: 'Average group satisfaction' },
      ],
      testimonials: [
        {
          quote:
            "We've been using the beta for two months and we've gone out more times than in the past year. Converge basically saved our friendship.",
          role: 'Med student, Lima',
        },
        {
          quote:
            "I'm always the one who drives the farthest in our friend group. Converge finally proved it — and now everyone takes turns picking the spot.",
          role: 'Software engineer, NYC',
        },
        {
          quote:
            'The voting feature is genius. We used to spend 30 minutes debating over text. Now it takes like 2 minutes and nobody feels steamrolled.',
          role: 'Designer, San Francisco',
        },
      ],
    },
    finalCta: {
      badge: 'Launching soon',
      h2: ['Be the first to know', 'when we launch.'],
      subtitle:
        'Early access members get the app free for 3 months and help shape the features that matter most to their friend groups.',
      disclaimer:
        "No spam. Unsubscribe any time. We'll only reach out when Converge is ready.",
    },
    footer: {
      tagline:
        'The app that finds the perfect midpoint for your friend group and helps you actually hang out.',
      links: {
        Product: ['Features', 'How it Works', 'Pricing', 'Changelog'],
        Company: ['About', 'Blog', 'Careers', 'Press'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      },
      rights: 'All rights reserved.',
    },
  },
} as const

export type Translations = (typeof translations)['es']

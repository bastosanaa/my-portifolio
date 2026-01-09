import { ExperienceItem, EducationItem, ProjectItem, NavItem, ProjectCategory } from './types';

export type Language = 'pt' | 'en';

interface Content {
  nav: NavItem[];
  hero: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    badges: {
      tech: string;
      creative: string;
      nature: string;
    }
  };
  education: {
    title: string;
    item: EducationItem;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  portfolio: {
    title: string;
    viewCode: string;
    categories: {
      all: string;
      academic: string;
      personal: string;
      challenge: string;
    };
    items: ProjectItem[];
  };
  footer: {
    rights: string;
  };
}

const PT_CONTENT: Content = {
  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Portfólio', href: '#portfolio' },
  ],
  hero: {
    name: "Ana Luiza",
    role: "Desenvolvedora de Software",
    tagline: "Criatividade e tecnologia transformando ideias em soluções reais.",
    bio: "Ana Luiza é desenvolvedora de software com perfil criativo, curiosa e orientada a evolução constante. Gosta de esportes, natureza e atividades ao ar livre, além de trabalhos manuais e criativos como crochê, desenho e pintura — interesses que influenciam diretamente sua forma de pensar, criar e resolver problemas. Enxerga a programação como uma ferramenta que une lógica e criatividade, permitindo transformar ideias em soluções digitais funcionais, bem estruturadas e com propósito.",
    badges: {
      tech: "Tecnologia",
      creative: "Criatividade",
      nature: "Natureza"
    }
  },
  education: {
    title: "Formação Acadêmica",
    item: {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Universidade Federal de Santa Catarina (UFSC)",
      description: "Ana escolheu Sistemas de Informação por ser um curso que une tecnologia, visão de negócio e gestão. Ao longo da graduação, desenvolveu tanto habilidades técnicas quanto pensamento analítico e organizacional, com foco em transformar ideias em produtos digitais estruturados, escaláveis e funcionais.",
      topics: [
        "Desenvolvimento de Software",
        "Arquitetura de Sistemas",
        "Engenharia de Software",
        "Gestão de Projetos",
        "Bancos de Dados"
      ]
    }
  },
  experience: {
    title: "Trajetória Profissional",
    items: [
      {
        company: "AID Health",
        role: "Desenvolvedora Fullstack",
        period: "Recente",
        description: "Criação de um produto do zero em startup de saúde, com foco em boas práticas e princípios SOLID.",
        achievements: [
          "Levantamento de requisitos com Product Owners e definição de MVP.",
          "Modelagem de banco de dados relacional do zero.",
          "Desenvolvimento frontend responsivo e fiel ao design.",
          "Apoio à entrada de novos desenvolvedores no projeto.",
          "Criação de testes unitários e de integração."
        ],
        techStack: ["Java", "Spring Boot", "Angular", "SQL"]
      },
      {
        company: "Salutho",
        role: "Desenvolvedora Fullstack",
        period: "Anterior",
        description: "Atuação em SaaS de Gestão Clínica (produto real de mercado), focada em novas features e melhorias.",
        achievements: [
          "Desenvolvimento de módulo de gerenciamento de estoque.",
          "Sistema de mensageria para WhatsApp (lembretes e confirmações).",
          "Implementação de serviço de chat e participação nas discussões de produto.",
          "Foco em usabilidade e experiência do usuário."
        ],
        techStack: ["React", "Django", "PostgreSQL", "Python"]
      },
      {
        company: "LabTIC (UDESC)",
        role: "Estágio em Desenvolvimento Fullstack",
        period: "Início",
        description: "Construção de sistemas sem uso de frameworks para compreensão profunda da linguagem.",
        achievements: [
          "Construção do zero de um sistema de gestão estudantil.",
          "Uso de JavaScript puro para fixação de conceitos.",
          "Manutenção do sistema oficial da UDESC (Polvo).",
          "Metodologia ágil SCRUM e correção de bugs."
        ],
        techStack: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
      }
    ]
  },
  portfolio: {
    title: "Projetos Selecionados",
    viewCode: "Ver código",
    categories: {
      all: "Todos",
      academic: "Acadêmicos",
      personal: "Pessoais",
      challenge: "Desafios"
    },
    items: [
      {
        title: "Sistema de Gestão Clínica",
        description: "Plataforma SaaS para clínicas, focada em otimizar o fluxo de atendimento e controle de estoque de insumos médicos.",
        image: "https://picsum.photos/600/400?random=1",
        tags: ["React", "Django", "PostgreSQL"],
        githubUrl: "#",
        category: 'personal'
      },
      {
        title: "App de Monitoramento de Saúde",
        description: "Aplicação MVP desenvolvida com arquitetura limpa, permitindo acompanhamento de métricas vitais de pacientes.",
        image: "https://picsum.photos/600/400?random=2",
        tags: ["Java", "Spring Boot", "Angular"],
        githubUrl: "#",
        category: 'challenge'
      },
      {
        title: "Portal Acadêmico LabTIC",
        description: "Sistema de gerenciamento de entidades acadêmicas desenvolvido com foco em performance e usabilidade.",
        image: "https://picsum.photos/600/400?random=3",
        tags: ["Vue.js", "Node.js", "MongoDB"],
        githubUrl: "#",
        category: 'academic'
      },
      {
        title: "API de Gerenciamento de Tarefas",
        description: "API RESTful desenvolvida para exercitar conceitos avançados de Spring Security e autenticação JWT.",
        image: "https://picsum.photos/600/400?random=4",
        tags: ["Java", "Spring Boot", "JWT", "Docker"],
        githubUrl: "#",
        category: 'challenge'
      },
      {
        title: "Dashboard de Clima",
        description: "Interface interativa para visualização de dados meteorológicos consumindo APIs externas em tempo real.",
        image: "https://picsum.photos/600/400?random=5",
        tags: ["Vue.js", "Axios", "CSS Grid"],
        githubUrl: "#",
        category: 'personal'
      },
      {
        title: "Algoritmos de Ordenação Visual",
        description: "Projeto educativo para visualização e comparação de performance entre diferentes algoritmos de sorting.",
        image: "https://picsum.photos/600/400?random=6",
        tags: ["JavaScript Vanilla", "Canvas API"],
        githubUrl: "#",
        category: 'academic'
      }
    ]
  },
  footer: {
    rights: "Construído com React e Tailwind."
  }
};

const EN_CONTENT: Content = {
  nav: [
    { label: 'About', href: '#sobre' },
    { label: 'Education', href: '#formacao' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  hero: {
    name: "Ana Luiza",
    role: "Software Developer",
    tagline: "Creativity and technology transforming ideas into real solutions.",
    bio: "Ana Luiza is a software developer with a creative profile, curious and driven by constant evolution. She enjoys sports, nature, and outdoor activities, as well as manual and creative work such as crochet, drawing, and painting — interests that directly influence her way of thinking, creating, and solving problems. She sees programming as a tool that unites logic and creativity, enabling the transformation of ideas into functional, well-structured, and purposeful digital solutions.",
    badges: {
      tech: "Technology",
      creative: "Creativity",
      nature: "Nature"
    }
  },
  education: {
    title: "Academic Background",
    item: {
      degree: "Bachelor of Information Systems",
      institution: "Federal University of Santa Catarina (UFSC)",
      description: "Ana chose Information Systems because it bridges advanced technology, business vision, and strategic management. Throughout her degree, she developed both technical skills and analytical thinking, focusing on transforming ideas into structured, scalable, and functional digital products.",
      topics: [
        "Software Development",
        "Systems Architecture",
        "Software Engineering",
        "Project Management",
        "Databases"
      ]
    }
  },
  experience: {
    title: "Professional Journey",
    items: [
      {
        company: "AID Health",
        role: "Fullstack Developer",
        period: "Recent",
        description: "Building a health startup product from scratch, focusing on best practices and SOLID principles.",
        achievements: [
          "Requirement gathering with Product Owners and MVP definition.",
          "Relational database modeling from scratch.",
          "Responsive frontend development faithful to design.",
          "Support for new developers joining the project.",
          "Creation of unit and integration tests."
        ],
        techStack: ["Java", "Spring Boot", "Angular", "SQL"]
      },
      {
        company: "Salutho",
        role: "Fullstack Developer",
        period: "Previous",
        description: "Working on a Clinical Management SaaS (real market product), focused on new features and improvements.",
        achievements: [
          "Development of inventory management module.",
          "WhatsApp messaging system (reminders and confirmations).",
          "Implementation of chat service and participation in product discussions.",
          "Focus on usability and user experience."
        ],
        techStack: ["React", "Django", "PostgreSQL", "Python"]
      },
      {
        company: "LabTIC (UDESC)",
        role: "Fullstack Development Intern",
        period: "Early Career",
        description: "Building systems without frameworks to gain a deep understanding of the language.",
        achievements: [
          "Building a student management system from scratch.",
          "Using vanilla JavaScript to solidify concepts.",
          "Maintenance of the official UDESC system (Polvo).",
          "Agile SCRUM methodology and bug fixing."
        ],
        techStack: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
      }
    ]
  },
  portfolio: {
    title: "Selected Projects",
    viewCode: "View Code",
    categories: {
      all: "All",
      academic: "Academic",
      personal: "Personal",
      challenge: "Challenges"
    },
    items: [
      {
        title: "Clinical Management System",
        description: "SaaS platform for clinics, focused on optimizing patient flow and medical inventory control.",
        image: "https://picsum.photos/600/400?random=1",
        tags: ["React", "Django", "PostgreSQL"],
        githubUrl: "#",
        category: 'personal'
      },
      {
        title: "Health Monitoring App",
        description: "MVP application developed with clean architecture, allowing tracking of patient vital metrics.",
        image: "https://picsum.photos/600/400?random=2",
        tags: ["Java", "Spring Boot", "Angular"],
        githubUrl: "#",
        category: 'challenge'
      },
      {
        title: "LabTIC Academic Portal",
        description: "Management system for academic entities developed with a focus on performance and usability.",
        image: "https://picsum.photos/600/400?random=3",
        tags: ["Vue.js", "Node.js", "MongoDB"],
        githubUrl: "#",
        category: 'academic'
      },
      {
        title: "Task Management API",
        description: "RESTful API developed to exercise advanced Spring Security concepts and JWT authentication.",
        image: "https://picsum.photos/600/400?random=4",
        tags: ["Java", "Spring Boot", "JWT", "Docker"],
        githubUrl: "#",
        category: 'challenge'
      },
      {
        title: "Weather Dashboard",
        description: "Interactive interface for visualizing weather data consuming external APIs in real-time.",
        image: "https://picsum.photos/600/400?random=5",
        tags: ["Vue.js", "Axios", "CSS Grid"],
        githubUrl: "#",
        category: 'personal'
      },
      {
        title: "Sorting Algorithm Visualizer",
        description: "Educational project to visualize and compare performance between different sorting algorithms.",
        image: "https://picsum.photos/600/400?random=6",
        tags: ["Vanilla JavaScript", "Canvas API"],
        githubUrl: "#",
        category: 'academic'
      }
    ]
  },
  footer: {
    rights: "Built with React and Tailwind."
  }
};

export const DICTIONARY = {
  pt: PT_CONTENT,
  en: EN_CONTENT
};
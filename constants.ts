import { title } from 'process';
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
      dedication: string;
    }
  };
  about: {
    title: string;
    paragraphs: string[];
    sections: {
      icon: string;
      title: string;
      items: string[];
    }[];
  };
  education: {
    title: string;
    items: EducationItem[];
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
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Portfólio', href: '#portfolio' },
  ],
  hero: {
    name: "Ana Luiza",
    role: "Desenvolvedora de Software",
    tagline: "Apaixonada por desafios que unem criatividade e tecnologia para transformar ideias em soluções reais.",
    bio: "Sou desenvolvedora fullstack movida por desafios, criatividade e aprendizado contínuo, acreditando que a prática constante é o caminho para evoluir tecnicamente e criar soluções cada vez melhores. Encontrei na programação uma forma de unir lógica, organização e criatividade para transformar boas ideias (ou simplesmente ideias divertidas) em produtos digitais funcionais, bem estruturados e pensados para pessoas. Me considero uma profissional flexível, aberta a aprender novas ferramentas e abordagens para resolver problemas da forma mais eficiente possível.",
    badges: {
      tech: "Tecnologia",
      creative: "Criatividade",
      dedication: "Dedicação"
    }
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Fora do código, sou uma pessoa que gosta de estar em constante movimento e de se desafiar a ser melhor a cada dia. Tenho uma ligação forte com o esporte, que vejo como um hábito essencial para fortalecer o corpo e equilibrar a mente. Já fui atleta de ginástica rítmica quando mais nova e, hoje, estou em evolução na corrida, com a meta atual de alcançar os 10 km!",
      "Me considero uma pessoa criativa e encontro nas atividades manuais e na leitura uma forma de desacelerar, exercitar o foco e praticar a paciência. Desenho, pintura e crochê fazem parte dos meus hobbies, assim como a leitura de histórias que me permitem sair um pouco da realidade e expandir a imaginação.",
      "Acredito que meus passatempos refletem diretamente meu estilo de vida e impactam positivamente minha trajetória profissional. Gosto de me desafiar, aprender coisas novas e me comprometer com a consistência necessária para evoluir no que me proponho a fazer. Sou muito focada na pessoa e na profissional que quero me tornar e trabalho nisso todos os dias."
    ],
    sections: [
      {
        icon: "Sparkles",
        title: "Valores",
        items: [
          "Evolução contínua",
          "Equilíbrio da mente e corpo",
          "Exercício da criatividade",
          "Persistência e constância"
        ]
      },
      {
        icon: "Heart",
        title: "Hobbies",
        items: [
          "Corrida e esportes",
          "Atividades manuais, desenho e crochê",
          "Leitura",
          "Contato com a natureza"
        ]
      },
    ]
  },
  education: {
    title: "Formação Acadêmica",
    items: [
      {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Universidade Federal de Santa Catarina (UFSC)",
      period: "Previsão: 2027.2",
      description: `Escolhi o curso de Sistemas de Informação por enxergar nele a combinação ideal entre tecnologia, visão de negócio e gestão de processos. Desde o início da graduação, meu objetivo foi desenvolver não apenas habilidades técnicas, mas também um pensamento analítico e organizado, capaz de transformar ideias em soluções digitais viáveis e bem estruturadas.
      Ao longo do curso, tive contato com áreas como desenvolvimento de software, arquitetura de sistemas, bancos de dados, engenharia de software e gestão de projetos, campos que despertam meu interesse por permitirem atuar em todas as etapas de construção de um produto, do planejamento à implementação.`,
      topics: [
        "Desenvolvimento de Software",
        "Arquitetura de Sistemas",
        "Engenharia de Software",
        "Gestão de Projetos",
        "Bancos de Dados"
      ]
    },
    {
        degree: "Curso de Inglês Avançado",
        institution: "Escola SESC Idiomas",
        description: 'Cursei inglês como língua secundária até o nível avançado por compreender a importância de quebrar as barreiras do idioma na comunicação, no acesso ao conhecimento e na atuação em um mercado cada vez mais globalizado.',
        topics: [
          "Inglês avançado",
          "Comunicação"
        ]
      }
  ]
  },
  experience: {
    title: "Trajetória Profissional",
    items: [
      {
        company: "AID Health",
        role: "Desenvolvedora Fullstack",
        period: "Recente",
        description: "Criação de um produto do zero em startup de saúde",
        achievements: [
          "Liderei a arquitetura e desenvolvimento de uma nova plataforma de conexão médico-paciente colaborando com POs na definição de funcionalidades e prioridades para o MVP;",
          "Estruturei a fundação do sistema aplicando princípios SOLID e Clean Code, garantindo uma base de código manutenível e reduzindo custos futuros com refatoração e correção de bugs;",
          "Elevei a estabilidade da aplicação através da implementação de testes automatizados (unitários e de integração), minimizando falhas em produção;",
          "Modelei banco de dados relacional do zero, otimizados para alta performance e integridade, assegurando manuseio seguro de dados médicos sensíveis;",
          "Desenvolvi interfaces frontend pixel perfect, com alta aderência aos designs do Figma, assegurando responsividade, padronização visual e usabilidade, em alinhamento com as diretrizes de UX do produto.",
        ],
        techStack: ["Java", "Spring Boot", "Angular", "PostgreSQL"]
      },
      {
        company: "Salutho",
        role: "Desenvolvedora Fullstack",
        period: "Anterior",
        description: "Atuação em SaaS de Gestão Clínica, focada em novas features e melhorias.",
        achievements: [
          "Integrei o sistema de gestão clínica a uma API de mensageria via whatsapp, implementando o disparo automático de mensagens para confirmação de consultas, reduzindo as taxas de ausência dos pacientes nas clínicas usuárias do sistema;",
          "Implementei um serviço de chat interno, em tempo real, para os funcionários das clínicas, trazendo melhor comunicação e eficiência no trabalho;",
          "Implementei um módulo de gestão de estoque no sistema, melhorando a organização e rastreabilidade dos materiais para os clientes;",
          "Utilizei Kanban como metodologia ágil, trabalhei com Git Flow e participei ativamente de revisões de Pull Requests e integração contínua entre os membros da equipe."
        ],
        techStack: ["React", "Django", "PostgreSQL", "Python"]
      },
      {
        company: "LabTIC (UDESC)",
        role: "Desenvolvedora Fullstack",
        period: "Início",
        description: "Construção de sistemas sem uso de frameworks para compreensão profunda da linguagem.",
        achievements: [
          "Participei da manutenção da plataforma Polvo, utilizando VueJS, um sistema legado de ensino com mais de 10 anos de existência e documentação técnica escassa, tendo como desafio inicial a reestruturação do rastreamento de tarefas e massiva correção de bugs;",
          "Projetei e desenvolvi uma Prova de Conceito (PoC) de um sistema de gestão acadêmica, focando na validação do módulo de realização de avaliações online. Essa iniciativa atuou como ambiente de simulação para antecipar desafios técnicos antes de intervir no sistema oficial;",
          "Utilizei metodologias ágeis baseadas em Scrum, com definição de entregas semanais, refinamento de tarefas e reuniões diárias.",
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
        title: "Dashboard ANTT",
        description: "Um dashboard para análise da infraestrutura ferroviária brasileira, desenvolvido visando apresentar habilidades em ETL, modelagem de dados e desenvolvimento de painéis interativos.",
        image: "/assets/portfolio/antt_dash.png",
        tags: ["Python", "Streamlit", "SQL", "PySpark", "ETL"],
        githubUrl: "https://github.com/bastosanaa/ANTT-data-analysis",
        category: 'challenge'
      },
      {
        title: "Upsidenet Challenge",
        description: "O projeto simula um ecossistema de laboratórios fictícios para demonstrar a implementação de Private Data Collections, segregando informações públicas de dados sensíveis entre diferentes organizações.",
        image: "/assets/portfolio/upsidenet.png",
        tags: ["Go", "Blockchain"],
        githubUrl: "https://github.com/bastosanaa/upsidenet-challenge",
        category: 'challenge'
      },
      {
        title: "Parallel Prog Project",
        description: "Explora conceitos de programação paralela implementando três versões de uma tarefa: sequencial, com multi-threading manual e utilizando uma biblioteca de thread-pool personalizada.",
        image: "/assets/portfolio/parallel_prog.png",
        tags: ["C", "Parallel Programming"],
        githubUrl: "https://github.com/bastosanaa/parallel_prog_project",
        category: 'academic'
      },
      {
        title: "Portal Acadêmico (Polvo)",
        description: "Sistema de gerenciamento de entidades acadêmicas e realização de atividades avaliativas desenvolvido em JavaScript puro com foco em aprendizagem",
        image: "/assets/portfolio/labtic_polvo.png",
        tags: ["JavaScript", "Node.js", "MongoDB"],
        githubUrl: "",
        category: 'personal'
      },
      {
        title: "API Sistema Antifurto",
        description: "API desenvolvida em Go com arquitetura de microsserviços para o controle, monitoramento e notificação de sistemas de alarme antifurto",
        image: "/assets/portfolio/security_sys.png",
        tags: ["Go", "Microservices"],
        githubUrl: "https://github.com/bastosanaa/sistemaAntifurtoAPI",
        category: 'academic'
      },
    ]
  },
  footer: {
    rights: "Construído com React e Tailwind."
  }
};
const EN_CONTENT = {
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#sobre' },
    { label: 'Education', href: '#formacao' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  hero: {
    name: "Ana Luiza",
    role: "Software Developer",
    tagline: "Passionate about challenges that combine creativity and technology to transform ideas into real solutions.",
    bio: "I am a Fullstack Developer driven by challenges, creativity, and continuous learning. I believe that constant practice is the key to technical evolution and creating increasingly better solutions. In programming, I found a way to combine logic, organization, and creativity to transform good ideas (or simply fun ones) into functional, well-structured, user-centric digital products. I consider myself a flexible professional, open to learning new tools and approaches to solve problems as efficiently as possible.",
    badges: {
      tech: "Technology",
      creative: "Creativity",
      dedication: "Dedication"
    }
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Beyond coding, I am someone who loves staying active and challenging myself to be better every day. I have a strong connection with sports, which I view as an essential habit for strengthening the body and balancing the mind. I used to be a rhythmic gymnast, and today I am progressing in running, with a current goal of hitting the 10 km mark!",
      "I consider myself a creative person, finding ways to slow down, sharpen my focus, and practice patience through crafts and reading. Drawing, painting, and crochet are part of my hobbies, as is reading stories that allow me to escape reality for a while and expand my imagination.",
      "I believe my pastimes directly reflect my lifestyle and positively impact my professional journey. I enjoy challenging myself, learning new things, and maintaining the consistency required to evolve in whatever I set out to do. I am deeply focused on the person and professional I want to become, and I work towards that every single day."
    ],
    sections: [
      {
        icon: "Sparkles",
        title: "Values",
        items: [
          "Continuous evolution",
          "Mind and body balance",
          "Exercising creativity",
          "Persistence and consistency"
        ]
      },
      {
        icon: "Heart",
        title: "Hobbies",
        items: [
          "Running and sports",
          "Crafts, drawing, and crochet",
          "Reading",
          "Connection with nature"
        ]
      },
    ]
  },
  education: {
    title: "Academic Background",
    items: [
      {
        degree: "Bachelor of Information Systems",
        institution: "Federal University of Santa Catarina (UFSC)",
        period: "Expected Graduation: 2027.2",
        description: `I chose the Information Systems degree because I saw in it the ideal combination of technology, business vision, and process management. Since the beginning of my studies, my goal has been to develop not only technical skills but also analytical and organized thinking, capable of transforming ideas into viable and well-structured digital solutions.
        Throughout the course, I engaged with areas such as software development, system architecture, databases, software engineering, and project management—fields that spark my interest by allowing me to act in every stage of product construction, from planning to implementation.`,
        topics: [
          "Software Development",
          "System Architecture",
          "Software Engineering",
          "Project Management",
          "Databases"
        ]
      },
      {
        degree: "Advanced English Course",
        institution: "SESC Language School",
        description: "I studied English as a second language to an advanced level, recognizing the importance of overcoming language barriers for communication, knowledge access, and operating within an increasingly globalized technology market.",
        topics: [
          "Advanced English",
          "Communication"
        ]
      }
    ]
  },
  experience: {
    title: "Professional Journey",
    items: [
      {
        company: "AID Health",
        role: "Fullstack Developer",
        period: "Recent",
        description: "Building a product from scratch at a health startup",
        achievements: [
          "Led the architecture and development of a new healthcare platform connecting doctors and patients, collaborating with Product Owners to define MVP features and priorities.",
          "Built a maintainable and scalable codebase by applying SOLID principles and Clean Code practices, reducing future refactoring and bug-fixing efforts.",
          "Improved application stability by implementing automated unit and integration tests, minimizing production issues.",
          "Designed and modeled a relational database from scratch, ensuring data integrity, performance, and secure handling of sensitive medical information.",
          "Developed pixel-perfect frontend interfaces with high fidelity to Figma designs, ensuring responsiveness, visual consistency, and a strong user experience, aligned with the product’s UX guidelines.",
          // "Support and leadership in onboarding new developers to the project.",
          // "Application of agile methodologies."
        ],
        techStack: ["Java", "Spring Boot", "Angular", "PostgreSQL"]
      },
      {
        company: "Salutho",
        role: "Fullstack Developer",
        period: "Previous",
        description: "Working on a Clinical Management SaaS, focused on new features and improvements.",
        achievements: [
          "Integrated a clinical management system with a WhatsApp messaging API, enabling automated appointment confirmations and reducing patient no-show rates.",
          "Developed a real-time internal chat feature to improve communication and operational efficiency for clinic staff.",
          "Implemented an inventory management module, improving material organization and traceability for client clinics.",
          "Worked with Kanban methodology, Git Flow, and actively participated in pull request reviews and continuous integration processes."
        ],
        techStack: ["React", "Django", "PostgreSQL", "Python"]
      },
      {
        company: "LabTIC (UDESC)",
        role: "Fullstack Developer",
        period: "Early Career",
        description: "Building systems without frameworks for a deep understanding of the language.",
        achievements: [
          "Contributed to the maintenance of a legacy educational platform with over 10 years in production, focusing on bug fixing and task tracking restructuring despite limited technical documentation.",
          "Designed and developed a Proof of Concept (PoC) to validate an online assessment module before applying changes to the production academic management system.",
          "Worked in an agile Scrum-based environment with weekly deliveries, task refinement, and daily stand-ups.",
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
        title: "ANTT Dashboard",
        description: "A dashboard for analyzing Brazilian railway infrastructure, developed to showcase skills in ETL, data modeling, and interactive dashboard development.",
        image: "/assets/portfolio/antt_dash.png",
        tags: ["Python", "Streamlit", "SQL", "PySpark", "ETL"],
        githubUrl: "https://github.com/bastosanaa/ANTT-data-analysis",
        category: 'challenge'
    },
      {
        title: "Upsidenet Challenge",
        description: "The project simulates an ecosystem of fictional laboratories to demonstrate the implementation of Private Data Collections, segregating public information from sensitive data across different organizations.",
        image: "/assets/portfolio/upsidenet.png",
        tags: ["Go", "Blockchain"],
        githubUrl: "https://github.com/bastosanaa/upsidenet-challenge",
        category: 'challenge'
      },
      {
        title: "Parallel Prog Project",
        description: "Explores parallel programming concepts by implementing three versions of a task: sequential, manually multi-threaded, and using a custom thread-pool library.",
        image: "/assets/portfolio/parallel_prog.png",
        tags: ["C", "Parallel Programming"],
        githubUrl: "https://github.com/bastosanaa/parallel_prog_project",
        category: 'academic'
      },
      {
        title: "University Portal (Polvo)",
        description: "Academic management system for entities and assessment activities, developed in pure JavaScript with a focus on learning.",
        image: "/assets/portfolio/labtic_polvo.png",
        tags: ["JavaScript", "Node.js", "MongoDB"],
        githubUrl: "",
        category: 'personal'
      },
      {
        title: "API Security System",
        description: "API developed in Go with a microservices architecture for the control, monitoring, and notification of anti-theft alarm systems.",
        image: "/assets/portfolio/security_sys.png",
        tags: ["Go", "Microservices"],
        githubUrl: "https://github.com/bastosanaa/sistemaAntifurtoAPI",
        category: 'academic'
      },
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
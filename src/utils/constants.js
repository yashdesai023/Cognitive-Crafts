// Company Information
export const COMPANY_INFO = {
    name: 'Cognitive Crafts',
    tagline: 'Crafting Intelligent Solutions for Real-World Challenges',
    description: 'We specialize in AI + Java solutions that solve real-world problems through innovative technology.',
    email: 'contact@cognitivecrafts.com',
    phone: '+1 (555) 123-4567',
    address: 'Your City, Your Country',
    founded: '2024',
  };
  
  // Social Media Links
  export const SOCIAL_LINKS = {
    github: 'https://github.com/yourorganization',
    linkedin: 'https://linkedin.com/company/cognitivecrafts',
    twitter: 'https://twitter.com/cognitivecrafts',
    email: 'mailto:contact@cognitivecrafts.com',
  };
  
  // Navigation Links
  export const NAV_LINKS = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Products', href: '/products', id: 'products' },
    { name: 'Tech Stack', href: '/tech-stack', id: 'tech-stack' },
    { name: 'Portfolio', href: '/portfolio', id: 'portfolio' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];
  
  // Products Information
  export const PRODUCTS = {
    drishyascan: {
      name: 'DrishyaScan',
      subtitle: 'Web Accessibility Analyzer',
      description: 'AI-powered web accessibility analyzer that helps organizations create inclusive digital experiences.',
      features: [
        'Automated WCAG compliance checking',
        'Real-time accessibility scoring',
        'Detailed violation reports',
        'Remediation suggestions',
        'Multi-page site analysis',
        'Integration with CI/CD pipelines'
      ],
      technologies: ['Java', 'Spring Boot', 'Machine Learning', 'React', 'REST APIs'],
      status: 'Available',
      demoUrl: '#',
      githubUrl: '#'
    },
    testaura: {
      name: 'TestAura',
      subtitle: 'Smart Test Cases Generator',
      description: 'Intelligent test case generator that creates comprehensive test suites using AI-driven analysis.',
      features: [
        'Automated test case generation',
        'Multiple testing frameworks support',
        'Code coverage analysis',
        'Edge case identification',
        'Performance test creation',
        'Regression test optimization'
      ],
      technologies: ['Java', 'JUnit', 'TestNG', 'AI/ML', 'Maven', 'Gradle'],
      status: 'Available',
      demoUrl: '#',
      githubUrl: '#'
    }
  };
  
  // Tech Stack
  export const TECH_STACK = {
    core: [
      { name: 'Java', icon: 'java', description: 'Enterprise-grade backend development' },
      { name: 'Spring Boot', icon: 'spring', description: 'Rapid application development' },
      { name: 'AI/ML', icon: 'brain', description: 'Artificial Intelligence & Machine Learning' },
      { name: 'React', icon: 'react', description: 'Modern frontend development' },
    ],
    backend: [
      'Java 17+', 'Spring Framework', 'Spring Boot', 'Spring Security',
      'Hibernate/JPA', 'Maven', 'Gradle', 'REST APIs', 'GraphQL'
    ],
    ai: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing',
      'Computer Vision', 'Deep Learning', 'Machine Learning Algorithms'
    ],
    frontend: [
      'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux',
      'HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'
    ],
    database: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'
    ],
    cloud: [
      'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD',
      'Jenkins', 'GitHub Actions', 'Terraform'
    ]
  };
  
  // Animation Variants for Framer Motion
  export const ANIMATION_VARIANTS = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6 } }
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    },
    stagger: {
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }
  };
  
  // SEO Data
  export const SEO_DATA = {
    home: {
      title: 'Cognitive Crafts - AI + Java Solutions for Real-World Problems',
      description: 'Cognitive Crafts specializes in AI-powered Java applications that solve real-world challenges. Discover our innovative products like DrishyaScan and TestAura.',
      keywords: 'AI, Java, Web Accessibility, Test Automation, Machine Learning, Spring Boot'
    },
    about: {
      title: 'About Cognitive Crafts - Our Mission & Vision',
      description: 'Learn about Cognitive Crafts mission to create intelligent solutions using AI and Java technologies for real-world problem solving.',
      keywords: 'About, Mission, Vision, AI Development, Java Experts'
    },
    products: {
      title: 'Our Products - AI-Powered Solutions by Cognitive Crafts',
      description: 'Explore our innovative AI + Java products: DrishyaScan for web accessibility and TestAura for smart test generation.',
      keywords: 'Products, DrishyaScan, TestAura, Web Accessibility, Test Automation'
    }
  };
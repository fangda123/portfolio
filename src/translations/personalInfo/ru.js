const personalInfo = {
  personalInfo: {
    name: 'Джакрич Суваннарак',
    nickname: 'Бэт',
    title: 'Старший Full Stack Разработчик | Node.js | Облачные решения | React.js | IoT | IoMT',
    location: 'Нонтхабури, Таиланд',
    email: 'www.fangda@gmail.com',
    phone: '0966908916',
    linkedin: 'linkedin.com/in/jakkrich-suwannarak-116166280',
    website: 'www.iotstart.me',
    summary: `Здравствуйте, я "Бэт" (Джакрич Суваннарак), Full Stack разработчик с более чем 7-летним опытом работы с Node.js, React.js и микросервисной архитектурой на облачных платформах. Я разрабатывал и поддерживал веб-приложения для GPS-компаний, IoT-стартапов и государственных учреждений (включая проекты "Умный город" и AI-чатботы).`,
    keyStrengths: [
      'Проектирование и разработка REST API с высокой масштабиру��мостью и безопасностью',
      'Управление инфраструктурой на GCP для обеспечения высокой доступности и низкой задержки',
      'Эффективное решение проблем и сотрудничество в кросс-функциональных командах',
      'Координация проектов и четкая коммуникация как с внутренними заинтересованными сторонами, так и с внешними клиентами'
    ],
    additionalInfo: [
      'Увлечен новыми технологиями, такими как AI/ML, Big Data и Blockchain, для разработки инновационных проектов',
      'Комфортно работаю в офисе, удаленно или в гибридном формате, в зависимости от потребностей организации',
      'Люблю делиться знаниями в сообществах IT, IoT и Cloud; участвую в хакатонах и митапах'
    ]
  },
  skills: {
    frontend: {
      title: 'Фронтенд Разработка',
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    backend: {
      title: 'Бэкенд Разработка',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices']
    },
    cloud: {
      title: 'Облачные технологии и DevOps',
      items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS']
    },
    specialized: {
      title: 'Специализированные навыки',
      items: ['IoT', 'IoMT', 'Проектирование баз данных', 'Сетевая безопасность']
    },
    databases: {
      title: 'Базы данных',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firestore']
    },
    monitoring: {
      title: 'Мониторинг и логирование',
      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Google Cloud Logging']
    },
    soft: {
      title: 'Гибкие навыки',
      items: ['Лидерство', 'Коммуникация', 'Решение проблем', 'Управление временем', 'Agile/Scrum']
    }
  },
  experience: [
    {
      company: 'Distar Tech (Таиланд) Co.,Ltd.',
      position: 'Старший IoMT разработчик',
      period: 'Сентябрь 2024 - Настоящее время (4 месяца)',
      location: 'Таиланд',
      description: [
        'Разработка и поддержка IoMT (Интернет медицинских вещей) решений для медицинских устройств',
        'Проектирование микросервисной архитектуры на Google Cloud Platform',
        'Повышение производительности и безопасности REST API и веб-приложений'
      ],
      achievements: [
        'Увеличение пропускной способности пользователей на 30% через реструктуризацию базы данных и оптимизацию запросов временных рядов',
        'Сокращение времени простоя на 20% с помощью контейнерного развертывания',
        'Внедрение CI/CD pipeline с использованием Google Cloud Build и GitHub Actions, сокращение времени развертывания на 40%',
        'Использование Terraform для Infrastructure as Code (IaC), повышение согласованности и масштабируемости для новых сред'
      ]
    },
    {
      company: 'CARRYBOY',
      position: 'Старший бэкенд разработчик',
      period: 'Март 2024 - Июль 2024 (5 месяцев)',
      description: [
        'Разработка и поддержка IoMT решений для медицинских устройств',
        'Проектирование микросервисной архитектуры на облачной платформе',
        'Повышение производительности и безопасности REST API и веб-приложений'
      ],
      achievements: [
        'Миграция устаревших модулей на микросервисы Node.js, сокращение использования ресурсов на 25% и улучшение поддерживаемости',
        'Внедрение кэширования на основе Redis для улучшения производительности чтения и снижения нагрузки на базу данных'
      ]
    },
    {
      company: 'Pimrypie',
      position: 'Full Stack разработчик',
      period: 'Октябрь 2023 (1 месяц)',
      location: 'Патхумтхани, Таиланд',
      description: [
        'Разработка веб-приложений с использованием Node.js и React.js, фокус на UI/UX и вовлеченности пользователей',
        'Проектирование фр��нтенд/бэкенд архитектуры и интеграция баз данных, включая Odoo'
      ],
      achievements: [
        'Реализация отзывчивого веб-дизайна, повышение удовлетворенности мобильных пользователей на 30%',
        'Настройка базового CI/CD pipeline через GitLab CI для непрерывной интеграции и развертывания'
      ]
    },
    {
      company: 'SiamGPS',
      position: 'Full Stack разработчик',
      period: 'Декабрь 2019 - Декабрь 2020 (1 год 1 месяц)',
      description: [
        'Разработка REST API для систем GPS-отслеживания, отображение данных о местоположении в реальном времени с использованием Leaflet',
        'Использование микросервисов и Google Cloud для масштабирования системы для большого количества пользователей'
      ],
      achievements: [
        'Разработка системы мониторинга с низкой задержкой для более чем 10,000 пользователей',
        'Создание системы оповещения для уведомления пользователей в реальном времени о происшествиях с транспортными средствами и неисправностях устройств',
        'Оптимизация MySQL запросов и индексирования, сокращение времени отклика на 40%',
        'Поддержание 99.9% доступности через балансировку нагрузки и стратегии отказоустойчивости'
      ]
    },
    {
      company: 'СОФТВЕРНАЯ КОМПАНИЯ',
      position: 'Менеджер проектов и разработчик',
      period: 'Декабрь 2018 - Декабрь 2019 (1 год 1 месяц)',
      description: [
        'Руководство проектами "Умный город" и AI-чатботов для государственного учреждения',
        'Управление командой разработчиков, QA инженеров и дизайнеров'
      ],
      achievements: [
        'Своевременная доставка трех проектов AI-чатботов, сокращение затрат на обслуживание клиентов на 20%',
        'Разработка панели аналитики в реальном времени для руководителей',
        'Внедрение методологий Agile/Scrum, обеспечение эффективного планирования спринтов и ежедневных встреч',
        'Координация кросс-функциональных команд (Frontend, Backend, AI/ML, QA) в разных часовых поясах'
      ]
    },
    {
      company: 'ГОСТИНИЧНАЯ КОМПАНИЯ',
      position: 'Сетевой консультант',
      period: 'Декабрь 2017 - Февраль 2019 (1 год 3 месяца)',
      description: [
        'Консультирование по проектированию сетевой инфраструктуры, политикам безопасности и оптимизации производительности',
        'Сотрудничество с IT-персоналом по внедрению VLAN, брандмауэров и VPN-решений для безопасного удаленного доступа'
      ]
    },
    {
      company: 'УМНЫЙ ГОРОД',
      position: 'Full Stack разработчик',
      period: 'Декабрь 2017 - Декабрь 2018 (1 год 1 месяц)',
      description: [
        'Разработка фронтенд-модулей с использованием React.js и интеграция AI-сервисов для анализа городских данных',
        'Реализация панелей мониторинга в реальном времени для управления трафиком и мониторинга окружающей среды'
      ]
    },
    {
      company: 'Siam GPS Co., Ltd.',
      position: 'Full Stack разработчик',
      period: 'Май 2015 - Ноябрь 2017 (2 года 7 месяцев)',
      description: [
        'Разработка RESTful API для обработки высоконагруженных GPS-данных с использованием Node.js и Express.js',
        'Создание систем непрерывного мониторинга и оповещения серверов (Zabbix, Prometheus)'
      ]
    },
    {
      company: 'Фрилансер',
      position: 'Сетевой и системный инженер',
      period: 'Февраль 2013 - Февраль 2017 (4 года 1 месяц)',
      description: [
        'Предоставление фриланс-консультаций для малого и среднего бизнеса по настройке се��ей, системной интеграции и VoIP-решениям',
        'Предоставление удаленной и локальной IT-поддержки для нескольких клиентов, обеспечение минимального времени простоя и своевременного обслуживания'
      ]
    }
  ],
  education: {
    university: 'Университет Дуракиж Пундит',
    degree: 'Бакалавр ком��ьютерной инженерии',
    period: 'Апрель 2009 - Апрель 2015'
  },
  languages: [
    {
      name: 'Тайский',
      level: 'Родной'
    },
    {
      name: 'Английский',
      level: 'Профессиональный рабочий уровень'
    }
  ],
  topSkills: [
    'IoMT (Интернет медицинских вещей)',
    'Node.js и Express.js',
    'React.js и Next.js',
    'Облачная инфраструктура (GCP/AWS)',
    'Docker и Kubernetes',
    'Проектирование и оптимизация баз данных',
    'Разработка RESTful API',
    'Микросервисная архитектура',
    'Сетевая безопасность',
    'CI/CD и DevOps',
    'Системный мониторинг',
    'Командное лидерство'
  ]
};

export default personalInfo; 
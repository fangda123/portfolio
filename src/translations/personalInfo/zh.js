const personalInfo = {
  personalInfo: {
    name: '杰克里奇 苏万纳拉',
    nickname: '蝙蝠',
    title: '高级全栈开发工程师 | Node.js | 云解决方案 | React.js | IoT | IoMT',
    location: '暖武里府, 泰国',
    email: 'www.fangda@gmail.com',
    phone: '0966908916',
    linkedin: 'linkedin.com/in/jakkrich-suwannarak-116166280',
    website: 'www.iotstart.me',
    summary: `您好，我是"蝙蝠"（杰克里奇 苏万纳拉），一位拥有7年以上Node.js、React.js和云平台微服务架构经验的全栈开发工程师。我为GPS公司、物联网初创企业和政府机构开发和维护网络应用程序（包括智慧城市和AI聊天机器人项目）。`,
    keyStrengths: [
      '设计和开发具有高可扩展性和安全性的REST API',
      '在GCP上管理基础设施以确保高可用性和低延迟',
      '有效的问题解决能力和跨职能团队协作',
      '项目协调和与内部利益相关者及外部客户的清晰沟通'
    ],
    additionalInfo: [
      '对新兴技术如AI/ML、大数据和区块链充满热情，用于开发创新项目',
      '可以根据组织��求进行现场办公、远程办公或混合办公',
      '喜欢在IT、物联网和云计算社区分享知识；参与黑客马拉松和技术交流会'
    ]
  },
  skills: {
    frontend: {
      title: '前端开发',
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    backend: {
      title: '后端开发',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices']
    },
    cloud: {
      title: '云计算和DevOps',
      items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS']
    },
    specialized: {
      title: '专业技能',
      items: ['IoT', 'IoMT', '数据库设计', '网络安全']
    },
    databases: {
      title: '数据库',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firestore']
    },
    monitoring: {
      title: '监控和日志',
      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Google Cloud Logging']
    },
    soft: {
      title: '软技能',
      items: ['领导力', '沟通能力', '问题解决', '时间管理', 'Agile/Scrum']
    }
  },
  experience: [
    {
      company: 'Distar Tech (泰国) 有限公司',
      position: '高级IoMT开发工程师',
      period: '2024年9月 - 至今 (4个月)',
      location: '泰国',
      description: [
        '开发和维护医疗设备IoMT (医疗物��网) 解决方案',
        '在Google Cloud Platform上设计微服务架构',
        '提升REST API和Web应用程序的性能和安全性'
      ],
      achievements: [
        '通过重构数据库和优化时间序列数据查询，将用户容量提高30%',
        '通过使用容器化部署，将系统停机时间减少20%',
        '使用Google Cloud Build和GitHub Actions实施CI/CD流程，将部署时间减少40%',
        '使用Terraform进行基础设施即代码(IaC)，提高新环境的一致性和可扩展性'
      ]
    },
    {
      company: 'CARRYBOY',
      position: '高级后端开发工程师',
      period: '2024年3月 - 2024年7月 (5个月)',
      description: [
        '开发和维护医疗设备IoMT解决方案',
        '设计云平台上的微服务架构',
        '提升REST API和Web应用程序的性能和安全性'
      ],
      achievements: [
        '将旧模块迁移到Node.js微服务，减少25%资源使用并提高可维护性',
        '引入基于Redis的缓存以提高读取性能并减少数据库负载'
      ]
    },
    {
      company: 'Pimrypie',
      position: '全栈开发工程师',
      period: '2023年10月 (1个月)',
      location: '巴吞他尼府, 泰国',
      description: [
        '使用Node.js和React.js构建Web应用程序，专注于UI/UX和用户参与',
        '设计前端/后端架构并集成数据库，包括Odoo'
      ],
      achievements: [
        '实现响应式网页设计，将移动用户满意度提高30%',
        '通过GitLab CI设置基本CI/CD流程，实现持续集成和部署'
      ]
    },
    {
      company: 'SiamGPS',
      position: '全栈开发工程师',
      period: '2019年12月 - 2020年12月 (1年1个月)',
      description: [
        '开发GPS跟踪系统的REST API，使用Leaflet显示实时位置数据',
        '使用微服务和Google Cloud扩展系统以支持大量用户'
      ],
      achievements: [
        '设计支持超过10,000用户的低延迟监控系统',
        '构建实时警报系统，通知用户车辆事件和设备故障',
        '优化MySQL查询和索引，将响应时间减少40%',
        '通过负载均衡和故障转移策略维持99.9%的系统可用性'
      ]
    },
    {
      company: '软件公司',
      position: '项目经理和开发工程师',
      period: '2018年12月 - 2019年12月 (1年1个月)',
      description: [
        '负责政府机构的智慧城市和AI聊天机器人项目',
        '管理开发人员、QA工程师和设计师团队'
      ],
      achievements: [
        '按时交付三个AI聊天机器人项目，将客户服务成本降低20%',
        '为管理层开发实时分析仪表板',
        '实施Agile/Scrum方法，确保有效的冲刺计划和每日站会',
        '协调跨时区的跨职能团队（前端、后端、AI/ML、QA）'
      ]
    },
    {
      company: '酒店公司',
      position: '网络顾问',
      period: '2017年12月 - 2019年2月 (1年3个月)',
      description: [
        '提供网络基础设施设计、安全策略和性能优化咨询',
        '与IT团队合作实施VLAN、防火墙和VPN解决方案，实现安全远程访问'
      ]
    },
    {
      company: '智慧城市',
      position: '全栈开发工程师',
      period: '2017年12月 - 2018年12月 (1年1个月)',
      description: [
        '使用React.js开发前端模块并集成AI服务进行城市数据分析',
        '实现交通管理和环境监测的实时仪表板'
      ]
    },
    {
      company: '暹罗GPS有限公司',
      position: '全栈开发工程师',
      period: '2015年5月 - 2017年11月 (2年7个月)',
      description: [
        '使用Node.js和Express.js开发处理高流量GPS数据的RESTful API',
        '建立持续的服务器监控和警报系统（Zabbix、Prometheus）'
      ]
    },
    {
      company: '自由职业者',
      position: '网络和系统工程师',
      period: '2013年2月 - 2017年2月 (4年1个月)',
      description: [
        '为中小型企业提供网络设置、系统集成和VoIP解决方案的自由职业咨询',
        '为多个客户提供远程和现场IT支持，确保最少的停机时间和及时的服务'
      ]
    }
  ],
  education: {
    university: '杜拉基班迪大学',
    degree: '计算机工程学士',
    period: '2009年4月 - 2015年4月'
  },
  languages: [
    {
      name: '泰语',
      level: '母语'
    },
    {
      name: '英语',
      level: '职业工作水平'
    }
  ],
  topSkills: [
    'IoMT (医疗物联网)',
    'Node.js 和 Express.js',
    'React.js 和 Next.js',
    '云基础设施 (GCP/AWS)',
    'Docker 和 Kubernetes',
    '数据库设计和优化',
    'RESTful API 开发',
    '微服务架构',
    '网络安全',
    'CI/CD 和 DevOps',
    '系统监控',
    '团队领导'
  ]
};

export default personalInfo; 
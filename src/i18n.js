import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import personalInfoEN from './translations/personalInfo/en';
import personalInfoTH from './translations/personalInfo/th';
import personalInfoZH from './translations/personalInfo/zh';
import personalInfoAR from './translations/personalInfo/ar';
import personalInfoRU from './translations/personalInfo/ru';

const resources = {
  en: {
    translation: {
      "menu": {
        "home": "Home",
        "chart": "Chart",
        "experience": "Experience",
        "language": "Language"
      },
      "welcome": "Welcome to the JS Portfolio",
      "chatBot": "Chat with me",
      "closeChat": "Close",
      "clearChat": "Clear Chat",
      "thinking": "Thinking...",
      "typeMessage": "Type your message...",
      "experience": {
        "responsibilities": "Responsibilities",
        "achievements": "Key Achievements",
        "workExperience": "Work Experience"
      },
      "skills": {
        "frontend": "Frontend Development",
        "backend": "Backend Development",
        "cloud": "Cloud & DevOps",
        "specialized": "Specialized Skills",
        "databases": "Databases",
        "monitoring": "Monitoring & Logging",
        "soft": "Soft Skills"
      },
      "chart": {
        "skillDistribution": "Skill Distribution",
        "experienceTimeline": "Experience Timeline",
        "skillGrowth": "Skill Growth",
        "careerProgress": "Career Progress",
        "achievementAnalysis": "Achievement Analysis",
        "months": "Months",
        "achievements": "Achievements",
        "achievementScatter": "Achievement Distribution"
      },
      "contact": {
        "location": "Location",
        "email": "Email",
        "linkedin": "LinkedIn",
        "website": "Website"
      },
      "personalInfo": personalInfoEN,
      "sections": {
        "keyStrengths": "Key Strengths",
        "skills": "Skills",
        "additionalInfo": "Additional Information"
      }
    }
  },
  th: {
    translation: {
      "menu": {
        "home": "หน้าแรก",
        "chart": "กราฟ",
        "experience": "ประสบการณ์",
        "language": "ภาษา"
      },
      "welcome": "ยินดีต้อนรับสู่ JS Portfolio",
      "chatBot": "คุยกับฉัน",
      "closeChat": "ปิด",
      "clearChat": "ล้างแชท",
      "thinking": "กำลังคิด...",
      "typeMessage": "พิมพ์ข้อความ...",
      "experience": {
        "responsibilities": "หน้าที่ความรับผิดชอบ",
        "achievements": "ผลงานที่สำคัญ",
        "workExperience": "ประสบการณ์การทำงาน"
      },
      "skills": {
        "frontend": "การพัฒนาส่วนหน้า",
        "backend": "การพัฒนาส่วนหลัง",
        "cloud": "คลาวด์และ DevOps",
        "specialized": "ทักษะเฉพาะทาง",
        "databases": "ฐานข้อมูล",
        "monitoring": "การตรวจสอบและบันทึก",
        "soft": "ทักษะด้านอื่นๆ"
      },
      "chart": {
        "skillDistribution": "การกระจายของทักษะ",
        "experienceTimeline": "ไทม์ไลน์ประสบการณ์",
        "skillGrowth": "การเติบโตของทักษะ",
        "careerProgress": "ความก้าวหน้าในอาชีพ",
        "achievementAnalysis": "การวิเคราะห์ผลงาน",
        "months": "เดือน",
        "achievements": "ผลงาน",
        "achievementScatter": "การกระจายของผลงาน"
      },
      "contact": {
        "location": "ที่อยู่",
        "email": "อีเมล",
        "linkedin": "LinkedIn",
        "website": "เว็บไซต์"
      },
      "personalInfo": personalInfoTH,
      "sections": {
        "keyStrengths": "จุดแข็งหลัก",
        "skills": "ทักษะ",
        "additionalInfo": "ข้อมูลเพิ่มเติม"
      }
    }
  },
  zh: {
    translation: {
      "menu": {
        "home": "首页",
        "chart": "图表",
        "experience": "经验",
        "language": "语言"
      },
      "welcome": "欢迎来到 JS 的作品集",
      "chatBot": "与我聊天",
      "closeChat": "关闭",
      "clearChat": "清除聊天",
      "thinking": "思考中...",
      "typeMessage": "输入消息...",
      "experience": {
        "responsibilities": "职责",
        "achievements": "���要成就",
        "workExperience": "工作经验"
      },
      "skills": {
        "frontend": "前端开发",
        "backend": "后端开发",
        "cloud": "云计算和DevOps",
        "specialized": "专业技能",
        "databases": "数据库",
        "monitoring": "监控和日志",
        "soft": "软技能"
      },
      "chart": {
        "skillDistribution": "技能分布",
        "experienceTimeline": "经验时间线",
        "skillGrowth": "技能成长",
        "careerProgress": "职业发展",
        "achievementAnalysis": "成就分析",
        "months": "月份",
        "achievements": "成就",
        "achievementScatter": "成就分布"
      },
      "contact": {
        "location": "位置",
        "email": "电子邮件",
        "linkedin": "领英",
        "website": "网站"
      },
      "personalInfo": personalInfoZH,
      "sections": {
        "keyStrengths": "核心优势",
        "skills": "技能",
        "additionalInfo": "附加信息"
      }
    }
  },
  ar: {
    translation: {
      "menu": {
        "home": "الرئيسية",
        "chart": "الرسوم البيانية",
        "experience": "الخبرة",
        "language": "اللغة"
      },
      "welcome": "مرحباً بكم في محفظة JS",
      "chatBot": "تحدث معي",
      "closeChat": "إغلاق",
      "clearChat": "مسح المحادثة",
      "thinking": "جاري التفكير...",
      "typeMessage": "اكتب رسالتك...",
      "experience": {
        "responsibilities": "المسؤوليات",
        "achievements": "الإنجازات الرئيسية",
        "workExperience": "الخبرة العملية"
      },
      "skills": {
        "frontend": "تطوير الواجهة الأمامية",
        "backend": "تطوير الخلفية",
        "cloud": "الحوسبة السحابية وDevOps",
        "specialized": "المهارات المتخصصة",
        "databases": "قواعد البيانات",
        "monitoring": "المراقبة والتسجيل",
        "soft": "المهارات الشخصية"
      },
      "chart": {
        "skillDistribution": "توزيع المهارات",
        "experienceTimeline": "الجدول الزمني للخبرة",
        "skillGrowth": "نمو المهارات",
        "careerProgress": "التقدم المهني",
        "achievementAnalysis": "تحليل الإنجازات",
        "months": "الأشهر",
        "achievements": "الإنجازات",
        "achievementScatter": "توزيع الإنجازات"
      },
      "contact": {
        "location": "الموقع",
        "email": "البريد الإلكتروني",
        "linkedin": "لينكد إن",
        "website": "الموقع الإلكتروني"
      },
      "personalInfo": personalInfoAR,
      "sections": {
        "keyStrengths": "نقاط القوة الرئيسية",
        "skills": "المهارات",
        "additionalInfo": "معلومات إضافية"
      }
    }
  },
  ru: {
    translation: {
      "menu": {
        "home": "Главная",
        "chart": "Графики",
        "experience": "Опыт",
        "language": "Язык"
      },
      "welcome": "Добро пожаловать в портфолио JS",
      "chatBot": "Чат со мной",
      "closeChat": "Закрыть",
      "clearChat": "Очистить чат",
      "thinking": "Думаю...",
      "typeMessage": "Введите сообщение...",
      "experience": {
        "responsibilities": "Обязанности",
        "achievements": "Ключевые достижения",
        "workExperience": "Опыт работы"
      },
      "skills": {
        "frontend": "Фронтенд разработка",
        "backend": "Бэкенд разработка",
        "cloud": "Облачные технологии и DevOps",
        "specialized": "Специализированные навыки",
        "databases": "Базы данных",
        "monitoring": "Мониторинг и логирование",
        "soft": "Гибкие навыки"
      },
      "chart": {
        "skillDistribution": "Распределение навыков",
        "experienceTimeline": "Временная шкала опыта",
        "skillGrowth": "Рост навыков",
        "careerProgress": "Карьерный рост",
        "achievementAnalysis": "Анализ достижений",
        "months": "Месяцы",
        "achievements": "Достижения",
        "achievementScatter": "Распределение достижений"
      },
      "contact": {
        "location": "Местоположение",
        "email": "Email",
        "linkedin": "LinkedIn",
        "website": "Веб-сайт"
      },
      "personalInfo": personalInfoRU,
      "sections": {
        "keyStrengths": "Ключевые сильные стороны",
        "skills": "Навыки",
        "additionalInfo": "Дополнительная информация"
      }
    }
  }
};

// ตรวจสอบภาษาที่บันทึกไว้ใน local storage
const savedLanguage = localStorage.getItem('language');
const defaultLanguage = 'en'; // ตั้งค่าเริ่มต้นเป็นภาษาอังกฤษ

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage || defaultLanguage, // ใช้ภาษาที่บันทึกไว้ หรือใช้ค่าเริ่มต้น
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });

// เพิ่ม event listener สำหรับการเปลี่ยนภาษา
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n; 
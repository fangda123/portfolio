import React from 'react';
import { Container, Paper, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie,
  RadarChart, Radar,
  PolarGrid, PolarAngleAxis,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend,
  ResponsiveContainer,
  Cell,
  AreaChart, Area,
  ScatterChart, Scatter,
  ComposedChart,
  Bubble,
  ZAxis
} from 'recharts';

// แก้ไขสไตล์ที่ใช้ร่วมกัน
const chartPaperStyle = {
  p: 3,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  border: '1px solid',
  borderColor: 'primary.main',
  backdropFilter: 'blur(10px)',
  '& .recharts-cartesian-grid-horizontal line, & .recharts-cartesian-grid-vertical line': {
    stroke: '#004400'
  },
  '& .recharts-text': {
    fill: '#00ff00'
  },
  '& .recharts-tooltip-wrapper .recharts-default-tooltip': {
    backgroundColor: 'rgba(0, 0, 0, 0.95) !important',
    border: '1px solid #00ff00 !important',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
  },
  '& .recharts-tooltip-wrapper .recharts-tooltip-label': {
    color: '#00ff00 !important',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  '& .recharts-tooltip-wrapper .recharts-tooltip-item': {
    color: '#ffffff !important',
    padding: '2px 0',
  },
  '& .recharts-tooltip-wrapper .recharts-tooltip-item-name': {
    color: '#00ff00 !important',
  },
  '& .recharts-tooltip-wrapper .recharts-tooltip-item-value': {
    color: '#ffffff !important',
    fontWeight: 'bold',
  }
};

// สร้าง Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      border: '1px solid #00ff00',
      padding: '10px',
      borderRadius: '4px',
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
    }}>
      <p style={{ color: '#00ff00', margin: '0 0 5px 0' }}>{label}</p>
      {payload.map((item, index) => (
        <p key={index} style={{ color: '#ffffff', margin: '2px 0' }}>
          <span style={{ color: item.color || '#00ff00' }}>{item.name}: </span>
          <span style={{ fontWeight: 'bold' }}>{item.value}</span>
        </p>
      ))}
    </div>
  );
};

const ChartPage = () => {
  const { t, i18n } = useTranslation();
  const { skills, experience, topSkills } = t('personalInfo', { returnObjects: true });

  // คำนวณจำนวนทักษะในแต่ละหมวดหมู่
  const skillsData = Object.entries(skills).map(([key, category]) => ({
    name: t(`skills.${key}`),
    value: category.items.length,
  }));

  // ฟังก์ชันแปลงข้อความระยะเวลาเป็นจำนวนเดือน
  const extractMonthsFromPeriod = (period) => {
    // ตรวจสอบว่า period มีค่าหรือไม่
    if (!period) return 0;

    // แยกช่วงเวลาเป็นจุดเริ่มต้นและสิ้นสุด
    const parts = period.split('-');
    if (parts.length !== 2) return 0;

    const [startDate, endDate] = parts.map(d => d?.trim() || '');
    
    // ดึงปีจากวันที่เริ่มต้น
    const startMatch = startDate.match(/(\d{4})/);
    if (!startMatch) return 0;
    const startYear = parseInt(startMatch[1]);

    // ถ้าเป็นปัจจุบัน
    if (/present|ปัจจุบัน|现在|目前|���今|الحالي|حتى الآن|الحاضر|настоящее время|сейчас/i.test(endDate)) {
      const currentYear = new Date().getFullYear();
      return (currentYear - startYear) * 12;
    }

    // ดึงปี�����������ากวันที่สิ้นสุด
    const endMatch = endDate.match(/(\d{4})/);
    if (!endMatch) return 0;
    const endYear = parseInt(endMatch[1]);

    // คำนวณจำนวนเดือนจากความต่างของปี
    return Math.max(0, (endYear - startYear) * 12);
  };

  // ฟังก์ชันแปลงวันที่เป็นรูปแบบที่เปรียบเทียบได้
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    // ดึงเฉพาะปี ค.ศ. 4 หลัก
    const match = dateStr.match(/(\d{4})/);
    return match ? match[1] : dateStr;
  };

  // คำนวณระยะเวลาการทำงานในแต่ละบริษัท
  const experienceData = experience
    .map(exp => {
      // ถ้าไม่มี period ให้ใช้ค่าเริ่มต้น
      const months = exp.period ? extractMonthsFromPeriod(exp.period) : 0;
      return {
        name: exp.company,
        months: months || 1, // ถ้าคำนว���ไม่ได้ให้แสดง 1 เดือน
        position: exp.position
      };
    })
    .sort((a, b) => b.months - a.months);

  // สร้างข้อมูลสำหรับ Line Chart แสดงพัฒนาการประสบการณ์
  const careerProgressData = experience
    .map(exp => {
      const startDate = exp.period ? exp.period.split('-')[0].trim() : '';
      return {
        date: formatDate(startDate) || '2024', // ถ้าไม่มีวันที่ให้ใช้ปีปัจจุบัน
        role: exp.position,
        company: exp.company,
        level: getCareerLevel(exp.position, i18n.language)
      };
    })
    .sort((a, b) => parseInt(a.date) - parseInt(b.date));

  // สร้างข้อมูลสำหรับ Area Chart แสดงการเติบโตของทักษะ
  const skillGrowthData = experience
    .map(exp => ({
      date: formatDate(exp.period.split('-')[0].trim()),
      technical: exp.description.length,
      management: exp.achievements ? exp.achievements.length : 0,
      soft: 1
    }))
    .sort((a, b) => parseInt(a.date) - parseInt(b.date));

  // สร้างข้อมูลสำหรับ Scatter Plot
  const achievementData = experience
    .map(exp => ({
      months: extractMonthsFromPeriod(exp.period),
      achievements: exp.achievements ? exp.achievements.length : 0,
      name: exp.company
    }))
    .filter(data => data.achievements > 0)
    .sort((a, b) => a.months - b.months);

  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Skill Distribution */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.skillDistribution')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${index * 360 / skillsData.length}, 70%, 50%)`} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Experience Timeline */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.experienceTimeline')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis label={{ value: t('chart.months'), angle: -90, position: 'insideLeft' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="months" fill="#00ff00" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Skill Growth */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.skillGrowth')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={skillGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="technical" 
                  stackId="1" 
                  stroke="#00ff00" 
                  fill="#00ff00" 
                  name={t('chart.technical')} 
                />
                <Area 
                  type="monotone" 
                  dataKey="management" 
                  stackId="1" 
                  stroke="#0088ff" 
                  fill="#0088ff" 
                  name={t('chart.management')} 
                />
                <Area 
                  type="monotone" 
                  dataKey="soft" 
                  stackId="1" 
                  stroke="#ff0088" 
                  fill="#ff0088" 
                  name={t('chart.soft')} 
                />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Career Progress */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.careerProgress')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={careerProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="level" stroke="#00ff00" name={t('chart.level')} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* การพัฒนาทักษะและผลงาน */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.skillAndAchievement')}
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={careerProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="level" fill="#00ff00" name={t('chart.skillLevel')} />
                <Line yAxisId="right" type="monotone" dataKey="level" stroke="#00ff00" name={t('chart.progress')} />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ความสัมพันธ์ระหว่างระยะเวลาแ���ะผลงาน */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.timeAndAchievement')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="months" name={t('chart.months')} unit={t('chart.monthUnit')} />
                <YAxis dataKey="achievements" name={t('chart.items')} unit={t('chart.itemUnit')} />
                <Tooltip content={<CustomTooltip />} />
                <Scatter name={t('chart.items')} data={achievementData} fill="#00ff00">
                  {achievementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#00ff00" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ความรับผิดชอบและขนาดทีม */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.responsibilityAndTeam')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="teamSize" name={t('chart.teamSize')} unit={t('chart.personUnit')} />
                <YAxis dataKey="responsibility" name={t('chart.responsibility')} unit="%" />
                <ZAxis dataKey="duration" range={[50, 400]} />
                <Tooltip content={<CustomTooltip />} />
                <Scatter name={t('chart.responsibility')} data={[
                  { teamSize: 2, responsibility: 75, duration: 6 },
                  { teamSize: 4, responsibility: 80, duration: 12 },
                  { teamSize: 6, responsibility: 85, duration: 18 },
                  { teamSize: 8, responsibility: 90, duration: 24 }
                ]} fill="#00ff00">
                  {Array(4).fill().map((_, index) => (
                    <Cell key={`cell-${index}`} fill="#00ff00" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ความเชี่ยวชาญในทักษะหลัก */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.coreExpertise')}
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%">
                <PolarGrid stroke="#004400" />
                <PolarAngleAxis dataKey="name" stroke="#00ff00" />
                <Radar name={t('chart.expertise')} dataKey="value" data={topSkills.map((skill, index) => ({
                  name: skill,
                  value: 85 + Math.random() * 15
                }))} fill="#00ff00" fillOpacity={0.6} />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* พัฒนาการทางอาชีพ */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.careerDevelopment')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { year: '2013', level: 1 },
                { year: '2015', level: 3 },
                { year: '2017', level: 1 },
                { year: '2017', level: 3 },
                { year: '2018', level: 4 },
                { year: '2019', level: 3 },
                { year: '2023', level: 3 },
                { year: '2024', level: 5 },
                { year: '2024', level: 5 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="level" stroke="#00ff00" dot={{ fill: '#00ff00' }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* การเติบโตของทักษะตามเวลา */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={chartPaperStyle}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
              {t('chart.skillGrowthOverTime')}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={[
                { year: '2013', frontend: 2, backend: 1, cloud: 1, specialized: 1 },
                { year: '2015', frontend: 3, backend: 2, cloud: 2, specialized: 2 },
                { year: '2017', frontend: 4, backend: 3, cloud: 3, specialized: 3 },
                { year: '2019', frontend: 5, backend: 4, cloud: 4, specialized: 4 },
                { year: '2021', frontend: 6, backend: 5, cloud: 5, specialized: 4 },
                { year: '2024', frontend: 7, backend: 6, cloud: 6, specialized: 5 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="frontend" stackId="1" stroke="#00ff00" fill="#00ff00" name={t('chart.frontend')} />
                <Area type="monotone" dataKey="backend" stackId="1" stroke="#00cc00" fill="#00cc00" name={t('chart.backend')} />
                <Area type="monotone" dataKey="cloud" stackId="1" stroke="#009900" fill="#009900" name={t('chart.cloud')} />
                <Area type="monotone" dataKey="specialized" stackId="1" stroke="#006600" fill="#006600" name={t('chart.specialized')} />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

// ฟังก์ชันช่วยคำนวณระดับตำแหน่งงาน
function getCareerLevel(position, language = 'en') {
  const positionLower = position.toLowerCase();

  // กำหนด pattern ตามภาษา
  const patterns = {
    en: {
      senior: /senior|lead/,
      manager: /project manager|manager/,
      fullstack: /full.?stack/,
      developer: /developer|engineer/
    },
    th: {
      senior: /อาวุโส|หัวหน้า/,
      manager: /ผู้จัดการ|แมเนเจ�����ร์/,
      fullstack: /ฟูล���แตก|full.?stack/,
      developer: /นักพัฒนา|developer/
    },
    zh: {
      senior: /高级|资深/,
      manager: /项目经理|经理/,
      fullstack: /全栈/,
      developer: /开发|工程师/
    },
    ar: {
      senior: /كبير|أول|رئيسي|قيادي|أقدم/,
      manager: /مدير|مشرف|قائد|رئيس/,
      fullstack: /فول ستاك|متكامل|شامل|كامل/,
      developer: /مطور|مبرمج|مهندس|محلل/
    },
    ru: {
      senior: /старший|ведущий/,
      manager: /руководитель|менеджер/,
      fullstack: /фулстек|full.?stack/,
      developer: /разработчик|программи��т/
    }
  };

  // ใช้ pattern ตามภาษาปี่ระบุ หรือใช้ภาษาอังกฤษถ้าไม่มี pattern สำหรับภาษานั้น
  const langPatterns = patterns[language] || patterns.en;

  // ตรวจสอบตำแหน่งตามลำดับ
  if (langPatterns.senior.test(positionLower)) return 5;
  if (langPatterns.manager.test(positionLower)) return 4;
  if (langPatterns.fullstack.test(positionLower)) return 3;
  if (langPatterns.developer.test(positionLower)) return 2;

  return 1;
}

export default ChartPage; 
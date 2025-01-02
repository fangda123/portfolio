import React from 'react';
import { Container, Paper, Typography, Box, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from 'react-i18next';

// สไตล์ที่ใช้ร่วมกัน
const commonStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    p: 0
  },
  mainPaper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    border: '1px solid',
    borderColor: 'primary.main',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px rgba(0, 255, 0, 0.1)',
    p: 4,
    borderRadius: 0
  },
  title: {
    color: 'primary.main',
    fontFamily: '"Courier New", monospace',
    mb: 4,
    textAlign: 'center'
  },
  text: {
    color: 'primary.main',
    fontFamily: '"Courier New", monospace',
    fontSize: '1rem'
  },
  experienceCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    border: '1px solid',
    borderColor: 'primary.main',
    p: 4,
    width: '100%',
    maxWidth: '800px',
    mx: 'auto',
    mb: 4,
    '&:hover': {
      backgroundColor: 'rgba(0, 20, 0, 0.95)',
      transform: 'translateY(-2px)',
      transition: 'all 0.3s ease'
    }
  },
  icon: {
    color: 'primary.main',
    fontSize: '2rem',
    mb: 2
  }
};

const Experience = () => {
  const { t } = useTranslation();
  const experience = t('personalInfo.experience', { returnObjects: true });

  return (
    <Container maxWidth={false} sx={commonStyles.container}>
      <Paper elevation={0} sx={commonStyles.mainPaper}>
        <Typography variant="h4" sx={commonStyles.title}>
          {t('experience.workExperience')} <span className="blinking-cursor">_</span>
        </Typography>
        
        <Stack spacing={4} alignItems="center" sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {experience.map((exp, index) => (
            <Paper key={index} elevation={3} sx={commonStyles.experienceCard}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <WorkIcon sx={commonStyles.icon} />
              </Box>
              
              <Typography variant="h5" sx={{...commonStyles.text, mb: 3, color: '#00ff00', fontWeight: 'bold', textAlign: 'center'}}>
                {exp.position}
              </Typography>
              
              <Typography variant="h6" sx={{...commonStyles.text, mb: 2, textAlign: 'center'}}>
                {exp.company}
              </Typography>
              
              <Typography sx={{...commonStyles.text, mb: 4, opacity: 0.8, textAlign: 'center'}}>
                {exp.period}
              </Typography>
              
              {exp.description && (
                <Box sx={{ mb: 4 }}>
                  <Typography sx={{...commonStyles.text, mb: 2, color: '#00ff00', fontWeight: 'bold'}}>
                    {t('experience.responsibilities')}:
                  </Typography>
                  {exp.description.map((desc, i) => (
                    <Typography key={i} sx={{...commonStyles.text, ml: 3, mb: 1, opacity: 0.9}}>
                      • {desc}
                    </Typography>
                  ))}
                </Box>
              )}
              
              {exp.achievements && (
                <Box>
                  <Typography sx={{...commonStyles.text, mb: 2, color: '#00ff00', fontWeight: 'bold'}}>
                    {t('experience.achievements')}:
                  </Typography>
                  {exp.achievements.map((achievement, i) => (
                    <Typography key={i} sx={{...commonStyles.text, ml: 3, mb: 1, opacity: 0.9}}>
                      • {achievement}
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};

export default Experience; 
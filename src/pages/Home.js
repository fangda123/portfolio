import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../styles/hackerStyle.css';

const Home = () => {
  const { t } = useTranslation();
  const info = t('personalInfo.personalInfo', { returnObjects: true });
  const skills = t('personalInfo.skills', { returnObjects: true });

  const cardStyle = {
    p: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid',
    borderColor: 'primary.main',
    backdropFilter: 'blur(5px)'
  };

  const textStyle = {
    fontFamily: '"Courier New", monospace',
    color: 'primary.main'
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        minHeight: '100vh',
        py: 4,
        backdropFilter: 'blur(5px)'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography 
          variant="h2" 
          className="glitch" 
          data-text={info.name}
          sx={{ 
            ...textStyle,
            mb: 2 
          }}
        >
          {info.name} <span className="blinking-cursor" />
        </Typography>

        <Typography 
          variant="h4" 
          sx={{ 
            ...textStyle,
            mb: 3 
          }}
        >
          {info.title}
        </Typography>

        {/* Summary Section */}
        <Paper 
          elevation={3}
          sx={{
            ...cardStyle,
            mb: 6
          }}
        >
          <Typography sx={{ ...textStyle, whiteSpace: 'pre-line' }}>
            {info.summary}
          </Typography>
        </Paper>

        {/* Key Strengths */}
        <Paper 
          elevation={3}
          sx={{
            ...cardStyle,
            mb: 4
          }}
        >
          <Typography variant="h5" sx={{ ...textStyle, mb: 2 }}>
            {t('sections.keyStrengths')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {info.keyStrengths.map((strength, index) => (
              <Typography key={index} sx={textStyle}>
                • {strength}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Skills Section */}
        <Paper 
          elevation={3}
          sx={{
            ...cardStyle,
            mb: 4
          }}
        >
          <Typography variant="h5" sx={{ ...textStyle, mb: 3 }}>
            {t('sections.skills')}
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skills).map(([key, category]) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Typography variant="h6" sx={{ ...textStyle, mb: 2 }}>
                  {t(`skills.${key}`)}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.items.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        border: '1px solid'
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Additional Info */}
        <Paper 
          elevation={3}
          sx={{
            ...cardStyle,
            mb: 4
          }}
        >
          <Typography variant="h5" sx={{ ...textStyle, mb: 2 }}>
            {t('sections.additionalInfo')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {info.additionalInfo.map((info, index) => (
              <Typography key={index} sx={textStyle}>
                • {info}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Contact Info */}
        <Paper
          elevation={3}
          sx={{
            ...cardStyle,
            mb: 4
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>
                <strong>{t('contact.location')}:</strong> {info.location}
              </Typography>
              <Typography sx={textStyle}>
                <strong>{t('contact.email')}:</strong> {info.email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>
                <strong>{t('contact.linkedin')}:</strong> {info.linkedin}
              </Typography>
              <Typography sx={textStyle}>
                <strong>{t('contact.website')}:</strong> {info.website}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
}

export default Home; 
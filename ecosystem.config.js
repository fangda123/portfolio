module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: './build',
      PM2_SERVE_PORT: 3001,
      PM2_SERVE_SPA: 'true',
      NODE_ENV: 'production',
    },
    instances: 1,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PM2_SERVE_PORT: 3001
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    time: true
  }]
}; 
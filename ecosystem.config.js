module.exports = {
  apps: [{
    name: 'showcase',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: './build',
      PM2_SERVE_PORT: 3000,
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
      PM2_SERVE_PORT: 3000
    },
    error_file: '/home/logs/showcase/error.log',
    out_file: '/home/logs/showcase/out.log',
    time: true
  }]
}; 
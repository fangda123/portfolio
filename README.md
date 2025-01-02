# CI/CD Pipeline with GitHub Actions

This README describes how to set up a CI/CD pipeline using GitHub Actions to automatically build and deploy a Node.js application to a server using PM2 whenever new code is pushed.

## Prerequisites

- Node.js and npm installed on local machine and server
- PM2 installed on server
- GitHub account and repository for the project
- SSH access to the deployment server

## Steps

1. **Configure GitHub Actions**
   - In your GitHub repo, go to the "Actions" tab and click "New workflow"
   - Choose the "Node.js" workflow template 
   - Rename the workflow file (e.g. `ci-cd.yml`) and customize the steps:
     - Change the trigger to run on push to the main branch
     - Add a step to run `npm ci` and `npm run build`
     - Add a step to copy files to the server using `scp`
     - Add a step to run deployment commands on the server using `ssh`

2. **Configure PM2 on the Server**
   - SSH into your server
   - Navigate to the project directory
   - Create a PM2 ecosystem config file (e.g. `ecosystem.config.js`):
   ```js 
   module.exports = {
     apps: [{
       name: 'my-app',
       script: './build/index.js',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
     }]
   };
   ```
   - Start the app with `pm2 start ecosystem.config.js`

3. **Add Deployment Scripts**
   - In your project, create a `scripts` directory
   - Add a `deploy.sh` script to copy files and restart PM2:
   ```bash
   #!/bin/bash
   scp -r build/ user@server:/path/to/app
   ssh user@server "cd /path/to/app && pm2 restart ecosystem.config.js --env production" 
   ```
   - Make the script executable with `chmod +x scripts/deploy.sh`

4. **Commit and Push**
   - Commit your changes including the GitHub Actions workflow file
   - Push to the main branch to trigger the CI/CD pipeline
   - View the "Actions" tab to monitor the workflow

Now whenever you push new code, GitHub Actions will automatically build your Node.js app, copy the files to your server, and restart the app using PM2. You have a working CI/CD pipeline!

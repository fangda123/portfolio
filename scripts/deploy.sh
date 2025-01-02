#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Copy build files to server
echo "📦 Copying build files to server..."
scp -r build/ $REMOTE_USER@$REMOTE_HOST:/home/$REMOTE_USER/showcase

# SSH into server and deploy
echo "🔧 Deploying to server..."
ssh $REMOTE_USER@$REMOTE_HOST << 'EOF'
  cd /home/$REMOTE_USER/showcase

  # Install global dependencies if needed
  if ! command -v serve &> /dev/null; then
    echo "📥 Installing serve package globally..."
    npm install -g serve
  fi

  if ! command -v pm2 &> /dev/null; then
    echo "📥 Installing PM2 globally..."
    npm install -g pm2
  fi

  # Copy ecosystem file if not exists
  if [ ! -f "ecosystem.config.js" ]; then
    echo "📄 Copying ecosystem config..."
    cp ../ecosystem.config.js .
  fi

  # Start/Restart PM2
  echo "🔄 Starting/Restarting PM2..."
  if pm2 list | grep -q "showcase"; then
    echo "♻️ Restarting existing PM2 process..."
    pm2 restart showcase --env production
  else
    echo "🆕 Starting new PM2 process..."
    pm2 start ecosystem.config.js --env production
  fi

  # Save PM2 process list
  echo "💾 Saving PM2 process list..."
  pm2 save

  echo "✅ Deployment completed successfully!"
EOF 
#!/bin/bash

# Navigate to the project root
cd ~/restaurantrankerv2

# Pull latest changes
git pull origin main

# Navigate to the frontend directory
cd frontend

# Install dependencies
yarn install

# Build the application
yarn build

# Navigate back to project root
cd ..

# Restart PM2 process
pm2 restart ecosystem.config.js

Deployment Instructions
Prerequisites

AWS EC2 instance running Ubuntu 20.04 LTS
Domain name pointed to the EC2 instance's IP address
Node.js 18.x and Yarn installed on the server
PM2 installed globally on the server

Steps

Clone the repository:
Copygit clone https://gitlab.com/Ouroborosv2/restaurantrankerv2.git
cd restaurantrankerv2

Install dependencies:
Copycd frontend
yarn install

Build the application:
Copyyarn build

Set up PM2:
Copypm2 start ecosystem.config.js
pm2 startup systemd
pm2 save

Set up Nginx:
[Include Nginx configuration steps]
Set up SSL with Let's Encrypt:
[Include Let's Encrypt configuration steps]
Update environment variables:
[Include instructions for setting up .env file]
Final deployment:
Copy./deploy.sh


Troubleshooting

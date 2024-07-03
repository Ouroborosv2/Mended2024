# RestaurantRankerv2
Deployment Checkpoints
v1.0.0-clean-deploy

Date: [Current Date]
Description: Initial clean deployment build with working configuration
Key Components:

Next.js frontend
PM2 for process management
Nginx as reverse proxy
ESLint properly configured
SSL set up with Let's Encrypt

RestaurantRanker
Project Overview
RestaurantRanker is a web application that allows users to rank restaurants using pairwise comparisons, integrates AI for predictive scoring, and provides personalized restaurant recommendations.
Technology Stack

Frontend: Next.js with TypeScript
Backend: Node.js with Express and TypeScript
Database: PostgreSQL
ORM: Prisma
API: GraphQL with Apollo Server
Authentication: NextAuth.js with Google OAuth
Deployment: AWS EC2, PM2, Nginx
Version Control: GitLab

Key Components

Next.js frontend application
PM2 for process management
Nginx as a reverse proxy
ESLint for code quality
SSL certification with Let's Encrypt

Deployment
For detailed deployment instructions, please refer to DEPLOYMENT.md
Troubleshooting
ESLint Issues
If encountering ESLint errors during build:

Verify ESLint configuration in frontend/eslint.config.mjs
Ensure all necessary ESLint plugins are installed in frontend/package.json
Run yarn install in the frontend directory to update dependencies
If issues persist, temporarily set ignoreDuringBuilds: true in next.config.js

PM2 Process Management
If the application doesn't start or restart properly:

Check PM2 logs: pm2 logs
Verify ecosystem.config.js configuration
Ensure the correct working directory is set in PM2 config
Manually start the application to check for errors: npm start in the frontend directory

Nginx Configuration
If the site is not accessible or SSL is not working:

Check Nginx configuration in /etc/nginx/sites-available/mended.ca
Verify Nginx is running: sudo systemctl status nginx
Check Nginx error logs: sudo cat /var/log/nginx/error.log
Ensure SSL certificates are properly set up and not expired

Database Connectivity
If experiencing database connection issues:

Verify PostgreSQL is running: sudo systemctl status postgresql
Check database connection string in .env file
Ensure Prisma schema matches the database schema
Run npx prisma db push to sync schema changes

DNS and Domain Issues
If the domain is not pointing to the correct server:

Verify A record in DNS settings points to the correct IP address
Check for proper propagation (can take up to 48 hours)
Temporarily test using the server's IP address directly

Environment Variables
Ensure the following environment variables are set:

DATABASE_URL: PostgreSQL connection string
NEXTAUTH_URL: Full URL of your application (e.g., https://mended.ca)
NEXTAUTH_SECRET: A random string for NextAuth.js security
GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: For Google OAuth

Continuous Integration/Deployment

GitLab CI/CD can be set up for automated deployments
Refer to .gitlab-ci.yml for CI/CD configuration

Development Workflow

Develop and test features locally
Push changes to GitLab
CI/CD pipeline runs tests and linting
Manual deployment using ./deploy.sh script

Important Notes

Always backup the database before major changes
Regularly update dependencies and check for security vulnerabilities
Monitor server resources, especially during high traffic periods
Keep SSL certificates up to date (Let's Encrypt auto-renewal should be configured)

Support and Contribution
For support, please open an issue in the GitLab repository. Contributions are welcome via merge requests.

Enhanced troubleshooting:
After reviewing our conversation, here's a summary of the key troubleshooting steps and issues we addressed:

SSH Key Authentication Issue:
Problem: Unable to connect to EC2 instance due to permission denied (publickey) error.
Solution:
a. Adjusted permissions on the .pem file:
Copy
chmod 400 restaurantranker-key.pem
b. Ensured correct file permissions using PowerShell:
Copy
icacls "C:\path\to\key.pem" /inheritance:r
icacls "C:\path\to\key.pem" /grant:r "%USERNAME%":"(R)"
ESLint Configuration Issues:
Problem: ESLint errors during build process.
Solution:
a. Updated eslint.config.mjs with correct configuration:
javascript
Copy
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import { fixupConfigRules } from "@eslint/compat";

export default [
  // ... (configuration details)
];
b. Updated package.json with correct ESLint-related dependencies.
c. Ran yarn install to ensure all dependencies were correctly installed.
Yarn Command Recognition:
Problem: Yarn commands not recognized.
Solution:
a. Ensured commands were run from the correct directory (frontend).
b. Updated package.json scripts section to include:
json
Copy
"scripts": {
  "lint": "next lint"
}
ESLint Initial Setup:
Problem: Configuring ESLint for the first time.
Solution:
a. Ran next lint and chose "Strict (recommended)" configuration.
b. Created .eslintrc.json with:
json
Copy
{
  "extends": "next/core-web-vitals"
}
Domain Configuration:
Problem: Setting up domain to point to EC2 instance.
Solution:
a. Added A records in GoDaddy DNS settings:
@ (root domain) pointing to EC2 public IP
www subdomain pointing to EC2 public IP
b. Kept existing CNAME record for www subdomain.
SSL Certificate Setup:
Problem: Securing site with SSL using Let's Encrypt.
Solution:
a. Installed certbot:
Copy
sudo apt install certbot python3-certbot-nginx -y
b. Ran certbot to obtain and install certificate:
Copy
sudo certbot --nginx -d mended.ca -d www.mended.ca
To recreate this build:

Clone the repository
Checkout this tag: git checkout v1.0.0-clean-deploy
Follow the deployment instructions in DEPLOYMENT.md


## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/Ouroborosv2/restaurantrankerv2.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/Ouroborosv2/restaurantrankerv2/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

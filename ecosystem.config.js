module.exports = {
  apps: [{
    name: "restaurantranker",
    script: "npm",
    args: "start",
    cwd: "./frontend",
    env: {
      NODE_ENV: "production",
    },
    watch: false,
    instances: "max",
    exec_mode: "cluster",
    max_memory_restart: "1G",
  }],
  deploy: {
    production: {
      user: "ubuntu",
      host: "mended.ca",
      ref: "origin/main",
      repo: "git@gitlab.com:your-username/restaurantrankerv2.git",
      path: "/home/ubuntu/restaurantrankerv2",
      "post-deploy": "./deploy.sh"
    }
  }
};

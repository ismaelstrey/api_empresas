module.exports = {
  apps: [
    {
      name: "bac-empresas-api",
      script: "./dist/server.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3002,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
      },
      wait_ready: true,
      listen_timeout: 3000,
      kill_timeout: 2000,
    },
  ],
};

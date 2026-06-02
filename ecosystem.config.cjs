const config = {
  apps: [{
    name: 'Qubimallshop-frontend',
    script: './server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};

module.exports = config;
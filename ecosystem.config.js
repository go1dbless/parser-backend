module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'NODE_ENV=production npm run start',
      cwd: '/var/www/html',
    },
  ]
}

const child = require('child_process');
const service = process.argv[2];
child.execSync(`cd services/${service} && serverless deploy`, {
    stdio: 'inherit'
})
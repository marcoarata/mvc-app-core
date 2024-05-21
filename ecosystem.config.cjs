const fs = require('fs')

const envFile = fs.readFileSync('.env', 'utf8')
const envLines = envFile.split('\n')
const envVar = {}
envLines.forEach(line => {
    const [key, ...rest] = line.split('=')
    if (key && rest.length > 0) {
        envVar[key.trim()] = rest.join('=').trim().replace(/^"(.*)"$/, '$1')
    }
})

module.exports = {
    apps: [
        {
            name: "MVC App",
            script: "./main.js",
            watch: true,
            env: {
                "NODE_ENV": envVar["NODE_ENV"],
                "PORT": envVar["PORT"],
                "DATABASE_URL": envVar["DATABASE_URL"],
            }
        }
    ]
}

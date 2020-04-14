module.exports = {
    apps: [
        {
            name: 'widgets-telegram-notifier',
            script: 'app.js',
            env: {
                NODE_PATH: '.',
                COMMON_VARIABLE: 'true',
                PORT: '8005',
            },
        },
    ],
    deploy: {
        staging: {
            user: 'teamcity',
            host: '35.157.207.192',
            ref: 'origin/staging',
            repo: 'git@github.com:Waiviogit/widgets-telegram-notifier.git',
            path: '/home/teamcity/widgets-telegram-notifier',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env staging',
        },
    },
};

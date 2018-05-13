module.exports = {
    Large: require('./large').default,
    Small: require('./small').default,
    Navigation: {
        Parent: require('./navigation').default,
        Tabs: require('./tabs').default
    },
    User: {
        Menu: require('./user-menu').default
    }
} 
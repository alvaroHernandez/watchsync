module.exports = {
    webpack: (config) => {
        // Fixes npm packages that depend on certain modules
        config.node = {
            ...config.node,
            http2: 'empty',
            fs: 'empty',
            child_process : 'empty',
            net : 'empty',
            tls: 'empty',
            dns: 'empty',

        }

        return config
    }
}

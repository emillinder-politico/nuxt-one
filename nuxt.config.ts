// https://nuxt.com/docs/api/configuration/nuxt-config
import {useLogger} from "@nuxt/kit";

export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        api: {
            base: 'https://qared.int.politico.com',
            path: '/spring/cms-api/v1/'
        },
        // Keys within public, will be also exposed to the client-side
        public: {
            // Gets slapped on api calls but not used anywhere
            apiBase: '/api'
        }
    },
    nitro: {
        // does not work for server calls because nuxt emulates calls and this bypasses devProxy.
        // devProxy: {
        //   '/api/wakka': {
        //     target: 'https://qared.int.politico.com/spring/cms-api/v1/lumos/config',
        //     changeOrigin: true,
        //
        //   }
        // }
    },
    // global alias to nitro:routeRules
    // routeRules: { // great but not overridable at runtime
    //     '/api/wakka/**': {
    //         proxy: 'https://qared.int.politico.com/spring/cms-api/v1/lumos/**'
    //     }
    // }
    hooks: {
        close: () => {
            useLogger('lifecycle').info("Shutting down")
        }
    }
})

import {joinURL} from "ufo";

export default defineEventHandler(async (event) => {
        // get runtime config
        const apiBase = useRuntimeConfig().apiBase
        // check the path
        const path = event.path.replace(/^\/api\/wakka\//, '') // /api/wakka/config -> config
        const target = joinURL(apiBase, path)

        // proxy it
        return proxyRequest(event, target) // helper from H3 which nitro is based on
    }
)

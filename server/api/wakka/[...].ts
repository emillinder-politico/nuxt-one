import {joinURL} from "ufo";
import { consola } from "consola";

export default defineEventHandler(async (event) => {
        // get runtime config
        const apiBase = useRuntimeConfig().api.base
        const apiBasePath = useRuntimeConfig().api.path
        // check the path
        const path = event.path.replace(/^\/api\/wakka\//, '') // /api/wakka/config -> config
        const target = joinURL(apiBase, apiBasePath, path)

        consola.info(`Proxying request to ${target}`)

        // proxy it
        return proxyRequest(event, target) // helper from H3 which nitro is based on
    }
)

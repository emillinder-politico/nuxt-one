export default defineEventHandler((event) => {
    return {
        "html": "<h1>Hello World</h1><script>console.info('Hello World from the script. Indeed!')</script>"
    }
})

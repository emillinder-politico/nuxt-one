export default defineEventHandler(async (event) => {
    // this actually blocks calls to /api/wakka/lumos/config_blocked even with the [...].ts to proxy it
    return {
        no: "for you"
    }
})

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        return navigateTo('/login') // O la ruta que prefieras
    }

})
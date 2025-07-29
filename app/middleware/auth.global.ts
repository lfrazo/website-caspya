export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/') {
        return navigateTo('/login') // O la ruta que prefieras
    }

})
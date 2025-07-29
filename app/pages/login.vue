<script setup lang="ts">
definePageMeta({
  layout: 'clean',
})

const email = ref('');
const emailInputRef = ref<HTMLInputElement | null>(null)

// Asignar foco al input al entrar a la página
onMounted(() => {
  emailInputRef.value?.focus()
})


const clearForm = () => {
  email.value = '';
  password.value = '';
}

const login = () => {
  alert('Login');
  clearForm();
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <NuxtImg class="mx-auto w-auto" src="/logos/caspya-principal-degradado.png" alt="Caspya logo" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Iniciar sesión</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-white">Correo electrónico</label>
          <div class="mt-2">
            <input v-model="email" type="email" name="email" ref="emailInputRef" id="email" autocomplete="email" required="true" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-caspya-purple-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-caspya-purple-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-caspya-purple-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Iniciar</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-400">
        ¿No tienes una cuenta?
        {{ ' ' }}
        <a href="#" class="font-semibold text-caspya-purple-400 hover:text-caspya-purple-300">Regístrate</a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
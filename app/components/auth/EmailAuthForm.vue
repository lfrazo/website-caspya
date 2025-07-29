<script setup lang="ts">

const email = ref('');
const emailInputRef = ref<HTMLInputElement | null>(null)

// Asignar foco al input al entrar a la página
onMounted(() => {
  emailInputRef.value?.focus()
})

const login = () => {
  alert('Login');
  clearForm();
}

const clearForm = () => {
  email.value = '';
}

</script>

<template>
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
</template>

<style scoped>

</style>
<script setup lang="ts">
import EmailAuthForm from '~/components/auth/EmailAuthForm.vue';
import FormDivider from '~/components/forms/FormDivider.vue';
import ThirdPartyAuth from '~/components/auth/ThirdPartyAuth.vue';

definePageMeta({
  layout: 'clean',
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <NuxtImg class="mx-auto w-auto" src="/logos/caspya-principal-degradado.png" alt="Caspya logo" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Iniciar sesión</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <EmailAuthForm/>
      <FormDivider
          backgroundColor="bg-caspya-midnight-blue"
          textColor="text-white"
      >
        <template #text>Otras opciones</template>
      </FormDivider>
      <ThirdPartyAuth/>
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
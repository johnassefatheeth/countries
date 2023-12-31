<template>

    <div class="w-screen items-center justify-center flex">
      <RouterLink active-class="text-2xl m-2 font-bold" to="/" class="m-4">Home</RouterLink>
      <RouterLink active-class="text-2xl m-2 font-bold" to="/about" class="m-4">About</RouterLink>
    </div>
    <RouterView/>
 
</template>

<script setup>

import {RouterView, RouterLink} from "vue-router"


</script>
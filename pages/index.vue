<template>
  <h1>This is a test for Nuxt 3 modules</h1>

  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>

  <div>
    <nuxt-link to="/sso/login">Login</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const counter = useState('counter')
</script>
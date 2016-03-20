<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <comp-a level="1"></comp-a>
  </div>
</template>

<script>
import CompA from './components/CompA'

export default {
  components: {
    CompA
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

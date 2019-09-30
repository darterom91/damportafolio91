<template>
  <div id="app">
    <cHeader/>
    <cSection/>
    <cFooter/>
  </div>
</template>

<script>

import cHeader from '@/components/C-Header.vue'
import cFooter from '@/components/C-Footer.vue'
import cSection from '@/components/C-Section.vue'
export default {
  components: {
    cHeader,
    cFooter,
    cSection
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

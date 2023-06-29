<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>

import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: {
    NavbarComp,
    FooterComp
 }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(0, 0, 51);

}


/* a tags basically */
router-link{
  text-decoration: none;
  color: white;
}
</style>

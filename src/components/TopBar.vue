<template>
  <div id="top-bar" class="flex flex-column flex-row-ns items-center pa3 flex-grow-0">
    <div id="menuIcon" class="block absolute top-0 right-0 ma2 pointer" v-on="{ click: menuIconToggle }" v-bind:class="{ active: isActive }">
      <div class="bar1 bg-near-black "></div>
      <div class="bar2 bg-near-black "></div>
      <div class="bar3 bg-near-black "></div>
    </div>
    <div class="flex-grow-0 w4 w3-ns">
      <router-link :to="{ name: 'Home' }"><img src="../assets/coconuttmonkeyicon.svg" class="grow"></router-link>
    </div>
    <div id="menu" class="flex-grow-1 w-100">
      <ul class="list pl0 tr-ns w-100">
        <li class="db dib-ns mb3 mb0-ns" v-for="route in routes">
          <router-link class="db dib-ns grow link pv2 ph3 ba bw1 b--blue blue hover-bg-blue hover-white fw7 ttl tc ml2" :class="route.name" :to="{ name: route.name }">{{route.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import router from '../router'
var routes = router.options.routes

export default {
  name: 'TopBar',
  data: function() {
    return {
      routes: routes,
      isActive: false
    }
  },
  methods: {
    menuIconToggle: function() {
      this.isActive = !this.isActive

      if (this.isActive) {
        console.log('Active')
        document.getElementById('menu').classList.add('active')
      } else {
        console.log('Not Active')
        document.getElementById('menu').classList.remove('active')
      }
    }
  }
}
</script>

<style scoped>
.Project {
  display: none;
}
</style>

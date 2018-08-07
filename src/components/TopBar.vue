<template>
  <div id="top-bar" class="flex flex-column flex-row-ns items-center pa3 flex-grow-0 relative">
    <div class="flex flex-row flex-grow-0 items-center justify-between w-100 w-50-ns">
      <router-link :to="{ name: 'Home' }"><img src="../assets/coconuttmonkeyicon.svg" class="flex-grow-0 grow w3"></router-link>
      <h1 class="dib ma0 mh3 mr0-ns tc tl-ns flex-grow-1">Matt Ondo</h1>
      <div id="menuIcon" class="flex-grow-0 ma2 pointer" v-on="{ click: menuIconToggle }" v-bind:class="{ active: isActive }">
        <div class="bar1 bg-near-black "></div>
        <div class="bar2 bg-near-black "></div>
        <div class="bar3 bg-near-black "></div>
      </div>
    </div>
    <div id="menu" class="flex-grow-1 flex-grow-0-ns w-100 absolute relative-ns left-0 bg-white-80" style="">
      <ul class="list pl0 tr-ns w-100 ma3">
        <li v-for="(route, id) in routes" :key="id" class="db dib-ns mb3 ma2-ns" :class="route.name" >
          <router-link class="db dib-ns grow link pv2 ph3 bg-white ba bw1 b--blue blue hover-bg-blue hover-white fw7 ttl tc" :to="{ name: route.name }">{{route.name}}</router-link>
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
#menu {
  display:none;
  z-index: 999999; 
  top: 100%;
}
#menu.active {
  display: flex;
}
#menu ul > li > a.is-active {
  background-color: #357edd;
  color: #ffffff;
}
#menuIcon .bar1,
#menuIcon .bar2,
#menuIcon .bar3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
}
#menuIcon.active .bar1 {
  -webkit-transform: rotate(-45deg) translate(-8px, 7px);
  transform: rotate(-45deg) translate(-8px, 6px);
}
#menuIcon.active .bar2 {
  opacity: 0;
}
#menuIcon.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
@media screen and (min-width: 30rem) {
  #menuIcon {
    display: none;
  }
  #menu {
    display:flex;
    top: unset;
  }
}
</style>

<template>
  <div id="app" class="flex flex-column min-vh-100">
    <TopBar />
    <main class="flex-grow-1 w-100 ph4 mw8 center">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
require("tachyons");
require("jquery");
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { TopBar, Footer }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700');
body {
  font-family: 'Ubuntu', sans-serif;
}
.lh0 {
  line-height: 0;
}
#menu {
  display:none;
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
  }
}
</style>

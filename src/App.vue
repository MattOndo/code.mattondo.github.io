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

.html       { background-color: #fc480b; color: #fff; }
.js         { background-color: #ffe200; color: #000; }
.css        { background-color: #2296f3; color: #fff; }
.php        { background-color: #8e9ed1; color: #fff; }
.email      { background-color: green; color: #fff; }
.marketo    { background-color: #7b63b0; color: #fff; }
.eloqua     { background-color: #ed2129; color: #fff; }
.pardot     { background-color: #009ddc; color: #fff; }
.hubspot    { background-color: #ff7958; color: #fff; }
.mailchimp  { background-color: #239AB9; color: #fff; }
.ion        { background-color: #ff5d00; color: #fff; }
.wordpress  { background-color: #0087be; color: #fff; }
.vue        { background-color: #4fc08d; color: #fff; }

@media screen and (min-width: 30rem) {
  #menuIcon {
    display: none;
  }
  #menu {
    display:flex;
  }
}
</style>

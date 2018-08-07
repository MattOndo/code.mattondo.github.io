<template>
  <div id="app" class="flex flex-column min-vh-100">
    <TopBar />
    <main class="flex-grow-1 w-100">
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
</style>

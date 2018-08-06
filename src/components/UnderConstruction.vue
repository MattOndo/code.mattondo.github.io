<template>
  <div>
    <h1>Whoops, ya caught me!</h1>
    <h3 class="lh-title">Please check back in for more content! Or, check out the <router-link :to="{ name: 'About' }" class="link blue">about page</router-link></h3> to learn a little about me.
  </div>
</template>


<script>
export default {
  name: 'UnderConstruction'
}
</script>
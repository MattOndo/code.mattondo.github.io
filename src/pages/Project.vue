<template>
  <div class="w-100">
      <div class="mb0 w-100 flex flex-row items-center justify-between">
        <h1>{{ this.data.name }}</h1>
        <div>
          <small v-for="(technology, index) in this.data.technologies" 
                  class="dib ma1 br1 pa1 f7" 
                  v-bind:class="technology.name">
                  {{ technology.name }}
          </small>
        </div>
      </div>
      <div class="w-100 cf">
        <div class="w-100 w-60-ns pa3-ns fl">
          <div v-html="this.data.description"></div>
        </div>
        <div class="w-100 w-40-ns pa3-ns fl">
          <figure class="ma0 aspect-ratio aspect-ratio--1x1">
              <div :style="'background-image: url('+this.data.thumbnail+')'" class="aspect-ratio--object cover"></div>
          </figure>
        </div>
      </div>
  </div>
</template>

<script>
import projects from '@/data/projects.js'

export default {
  name: 'Project',
  data: function () {
    for (var i = 0; i < projects.length; i++) {
      var project = projects[i]
      if (project.pathname === this.$route.params.pathname) {
        return {
          data: project
        }
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

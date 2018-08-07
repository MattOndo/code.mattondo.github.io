<template>
  <div class="flex flex-column flex-row-ns flex-wrap items-top ph4 mw8 center">
    <div v-for="(project, index) in projects" 
         :key="index"
         class="flex w-100 w-33-m w-25-l relative">
      <PortfolioSingle 
        :name="project.name" 
        :pathname="project.pathname" 
        :thumbnail="project.thumbnail" 
        :technologies="project.technologies" />
    </div>
  </div>
</template>

<script>
import PortfolioSingle from '@/components/PortfolioSingle'
import projects from '@/data/projects.js'

export default {
  name: 'Portfolio',
  components: { PortfolioSingle },
  data: function () {
    return {
      title: 'Portfolio',
      projects: projects
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

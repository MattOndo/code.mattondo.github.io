<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <p class="lh-copy">
        My name is Matt. I am located in Denver, CO where I spend as much time 
        as possible out in the Rocky Mountains. In the winter you can bet your butt I'm skiing. 
        In the summer you'll find me mountain biking, camping, hiking, and/or enjoying a classic park day.
      </p>
      <p class="lh-copy">
        Yes, I have a job&ndash;a pretty great one! My current post is {{ jobTitle }} at {{ employer }}. 
        I've been with {{ employer }} since {{ startDate }}. As a {{ jobTitle }}, I {{ jobDescription }}.
      </p>
    </div>
    <div>
      <InstaFeed />
    </div>
  </div>
</template>

<script>
import InstaFeed from '@/components/InstaFeed'

export default {
  name: 'About',
  components: {
    InstaFeed
  },
  data () {
    return {
      title: '👋 Hello there!',
      jobTitle: 'Senior Front-end Developer',
      employer: 'Intelligent Demand',
      startDate: 'February, 2016',
      jobDescription: 'play a critical role in the Front-End Development practice at ID and own the conversion of original visual design concepts to bulletproof front-end implementations. I have experience in building, testing and deploying multi-touch, multi-channel marketing campaigns in marketing automation platform software. Additionally, I own the buildout, testing and deployment of interactive content and websites using WordPress and other CMS platforms'
    }
  }
}
</script>

<style scoped>

</style>

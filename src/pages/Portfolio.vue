<template>
  <div>
    <UnderConstruction />
  </div>
</template>

<script>
import UnderConstruction from '@/components/UnderConstruction'

export default {
  name: 'Portfolio',
  components: { UnderConstruction },
  data () {
    return {
      title: 'Portfolio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

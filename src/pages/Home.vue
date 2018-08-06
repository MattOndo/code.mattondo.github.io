<template>
  <div>
    <UnderConstruction />
  </div>
</template>

<script>
import UnderConstruction from '@/components/UnderConstruction'

export default {
  name: 'Home',
  components: { UnderConstruction },
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

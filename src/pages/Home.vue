<template>
  <div class="w-100">
    <div class="ph4 mw8 center">
      <div class="flex flex-column flex-row-ns justify-around">
        <div class="flex flex-column w-25 tc">
          <div class="flex flex-grow-1 justify-center">
            <img class="w-70" :src="codeIcon" alt="Developer">
          </div>
          <p>Web Developer</p>
        </div>
        <div class="flex flex-column w-25 tc">
          <div class="flex flex-grow-1 justify-center">
            <img class="w-70" :src="codeIcon" alt="Developer">
          </div>
          <p>Modern Marketer</p>
        </div>
        <div class="flex flex-column w-25 tc">
          <div class="flex flex-grow-1 justify-center">
            <img class="w-70" :src="humanIcon" alt="Developer">
          </div>
          <p>Human</p>
        </div>
      </div>
    </div>
    <div class="w-100 relative bg-skew-n3-blue white pv5 mv5">
      <div class="ph4 mw8 center">
        <h2 class="mt0">Another Heading</h2>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.</p>
      </div>
    </div>
  </div>
</template>

<script>
import codeIcon from '@/assets/code_icon.svg'
import humanIcon from '@/assets/human_icon.svg'

export default {

  name: 'Home',
  data () {
    return {
      title: 'Home',
      codeIcon: codeIcon,
      humanIcon: humanIcon,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-skew-n3-blue:after {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  z-index: -99;
  background-color: #357edd;
  width: 100%;
  height: 100%;
  transform: skewY(-3deg);
}
</style>

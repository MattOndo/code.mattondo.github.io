<template>
    <div class="flex flex-column w-100 pa2 ma2 pointer grow shadow-1 hover-shadow-2">
        <router-link :to=" '/project/' + this.pathname " :data="this.name" class="link">
            <figure class="ma0 aspect-ratio aspect-ratio--1x1">
                <div :style="'background-image: url('+this.thumbnail+')'" class="aspect-ratio--object cover"></div>
            </figure>
            <div class="flex-grow-1">
                <div class="mt2">
                    <strong class="near-black">{{ this.name }}</strong>
                </div>
                <div class="flex flex-row flex-wrap items-center f7 lh3 mt1 tc ttu">
                    <small v-for="(technology, index) in this.technologies" 
                           :key="index"
                           class="dib ma1 br1 pa1" 
                           v-bind:class="technology.name">
                           {{ technology.name }}
                    </small>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'PortfolioSingle',
    props: {
        name: String,
        thumbnail: String,
        technologies: Array,
        pathname: String
    }
}
</script>

<style scoped>
    .shadow-1 {transition: all 300ms linear;}
    .hover-shadow-2:hover {box-shadow: 0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );}
</style>

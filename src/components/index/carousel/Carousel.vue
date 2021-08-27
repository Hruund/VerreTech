<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__prev" @click.prevent="prev">Précédente</button>
        <button class="carousel__nav carousel__next" @click.prevent="next">Suivante</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index: 0,
            slides: []
        }
    },
    mounted() {
        this.slides = this.$children
        this.slides.forEach((slide, i) => {
            slide.index = i
        })
    },

    computed: {
        slidesCount() {
            return this.slides.length
        }
    },

    methods: {
        next () {
            this.index++
            if (this.index >= this.slidesCount) {
                this.index = 0
            }
        }, 
        prev() {
            this.index--
            if (this.index < 0) {
                this.index = this.slidesCount -1
            }
        }
    }
} 
</script>

<style>
    .carousel {
        position: relative;
    }

    /*.carousel__nav {
        Style à faire
    }*/

    /*.carousel__nav.carousel__next {
         Style à faire 
    }*/

</style>
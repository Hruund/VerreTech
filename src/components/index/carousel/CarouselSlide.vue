<template>
    <transition name="slide">
        <div v-show="visible">
            Index: {{ index }}
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            index: 0
        }
    },

    computed: {
        visible () {
            return this.index === this.$parent.index;
        }
    }
    
}
</script>

<style>
    .slide-enter-active {
        animation: slideIn 5s;
    }

    .slide-enter-active {
        animation: slideOut 5s;
        position: absolute;
        top: 0;
        left: 0;
    }

    @keyframes slideIn {
        from { transform: translateX(100%);}
        to { transform: translateX(0);}
    }

    @keyframes slideOut {
        from { transform: translateX(0);}
        to { transform: translateX(-100%);}
    }
</style>
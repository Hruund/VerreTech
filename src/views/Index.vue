<template>
    <div>
        <AppHome :titre1="titre1" :titre2="titre2" />
        <AppAbout />
    </div>
</template>
<script>
import AppHome from "../components/AppHome.vue"
import AppAbout from "../components/AppAbout.vue"

export default {
    components: { 
        AppHome,
        AppAbout
    }
}
</script>
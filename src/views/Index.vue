<template>
    <div>
        <AppHome :titre1="Nouveautés" :titre2="Nouveautés" />
        <AppAbout />
        <AppFaq />
    </div>
</template>
<script>
import AppHome from "../components/index/AppHome.vue"
import AppAbout from "../components/index/AppAbout.vue"
import AppFaq from "../components/AppFAQ.vue"

export default {
    components: { 
        AppHome,
        AppAbout,
        AppFaq
    },
    mounted(){
        console.log("process.env.SERVER_IP : ",process.env.VUE_APP_SERVER_IP);
    }
}
</script>
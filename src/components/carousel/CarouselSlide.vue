<template>
    <div>
        <img :src="image"/>
        <slot></slot>
    </div>
</template>

<script>
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";

export default {
    
    data() {
        return {
            image: image1, image2, image3
        }
    }
}
</script>
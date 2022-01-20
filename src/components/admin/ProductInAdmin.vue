<template>
    <tr>
        <td>{{name}}</td>
        <td>{{description}}</td>
        <td>{{price}}€</td>
        <td>{{category}}</td>
        <td>
            <button class="btn btn-primary mr-2" @click="clickOnEditItem">Modifier</button>
            <button class="btn btn-danger" @click="clickOnDeleteItem">Supprimer</button>
        </td>
    </tr>
</template>
<script>
/*
    <th>NOM DE L'ARTICLE</th>
    <th>DESCRIPTION</th>
    <th>PRIX</th>
    <th>CATEGORIE</th>
    <th>ACTION</th>
*/
const axios = require('axios');
export default {
    data() {
        return{
            name: this.$attrs.name,
            description: this.$attrs.description,
            price: this.$attrs.price,
            category: this.$attrs.category,
            id: this.$attrs.id
        }
    },
    mounted() {
    },
    methods:{
        /**
        * Redirection vers la page de modification d'article
        */
        clickOnEditItem(){
            this.$router.push(`/admin/${this.id}`);
        },
        /**
        * Suppression de l'article de la BDD
        */
        clickOnDeleteItem(){
            axios.delete(`http://195.110.58.84:5000/api/product/${this.id}`)
            .then(response => {
                console.log(response);
                this.$emit('deleteItem',this.id);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

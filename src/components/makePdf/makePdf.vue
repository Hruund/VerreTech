<template>
    <div class="container mx-auto bg-gray-100 p-6 h-screen">
        <div class="text-4xl font-bold mb-6">génération de pdf</div>
        <div class="lg:w-3/5 lg:mx-auto p-8 border-gray-900 rounded-lg border border-4">
            <table class="mx-auto">
                <thead>
                    <tr>
                        <th>Nom de l'article</th>
                        <th>Quantité</th>
                        <th>Prix unité</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.name">
                        <td>{{ product.name }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.total }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold mt-6 py-2 px-4 rounded" @click="exportPdf">
                générer un pdf
            </button>
        </div>
    </div>
</template>


<script>
    import jsPDF from 'jspdf'
    import 'jspdf-autotable'
    export default {
        data(){
            return{
                products: [
                    {
                        name:"Parroi de douche",
                        quantity:1,
                        price:59,
                        total: "prixTotal"
                    },
                    {
                        name:"Cloison",
                        quantity:2,
                        price:49,
                        total: "prixTotal"
                    },
                    {
                        name:"Miroir",
                        quantity:1, 
                        price:29,
                        total: "prixTotal"
                    }
                ],
                
            }
        },
        computed:{
            /**
            * Calcul du total des articles
            */
            totalProduct(){
                let sum = 0;
                for (let i = 0; i < this.products.length; i++) {
                    sum += (parseFloat(this.products[i].price) * parseFloat(this.products[i].quantity));
                }
                return sum;
            }
        },
        methods: {
            exportPdf(){
                var vm = this
                var columns = [
                    {
                        title: "Nom de l'article",
                        dataKey: "name"
                    },
                    {
                        title: "Quantité",
                        dataKey: "quantity"
                    },
                    {
                        title: "Prix unité",
                        dataKey: "price"
                    },
                    {
                        title: "Total",
                        dataKey: "total"
                    }
                ];
                let pdfName = 'facture'; 
                var doc = new jsPDF();

                doc.text("Header", 50, 40);
                doc.autoTable(columns, vm.products);
                doc.save(pdfName + '.pdf');
            }
        }
    }
</script>
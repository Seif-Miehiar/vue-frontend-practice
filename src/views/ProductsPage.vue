<template>
    <div>
        <div class="page-wrap">
            <div class="grid-wrap">
                <div class="product-item" v-for="product in products" v-bind:key="product.id">
                    <img v-bind:src="product.imageUrl" />
                    <h3 class="product-name"> {{ product.name }}</h3>

                    <div class="product-price">${{ product.price }}</div>

                    <router-link v-bind:to="'/products/' + product.id">
                        <button>View Details</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { products } from "../fake-data"
export default {
    name: 'ProductsPage',
    data() {
        return {
            products
        }

    }
}
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
    padding: 50px;
    margin-left: 50px;
    margin-right: 50px;
}

.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
}

.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
}

a {
    width: 100%;
}

button {
    width: 100%;
}
</style>
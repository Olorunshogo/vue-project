
<script>
    export default { 
        props: {
            foodName: {
                type: String,
                required: true
            },
            foodDesc: {
                type: String,
                required: false,
                default: 'This is the default description.',
                validator: function(value) {
                    if( 20<value.length && value.length<100 ) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        data() {
            return {
                name: 'Apples',
                message: 'I like Apples.',
                click: 0,
                foodIsFavorite: this.isFavorite
            }
        },
        methods: {
            count(number) {
                this.click+=number
            },
            countDown(number) {
                this.click+=number
            },
            toggleFav() {
                this.$emit('toggle-fav', this.foodName)
            }
        }
    }
</script>


<template>
    <div v-on:click="counts" class="food">
        <h4>{{ foodName }}</h4>
        <img src="/src/Images/img_quality.svg" alt="Image of the favorite food." v-show="foodIsFav"/>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFav">Favorite</button>
        <p id="red">You have clicked me {{ click }} time(s).</p>
        <button v-on:click="count(5)">+5</button>
        <button v-on:click="count(2)">+2</button>
        <button v-on:click="countDown(-1)">-1</button>
    </div>
</template>

<style scoped>
    .food {
        border: 1px dashed #ddd;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightseagreen;
    }

    .food > div:hover {
        cursor: pointer;
    }

    .food img {
        height: 2em;
    }

    h4 {
        font-weight: 700;
        font-size: 1.1rem;
        text-align: center;
     }
</style>
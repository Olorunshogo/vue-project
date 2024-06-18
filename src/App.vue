<script>
    export default {
        data() {
            return {
                header: "Main header",
                foods: [
                    { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true},
                    { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false},
                    { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false},
                    { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true},
                    { name: 'Cake', desc: 'Cake is something sweet that tastes good.', favorite: false}
                ],
                // This is for the todo-item component
                newItem: '',
                items: ['Buy Apples', 'Make Pizza', 'Mow the lawn']
            };
        },
        methods: {
            removeItem() {
                this.foods.splice(1,1)
            },
            receiveEmit(foodId) {
                const foundFood = this.foods.find(
                    food => food.name === foodId
                );
                foundFood.favorite = !foundFood.favorite
            },
            // This is for the todo-item component
            addItem() {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        }
    };

</script>

<template>
  

    <div class="container">
        <h1>{{ header }}</h1>

        <div class="note">
        <p>
        <span class="noteB">NOTE:</span> Note: In the example above,
        <span class="note-red">export default</span> makes it possible for 'main.js' to catch the data with the import <span class="note-red">App from './App.vue'</span> so that it can be mounted on the <span class="note-red">&LeftAngleBracket;div id="app"&RightAngleBracket;&LeftAngleBracket;/div&RightAngleBracket;</span>tag inside 'index.html'.
        </p>
        </div>
        
        <div class="row">    
            <h2>Food</h2>
            <p>My favorite image has an image attached to it.</p>  

            <foodItem v-for="x in foods"
                :key="x.name"
                :food-name="x.name"
                :food-desc="x.desc"
                :is-favorite="x.favorite"
                @toggle-fav="receiveEmit" />
            <button @click=removeItem>Remove Item</button>
            <foodItem foodName="Pizza"
                foodDesc="Pizza has a Bread base with Tomato sauce, Cheese, and toppings on top."
                v-bind:isFavorite="false" />
            <foodItem foodName="Rice"
                foodDesc="Rice is a type of grain that people"
                v-bind:isFavorite="false" />
            <foodItem foodName="Dodo and Yoghurt"
                foodDesc="I don't like the DODO to be deeply fried and the YOGHURT should be at least, 3L." />
        </div>

        <div class="row">
            <h3>Todo List</h3>
            <ul>
                <todo-item v-for="x in items" :key="x"
                :item-name="x" style="background-color: lightgreen"></todo-item>
                <input type="text" placeholder="Add things to do here..." @keydown.enter="addItem" v-model="newItem"> 
                <button v-on:click="addItem">Add</button>
            </ul>
        </div>
    </div>




</template>

<style scoped>

    .noteB {
        font-weight: 600;
        font-size: 18px;
    }

    input[type=text] {
        margin: 20px 5px;
        border: none;
        border-radius: 8px;
        outline: none;
        height: 35px;
        width: 250px;
    }
    button {
        border: none;
        border-radius: 8px;
        outline: none;
        height: 35px;
        width: 70px;
        position: relative;
        left: -70px;
        top: 0px;
    }
</style>

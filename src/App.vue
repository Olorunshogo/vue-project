<script>
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'


    export default {
        data() {
            return {
                activeComp: ''
            }
        },
        components: {
            'animal-collection':  AnimalCollection,
            'food-items': FoodItems 
        }
    };
</script>

<template>
  

    <div class="container">

        <div class="row" title="HTTP">
            <h2>HTTP</h2>
            <p>HTTP stands for Hyper Text Transfer Protocol</p>
            <p>Our browser makes HTTP requests all the time in the background when we browse the Internet. When we access an Internet page, our browser (the client) sends several HTTP requests to make the server send us the page we want with all the relevant files and data as HTTP responses.</p>
            <p>
                The most common kinds of HTTP requests are <span class="note-red">POST()</span>, <span class="note-red">GET()</span>, <span class="note-red">PUT()</span>, <span class="note-red">PATCH()</span>, and <span class="note-red">DELETE()</span>. 
                Learn more about the different kinds of HTTP requests on our <span v-bind:src="http">HTTP Request Method Page</span>.
                Learn more about what HTTP is on our <span v-bind:src="whatIsHttp">What is HTTP</span> page.
            </p>
        </div>

        <div>
            <p>Choose what part of this page you want to see:</p>
            <button @click="activeComp = 'animal-collection'">Animals</button>
            <buttons @click="activeComp = 'food-items'">Food</buttons>
            <br>
            <div>
                <component :is="activeComp"></component>
            </div>
        </div>

        
    </div>


</template>

<style scoped> 
    .noteB {
        font-weight: 600;
        font-size: 18px;
    }

    input[type=text] {
        margin: 20px 0;
        padding: 4px;
        border: none;
        border-radius: 8px;
        outline: none;
        height: 36px;
        width: 300px;
        background-color: #eee;
        caret-color: brown;
        transition: all 0.5s ease-in-out;
    }
    input[type=text]:focus {
        background-color: #ccc;
        width: 350px;
    }

    input[type=text]::placeholder {
        color: #444;
        padding-left: 8px;
    }

    button {
        border: none;
        border-radius: 8px;
        outline: none;
        height: 35px;
        width: 100px;
        font-size: 13px;
        font-weight: 600;
        transition: all 0.5s ease-out;
    }

    button:hover {
        background-color: #ccc;
    }

    button:active {
        transform: scale(0.96);
    }

    .inputBtn {
        position: relative;
        left: -70px;
        top: 0px;
    }
</style>

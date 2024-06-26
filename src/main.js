
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import AnimalCollection from './components/AnimalCollection.vue'
import FoodItems from './components/FoodItems.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

app.use(router);

const  app = createApp(App)
app.mount("#app")

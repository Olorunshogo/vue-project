
import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import TodoItem from './components/TodoItem.vue'


const foodItem = createApp(App)
foodItem.component("foodItem", FoodItem)
foodItem.mount("#app")

const todoItem = createApp(App)
todoItem.component("todo-item", TodoItem)
todoItem.mount('#app1')
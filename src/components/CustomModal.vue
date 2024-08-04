

<script setup>
    import { ref } from 'vue'

    const modalSpace = ref('modal')

    const show = ref(true)

    function openModal() {
        show.value = !show.value
    }

</script>

<template>
    <div>
        <div class="button-container">
            <button class="button" @click="openModal">
                <slot>Open Modal</slot>
            </button>
        </div>

        <div class="modal-space" v-show="show">  
            <!-- <div v-on:click="close" class="times">&times;</div>           -->
            <div class="modal-container"> 
                <div>
                    <h2>
                        <slot name="header"></slot>
                    </h2>
                </div>
                <div>
                    <slot name="body"></slot>
                    <slot></slot>
                </div>
                <div>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    /* === The container of the modal === */
    .modal-space {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 0 auto;
        padding: 1.4rem;
        background-color: rgba(10,10,10, 0.8);
        transition: all 1s ease-in-out;
    }

    /* === The content of the modal ===  */
    .modal-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    .modal-container > div {
        margin: 4px 0;
    }

    .times {
        color: #eee;
        font-size: 28px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        margin: 0 10%;
        transition: all 0.5s ease-in-out;
    }

    .times:hover,
    .times:focus {
        color: #aaa;
        text-decoration: none;
        cursor: pointer;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        margin: 2rem 10%;
   }

    .button {
        padding: 0.7rem 1.5rem;
        background: purple;
        color: #eee;
        border-radius: 6px;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>

<script setup>
  import CustomModal from '../components/CustomModal.vue'

</script>

<template>
  <div class="modal">
    <h1>This is the Modal Page</h1>

    <CustomModal>
      <template #header>
        <h2>Title</h2>
      </template>

      <template v-slot:body>
        <p>Body part 1</p>
        <p>Body part 2</p>
      </template>

      <template v-slot:footer>
        <footer>
          <p>Some serenre can be here.</p>
        </footer>
      </template>
    </CustomModal>

     <CustomModal>
      <template #header>
        <h2>Title</h2>
      </template>

      <template v-slot:body>
        <p>Body part 1</p>
        <p>Body part 2</p>
      </template>

      <template v-slot:footer>
        <footer>
          <p>Some serenre can be here.</p>
        </footer>
      </template>
    </CustomModal>

    
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .modal {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
function onSubmit() {
  console.info("convert currency");
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <button>Convert</button>
  </form>
</template>

<style scoped lang="scss"></style>

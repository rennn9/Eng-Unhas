<script setup>
const props = defineProps({
  page: String,
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderNoJumb class="grow-0"></HeaderNoJumb>
    <Breadcrumb :pageName="page"></Breadcrumb>
    <slot></slot>
    <Footer class="grow-0"></Footer>
  </div>
</template>

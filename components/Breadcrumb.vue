<script setup>
const props = defineProps({
  pageName: String,
});
</script>

<template>
  <div class="flex items-center px-[273px] w-full h-[120px] bg-[#063d63]">
    <span class="text-sm text-white"
      ><a href="/">Home</a> > {{ pageName }}</span
    >
  </div>
</template>

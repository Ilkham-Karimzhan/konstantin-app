<script setup lang='ts'>
defineOptions({ name: 'KButton' })

defineProps<{}>()
</script>
<template>
  <button
    class='py-[14px] px-[32px] bg-[#F05A00] hover:bg-[#212526] transition border border-[#F05A00]  text-white uppercase rounded-md'>
    <slot />
  </button>
</template>

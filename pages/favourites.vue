<script lang='ts' setup>
import Card from '~/components/slider/ui/card.vue'

useHead({
  title: 'Избранные товары'
})
</script>
<template>
  <div class='py-6 max-w-[1300px] my-0 mx-auto'>
    <p class='flex gap-2.5 text-[#8A8A8A]'>
      <span>Главная</span>
      <span>/</span>
      <span>Избранное</span>
    </p>
    <h2 class='text-[40px] font-bold mb-8 leading-[48px]'>Избранное</h2>
    <div class='flex flex-col gap-6'>
      <p class='text-base font-medium'>15 товаров</p>
      <div class='flex flex-wrap gap-5'>
        <card v-for='item in 10' :key='item' />
      </div>
    </div>
  </div>
</template>


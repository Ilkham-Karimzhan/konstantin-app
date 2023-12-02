<script lang='ts' setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ArrowSmall from '@/shared/icons/arrow-small.svg'


defineOptions({ name: 'KSlider' })

const slider = ref(null)
</script>
<template>
  <Carousel ref='slider'>
    <Slide v-for='slide in 10' :key='slide'>
      <div class='carousel__item'>{{ slide }}</div>
    </Slide>
  </Carousel>
  <div class='flex items-center gap-[60px]'>
    <p class='text-3xl font-bold leading-8'>Малярные товары</p>
    <div class='flex gap-2.5'>
      <button
        class='flex items-center justify-center w-[40px] h-[40px] bg-white focus:scale-90 transition hover:scale-110 hover: rounded-full cursor-pointer'
        @click='slider.prev'>
        <arrow-small class='text-2xl' filled />
      </button>
      <button
        class='flex items-center justify-center w-[40px] h-[40px] bg-white focus:scale-90 transition hover:scale-110  rounded-full cursor-pointer'
        @click='slider.next'
      >
        <arrow-small class='rotate-180 text-2xl' filled />
      </button>
    </div>
  </div>
</template>

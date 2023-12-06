<script lang='ts' setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ArrowSmall from '@/shared/icons/arrow-small.svg'
import Card from '~/components/slider/ui/card.vue'


defineOptions({ name: 'KSlider' })

const slider = ref(null)

const props = defineProps<{
  title: string
  itemsToShow: number
  items: Product[]
  filter: string
}>()

const filteredItems = computed(() => {
   return props.items.filter((i) => i.description.type === props.filter)
})
</script>
<template>
  <div class='flex items-center gap-[60px] mb-5'>
    <p class='text-3xl font-bold leading-8'>{{ title }}</p>
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
  <div class="w-full">
   <Carousel ref='slider' :itemsToShow='itemsToShow' :mouseDrag='false' snapAlign='start'>
    <Slide v-for='slide in filteredItems' :key='slide'>
      <card :item="slide" />
    </Slide>
  </Carousel>
  </div>
</template>

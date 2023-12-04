<script lang='ts' setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import HeartIcon from '@/shared/icons/heart.svg'
import ChartIcon from '@/shared/icons/chart.svg'
import CheckIcon from '@/shared/icons/check.svg'
import CartIcon from '@/shared/icons/cart.svg'


defineOptions({ name: 'SwiperCard' })
</script>
<template>
  <div class='relative flex flex-col max-w-[310px] p-[12px] bg-white rounded-[5px] mb-[4px]'>
    <div class='flex justify-between'>
      <span v-if='true' class='py-1 px-1.5 bg-[#180A3E] text-white text-sm'>Новинка</span>
      <span v-else class='py-1 px-1.5 bg-[#FC573B] text-white text-sm'>Акция</span>
      <div class='flex gap-2'>
        <heart-icon class='gray-icon' filled stroke='#DEDBDB' />
        <chart-icon class='gray-icon' filled />
      </div>
    </div>
    <Carousel ref='slider'>
      <Slide v-for='slide in 2' :key='slide'>
        <img alt='item' src='@/shared/assets/item.png'>
      </Slide>
      <Slide v-for='slide in 2' :key='slide'>
        <img alt='item' src='@/shared/assets/item2.png'>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <p class='text-base font-medium text-left mt-[14px] mb-[12px]'>Эмаль Condor ПФ-115 жёлтая <br> 1,8 кг</p>
    <div class='flex justify-start gap-[34px] items-center'>
      <div class='flex gap-2.5'>
        <span class='text-xl font-semibold'>500 ₽</span>
        <span class='text-xl text-[#DEDBDB] line-through'>720 ₽</span>
      </div>
      <span class='flex items-center gap-1 text-sm text-[#126935] leading-[16px]'>
        <span class='h-4'>
          <check-icon filled />
        </span> в наличии
      </span>
    </div>
    <button
      class='absolute bottom-0 right-0 py-3 px-3.5 border border-[#F05A00] hover:bg-[#F05A00] transition rounded-tl-[5px] rounded-br-[5px]'>
      <cart-icon class='orange-cart text-[32px]' filled />
    </button>
  </div>
</template>
<style lang='scss' scoped>
button:has(.orange-cart):hover {
  .orange-cart {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(174deg) brightness(102%) contrast(102%);
  }
}

.orange-cart {
  filter: brightness(0) saturate(100%) invert(41%) sepia(99%) saturate(3572%) hue-rotate(10deg) brightness(102%) contrast(102%);
}

.gray-icon {
  filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(1126%) hue-rotate(203deg) brightness(104%) contrast(72%);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0) saturate(100%) invert(41%) sepia(99%) saturate(3572%) hue-rotate(10deg) brightness(102%) contrast(102%);
  }
}

:deep .carousel__pagination {
  justify-content: space-between;
  gap: 4px;

  &-item {
    width: 100%;
  }

  &-button {
    width: 100%;

    &::after {
      width: 100%;
      height: 2px;
      background-color: #DEDBDB;
    }

    &--active {
      &::after {
        background-color: #FFB78B;
      }
    }
  }
}

</style>

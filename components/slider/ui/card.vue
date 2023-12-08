<script lang='ts' setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import CheckIcon from '@/shared/icons/check.svg'
import CartIcon from '@/shared/icons/cart.svg'
import CheckCircleIcon from '@/shared/icons/check-circle.svg'
import { useCartStore } from '~/stores/cart'

const deleteFromCart = async (item: Product) => {
  deleteFromCartStore(item)
  const { error } = await props.client.from('Cart').delete().eq('id', item.id)
  console.warn(error)
}
const addToCart = async (item: Product) => {
  addToCartStore(item)
  const { error } = await props.client.from('Cart').insert(item)
  console.warn(error)
}

const store = useCartStore()
const { storeCartItems } = storeToRefs(store)
const { addToCartStore, deleteFromCartStore, getItems } = store

const props = defineProps<{
  item: Product
  client: object
}>()

</script>
<template>
  <div class='relative flex flex-col max-w-[310px] p-[12px] bg-white rounded-[5px] mb-[4px]'>
    <div class='flex justify-between'>
      <span v-if='false' class='py-1 px-1.5 bg-[#180A3E] text-white text-sm'>Новинка</span>
      <span v-else-if='item.on_sale' class='py-1 px-1.5 bg-[#FC573B] text-white text-sm'>Акция</span>
      <div class='flex gap-2'>
        <!--        <heart-filled-icon v-if='likedItems.some((i) => i.id === item.id)' class='text-[24px] cursor-pointer'-->
        <!--                           filled @click='deleteFromLiked(item)' />-->
        <!--        <heart-icon v-else class='gray-icon' filled @click='addToLiked(item)' />-->
        <!--        <chart-icon class='gray-icon' filled />-->
      </div>
    </div>
    <Carousel ref='slider'>
      <Slide v-for='(slide, idx) in item.description.src' :key='idx'>
        <NuxtImg :src='slide' alt='item' class='w-[200px] h-[164px]' />
      </Slide>
      <Slide v-for='(slide, idx) in item.description.src' :key='idx'>
        <NuxtImg :src='slide' alt='item' class='w-[200px] h-[164px]' />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <p class='text-base font-medium text-left mt-[14px] mb-[12px]'>{{ item.name }}<br> {{ item.description.weight }}</p>
    <div class='flex justify-start gap-[34px] items-center'>
      <div class='flex gap-2.5'>
        <span class='text-xl font-semibold'>{{ item.price }}₽</span>
        <span v-if='item.on_sale' class='text-xl text-[#DEDBDB] line-through'></span>
      </div>
      <span class='flex items-center gap-1 text-sm text-[#126935] leading-[16px]'>
        <span v-if='item.count !== 0' class='h-4'>
          <check-icon filled />
        </span>
        в наличии
      </span>
    </div>
    <button
      v-if='storeCartItems.some((i) => i.id === item.id)'
      class='white-button absolute bottom-0 right-0 py-3 px-3.5 border border-[#F05A00] hover:bg-white bg-[#F05A00] hover:bg-[#F05A00] transition rounded-tl-[5px] rounded-br-[5px]'
      @click='deleteFromCart(item)'>
      <check-circle-icon class='white-cart text-[32px]' filled />
    </button>
    <button
      v-else
      class='absolute bottom-0 right-0 py-3 px-3.5 border border-[#F05A00] hover:bg-[#F05A00] transition rounded-tl-[5px] rounded-br-[5px]'
      @click='addToCart(item)'>
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

.white-button:hover .white-cart {
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

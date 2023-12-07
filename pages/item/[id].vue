<script lang='ts' setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import KButton from '~/components/ui/k-button/index.vue'
import HeartIcon from '@/shared/icons/heart.svg'
import ChartIcon from '@/shared/icons/chart.svg'
import { client } from '~/helpers/useClient'
import { useCartStore } from '~/stores/cart'

useHead({
  title: 'Товар - №123'
})

const route = useRoute()
const id = route.params.id

const store = useCartStore()
const { storeCartItems } = storeToRefs(store)
const { addToCartStore, deleteFromCartStore } = store

const links: string[] = ['Описание', 'Характеристики', 'Доставка', 'Отзывы']
const currentLink = ref<string>(links[0])

const { data } = await useAsyncData('goods', async () => {
  const { data } = await client.from('Goods').select('*').eq('id', id)
  return data
})

const addToCart = async (item: Product) => {
  const { error } = await client.from('Cart').insert(item)
  addToCartStore(item)
  console.warn(error)
}

const item: Product = await data.value[0]
const activeImg = ref<number>(0)
</script>
<template>
  <div class='py-6 max-w-[1300px] my-0 mx-auto'>
    <p class='flex gap-2.5 mb-10'>
      <span>Главная</span>
      <span>/</span>
      <span>Товар</span>
      <span>/</span>
      <span>№{{ id }}</span>
    </p>
    <div class='flex justify-between gap-[104px] bg-white p-[60px]  mb-0.5 rounded-[5px]'>
      <div class='flex flex-col max-w-[514px] items-center'>
        <Carousel ref='slider' v-model='activeImg' snapAlign='start'>
          <Slide v-for='img in item.description.src' :key='img'>
            <img :src='img' alt='item'>
          </Slide>
        </Carousel>
        <div class='flex gap-4 justify-center'>
          <div v-for='(img, idx) in item.description.src' :key='idx' class='item w-[90px]'>
            <img :src='img' alt='item' @click='activeImg = idx'>
          </div>
        </div>
      </div>
      <div class='flex flex-col items-start'>
        <div class='flex flex-col gap-5 mb-[60px]'>
          <h3 class='text-[30px] font-bold'>{{ item.name }}</h3>
          <p v-if='item.count > 0' class='text-base text-[#126935]'>В наличии</p>
          <p class='text-base max-w-[388px]'>{{ item.description.colour }}</p>
        </div>
        <p class='flex gap-[15px] items-center mb-[60px]'><span
          class='text-[30px] leading-[32px]'>{{ item.price }}₽</span></p>
        <div class='flex gap-4'>
          <k-button v-if='storeCartItems.some((i) => i.id === item.id)' @click='deleteFromCartStore'>В КОРЗИНЕ
          </k-button>
          <k-button v-else @click='addToCart(item)'>В КОРЗИНУ</k-button>
          <chart-icon class='icon-black text-[45px]' filled />
          <HeartIcon class='icon-black text-[45px]' filled />
        </div>
      </div>
    </div>
    <div class='bg-white py-[40px] px-[60px] rounded-[5px]'>
      <ul class='flex gap-[60px] text-xl text-[#DEDBDB] mb-[36px]'>
        <li v-for='(link, idx) in links' :key='idx' :class="{'text-[#000000]': link === currentLink}"
            class='cursor-pointer font-bold'
            @click='currentLink = link'>{{ link }}
        </li>
      </ul>
      <ul v-if="currentLink === 'Описание'" class='flex flex-col gap-3'>
        <li><span class='text-base font-medium mr-6 '>Расход:</span> {{ item.description.flow }}</li>
        <li><span class='text-base font-medium mr-6 '>Назначение:</span>{{ item.description.assignment }}</li>
        <li><span class='text-base font-medium mr-6 '>Тип работ:</span>{{ item.description.type_of_operation }}</li>
        <!--        <li><span class='text-base font-medium mr-6 '>Упаковка:</span>{{ item.description.base }}</li>-->
        <!--        <li><span class='text-base font-medium mr-6 '>Время высыхания:</span>{{ item.description. }}</li>-->
      </ul>
      <div v-else>Страница находится в разработке. Приносим свои извинения.</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.item {
  border-radius: 5px;
  background: #FFF;
  cursor: pointer;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.05);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 5px 20px 0px rgba(240, 90, 0, 0.20);
    scale: 1.1;
  }
}

.icon-black {
  filter: brightness(0) saturate(100%) invert(0%) sepia(9%) saturate(7500%) hue-rotate(76deg) brightness(101%) contrast(107%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(37%) sepia(99%) saturate(3645%) hue-rotate(14deg) brightness(106%) contrast(101%);
  }
}
</style>

<script lang='ts' setup>
import HeartIcon from '@/shared/icons/heart.svg'
import ChartIcon from '@/shared/icons/chart.svg'
import UserIcon from '@/shared/icons/user.svg'
import CartIcon from '@/shared/icons/cart.svg'
import Navigation from '~/components/k-header/ui/navigation.vue'
import Modal from '~/components/ui/modal/index.vue'

const isOpen = ref<boolean>(false)
</script>
<template>
  <header class='bg-[#212526]'>
    <div class='max-w-[1300px] my-0 mx-auto'>
      <div class='flex justify-center items-center'>
        <div class='text-2xl leading-6 tracking-normal mr-[132px] text-white'>
          <nuxt-link to='/'>
            <span class='text-[#F05A00]'>I</span>nst <br>
            <span class='inline-block w-4 h-4 bg-[#F05A00]'></span>
            roo<span class='text-[#F05A00]'>m</span>
          </nuxt-link>
        </div>
        <div class='mr-[114px] text-white text-base'>
          <p>Время работы: 10:00–20:00</p>
        </div>
        <div class='flex flex-col gap-[10px] items-start mr-[68px] text-lg'>
          <p class='text-white'>+7 706 681-13-19</p>
          <button class='text-[#F05A00] text-sm hover:underline' @click='isOpen = true'>Заказать звонок</button>
        </div>
        <div class='flex gap-4 items-center'>
          <ul class='flex cursor-pointer'>
            <nuxt-link to='/favourites'>
              <li class='flex justify-center items-center w-[96px] h-[96px] bg-[#3B3B3B] transition hover:bg-[#F05A00]'>
                <heart-icon class='text-[32px]' filled />
              </li>
            </nuxt-link>
            <li class='flex justify-center items-center w-[96px] h-[96px] bg-[#3B3B3B] transition hover:bg-[#F05A00]'
                @click='isOpen = true'>
              <chart-icon class='text-[32px]' filled />
            </li>
            <li class='flex justify-center items-center w-[96px] h-[96px] bg-[#3B3B3B] transition hover:bg-[#F05A00]'
                @click='isOpen = true'>
              <user-icon class='text-[32px]' filled />
            </li>
            <nuxt-link to='/cart'>
              <li class='flex justify-center items-center w-[96px] h-[96px] bg-[#3B3B3B] transition hover:bg-[#F05A00]'>
                <cart-icon class='text-[32px]' filled />
              </li>
            </nuxt-link>
          </ul>
          <p class='flex flex-col text-white'>
            <span>Товаров на сумму</span>
            <span class='font-bold'>2 000 ₽</span>
          </p>
        </div>
      </div>
    </div>
    <navigation />
    <modal v-if='isOpen' @close='isOpen = false' />
  </header>
</template>

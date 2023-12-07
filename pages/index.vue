<script lang='ts' setup>
import KButton from '@/components/ui/k-button/index.vue'
import KSlider from '@/components/slider/index.vue'
import ArrowRight from '~/components/ui/k-button/arrow-right.vue'
import { client } from '~/helpers/useClient'


useHead({
  title: 'Главная - InstRoom'
})

const items = ref<Product[]>([])
const { data } = useAsyncData('goods', async () => {
  const { data } = await client.from('Goods').select('*')
  items.value = data
  return data
})
</script>
<template>
  <section class='bg-[#212526]'>
    <div class='flex gap-5 max-w-[1300px] my-0 mx-auto py-5'>
      <div
        class='relative w-[640px] h-[488px] p-6 bg-[url(@/shared/assets/main-1.jpg)] bg-cover rounded-md'>
        <h2 class='text-[40px] leading-[48px] text-white font-bold mb-[147px]'>DeWALT - Инструмент с настоящим
          характером</h2>
        <k-button>ПЕРЕЙТИ В КАТАЛОГ</k-button>
        <div class='absolute bottom-0 left-0'>
          <arrow-right />
        </div>
      </div>
      <div
        class='relative w-[311px] h-[488px] p-4 bg-[url(@/shared/assets/main-2.jpg)] bg-cover rounded-md'>
        <h2 class='text-xl leading-[48px] text-white font-bold mb-[147px]'>Акции</h2>
        <div class='absolute bottom-0 left-0'>
          <arrow-right />
        </div>
      </div>
      <div class='flex flex-col gap-5'>
        <div
          class='relative w-[310px] h-[234px] p-4 bg-[url(@/shared/assets/main-3.jpg)] bg-cover hover: rounded-md'>
          <h2 class='text-xl leading-[48px] text-white font-bold mb-[147px]'>Новое поступление</h2>
          <div class='absolute bottom-0 left-0'>
            <arrow-right />
          </div>
        </div>
        <div
          class='relative w-[310px] h-[234px] p-4 bg-[url(@/shared/assets/main-4.jpg)] bg-cover rounded-md'>
          <h2 class='text-xl leading-[48px] text-white font-bold mb-[147px]'>Акции на сверла</h2>
          <div class='absolute bottom-0 left-0'>
            <arrow-right />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class='flex flex-col gap-[74px] py-[82px]'>
    <div class='gap-5 max-w-[1300px] my-0 mx-auto'>
      <k-slider :client='client' :items='data.concat(data).concat(data)' :items-to-show='4' filter='Малярные товары'
                title='Малярные товары'
      />
    </div>
    <div class='gap-5 max-w-[1300px] my-0 mx-auto'>
      <k-slider :client='client' :items='data.concat(data).concat(data)' :items-to-show='4' filter='Сезонное'
                title='Спецодежда'
      />
    </div>
    <div class='gap-5 max-w-[1300px] my-0 mx-auto'>
      <k-slider :client='client' :items='data.concat(data).concat(data).concat(data)' :items-to-show='4'
                filter='Спецодежда'
                title='Сезонное'
      />
    </div>
  </section>
</template>

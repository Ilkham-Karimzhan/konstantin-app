<script lang='ts' setup>
import Modal from '~/components/ui/modal/index.vue'
import Item from '~/pages/cart/ui/item.vue'
import KButton from '~/components/ui/k-button/index.vue'
import { client } from '~/helpers/useClient'

useHead({
  title: 'Корзина'
})

const isOpen = ref<boolean>(false)
const cartItems = ref<Product[]>([])
const getItems = async () => {
  await useAsyncData('goods', async () => {
    const { data } = await client.from('Cart').select('*')
    cartItems.value = data
    return data
  })
}
getItems()
</script>
<template>
  <div class='py-6 max-w-[1300px] my-0 mx-auto'>
    <p class='flex gap-2.5 text-[#8A8A8A]'>
      <span>Главная</span>
      <span>/</span>
      <span>Корзина</span>
    </p>
    <h2 class='text-[40px] font-bold mb-8 leading-[48px]'>Корзина</h2>
    <div class='flex flex-col gap-6 mb-5'>
      <table>
        <thead>
        <tr>
          <th>Название</th>
          <th>Стоимость</th>
          <th>Количество</th>
          <th>Итого</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <item v-for='(item, idx) in cartItems' :key='idx' :item='item' @update='getItems' />
        </tbody>
      </table>
    </div>
    <div class='ml-[auto] flex flex-col gap-5 w-[310px]'>
      <div class='flex justify-between pb-5 border-b border-[#DEDBDB]'>
        <p class='text-xl font-bold'>К оплате</p>
        <p class='text-xl font-bold text-[#F05A00]'>{{ cartItems?.reduce((acc, i: Product) => acc + i.price, 0) }}₽</p>
      </div>
      <k-button data-modal-target='popup-modal' data-modal-toggle='popup-modal' @click='isOpen = true'>ПЕРЕЙТИ
        К ОФОРМЛЕНИЮ
      </k-button>
    </div>
  </div>
  <modal v-if='isOpen' @close='isOpen = false' />
</template>
<style lang='scss' scoped>
table {
  border-collapse: separate;
  border-spacing: 0 2px;
}

th {
  text-align: left;
  padding-bottom: 24px;
}
</style>

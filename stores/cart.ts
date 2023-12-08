import { defineStore } from 'pinia'
import { client } from '~/helpers/useClient'


export const useCartStore = defineStore('cart', () => {
  const storeCartItems = ref<Product[]>([])

  const getItems = async () => {
    return await client.from('Cart').select('*').then((res) => {
      return res.data
    })
  }

  const addToCartStore = (product: Product): void => {
    storeCartItems.value.push(product)
  }
  const deleteFromCartStore = (product: Product): void => {
    storeCartItems.value.splice(storeCartItems.value.map((i) => i.id).indexOf(product.id), 1)
  }


  return { storeCartItems, addToCartStore, deleteFromCartStore, getItems }
})

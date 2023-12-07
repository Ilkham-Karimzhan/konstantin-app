import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', () => {
  const storeCartItems = useStorage('cart', [])

  const addToCartStore = (product: Product): void => {
    storeCartItems.value.push(product)
  }
  const deleteFromCartStore = (product: Product): void => {
    storeCartItems.value.splice(storeCartItems.value.indexOf(product), 1)
  }


  return { storeCartItems, addToCartStore, deleteFromCartStore }
})

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', () => {
   const cartItems = useStorage('cart', []) 

  const addToCart = (product: Product): void => {
   cartItems.value.push(product)
  }
  const deleteFromCart = (product: Product): void => {
   cartItems.value.splice(cartItems.value.indexOf(product), 1)
  }


  return { cartItems, addToCart, deleteFromCart }
})

import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addToCart = (product) => {
    cart.value.push(product)
  }
  const deleteFromCart = (product) => {
    cart.value.splice(cart.value.indexOf(product), 1)
  }


  return { cart, addToCart }
})

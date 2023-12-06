import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', () => {
  const likedItems = ref<Product[]>([])

  const addToLiked = (product: Product): void => {
   likedItems.value.push(product)
  }
  const deleteFromLiked = (product: Product): void => {
   likedItems.value.splice(likedItems.value.indexOf(product), 1)
  }


  return { likedItems, addToLiked, deleteFromLiked }
})

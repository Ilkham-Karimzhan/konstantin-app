<script setup lang='ts'>
import Burger from '@/shared/icons/burger.svg'

defineOptions({ name: 'Dropdown' })

type link = {
  title: string
  href: string
  child?: link[]
}

defineProps<{
  title: string
  links: link[]
}>()

const isOpen = ref<boolean>(false)
</script>
<template>
  <div
    class='relative inline-block text-left '
    @focus='isOpen = !isOpen'
    @focusout='isOpen = false'
    tabindex='0'>
    <div>
      <button
        type='button'
        @click='isOpen = !isOpen'
        class='inline-flex w-full justify-center items-center text-white gap-x-[15px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-white hover:ring-[#F05A00] transition focus:outline-none focus:ring-[#F05A00]'
        id='menu-button' aria-expanded='true' aria-haspopup='true'>
        <burger filled class='w-[24px]' />
        {{ title }}
      </button>
    </div>
    <div
      v-if='isOpen'
      class='absolute border border-white right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
      role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabindex='-1'>
      <div role='none'>
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <nuxt-link v-for='(link, idx) in links' :key='idx' href='#'
                   class='text-gray-700 block px-4 py-2 text-sm text-white transition hover:text-[#F05A00] hover:bg-gray-100'
                   role='menuitem' tabindex='-1' id='menu-item-0'>
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </div>

</template>


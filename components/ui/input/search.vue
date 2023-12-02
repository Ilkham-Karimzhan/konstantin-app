<script lang='ts' setup>
defineOptions({ name: 'SearchInput' })

defineProps<{
  placeholder: string
}>()

const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>
<template>
  <form class='flex items-center w-[310px]'>
    <label class='sr-only' for='simple-search'>Search</label>
    <div class='relative w-full'>
      <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <svg aria-hidden='true' class='w-4 h-4' fill='none' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' stroke='black' stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2' />
        </svg>
      </div>
      <input id='simple-search' v-model='modelValue' :placeholder='placeholder'
             class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
             placeholder='Search branch name...'
             required type='text'>
    </div>
  </form>
</template>

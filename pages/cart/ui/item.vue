<script lang='ts' setup>
import PlusIcon from '~/shared/icons/plus.svg'
import MinusIcon from '~/shared/icons/minus.svg'
import XIcon from '~/shared/icons/x.svg'

const count = ref<number>(1)
</script>
<template>
  <tr class='bg-white'>
    <td class='flex gap-[81px]'>
      <img alt='item' src='@/shared/assets/item4.png'>
      <p class='flex flex-col gap-1'>
        <span class='text-sm text-[#8A8A8A] transition cursor-pointer hover:text-[#F05A00]'>Краски и эмали</span>
        <span class='text-base font-medium'>Эмаль Condor ПФ-115</span>
      </p>
    </td>
    <td class='w-[25%]'>
      <p class='relative text-base font-medium'>
        500 ₽
        <span v-if='true' class='absolute top-[-14px] text-[#DEDBDB] text-sm line-through'>170 ₽</span>
      </p>
    </td>
    <td class='w-[25%]'>
      <div class='flex items-center gap-2'>
        <span @click='count !== 0 ? count-- : count;'><MinusIcon class='cursor-pointer text-2xl' filled /></span>
        <span class='border-l border-r border-[#DEDBDB] px-[15px] h-[40px] flex items-center'>
          <input v-model='count'
                 :style='{ width: `${count.toString().length * 10}px` }'
                 type='text'>
        </span>
        <span @click='count++'><PlusIcon class='cursor-pointer text-2xl' filled /> </span>
      </div>
    </td>
    <td>
      <p class='relative text-base font-medium'>
        {{ 500 * count }} ₽
      </p>
    </td>
    <td class='w-[24px]'>
      <button>
        <x-icon class='text-2xl' filled />
      </button>
    </td>
  </tr>
</template>
<style lang='scss' scoped>
td:first-child {
  padding: 14px 45px;
}

td:last-child {
  padding: 14px 20px;
}
</style>

<script lang='ts' setup>
import PlusIcon from '~/shared/icons/plus.svg'
import MinusIcon from '~/shared/icons/minus.svg'
import XIcon from '~/shared/icons/x.svg'

const count = ref<number>(1)
defineProps<{
  item: Product
}>()

const emit = defineEmits('update')
const client = useSupabaseClient()

const { data } = await useAsyncData('goods', async () => {
  const { data } = await client.from('Cart').select('*')
  return data
})

const deleteFromCart = async (item: Product) => {
  const { error } = await client.from('Cart').delete().eq('id', item.id)
  emit('update')
  console.warn(error)
}
</script>
<template>
  <tr class='bg-white'>
    <td class='flex gap-[81px]'>
      <NuxtImg :src='item.description.src[0]' alt='item' height='60px' width='60px' />
      <p class='flex flex-col gap-1'>
        <span class='text-sm text-[#8A8A8A] transition cursor-pointer hover:text-[#F05A00]'>{{ item.description.type
          }}</span>
        <span class='text-base font-medium'>{{ item.name }}</span>
      </p>
    </td>
    <td class='w-[25%]'>
      <p class='relative text-base font-medium'>
        {{ item.price }} ₽
      </p>
    </td>
    <td class='w-[25%]'>
      <div class='flex items-center gap-2'>
        <span @click='count !== 0 ? count-- : count;'><MinusIcon :class='{"text-red": count === item.count }'
                                                                 class='cursor-pointer text-2xl' filled /></span>
        <span class='border-l border-r border-[#DEDBDB] px-[15px] h-[40px] flex items-center'>
          <input v-model='count'
                 :style='{ width: `${count.toString().length * 10}px` }'
                 type='text'>
        </span>
        <span @click='count <= item.count ? count++ : count;'>
         <PlusIcon
           :class='{"text-red": count === item.count }'
           class='cursor-pointer text-2xl'
           filled
         />
      </span>
      </div>
    </td>
    <td>
      <p class='relative text-base font-medium'>
        {{ item.price }} ₽
      </p>
    </td>
    <td class='w-[24px]'>
      <button @click='deleteFromCart(item)'>
        <x-icon class='orange text-2xl' filled />
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

.orange {
  &:hover {
    filter: brightness(0) saturate(100%) invert(41%) sepia(99%) saturate(3572%) hue-rotate(10deg) brightness(102%) contrast(102%);
  }
}
</style>

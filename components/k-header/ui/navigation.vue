<script lang='ts' setup>
import Dropdown from '@/components/ui/dropdown/index.vue'
import InstagramIcon from '@/shared/icons/instagram.svg'
import VkIcon from '@/shared/icons/vk.svg'
import FacebookIcon from '@/shared/icons/facebook.svg'
import Search from '~/components/ui/input/search.vue'

defineOptions({ name: 'NavigationBar' })

const links = [
  {
    title: 'Малярные товары',
    href: '#'
  },
  {
    title: 'Инструменты',
    href: '#'
  },
  {
    title: 'Сантехника',
    href: '#'
  },
  {
    title: 'Электрика',
    href: '#'
  },
  {
    title: 'Стройматериалы',
    href: '#'
  },
  {
    title: 'Двери',
    href: '#'
  }
]

const search = ref<string>('')
</script>
<template>
  <nav class='py-[18px] bg-black'>
    <div class='max-w-[1300px] my-0 mx-auto'>
      <div class='flex text-white'>
        <div class='mr-[43px]'>
          <dropdown :links='links' title='Каталог товаров' />
        </div>
        <ul class='pages-list flex gap-[60px] items-center mr-[51px]'>
          <li>О компании</li>
          <li>Акции</li>
          <li>Хиты сезона</li>
          <li>Новинки</li>
        </ul>
        <ul class='social-list flex gap-3 items-center mr-[66.5px] text-4xl'>
          <li>
            <a href='https://www.instagram.com/_k5er0ks_/'>
              <instagram-icon filled />
            </a>
          </li>
          <li>
            <a href='https://vk.com/pchelx'>
              <vk-icon filled />
            </a>
          </li>
          <li>
            <facebook-icon filled />
          </li>
        </ul>
        <search v-model='search' placeholder='Поиск по каталогу' />
      </div>
    </div>
  </nav>
</template>
<style lang='scss' scoped>
.pages-list {
  li {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #F05A00;
    }
  }
}

.social-list {
  li {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1)
    }
  }
}
</style>

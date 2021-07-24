̦<template>
  <nav class=" py-6  bg-blue-custom flex items-center justify-between flex-wrap items-center">
    <router-link :to="{ name : 'Home'}"><div class="font-medium pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12 text-white nav-title">MARCUS CHU</div></router-link>
    <div class="block md:hidden text-white text-30px sm:text-33px pr-6 cursor-pointer" @click="nav">
      <i v-show="!open" class="fas fa-bars"></i>
      <i v-show="open" class="fas fa-times"></i>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow md:flex md:items-center md:w-auto justify-end pr-6 sm:pr-8 md:pr-9 lg:pr-10 xl:pr-12 text-white nav-item font-light hover:font-bold font-julius" id="nav">
      <div class="flex-grow md:flex text-right">
      <div class="md:border-r-2 sm:pr-2 md:pr-3 lg:pr-4 md:h-9 lg:h-10 xl:h-12 py-1.5 xl:py-2"><router-link :to="{ name : 'Home'}" class="nav-item"><span class="md:hover:border-white md:hover:border-b-2 pb-1 md:pb-2">HOME</span></router-link></div>
      <div class="md:border-r-2  sm:px-2 md:px-3 lg:px-4 md:h-9 lg:h-10 xl:h-12 py-1.5 xl:py-2"><router-link :to="{ name : 'Story'}" class="nav-item"><span class="md:hover:border-white md:hover:border-b-2 pb-1 mb:pb-2">STORY</span></router-link></div>
      <div class="md:border-r-2 sm:px-2 md:px-3 lg:px-4 md:h-9 lg:h-10 xl:h-12 py-1.5 xl:py-2"><router-link :to="{ name : 'Vision'}" class="nav-item"><span class="md:hover:border-white md:hover:border-b-2 pb-1 mb:pb-2">VISION</span></router-link></div>
      <div class="sm:pl-2 md:pl-3 lg:pl-4 md:h-9 lg:h-10 xl:h-12 py-1.5 xl:py-2 hover:font-bold"><span class="md:hover:border-white md:hover:border-b-2  pb-1 md:pb-2 cursor-pointer">E-BOOKS</span></div></div>
      </div>
  </nav>
</template>


<script>
export default {
  name: "NavBar",
  data() {
    return {
      open: false
    }
  },

  methods :{
    nav() {
      this.open = !this.open
    }
  }
}
</script>
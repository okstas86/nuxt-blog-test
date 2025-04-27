<template>
  <header class="bg-white  px-4 h-[121px]  flex justify-between items-center">
    <NuxtLink to="/" class="text-xl ml-8 font-bold">
      <img src="@/assets/images/Qtim.png" alt="">
    </NuxtLink>
    <nav class=" flex items-center text-xl">
      <NuxtLink to="/" class=" mr-12 hover:underline">
          Works
      </NuxtLink>
      <NuxtLink to="/" class=" mr-30 hover:underline">
          About
      </NuxtLink>
      <button class="mr-4 cursor-pointer">
        <img src="@/assets/images/language.png" alt="language">
      </button >
      <button class="mr-8 w-[142px] h-13 bg-[#101010] hover:bg-[#4e4e4e] text-white rounded-4xl pointer hover:-translate-y-1 cursor-pointer">Let's work</button>
    </nav>
  </header>
</template>

<template>
  <div class="flex justify-start items-center gap-4 mb-30 ml-8">
    <button
      v-if="postsStore.currentPage !== 1"
      @click="postsStore.prevPage"
      class="w-11 h-11 flex items-center justify-center bg-white hover:bg-[#E8E8E8]  rounded-xl disabled:opacity-50"
    >
      <img class="transform rotate-180" src="@/assets/icons/arrow.png" alt="Arrow">
    </button>

    <div class="flex gap-2">
      <button
        v-for="page in postsStore.pageNumbers"
        :key="page"
        @click="postsStore.setPage(page)"
        :class="[
          'w-11 h-11 flex items-center justify-center rounded-xl transition',
          postsStore.currentPage === page ? 'bg-[#101010] text-white' : 'bg-[#F3F3F3] hover:bg-[#E8E8E8]'
        ]"
      >
        {{ page }}
      </button>
    </div>

    <button
      @click="postsStore.nextPage"
      :disabled="postsStore.currentPage === postsStore.totalPages"
      class="w-11 h-11 flex items-center justify-center bg-white hover:bg-[#E8E8E8] border border-[#E8E8E8] rounded-xl disabled:opacity-50"
    >
      <img src="@/assets/icons/arrow.png" alt="Arrow">
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
</script>

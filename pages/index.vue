<template>
  <div class="container bg-white mx-auto">
    <h2 class="text-[84px] ml-8 mb-6 mt-16">Articles</h2>

    <div v-if="postsStore.isLoading" class="text-center">Loading...</div>

    <div v-else>
      <transition-group
        name="fade"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="post in postsStore.paginatedPosts"
          :key="post.id"
          class="mx-auto"
        >
          <PostItem :post="post" />
        </div>
      </transition-group>

      <Pagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'
import PostItem from '../components/PostItem.vue'
import Pagination from '../components/Pagination.vue'

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts()
})
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

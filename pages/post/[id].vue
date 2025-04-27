<template>
  <div>
    <div class="w-[1216px] mx-auto">
      <h3 class="text-[84px] mt-16 mb-8" v-if="post">{{ post.title }}</h3>
      <div class="w-full h-[700px] mb-20 shadow-md" v-if="post">
        <img :src="post.image" alt="Post Image" class="w-full h-full object-cover" />
      </div>
      <p class="mb-8" v-if="post">About</p>
      <div class="w-[695px] mb-20" v-if="post">
        <p class="text-[36px]">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { usePostsStore } from '~/stores/posts'
import { useRoute } from 'vue-router'



const postsStore = usePostsStore()
const route = useRoute()

const postId = route.params.id

const post = computed(() => postsStore.post)

onMounted(() => {
  if (postId) {
    postsStore.getPost(postId)
  }
})
</script>



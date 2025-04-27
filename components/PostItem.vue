<template>
  <div class="post-item mb-8 w-70 group relative transition-transform duration-300 hover:-translate-y-3">
    <img :src="post.image" alt="Post Image" class="w-full h-70  shadow-md object-cover mb-4" />
    <p class="mb-4 text-xl">{{ post.preview }}</p>
    <NuxtLink :to="`/post/${post.id}`">
      <p class="text-xl text-[#E2BEFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read more</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: string;
  title: string;
  preview: string;
  image: string;
}

const props = defineProps<{
  post: Post
}>()
</script>



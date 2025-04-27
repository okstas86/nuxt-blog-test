import { defineStore } from 'pinia'
import axios from 'axios'

interface Post {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}

interface PostsState {
  posts: Post[]
  post: Post | null
  isLoading: boolean
  currentPage: number
  postsPerPage: number
  paginationGroup: number
}

export const usePostsStore = defineStore('posts', {
  state: (): PostsState => ({
    posts: [],
    post: null,
    isLoading: false,
    currentPage: 1,
    postsPerPage: 8,
    paginationGroup: 0,
  }),

  actions: {
    async fetchPosts() {
      this.isLoading = true
      try {
        const response = await axios.get<Post[]>(
          'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'
        )
        this.posts = response.data
      } catch (error) {
        console.error('Ошибка загрузки данных', error)
      } finally {
        this.isLoading = false
      }
    },

    async getPost(postId: string) {
      this.isLoading = true
      try {
        const response = await axios.get<Post>(
          `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`
        )
        this.post = response.data
      } catch (error) {
        console.error('Ошибка загрузки данных', error)
      } finally {
        this.isLoading = false
      }
    },

    setPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        const groupEnd = (this.paginationGroup + 1) * 5
        if (this.currentPage > groupEnd) {
          this.paginationGroup++
        }
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        const groupStart = this.paginationGroup * 5 + 1
        if (this.currentPage < groupStart) {
          this.paginationGroup--
        }
      }
    },

    nextGroup() {
      const maxGroup = Math.floor((this.totalPages - 1) / 5)
      if (this.paginationGroup < maxGroup) {
        this.paginationGroup++
      }
    },

    prevGroup() {
      if (this.paginationGroup > 0) {
        this.paginationGroup--
      }
    },
  },

  getters: {
    paginatedPosts(state): Post[] {
      const start = (state.currentPage - 1) * state.postsPerPage
      const end = start + state.postsPerPage
      return state.posts.slice(start, end)
    },

    totalPages(state): number {
      return Math.ceil(state.posts.length / state.postsPerPage)
    },

    pageNumbers(state): number[] {
      const start = state.paginationGroup * 5 + 1
      const end = Math.min(start + 4, state.totalPages)
      const pages: number[] = []
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    },
  },
})

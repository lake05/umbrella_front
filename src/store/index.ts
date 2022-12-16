import { defineStore } from 'pinia'

export interface UserProps {
  isLogin: boolean
  userName?: string
}

export interface TemplateProps {
  id: number
  title: string
  coverImage: string
  author: string
  copiedCount: number
}

export interface GlobalDataProps {
  user: UserProps
  templates: TemplateProps[]
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: '111111',
    author: 'John',
    coverImage: 'https://via.placeholder.com/550/FF0000',
    copiedCount: 1,
  },
  {
    id: 2,
    title: '22222222',
    author: 'John',
    coverImage: 'https://via.placeholder.com/550/0000FF',
    copiedCount: 2,
  },
  {
    id: 3,
    title: '33333333',
    author: 'John',
    coverImage: 'https://via.placeholder.com/550/FF0000',
    copiedCount: 3,
  },
  {
    id: 4,
    title: '4444444',
    author: 'John',
    coverImage: 'https://via.placeholder.com/550/0000FF',
    copiedCount: 4,
  },
  {
    id: 5,
    title: '555555',
    author: 'John',
    coverImage: 'https://via.placeholder.com/550/FF0000',
    copiedCount: 5,
  },
]

export const useGlobalStore = defineStore('global', {
  state: (): GlobalDataProps => {
    return {
      templates: testData,
      user: {
        isLogin: false,
      },
    }
  },
  getters: {
    getTemplateById: (state) => {
      return (id: number) => state.templates.find((t) => t.id === id)
    },
  },
  actions: {
    login() {
      this.user = { ...this.user, isLogin: true, userName: 'Bike' }
    },
    logout() {
      this.user = {
        isLogin: false,
      }
    },
  },
})

import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface EditorPorps {
  components: ComponentData[]
  currentElement: string
}

export interface ComponentData {
  props: { [key: string]: any }
  // uuid
  id: string
  name: string
}

export const testConponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3' } },
]

export const useEditorStore = defineStore('editor', {
  state: (): EditorPorps => {
    return {
      components: testConponents,
      currentElement: '',
    }
  },
})

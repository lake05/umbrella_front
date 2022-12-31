import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import { TextComponentProps } from 'lake-view'

export interface EditorPorps {
  components: ComponentData[]
  currentElement: string
}

export interface ComponentData {
  id: string
  name: string
  props: Partial<TextComponentProps>
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'u-text',
    props: {
      text: 'hello',
      fontSize: '20px',
      color: 'red',
      lineHeight: '1',
      textAlign: 'center',
      fontFamily: '',
    },
  },
  {
    id: uuidv4(),
    name: 'u-text',
    props: {
      text: 'hello2',
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: '2',
    },
  },
  {
    id: uuidv4(),
    name: 'u-text',
    props: {
      text: 'hello3',
      fontSize: '16px',
      actionType: 'url',
      url: 'http://baidu.com',
    },
  },
]

export const useEditorStore = defineStore('editor', {
  state: (): EditorPorps => {
    return {
      components: testComponents,
      currentElement: '',
    }
  },
  getters: {
    getCurrentElement: (state) =>
      state.components.find(
        (component) => component.id === state.currentElement,
      ),
  },
  actions: {
    addComponent(props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'u-text',
        props,
      }

      this.components.push(newComponent)
    },
    setActive(currentId: string) {
      this.currentElement = currentId
    },
    updateComponent({ key, value }: { key: string; value: any }) {
      const updateComponent = this.getCurrentElement
      if (updateComponent) {
        updateComponent.props[key as keyof TextComponentProps] = value
      }
    },
  },
})

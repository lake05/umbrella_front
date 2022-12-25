<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <components-list @onItemClick="addItem" />
    </el-col>
    <el-col :span="8">
      <p class="text-2xl my-3">画布区域</p>
      <div class="relative flex-1">
        <editor-wrapper
          @click="setActive(component.id)"
          v-for="component in components"
          :key="component.id"
          :id="component.id"
          :active="component.id === getCurrentElement?.id"
        >
          <component :is="component.name" v-bind="component.props" />
        </editor-wrapper>
      </div>
    </el-col>
    <el-col :span="8">
      <p class="text-2xl my-3">组件属性</p>
      <div class="flex-1">
        <props-table
          v-if="getCurrentElement && getCurrentElement.props"
          :props="getCurrentElement.props"
          @change="handleChange"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useEditorStore } from '../store/editor'

const store = useEditorStore()
const { components, getCurrentElement } = storeToRefs(store)

const addItem = (props: any) => {
  store.addComponent(props)
}

const setActive = (id: string) => {
  store.setActive(id)
}

const handleChange = (e: any) => {
  console.log('e: ', e)
  store.updateComponent(e)
}
</script>

<script lang="ts">
import UText from 'um-parts-ui'

export default {
  components: {
    UText,
  },
}
</script>

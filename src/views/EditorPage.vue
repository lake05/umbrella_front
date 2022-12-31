<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <!-- <components-list :list="[]" @onItemClick="addItem" /> -->
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
          <l-text />
          <component :is="component.name" v-bind="component.props" />
        </editor-wrapper>
      </div>
    </el-col>
    <el-col :span="8">
      <p class="text-2xl my-3">组件属性</p>
      <!-- <div class="flex-1">
        <props-table
          v-if="getCurrentElement && getCurrentElement.props"
          :props="getCurrentElement.props"
          @change="handleChange"
        />
      </div> -->
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useEditorStore } from '../store/editor'

import { LText } from 'lake-view'
console.log('LText: ', LText)

const store = useEditorStore()
const { components, getCurrentElement } = storeToRefs(store)

const setActive = (id: string) => {
  store.setActive(id)
}
</script>

<script lang="ts"></script>

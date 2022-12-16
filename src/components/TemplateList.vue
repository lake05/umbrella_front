<template>
  <div>
    <el-row :gutter="16">
      <el-col class="mt-4" :span="6" v-for="item in list" :key="item.id">
        <router-link to="/editor">
          <el-card :body-style="{ padding: '0px' }">
            <img v-if="item.coverImage" :src="item.coverImage" />
            <img v-else
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            <div style="padding: 14px">
              <span>{{ item.title }}</span>
              <div class="bottom">
                <time class="time">{{ item.author }}</time>
                <el-tag class="ml-2">copied count: {{ item.copiedCount }}</el-tag>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { TemplateProps } from '../store';

interface Props {
  list: TemplateProps[]
}

const props = defineProps<Props>()
const { list } = toRefs(props)
</script>
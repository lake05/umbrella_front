<template>
  <component :is="tag" :style="styleProps" @click="handleClick">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import useComponentCommon from '../hooks/useComponentCommon'

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  ...defaultProps,
})

const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames,
)
</script>

<script lang="ts">
import {
  textDefaultProps,
  textStylePropNames,
  transformToComponentProps,
} from '../defaultProps'

const defaultProps = transformToComponentProps(textDefaultProps)
</script>

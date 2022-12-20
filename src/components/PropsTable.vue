<template>
  <div>
    <div class="flex p-3" v-for="(value, key) in finalProps" :key="key">
      <span class="w-16" v-if="value.text">{{ value.text }}</span>
      <component :is="value.component" :[value.valueProp!]="value.value" v-bind="value.extraProps" v-on="value.events">
        <template v-if="value.options">
          <component :is="value.subcomponent" v-for="(option, k) in value.options" :key="k" :value="option.value"
            :label="option.value">
            <render-Vnode :VNode="option.text" />
          </component>
        </template>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import RenderVnode from './RenderVnode'
import { reduce } from 'lodash-es';
import { computed, ref, VNode } from 'vue';
import { TextComponentProps } from '../defaultProps'
import { mapPropsToForms, PropsToForms } from '../propsMap';

export interface FormProps {
  component: string;
  subcomponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  valueProp: string; // 自定义model-value
  eventName: string;
  events: { [key: string]: (e: any) => any }
}

interface Props {
  props: TextComponentProps
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', data: any): void
}>()


const finalProps = computed(() => {
  return reduce(props.props, (result, value, k) => {
    const key = k as keyof TextComponentProps
    const item = mapPropsToForms[key]
    if (item) {
      const { valueProp = 'model-value', eventName = "change", initialTransform } = item
      const newItem: FormProps = {
        ...item,
        value: initialTransform ? initialTransform(value) : value,
        valueProp,
        eventName,
        events: {
          [eventName]: (e: any) => {
            emit('change', { key, value: item.afterTransform ? item.afterTransform(e) : e });
          }
        }
      }
      result[key] = newItem
    }
    return result
  }, {} as { [key: string]: FormProps })
})
</script>
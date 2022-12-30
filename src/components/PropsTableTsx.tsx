import { computed, PropType } from 'vue'
import { FormProps } from './PropsTable.vue'
import {
  ElInput,
  ElInputNumber,
  ElSlider,
  ElRadioGroup,
  ElRadioButton,
  ElOption,
  ElSelect,
} from 'element-plus'
import { reduce } from 'lodash-es'

const mapToComponent: { [key: string]: unknown } = {
  'el-input': ElInput,
  'el-input-number': ElInputNumber,
  'el-slider': ElSlider,
  'el-radio-group': ElRadioGroup,
  'el-radio-button': ElRadioButton,
  'el-option': ElOption,
  'el-select': ElSelect,
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
  name: 'props-table',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true,
    },
  },
  emit: ['change'],
  setup(props: { props: TextComponentProps }, { emit }: unknown) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, k) => {
          const key = k as keyof TextComponentProps
          const item = mapPropsToForms[key]
          if (item) {
            const {
              valueProp = 'model-value',
              eventName = 'change',
              initialTransform,
            } = item
            const newItem: FormProps = {
              ...item,
              value: initialTransform ? initialTransform(value) : value,
              valueProp,
              eventName,
              events: {
                ['on' + capitalizeFirstLetter(eventName)]: (e: unknown) => {
                  emit('change', {
                    key,
                    value: item.afterTransform ? item.afterTransform(e) : e,
                  })
                },
              },
            }
            result[key] = newItem
          }
          return result
        },
        {} as { [key: string]: FormProps },
      )
    })

    return () => (
      <div>
        {Object.keys(finalProps.value).map((key) => {
          const value = finalProps.value[key]

          const ComponentName = mapToComponent[value.component]
          const subComponent = value.subComponent
            ? mapToComponent[value.subComponent]
            : null

          const props = {
            [value.valueProp]: value.value,
            ...value.extraProps,
            ...value.events,
          }

          return (
            <div key={key} class="flex p-3">
              {value.text && <span class="w-16">{{ value }}</span>}
              <ComponentName {...props}>
                {value.options &&
                  value.options.map((option) => {
                    return (
                      <subComponent label={option.value} value={option.value}>
                        {option.text}
                      </subComponent>
                    )
                  })}
              </ComponentName>
            </div>
          )
        })}
      </div>
    )
  },
}

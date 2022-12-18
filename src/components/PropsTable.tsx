import { computed, PropType } from "vue";
import { TextComponentProps } from "../defaultProps";
import { FormProps } from "./PropsTable.vue";
import {
  ElInput,
  ElInputNumber,
  ElSlider,
  ElRadioGroup,
  ElRadioButton,
  ElOption,
  ElSelect,
} from "element-plus";

const mapToComponent = {
  "el-input": ElInput,
  "el-input-number": ElInputNumber,
  "el-slider": ElSlider,
  "el-radio-group": ElRadioGroup,
  "el-radio-button": ElRadioButton,
  "el-option": ElOption,
  "el-select": ElSelect,
};

export default {
  name: "props-table",
  props: {
    type: Object as PropType<TextComponentProps>,
    required: true,
  },
  emit: ["change"],
  setup(props : TextComponentProps, { emit: }){
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, k) => {
          const key = k as keyof TextComponentProps;
          const item = mapPropsToForms[key];
          if (item) {
            const {
              valueProp = "model-value",
              eventName = "change",
              initialTransform,
            } = item;
            const newItem: FormProps = {
              ...item,
              value: initialTransform ? initialTransform(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  emit("change", {
                    key,
                    value: item.afterTransform ? item.afterTransform(e) : e,
                  });
                },
              },
            };
            result[key] = newItem;
          }
          return result;
        },
        {} as { [key: string]: FormProps }
      );
    });

    return () => (
      <div>
        {Object.keys(finalProps.value).map((key) => {
          const value = finalProps.value[key];
          return (
            <div key={key} class="flex p-3">
              {value.text && <span class="w-16">{{ value }}</span>}
            </div>
          );
        })}
      </div>
    );
  },
};

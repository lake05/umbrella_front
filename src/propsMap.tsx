import { h, VNode } from 'vue'
import { TextComponentProps } from './defaultProps'

export interface PropToForm {
  component: string
  subcomponent?: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { text: string | VNode; value: any }[]
  initialTransform?: (v: any) => any
  afterTransform?: (v: any) => any
  valueProp?: string // 自定义model-value
  eventName?: string
}

export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}

const fontFamilyArr = [
  { value: 'SimSun', text: '宋体' },
  { value: 'SimHei', text: '黑体' },
  { value: 'KaiTi', text: '楷体' },
  { value: 'FangSong', text: '仿宋' },
]

const fontFamilyOptions = fontFamilyArr.map((font) => ({
  value: font.value,
  text: <span style={{ fontFamily: font.value }}>{font.text}</span>,
}))
export const mapPropsToForms: PropsToForms = {
  text: {
    text: '文本',
    component: 'el-input',
    extraProps: {
      type: 'textarea',
    },
  },
  fontSize: {
    text: '字号',
    component: 'el-input-number',
    initialTransform: (v: string) => parseInt(v),
    afterTransform: (e: number) => (e ? `${e}px` : ''),
  },
  lineHeight: {
    text: '行高',
    component: 'el-slider',
    initialTransform: (v: string) => parseFloat(v),
    extraProps: { min: 0, max: 3, step: 0.1 },
    afterTransform: (e: number) => e.toString(),
  },
  textAlign: {
    text: '对齐',
    component: 'el-radio-group',
    subcomponent: 'el-radio-button',
    options: [
      { value: 'left', text: '左' },
      { value: 'center', text: '中' },
      { value: 'right', text: '右' },
    ],
  },
  fontFamily: {
    text: '字体',
    component: 'el-select',
    subcomponent: 'el-option',
    options: [{ value: '', text: '无' }, ...fontFamilyOptions],
  },
}

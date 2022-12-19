import { defineComponent } from 'vue'
const RenderVnode = defineComponent({
  props: {
    VNode: {
      type: [Object, String],
      required: true,
    },
  },
  render() {
    return this.VNode
  },
})

export default RenderVnode

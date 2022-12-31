import { pick } from 'lodash-es'
import { computed } from 'vue'
import { TextComponentProps } from 'lake-view'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  picks: string[],
) => {
  const styleProps = computed(() => pick(props, picks))

  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick,
  }
}

export default useComponentCommon

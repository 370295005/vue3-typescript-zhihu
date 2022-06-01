import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

export default function (key: any | []) {
  const store = useStore()
  const storeStateFn = mapState(key)
  const storeState: { [key: string]: any } = {}
  Object.keys(storeStateFn).forEach((key) => {
    const fn = storeStateFn[key].bind({ $store: store })
    storeState[key] = computed(fn)
  })
  return storeState
}

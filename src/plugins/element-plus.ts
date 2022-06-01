import { ElLoading } from 'element-plus'
interface loadingConfig {
  lock: boolean
  text: string
  background: string
}
const defaultLoadingConfig = {
  lock: true,
  text: '加载中',
  background: 'rgba(255, 255, 255, 0.3)'
}
export function loading(type: string = 'open', config: loadingConfig = defaultLoadingConfig): void {
  const loading = ElLoading.service(config)
  if (type === 'close') {
    loading.close()
  }
}

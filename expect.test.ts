test('should first', () => {})
import axios from 'axios'

vi.mocked('axios')

// 将mock对象断言为特定类型
const mockAxios = vi.mocked(axios, { deep: true })

import { mount, VueWrapper } from '@vue/test-utils'
import UserProfile from '@/components/UserProfile.vue'

let wrapper: VueWrapper<any>
vi.mock('@/store/index.ts')
vi.mock('vue-router')
vi.mock('element-plus')

const mockComponents = {
  template: '<div><slot></slot></div>',
}

const mockComponents2 = {
  template: '<div><slot name="title"></slot><slot></slot></div>',
}

const globalComponents = {
  'el-button': mockComponents,
  'el-sub-menu': mockComponents2,
}

describe('UserProfile component', () => {
  beforeAll(() => {
    wrapper = mount(UserProfile, {
      props: {
        user: { isLogin: false },
      },
      global: {
        components: globalComponents,
      },
    })
  })

  test('should render login button when login is false', () => {
    expect(wrapper.get('div').text()).toBe('登录')
  })

  test('should render username when login is true', async () => {
    await wrapper.setProps({
      user: { isLogin: true, userName: 'viking' },
    })

    expect(wrapper.get('div').text()).toContain('viking')
    expect(wrapper.find('.flex').exists()).toBeTruthy()
  })
})

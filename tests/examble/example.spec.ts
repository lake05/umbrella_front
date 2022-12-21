import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import axios from 'axios'
import Example from './Example.vue'

vi.mock('axios')
const mockAxios = vi.mocked(axios, { deep: true })
const msg = 'new message'
let wrapper: VueWrapper<any>
describe('Example.vue', () => {
  beforeAll(() => {
    wrapper = mount(Example, {
      props: { msg },
    })
  })

  afterEach(() => {
    mockAxios.get.mockReset()
  })

  test('renders props.msg when passed', async () => {
    await wrapper.get('button').trigger('click')

    expect(wrapper.get('button').text()).toBe('2')
  })

  test('should add todo when fill the input and click the add button', async () => {
    const todoContent = 'but milk'

    await wrapper.get('input').setValue(todoContent)
    expect(wrapper.get('input').element.value).toBe(todoContent)

    await wrapper.get('.addTodo').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.get('li').text()).toBe(todoContent)

    await wrapper.get('input').setValue('')
    await wrapper.get('.addTodo').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)

    expect(wrapper.emitted()).toHaveProperty('send')
    const events = wrapper.emitted('send')
    expect(events![0]).toEqual([todoContent])
  })

  test('should load user message when click the load button', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: { username: 'viking' } })
    await wrapper.get('.loadUser').trigger('click')
    expect(mockAxios.get).toHaveBeenCalled()
    expect(wrapper.find('.loading').exists()).toBeTruthy()

    await flushPromises()
    expect(wrapper.find('.loading').exists()).toBeFalsy()
    expect(wrapper.find('.userName').text()).toBe('viking')
  })

  test('should load error when return promise reject', async () => {
    mockAxios.get.mockRejectedValueOnce('erroe')
    await wrapper.get('.loadUser').trigger('click')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    await flushPromises()
    expect(wrapper.find('.loading').exists()).toBeFalsy()
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })
})

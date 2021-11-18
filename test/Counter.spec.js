import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm).toBeTruthy()
  })
})

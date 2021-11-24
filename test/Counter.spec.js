import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm).toBeTruthy()
  })
})

it('Is it began with 0 ?', async () => {
  const value = 0
  const wrapper = mount(Counter)
  expect(wrapper.vm.count).toEqual(0)
})

it('Is it increasing correctly ?', async () => {
  const wrapper = mount(Counter)
  const button = wrapper.find('#inc')
  await button.trigger('click')
  expect(wrapper.vm.count).toEqual(1)
})

it('Is it decreasing correctly ?', async () => {
  const wrapper = mount(Counter)
  const button = wrapper.find('#dec')
  await button.trigger('click')
  expect(wrapper.vm.count).toEqual(-1)
})


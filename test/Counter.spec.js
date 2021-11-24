import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm).toBeTruthy()
  })
})

it('button click should increment the count text', async () => {
  const value = 0
  const wrapper = mount(Counter,{
    props: {
      count: value
    }
  })
  const inc = value + 1
  const dec = value - 1

  const display = wrapper.find('h1')
  const button = wrapper.find('#inc')
  await button.trigger('click')
  expect(display.text()).toContain(inc.toString())

  const buttonDec = wrapper.find('#dec')
  await buttonDec.trigger('click')
  expect(display.text()).toContain(dec.toString())
})
import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent.vue', () => {
  it('renders navigation links', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.findAll('li').length).toBe(3);
  });
});

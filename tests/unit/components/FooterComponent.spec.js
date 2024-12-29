import { shallowMount } from '@vue/test-utils';
import FooterComponent from '@/components/FooterComponent.vue';

describe('FooterComponent.vue', () => {
  it('renders footer text', () => {
    const wrapper = shallowMount(FooterComponent);
    expect(wrapper.text()).toContain('© 2024 Pruebas Unitarias Vue');
  });
});

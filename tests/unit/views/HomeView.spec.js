import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.element).toMatchSnapshot();
  });
});

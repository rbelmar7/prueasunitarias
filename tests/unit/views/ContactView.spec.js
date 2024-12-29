import { shallowMount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.element).toMatchSnapshot();
  });
});

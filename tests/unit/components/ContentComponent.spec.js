import { shallowMount } from '@vue/test-utils';
import ContentComponent from '@/components/ContentComponent.vue';

describe('ContentComponent.vue', () => {
  it('renders slot content', () => {
    const wrapper = shallowMount(ContentComponent, {
      slots: {
        default: '<p>Test slot content</p>',
      },
    });
    expect(wrapper.html()).toContain('Test slot content');
  });
});

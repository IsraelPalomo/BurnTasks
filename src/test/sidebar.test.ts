import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import SideBar from '../components/SideBar.vue';

describe('SideBar', () => {
  test('Mounted SideBar view', () => {
    const wrapper = mount(SideBar);
    console.log(wrapper.html());
  });
});

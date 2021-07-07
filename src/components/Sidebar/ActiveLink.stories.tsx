import React from 'react';

import { ActiveLink as HDNActiveLink } from './ActiveLink';

export default {
  title: 'HDN Chakra/Sidebar/Active Link',
  component: HDNActiveLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    shouldMatchExactHref: { control: 'boolean' },
  },
};

const Template = args => (
  <HDNActiveLink {...args}>
    <span>Active Link Children</span>
  </HDNActiveLink>
);

export const ActiveLink = Template.bind({});
ActiveLink.args = {
  href: 'http://hdn.digital/',
  shouldMatchExactHref: false,
};
ActiveLink.parameters = {
  controls: {
    include: Object.keys(ActiveLink.args),
  },
};

import React from 'react';

import { Nav as HDNNav } from './Nav';

export default {
  title: 'HDN Chakra/Sidebar/Nav',
  component: HDNNav,
};

const Template = args => <HDNNav {...args} />;

export const Nav = Template.bind({});
Nav.args = {};

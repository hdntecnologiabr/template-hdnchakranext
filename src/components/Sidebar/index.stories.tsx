import React from 'react';

import { Sidebar as HDNSidebar } from '.';

export default {
  title: 'HDN Chakra/Sidebar/Sidebar',
  component: HDNSidebar,
};

const Template = args => <HDNSidebar {...args} />;

export const Sidebar = Template.bind({});
Sidebar.args = {};

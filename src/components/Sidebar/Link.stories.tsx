import React from 'react';
import { RiDashboardFill } from 'react-icons/ri';

import { Link as HDNLink } from './Link';

export default {
  title: 'HDN Chakra/Sidebar/Link',
  component: HDNLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    icon: {
      options: ['RiDashboardFill', 'FaLock', 'FaUser'],
      control: 'select',
    },
  },
};

const Template = args => {
  return <HDNLink {...args} icon={RiDashboardFill} />;
};

export const Link = Template.bind({});
Link.args = {
  href: 'http://hdn.digital/',
  children: 'Link Text',
};
Link.parameters = {
  controls: {
    include: Object.keys(Link.args),
  },
};

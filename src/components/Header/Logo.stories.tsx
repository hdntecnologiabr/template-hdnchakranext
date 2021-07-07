import React from 'react';

import { Logo as HDNLogo } from './Logo';

export default {
  title: 'HDN Chakra/Header/Logo',
  component: HDNLogo,
};

const Template = args => <HDNLogo {...args} />;

export const Logo = Template.bind({});
Logo.args = {};

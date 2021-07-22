import React from 'react';

import { Header as HDNHeader } from '.';

export default {
  title: 'HDN Chakra/Header/Header',
  component: HDNHeader,
};

const Template = args => <HDNHeader {...args} />;

export const Header = Template.bind({});
Header.args = {};

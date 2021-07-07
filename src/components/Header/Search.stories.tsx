import React from 'react';

import { Search as HDNSearch } from './Search';

export default {
  title: 'HDN Chakra/Header/Search',
  component: HDNSearch,
};

const Template = args => <HDNSearch {...args} />;

export const Search = Template.bind({});
Search.args = {};

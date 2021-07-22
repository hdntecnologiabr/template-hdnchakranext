import React from 'react';

import { Section as HDNSection } from './Section';

export default {
  title: 'HDN Chakra/Sidebar/Section',
  component: HDNSection,
};

const Template = args => (
  <HDNSection {...args}>
    <span>Section Children 1</span>
    <span>Section Children 2</span>
    <span>Section Children 3</span>
  </HDNSection>
);

export const Section = Template.bind({});
Section.args = {};

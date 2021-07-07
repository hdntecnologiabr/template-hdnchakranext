import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button as HDNButton, ButtonProps } from './Button';

export default {
  title: 'HDN Chakra/Form/Button',
  component: HDNButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template = args => <HDNButton {...args} />;

export const Button: Story<ButtonProps> = Template.bind({});
Button.args = {
  disabled: false,
  children: 'Button Text',
};
Button.parameters = {
  controls: {
    include: Object.keys(Button.args),
  },
};

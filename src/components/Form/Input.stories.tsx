import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import { Icon } from '@chakra-ui/react';

import { Input as HDNInput } from './Input';

export default {
  title: 'HDN Chakra/Form/Input',
  component: HDNInput,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'object' },
    icon: {
      options: ['FaLock', 'FaUser'],
      control: 'select',
    },
  },
};

const iconMap = {
  FaLock: <Icon as={FaLock} />,
  FaUser: <Icon as={FaUser} />,
};

const Template = args => {
  const { icon: iconName } = args;
  const icon = iconMap[iconName];
  return <HDNInput {...args} icon={icon} />;
};

export const Input = Template.bind({});
Input.args = {
  name: 'username',
  label: 'Usuário',
  error: {
    message: 'Nome de usuário inválido',
  },
  icon: 'FaUser',
};
Input.parameters = {
  controls: {
    include: Object.keys(Input.args),
  },
};

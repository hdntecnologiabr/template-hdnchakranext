import React from 'react';

import { Notifications as HDNNotifications } from './Notifications';

export default {
  title: 'HDN Chakra/Header/Notifications',
  component: HDNNotifications,
};

const Template = args => <HDNNotifications {...args} />;

export const Notifications = Template.bind({});
Notifications.args = {};

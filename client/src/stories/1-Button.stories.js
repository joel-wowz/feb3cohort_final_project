import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import App from '../App';

export default {
  title: 'Full App',
  component: App,
};

export const AppScenario = () => <App />;

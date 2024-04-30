import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.parts';

export default {
  title: 'Parts/Header/Header',
  component: Header
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const HeaderComponent: Story = {
  render: () => <Header />
};

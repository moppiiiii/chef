import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './loading.parts';

export default {
  title: 'Parts/Loading/Loading',
  component: Loading
} as Meta<typeof Loading>;

type Story = StoryObj<typeof Loading>;

export const LoadingComponent: Story = {
  render: () => <Loading />
};

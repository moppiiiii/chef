import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundTemplate } from './not-found.template';

export default {
  title: 'Templates/NotFound/NotFound',
  component: NotFoundTemplate
} as Meta<typeof NotFoundTemplate>;

type Story = StoryObj<typeof NotFoundTemplate>;

export const NotFound: Story = {
  render: () => <NotFoundTemplate />
};

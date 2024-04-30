import type { Meta, StoryObj } from '@storybook/react';
import { HeadingPrimary } from './heading-primary.parts';

export default {
  title: 'Parts/Heading/HeadingPrimary',
  component: HeadingPrimary,
  args: {
    children: 'HeadingPrimary'
  }
} as Meta<typeof HeadingPrimary>;

type Story = StoryObj<typeof HeadingPrimary>;

export const HeadingPrimaryComponent: Story = {
  render: () => <HeadingPrimary>HeadingPrimary</HeadingPrimary>
};

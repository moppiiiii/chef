import type { Meta, StoryObj } from '@storybook/react';
import { HeadingSecondary } from './heading-secondary.parts';

export default {
  title: 'Parts/Heading/HeadingSecondary',
  component: HeadingSecondary,
  args: {
    children: 'HeadingSecondary'
  }
} as Meta<typeof HeadingSecondary>;

type Story = StoryObj<typeof HeadingSecondary>;

export const HeadingSecondaryComponent: Story = {
  render: () => <HeadingSecondary>HeadingSecondary</HeadingSecondary>
};

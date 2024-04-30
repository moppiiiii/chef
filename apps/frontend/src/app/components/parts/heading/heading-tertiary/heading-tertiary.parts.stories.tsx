import type { Meta, StoryObj } from '@storybook/react';
import { HeadingTertiary } from './heading-tertiary.parts';

export default {
  title: 'Parts/Heading/HeadingTertiary',
  component: HeadingTertiary,
  args: {
    children: 'HeadingTertiary'
  }
} as Meta<typeof HeadingTertiary>;

type Story = StoryObj<typeof HeadingTertiary>;

export const HeadingSecondaryComponent: Story = {
  render: () => <HeadingTertiary>HeadingSecondary</HeadingTertiary>
};

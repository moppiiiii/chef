import type { Meta, StoryObj } from '@storybook/react';

import { RecipeRegistrationTemplate } from './recipe-registration.template';

export default {
  title: 'Templates/RecipeRegistration/RecipeRegistration',
  component: RecipeRegistrationTemplate
} as Meta<typeof RecipeRegistrationTemplate>;

type Story = StoryObj<typeof RecipeRegistrationTemplate>;

export const NotFound: Story = {
  render: () => <RecipeRegistrationTemplate />
};

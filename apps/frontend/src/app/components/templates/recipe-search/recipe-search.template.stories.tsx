import type { Meta, StoryObj } from '@storybook/react';

import { RecipeSearchTemplate } from './recipe-search.template';

export default {
  title: 'Templates/RecipeSearchTemplate/RecipeSearchTemplate',
  component: RecipeSearchTemplate
} as Meta<typeof RecipeSearchTemplate>;

type Story = StoryObj<typeof RecipeSearchTemplate>;

export const NotFound: Story = {
  render: () => <RecipeSearchTemplate />
};

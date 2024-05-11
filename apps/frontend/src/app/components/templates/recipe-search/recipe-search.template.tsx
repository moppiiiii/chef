import React from 'react';
import { Header } from '../../parts/header/header.parts';
import RecipeSearchStyle from './recipe-search.template.module.scss';

export const RecipeSearchTemplate: React.FC = () => {
  return (
    <div className={RecipeSearchStyle.recipeSearchTemplateContainer}>
      <Header />

      <div className={RecipeSearchStyle.recipeSearchContentContainer}>
        <p>RecipeSearch</p>
      </div>
    </div>
  );
};

import React from 'react';
import { Header } from '../../parts/header/header.parts';
import RecipeRegistrationStyle from './recipe-registration.template.module.scss';

export const RecipeRegistrationTemplate: React.FC = () => {
  return (
    <div className={RecipeRegistrationStyle.recipeRegistrationTemplateContainer}>
      <Header />

      <div className={RecipeRegistrationStyle.recipeRegistrationContentContainer}>
        <p>RecipeRegistration</p>
      </div>
    </div>
  );
};

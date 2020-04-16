import React from 'react';
import SimpleExpansionPanel from '../components/ingredientcard/expansionPanel';
import IngredientDB from '../data/mock-db';
import WeightButton from '../components/ingredientcard/WeightButton';
export default {
  title: 'SimpleExpansionPanel',
  component: SimpleExpansionPanel,
};

export const text = () => <SimpleExpansionPanel buttonColor={IngredientDB[0].weight}> </SimpleExpansionPanel>;

export const button = () => <WeightButton weight={IngredientDB[0].weight}> Artichoke</WeightButton>;
export const buttonNotColorWeight = () => <WeightButton> Lighter Color</WeightButton>;

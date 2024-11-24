import React from 'react';
import { useRecipeStore } from './store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorited ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        backgroundColor: isFavorited ? 'red' : 'green',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isFavorited ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;

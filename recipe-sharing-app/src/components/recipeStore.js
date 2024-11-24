import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () =>
    set((state) => {
      // Generate recommendations based on favorited recipes
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && // Avoid recommending already favorited recipes
          state.favorites.some((favId) => recipe.ingredients?.includes(favId)) // Example logic
      );
      return { recommendations: recommended };
    }),
}));

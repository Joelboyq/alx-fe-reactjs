import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      // Update search term and trigger filtering
      const lowerCaseTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowerCaseTerm)
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),
}));

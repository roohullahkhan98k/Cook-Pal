export interface Category {
    value: string;
    label: string;
  }
  
  export interface Recipe {
    id: number;
    name: string;
    image: string;
    rating: number;
    cookTimeMinutes: number;
    mealType: string[];
    reviewCount: number;
    cuisine: string;
    ingredients: string[];
    instructions: string[];
  }
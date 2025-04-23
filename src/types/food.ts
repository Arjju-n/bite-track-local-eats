
export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: string;
  nutrition: NutritionInfo;
  servingSize: string;
}

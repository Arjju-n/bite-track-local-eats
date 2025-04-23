
import { FoodItem } from "@/types/food";

export const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato mixture",
    category: "Breakfast",
    servingSize: "1 piece",
    nutrition: {
      calories: 387,
      protein: 8,
      carbs: 66,
      fat: 12,
      fiber: 4.2,
    },
  },
  {
    id: "2",
    name: "Appam",
    description: "Lacy rice pancake with crispy edges and soft center",
    category: "Breakfast",
    servingSize: "2 pieces",
    nutrition: {
      calories: 263,
      protein: 2.5,
      carbs: 58,
      fat: 1.2,
      fiber: 0.8,
    },
  },
  {
    id: "3",
    name: "Idli",
    description: "Steamed rice and lentil cakes",
    category: "Breakfast",
    servingSize: "2 pieces",
    nutrition: {
      calories: 98,
      protein: 4.5,
      carbs: 21,
      fat: 0.1,
      fiber: 1.2,
    },
  },
];

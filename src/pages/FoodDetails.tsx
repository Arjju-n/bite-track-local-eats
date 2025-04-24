
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { foodItems } from "@/data/foodItems";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Egg, ArrowLeft } from "lucide-react";

const DAILY_REQUIREMENTS = {
  calories: 2000,
  protein: 50,
  carbs: 275,
  fat: 55,
  fiber: 28,
};

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const food = foodItems.find((item) => item.id === id);

  if (!food) {
    return <div className="p-8">Food item not found</div>;
  }

  const getFoodIcon = () => {
    if (food.category === "Egg") return <Egg className="h-6 w-6" />;
    if (food.category === "Rice") return <FileText className="h-6 w-6" />;
    return <FileText className="h-6 w-6" />;
  };

  const calculateNutrition = (nutrient: number) => {
    return Number((nutrient * quantity).toFixed(1));
  };

  const calculatePercentage = (actual: number, recommended: number) => {
    return `${Math.round((actual / recommended) * 100)}%`;
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          size="icon"
          className="mb-4"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <div className="flex items-center gap-3 mb-4">
                {getFoodIcon()}
                <h1 className="text-2xl font-bold text-gray-900">{food.name}</h1>
              </div>
              <p className="text-gray-600 mb-4">{food.description}</p>
              <p className="text-sm text-gray-500 mb-6">
                Serving Size: {food.servingSize}
              </p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="quantity">How many servings would you like?</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Nutrition Comparison</h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nutrient</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Daily Needs</TableHead>
                    <TableHead>% Daily Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Calories</TableCell>
                    <TableCell>{calculateNutrition(food.nutrition.calories)}</TableCell>
                    <TableCell>{DAILY_REQUIREMENTS.calories}</TableCell>
                    <TableCell>
                      {calculatePercentage(
                        calculateNutrition(food.nutrition.calories),
                        DAILY_REQUIREMENTS.calories
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protein</TableCell>
                    <TableCell>{calculateNutrition(food.nutrition.protein)}g</TableCell>
                    <TableCell>{DAILY_REQUIREMENTS.protein}g</TableCell>
                    <TableCell>
                      {calculatePercentage(
                        calculateNutrition(food.nutrition.protein),
                        DAILY_REQUIREMENTS.protein
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Carbs</TableCell>
                    <TableCell>{calculateNutrition(food.nutrition.carbs)}g</TableCell>
                    <TableCell>{DAILY_REQUIREMENTS.carbs}g</TableCell>
                    <TableCell>
                      {calculatePercentage(
                        calculateNutrition(food.nutrition.carbs),
                        DAILY_REQUIREMENTS.carbs
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fat</TableCell>
                    <TableCell>{calculateNutrition(food.nutrition.fat)}g</TableCell>
                    <TableCell>{DAILY_REQUIREMENTS.fat}g</TableCell>
                    <TableCell>
                      {calculatePercentage(
                        calculateNutrition(food.nutrition.fat),
                        DAILY_REQUIREMENTS.fat
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fiber</TableCell>
                    <TableCell>{calculateNutrition(food.nutrition.fiber)}g</TableCell>
                    <TableCell>{DAILY_REQUIREMENTS.fiber}g</TableCell>
                    <TableCell>
                      {calculatePercentage(
                        calculateNutrition(food.nutrition.fiber),
                        DAILY_REQUIREMENTS.fiber
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

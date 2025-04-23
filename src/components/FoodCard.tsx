
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FoodItem } from "@/types/food";
import { FileText, Egg } from "lucide-react"; // Removed Pizza, added FileText and Egg
import { useNavigate } from "react-router-dom";

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  const navigate = useNavigate();

  const getFoodIcon = () => {
    if (food.category === "Egg") return <Egg className="h-6 w-6 text-primary" />;
    return <FileText className="h-6 w-6 text-primary" />;
  };

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={() => navigate(`/food/${food.id}`)}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 bg-accent rounded-full">
          {getFoodIcon()}
        </div>
        <div>
          <CardTitle className="text-lg">{food.name}</CardTitle>
          <p className="text-sm text-gray-500">{food.servingSize}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Calories</p>
            <p className="text-lg font-semibold">{food.nutrition.calories}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Protein</p>
            <p className="text-lg font-semibold">{food.nutrition.protein}g</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Carbs</p>
            <p className="text-lg font-semibold">{food.nutrition.carbs}g</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Fat</p>
            <p className="text-lg font-semibold">{food.nutrition.fat}g</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;

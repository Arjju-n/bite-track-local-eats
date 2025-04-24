import { Input } from "@/components/ui/input";
import { foodItems } from "@/data/foodItems";
import { useState } from "react";
import FoodCard from "@/components/FoodCard";
import { Search } from "lucide-react";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredFoods = foodItems.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="min-h-screen bg-[#FFFBF5]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">BiteTrack</h1>
          <p className="text-lg text-gray-600 mb-8">To Track Your Every Bite!</p>
          
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="Search for food..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map(food => <FoodCard key={food.id} food={food} />)}
        </div>
      </div>
    </div>;
};
export default Index;
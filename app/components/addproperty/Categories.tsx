import {
  Waves,
  House,
  Trees,
  Palmtree,
  Bell,
  Gem,
  Sparkles,
  Briefcase,
  Rocket,
} from "lucide-react";

const categories = [
  { label: "Pools", icon: Waves },
  { label: "Wow!", icon: Rocket },
  { label: "Cabins", icon: House },
  { label: "Countryside", icon: Trees },
  { label: "Beachfront", icon: Palmtree },
  { label: "Luxe", icon: Bell },
  { label: "Off-grid", icon: Gem },
  { label: "New", icon: Sparkles },
  { label: "Professional", icon: Briefcase },
];

interface CategoriesProps {

  dataCategory: string;
  setCategory: (category: string) => void

}

const Categories: React.FC<CategoriesProps> = ({

  dataCategory,
  setCategory


}) => {
  return (
    <>

      <div className="pt-3 cursor-pointer p-6 flex items-center space-x-12">

        <div className="pt-3 pb-6 overflow-x-auto">
          <div className="flex items-center gap-30 w-max px-2 " >
            {categories.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 pb-2 border-b-2 border-transparent opacity-60 hover:opacity-100 hover:border-gray-800 transition cursor-pointer"
                onClick={()=>setCategory(label)}
               
              >
                <Icon size={20} />
                <span className="text-xs whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>




    </>

  )
}



export default Categories
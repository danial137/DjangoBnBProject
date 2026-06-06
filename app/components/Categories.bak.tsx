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
    {
        label: "Pools",
        icon: Waves,
    },
    {
        label: "Wow!",
        icon: Rocket,
    },
    {
        label: "Cabins",
        icon: House,
    },
    {
        label: "Countryside",
        icon: Trees,
    },
    {
        label: "Beachfront",
        icon: Palmtree,
    },
    {
        label: "Luxe",
        icon: Bell,
    },
    {
        label: "Off-grid",
        icon: Gem,
    },
    {
        label: "New",
        icon: Sparkles,
    },
    {
        label: "Professional",
        icon: Briefcase,
    },
];

const Categories = () => {
    return (
        <section className="flex items-center gap-6 overflow-x-auto justify-center">
            {categories.map(({ label, icon: Icon }) => (
                <button
                    key={label}
                    className="
            flex
            shrink-0
            flex-col
            items-center
            gap-2
            border-b-2
            border-transparent
            pb-3
            text-gray-500
            transition-all
            duration-200
            hover:border-black
            hover:text-black
          "
                >
                    <Icon size={24} />

                    <span className="text-xs font-medium whitespace-nowrap">
                        {label}
                    </span>
                </button>
            ))}
        </section>
    );
};

export default Categories;
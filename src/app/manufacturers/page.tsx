import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturers",
  description:
    "Explore our trusted manufacturers and brand partners at QubimallShop.",
};

const manufacturers = [
  { name: "TechPro Electronics", location: "Shenzhen, China", specialty: "Consumer Electronics" },
  { name: "StyleCraft Apparel", location: "Dhaka, Bangladesh", specialty: "Textiles & Garments" },
  { name: "HomeEssence Furnishings", location: "Mumbai, India", specialty: "Home Decor & Furniture" },
  { name: "PureGlow Cosmetics", location: "Seoul, South Korea", specialty: "Beauty & Skincare" },
  { name: "NutriVibe Foods", location: "Bangkok, Thailand", specialty: "Organic & Health Foods" },
  { name: "AutoRide Components", location: "Stuttgart, Germany", specialty: "Automotive Parts" },
];

const ManufacturersPage = () => {
  return (
    <div className="max-w-[900px] mx-auto pt-10 pb-20 px-default">
      <h1 className="text-center font-semibold text-3xl md:text-5xl">
        Manufacturers
      </h1>
      <p className="text-center text-muted-foreground mt-4 max-w-[600px] mx-auto">
        We partner with trusted manufacturers worldwide to bring you quality
        products at the best prices.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {manufacturers.map((m) => (
          <div
            key={m.name}
            className="border rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{m.specialty}</p>
            <p className="text-sm text-muted-foreground mt-1">{m.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturersPage;

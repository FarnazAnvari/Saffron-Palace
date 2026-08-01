import MenuHero from "@/components/menu/MenuHero";
import MenuCategories from "@/components/menu/MenuCategories";

export default function MenuPage() {
  return (
    <div className="flex flex-col">
      <MenuHero />
      <MenuCategories />
    </div>
  );
}

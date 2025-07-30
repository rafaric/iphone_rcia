import ProductCard from "./Card";

const MostLiked = () => {
  return (
    <div className="w-full my-10">
      <h3 className="font-bold text-4xl text-dark-gray text-center">
        Productos más vistos
      </h3>
      <div className="grid grid-cols-5 gap-2 lg:gap-8 my-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};
export default MostLiked;

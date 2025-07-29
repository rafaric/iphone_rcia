import Image from "next/image";

const Promo = () => {
  return (
    <div className="w-full justify-around bg-main h-14 flex items-center text-white mx-auto">
      <div className="flex flex-1 h-fit justify-center gap-2 text-sm">
        <p>Siganos:</p>
        <Image
          className="hover:brightness-110 hover:animate-pulse duration-200"
          src="/icons/social media/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          className="hover:brightness-110 hover:animate-pulse duration-200"
          src="/icons/social media/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        />
        <Image
          className="hover:brightness-110 hover:animate-pulse duration-200"
          src="/icons/social media/twitter.png"
          alt="twitter"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-1 justify-center font-semibold">
        Promociones especiales con tarjetas
      </div>
      <div className="flex flex-1 justify-center text-sm">
        Consulta por las ofertas del día
      </div>
    </div>
  );
};
export default Promo;

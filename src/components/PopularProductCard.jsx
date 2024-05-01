import { star } from "../assets/icons";

const PopularProductCard = ( {
  imgURL,
  name,
  price,
}) => {
  return ( 
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="overflow-hidden cursor-pointer bg-coral-red rounded-[2.5rem]">
        <img
          src={imgURL}
          alt={name}
          className="w-[100%] h-[100%] object-fit: cover; transition duration-300 transform hover:rotate-[360deg] hover:scale-110 hover:translate-x-[.3rem]"
        />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p
          className="font-montserrat text-xl leading-normal  text-slate-gray"
        >
          (4.5)
        </p>
      </div>
      <h3
        className="mt-2 text-2xl leading-normal font-semibold font-palanquin"
      >
        {name}
      </h3>
      <p
        className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal"
      >
        {price}
      </p>
    </div>
   );
   
}
 
export default PopularProductCard;

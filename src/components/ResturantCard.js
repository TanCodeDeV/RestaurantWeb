import { CLOUDINARY_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.info; // option chaining resData?.info
  return (
    <div className="res-card m-4 p-4 w-[280px] h-[380px] bg-slate-100 rounded-md border-2 border-gray-400  hover:border-black hover:w-[281px] hover:h-[382px]">
      <img
        className="res-img h-[180px] w-[280px] rounded-md mb-1"
        src={CLOUDINARY_URL + resData.info.cloudinaryImageId}
      ></img>
      <h4 className="font-bold text-[l] mb-1">{name}</h4>
      <h5 className="font-semibold mb-1">
        ⭐{avgRating} {" . "} {resData.info.sla.deliveryTime} mins
      </h5>
      <h5 className="lighter-font mb-1">{cuisines.join(", ")}</h5>
      <h5 className="font-semibold">{costForTwo}</h5>
    </div>
  );
};

//higher oder component
//input- restutant card
//output-  resturant card with agree Discount

// export const withAggreDiscount = (ResturantCard) => {
//   // returnsd a component inside with agree discount
//   return (props) => {
//     //below is the component for agree discount card
//     return (
//       <div>
//         <label className="absolute bg-red-500 text-white m-2 p-2 rounded-md">
//           Discount
//         </label>
//         <ResturantCard {...props} />
//       </div>
//     );
//   };
// };

export const withAggreDiscount = (ResturantCard) => {
  return (props) => {
    const discountInfo = props.resData.info.aggregatedDiscountInfoV3?.subHeader;

    return (
      <div>
        {discountInfo && (
          <div className="discount-label absolute bg-red-500 text-white m-2 p-2 rounded-md">
            {"ITEMS " + discountInfo}
          </div>
        )}
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;

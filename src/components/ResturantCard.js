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
    <div className="res-card">
      <img
        className="res-img"
        src={CLOUDINARY_URL + resData.info.cloudinaryImageId}
      ></img>
      <h4>{name}</h4>
      <h5>
        ⭐{avgRating} {" . "} {resData.info.sla.deliveryTime} mins
      </h5>
      <h5 className="lighter-font">{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResturantCard;

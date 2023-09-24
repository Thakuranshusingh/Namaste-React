import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div
      data-testid="resCard"
      className="res-card p-4 m-4 w-[190px] rounded-md bg-gray-100 hover:bg-slate-300"
    >
      <img
        alt="res-logo"
        className="res-logo rounded-md"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-400 text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

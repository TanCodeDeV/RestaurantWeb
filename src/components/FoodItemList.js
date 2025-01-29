import { useDispatch } from "react-redux";
import { addItem } from "../utils/AppStore/CartSlice";
import { FOOD_ITEM_URL } from "../utils/constants";

const FoodItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              className="p-2 m-2 border-gray-300 border-b-2 flex items-center justify-between"
              key={item.card.info.id}
            >
              {/* Content on the left */}
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span>{item.card.info.name}</span>
                  <span>
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="font-thin text-left text-xs">
                  {item.card.info.description}
                </p>
              </div>

              {/* Image on the right with overlay button */}
              <div className="relative w-[8rem] h-[7rem] ml-4">
                <img
                  className="w-full h-full object-cover rounded"
                  src={FOOD_ITEM_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                />
                <button
                  className="absolute bottom-2 right-2 px-2 py-1 rounded-md border-2 border-gray-300 bg-white text-green-500 hover:bg-gray-300"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodItemList;

import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useResturantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  //const { resID } = useParams();
  console.log(resID);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resID + "&submitAction=ENTER");

    const jasonData = await data.json();
    console.log(jasonData.data.cards[2].card.card.info);
    const resDataList = jasonData.data;
    setResInfo(resDataList);
  };

  return resInfo;
};

export default useResturantMenu;

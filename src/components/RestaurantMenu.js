import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

 const fetchMenu = async () => {
   try {
     const data = await fetch(
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10582",
     );

     console.log("STATUS:", data.status);

     const text = await data.text();

     console.log(text);
   } catch (err) {
     console.error(err);
   }
 };

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;

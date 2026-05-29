import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants,setFilteredRestaurants]=useState([])

  // Whenever state variable updates React triggers a reconciliation cycle ( re-renders the component )
  console.log("Body rendered");

  useEffect(() => {
    // fetch data
    console.log("useeffect")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    // Optional Chaining - as restaurants index keeps on changing
    setListOfRestaurants(
      json?.data?.cards?.find(
        (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
    );

    setFilteredRestaurants(
      json?.data?.cards?.find(
        (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
    );
  };

  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurants(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import { fireEvent, render , screen } from "@testing-library/react";
import {act} from "@testing-library/react";
import Body from "../Body";
// import RestaurantCard from "../RestaurantCard";
import Mock_DATA from "../mocks/mockResLis.json";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";


 global.fetch = jest.fn(
    ()=>{
        return Promise.resolve({
            json : ()=>{
                return Promise.resolve(Mock_DATA);
            }
        })

    }
 )
it("should Search Res List for Pizza input", async()=>{
    await act( async()=> render (
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    ) 
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

   const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: {value: "pizza" } });

  fireEvent.click(searchBtn);

 const cardsAfterSearch = screen.getAllByTestId("resCard");

 expect(cardsAfterSearch.length).toBe(2);
    
 
})


it("should filter Top Rated Restaurant", async()=>{
    await act( async()=> render (
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    ) 
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

   const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });


  fireEvent.click(topRatedBtn);

 const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(8);
    
 
})
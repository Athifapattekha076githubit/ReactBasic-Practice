import { render, screen, fireEvent} from "@testing-library/react";
import RestroMenu from "../RestroMenu";
import Header from "../Header";
import {act} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import Cart from "../Cart";


global.fetch = jest.fn(()=> 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
        }
    )
)


it("should load Restaurant Menu Component", async ()=> {

    await act(async ()=> 
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        <RestroMenu />
        <Cart />
        </Provider>
 </BrowserRouter>

        )
    )

     const accordionHeader = screen.getByText("Veg Pizza(13)");

      fireEvent.click(accordionHeader);
       
    expect(screen.getAllByTestId("foodItems").length).toBe(13);

     expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add+"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
   
     fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
       
     expect(screen.getAllByTestId("foodItems").length).toBe(15);

     fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

     expect(screen.getAllByTestId("foodItems").length).toBe(13);

     expect(
        screen.getByText("cart is empty. Add Items to the cart")
    ).toBeInTheDocument();
    });

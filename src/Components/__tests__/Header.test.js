import Header from "../Header"
import {fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should render Header component with a login button", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const  loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();

} );

it("should render Header component with a Cart items 0", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const  cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

} );

it("should render Header component with a Cart items ", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const  cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

} );

it("should chane login button to logout on Click", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );

    const  loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"})

    expect(logoutButton ).toBeInTheDocument();

} );
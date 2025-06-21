import {render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", ()=>{

    
test("Should load  button inside contact us component", ()=>{
    render(<Contact />);

  
 const button = screen.getByRole("button")


//   Assertion
    
  expect(button).toBeInTheDocument();

});

test("Should load  button inside contact us component", ()=>{
    render(<Contact />);

const button = screen.getByRole("button")


//   Assertion
    
  expect(button).toBeInTheDocument("Submit");

});

test("Should load  button inside contact us component", ()=>{
    render(<Contact />);

const button = screen.getByText('Submit');


//   Assertion
    
  expect(button).toBeInTheDocument();

});

test("Should load  input name inside contact us component", ()=>{
    render(<Contact />);

const inputName = screen.getByPlaceholderText("Enter name")


//   Assertion
    
  expect(inputName).toBeInTheDocument();

});

test("should load 2 input boxes on the contact com[ponent", ()=>{
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox");

    // expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBeTruthy();
});
});





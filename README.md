# MyStore
An angular application for managing an E-commerce frontend.
Documentations:
- [Application Architecture](#application-architecture)
- [Application Setup and running](#application-setup)

# Application Architecture
The application consists of 8 compoents along with 1 layout component and 1 service. As a whole, the application contains 4 pages that can navigate to each other depending on the user's actions.

## Components
The application contains the following compoents (ordered hierarchically):
- **Product list** This component contains the logic of sibscribing to the product list data and showing them. It shows the data by looping over them (with `*ngFor`) and instantiating the Product Item component for each of them.
- **Product Item** This component houses the syling and the UI of each product listed in the product-list page. It has the ability to add a specific amount of the current product to the cart, and if added twice, the quantity of the item will increase accordingly.
- **Product Item Detail** This component shows the details of the selected item from the product-list page. It has the ability to add the product to the cart as in the Product Item component.
- **Cart** This component either shows Empty Cart or the list of products (by instantiating the cart item component for each item) in the cart along with an instance of the checkout form component.
- **Cart Item**: This component shows the item in the cart along with the selected quantity. It has the ability to change the quantity of the item or to remove the item from the cart by changing the amount to 0.
- **Checkout Form** This component contains the form for the required user details in order to checkout with products in the cart, and then clear the cart. It contains full validation for each of the inputs along with a user-friendly message to notify them of any validation failures. After successful validation, the user is redirected to the checkout component (without changing the URL) with the state being the full name of the user and the total price.
- **Confirmation** This component shows teh confirmation message along with the user's full name and the total price. It also contains a link shown as a button to return to the main page.
- **Not Found** This component is used to get any routing that is caught by any other component. It shows that the current page does not exist.

## Layout component
The application contains the Header layout component that shows the links of the different pages the user can visit.

## Store Service
The store service is where the product list and the cart items are stored, broadcasted, subscribed to, and manipulated.
It contains the following methods:
- **Fetch Products** This method fetches the products using the `HttpClient` service from the `/assets/data.json` and broadcasts them to all the subscriptions.
- **Add To Cart** This method adds the item passed from the parameter list to the cart list and broadcasts the new cart.
- **Modify Cart Item Quantity** This method modifies the quantity of an item to a specific amount, and removes the item if the amount is 0.
- **Remove Cart Item** This method removes the specified item from the cart.
- **Clear Cart** This method clears the whole cart. It is called after the checkout is done successfully.


# Application Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

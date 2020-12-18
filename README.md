# Le Marché aux Puces !

Marché aux Puces is an online e-commerce platform for users to buy and sell handmade, vintage and other ecceletic items made from the heart in an easy to use and minimalist design.

# Built With
* Ruby on Rails
* Javascript
* React/Redux

# Features
* Creation and removal of user accounts
* Product listings by users
* A persistent shopping cart for each user
* Case insensitive search functionality



# Code

**Modal for all Forms**

Marché aux Puce makes use of a modal for all forms that users will encounter to ensure consistent styling and renders based on text for the form type that needs to be rendered.

![Modal](./public/Modal.png?raw=true)

```javascript
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "review":
      component = <ReviewFormContainer />;
      break;
    case "add_product":
      component = <AddProductFormContainer />;
      break;
    case "edit_product":
      component = <EditProductFormContainer />;
      break;
    case "delete_user":
      component = <DeleteUserContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
} 
```

# Product Categories

In the header/nav bar, users can select from a number of predefine category listings to further refine their searches. In order to be more efficient with the data, my `Product#index` controller was refactored to perform this action server to decrease data load and processing on the front-end based on the category passed in the url parameters.

```javascript
    def index
        if params[:category] == "" || params[:category].nil?
            @products = Product.all
            render '/api/products/index'
        else
            @products = Product.where(category: params[:category])
            render '/api/products/index'
        end
        
    end

```

# Todo
* Cart Quantities
* Cart checkout button
* Purchased product history for users.

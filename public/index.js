const burger = require("../models/burger");

    // UPDATE
    const devourBurger = document.querySelectorAll('.devouredId');
  
    if (devourBurger) {
      devourBurger.forEach((element) => {
        element.addEventListener('click', (e) => {
          console.log('devour clicked');
          // Grabs the id of the element that goes by the name, "id"
          // const id = e.target.getAttribute('data-id');
          const justDevoured = e.target.getAttribute('data-justdevoured');
  
          const burgerStatus = {
            devoured: justDevoured,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(burgerStatus),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devoured to: ${justDevoured}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.querySelector('#createBurgerBtn');
    const burgerInput = document.querySelector('#burgerInput');

    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          burger_name: burger.Input.value.trim(),
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burgerInput').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger to be devoured!');
          // location.reload();
        });
      });
    }
  
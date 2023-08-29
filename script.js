document.addEventListener('DOMContentLoaded', () => {
    
    // Select all button elements inside the div with the class "rating-options".
    const ratingButtons = document.querySelectorAll('.rating-options button');
    
    // Loop through each of the selected buttons.
    ratingButtons.forEach(button => {
        
        // Add a click event listener to each button.
        button.addEventListener('click', (e) => {
            
            // Get the rating value from the data-rate attribute of the clicked button.
            const rating = e.target.getAttribute('data-rate');
            
            // (For demonstration purposes) Log the rating to the console.
            console.log(`User rated: ${rating}`);

            // Redirect to a new page (e.g., a thank you page). 
            window.location.href = "thankyou.html";
        });
    });
});


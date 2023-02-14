async function newReviewHandler(event) {
    event.preventDefault();

    //find and associate variables with user assigned value given 
    //to animal_na,e and post-text.
    const animal_name = document.querySelector('input[name="review-title"]').value;
    const contents = document.querySelector('textarea[name="review-text"]').value;



//new post created as a JSON object with title and post_text.
    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            animal_name,
            contents
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

//redirect user to see newest review in users reviews.
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}

//listens for the submit button to be clicked to call newFormHandler function
document.querySelector('.new-animal-review').addEventListener('submit', newReviewHandler);
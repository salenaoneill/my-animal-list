async function commentHandler(event) {
    event.preventDefault();

     //find and associate variables with user assigned value given 
    //to comment_text
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;

    //get the post id from the url
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
//new comment created as a JSON object with post_id and comment_text
    const response = await fetch('./api/comments', {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
//reload page
    if (response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
}

//listens for the submit button to be clicked to call commentFormHandler function
document.querySelector('.add-comment').addEventListener('submit', commentHandler);
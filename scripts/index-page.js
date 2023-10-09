let comments = [
    {
      "name": "Connor Walton",
      "date": "10/04/23",
      "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      "name": "Emile Beach",
      "date": "01/29/23",
      "comment": 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
      "name": "Miles Acosta",
      "date": "12/20/22",
      "comment": `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`
    }
  ]

  const container = document.querySelector('.container');
  const form = document.querySelector('.comment__form');
  
function displayComments() {
    container.innerHTML = '';

  for (let i = 0; i < comments.length; i++ ) {

  const commentBox = document.createElement('div');
  commentBox.classList.add('comment__box');

  let commentContainer = document.createElement('div');
  commentContainer.classList.add('comment__container');
  commentBox.appendChild(commentContainer);

  let commentSection = document.createElement('div');
  commentSection.classList.add('comment__section');
  commentBox.appendChild(commentSection);

  let commentIcon = document.createElement('img');
  commentIcon.classList.add('comment__icon');
  commentBox.appendChild(commentIcon);

  let commentName = document.createElement('span');
  commentName.classList.add('comment__name');
  commentName.textContent = comments[i].name;
  commentSection.appendChild(commentName);

  let commentDate = document.createElement('span');
  commentDate.classList.add('comment__date');
  commentDate.textContent = comments[i].date;
  commentSection.appendChild(commentDate);

  let commentArea = document.createElement('p');
  commentArea.classList.add('comment__area');
  commentArea.textContent = comments[i].comment;
  commentSection.appendChild(commentArea);

container.appendChild(commentBox);

}
}
displayComments();


function makeNewComment() {

    for(let i = 0; i < comments.length; i++)
    makeNewComment(comments[i]);
}

function makeNewComment(commenter, comment) {
    if (!commenter || !comment) {
        alert('So sorry no name');
        return;
    }
    
    const newComment = {
            name: commenter,
            date: new Date().toLocaleTimeString(),
            comment: comment
        };

        comments.unshift(newComment);
        displayComments();
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const comment = event.target.userName.value;
    const userComment = event.target.userComment.value;

    makeNewComment(comment, userComment);

    
};


form.addEventListener('submit', handleFormSubmit);
displayCommets();
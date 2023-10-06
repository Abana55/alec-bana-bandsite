const comments = [
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
      "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
];

const container = document.getElementsByClassName('container');
const form = document.getElementsByClassName('comment__form');

function makeComment(commentObj) {
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
    commentSection.appendChild(commentIcon);

    let commentName = document.createElement('span');
    commentName.classList.add('comment__name');
    commentName.textContent = commentObj.name;
    commentSection.appendChild(commentName);

    let commentDate = document.createElement('span');
    commentDate.classList.add('comment__date');
    commentDate.textContent = commentObj.date;
    commentSection.appendChild(commentDate);

    let commentArea = document.createElement('p');
    commentArea.classList.add('comment__area');
    commentArea.textContent = commentObj.comment;
    commentContainer.appendChild(commentArea);

    container.appendChild(commentBox);
}

function makeSubmission() {
    for (let i = 0; i < comments.length; i++) {
        makeComment(comments[i]);
    }
}

function makeNewUser(user, comment) {
    if (!user || !comment) {
        alert("You didn't tell me your name!");
        return;
    }

    const date = new Date().toLocaleDateString();
    const newUser = {
        name: user,
        date: date,
        comment: comment
    }

    makeComment(newUser);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const curUser = event.target.userName.value;
    const curComment = event.target.userComment.value;

    makeNewUser(curUser, curComment);

    event.target.reset();
}

form.addEventListener('submit', handleFormSubmit);
makeCards();

// unshift.
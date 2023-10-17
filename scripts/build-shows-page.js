  const backendShows = new BandSiteAPI('840eb569-93a6-452b-be2e-81f83a8c8c9b')
  
  const main = document.querySelector('main');
  const showTitle = document.createElement('h2');

  showTitle.classList.add('show__title');
  showTitle.innerText = 'Shows';
  main.appendChild(showTitle);

  const container = document.createElement('section');
  container.classList.add('show__section');

 async function displayShows() {
  const shows = await backendShows.getShows()

  for (let i = 0; i < shows.length; i++ ) {
    const showBox = document.createElement('section');
    showBox.classList.add('show__box');

    let showFace = document.createElement('div');
    showFace.classList.add('show__face');
    showBox.appendChild(showFace);

    let showDate = document.createElement('h3');
    showDate.classList.add('show__date');
    showDate.textContent = 'Date';
    showFace.appendChild(showDate);

    let showTime = document.createElement('p');
    showTime.classList.add('show__time');
    showTime.textContent = new Date (shows[i].date).toDateString();
    showFace.appendChild(showTime);

    let showHall = document.createElement('div');
    showHall.classList.add('show__hall');
    showBox.appendChild(showHall);

    let showVenue = document.createElement('h3');
    showVenue.classList.add('show__venue');
    showVenue.textContent = `Venue`;
    showHall.appendChild(showVenue);
    
    let showPlace = document.createElement('p');
    showPlace.classList.add('show__place');
    showPlace.textContent = shows[i].place;
    showHall.appendChild(showPlace);

    let showSpot = document.createElement('div');
    showSpot.classList.add('show__spot');
    showBox.appendChild(showSpot);

    let showLocation = document.createElement('h3');
    showLocation.classList.add('show__location');
    showLocation.textContent = 'Location';
    showSpot.appendChild(showLocation);

    let showLocal = document.createElement('p');
    showLocal.classList.add('show__local');
    showLocal.textContent = shows[i].location;
    showSpot.appendChild(showLocal);

    let showButton = document.createElement('button');
    showButton.classList.add('show__button');
    showButton.textContent = 'BUY TICKETS';
    showBox.appendChild(showButton)

    container.appendChild(showBox);
  }
 };
 
displayShows();
main.appendChild(container);

const showHover = document.querySelectorAll('.show__box');

showHover.forEach((show) => 
show.addEventListener("click", () => {
  showHover.forEach((showBox) => 
  showBox.classList.remove("show__hovers"),
    );
  show.classList.add("show__hovers");
  })
);
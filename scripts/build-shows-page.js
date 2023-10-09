let shows = [
    {
      "Date": "MON Sept 06 2021",
      "Venue": "Ronald Lane",
      "Location": 'San Francisco, CA',
    },
    {
      "Date": "Tue Sept 21 2021",
      "Venue": "Pier 3 East",
      "Location": 'San Francisco, CA',
    },
    {
      "Date": "Fri Oct 15 2021",
      "Venue": "View Lounge",
      "Location": 'San Francisco, CA',
    },
    {
      "Date": "Sat Nov 06 2021",
      "Venue": "Hyatt Agency",
      "Location": 'San Francisco, CA',
    },
    {
      "Date": "Fri Nov 26 2021",
      "Venue": "Moscow Center",
      "Location": 'San Francisco, CA',
    },
    {
      "Date": "Wed Dec 15 2021",
      "Venue": "Press Club",
      "Location": 'San Francisco, CA',
    },
  ];
  
  const main = document.querySelector('main');
  const showTitle = document.createElement('h2');
  showTitle.classList.add('show__title');
  showTitle.innerText = 'Shows';
  main.appendChild(showTitle);

  const container = document.createElement('section');
  container.classList.add('show__section');


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
    showTime.textContent = shows[i].Date;
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
    showPlace.textContent = shows[i].Venue;
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
    showLocal.textContent = shows[i].Location;
    showSpot.appendChild(showLocal);

    let showButton = document.createElement('button');
    showButton.classList.add('show__button');
    showButton.textContent = 'BUY TICKETS';
    showBox.appendChild(showButton)

    container.appendChild(showBox);


  }

main.appendChild(container);
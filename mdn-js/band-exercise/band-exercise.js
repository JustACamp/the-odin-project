const band = {
    name : 'Interpol',
    genre : '',
    yearFormed: "1997",
    split: "false",
    members : 'five',
    albumNum: 'seven',
    epNum: 'seven',
    albums: [
      {name: "Turn on the Bright Lights",
       released: "2002"
      },
      {name: "Antics",
        year: "2004"
      },
      {name: "Our Love to Admire", 
       year: "2007"
      }
      ]
  };
  
  
  
  // Don't edit the code below here
  let body = document.querySelector('body');
  let para2 = document.createElement('p');
  let bandInfo;
  bandInfo = `My favorite band's name is ${ band.name }. They have ${band.members} members. Of their ${band.albumNum} albums, ${band.albums[0].name}, (released in ${band.albums[0].released}) is the best. They have been active for ${2023 - band.yearFormed} years.`;
  
  let para1 = document.createElement('p');
  para1.textContent = bandInfo;
  body.appendChild(para1);
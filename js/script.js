console.log("hello world");

const igSources = [
    "https://www.instagram.com/p/BtHcxr3AvgW/",
    "https://www.instagram.com/p/Bs9zlOQg90-/",
    "https://www.instagram.com/p/BsrkZXKgMij/",
    "https://www.instagram.com/p/BspW7c-A6O9/",
    "https://www.instagram.com/p/BsWFMInAIRc/",
    "https://www.instagram.com/p/BsSYK6hgd_e/"
];

// function createIgFeed(urlLi) {
//     for (let i = 0; i < urlLi.length; i++) {
//         let source = urlLi[i].substr(28,11);
//         let title = $.getJSON(`https://api.instagram.com/oembed?url=http://instagr.am/p/${source}/`, function(postData) {
//             console.log(postData.title);
//         });
//         let img = `<div><img src="${urlLi[i]}media/" alt=""><p>${title}</p></div>`;
//         let imgContainer = document.getElementById("instagramFeed");
//         imgContainer.innerHTML += img;
//     }
// }

function createIgFeed(urlLi) {
    for (let i = 0; i < urlLi.length; i++) {
        let source = urlLi[i].substr(28,11);
        fetch(`https://api.instagram.com/oembed?url=http://instagr.am/p/${source}/`).then(response => {
          return response.json();
        }).then(data => {
          // Work with JSON data here
          const img = `<div><img src="${urlLi[i]}media/" alt=""><p>${data.title}</p></div>`;
          let imgContainer = document.getElementById("instagramFeed");
          imgContainer.innerHTML += img;
          console.log(data.title);
        }).catch(err => {
          // Do something for an error here
        });
    }
}

createIgFeed(igSources);

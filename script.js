// Write your Javascript excercises here:


// What you want to print on your page goes here:
//const greeting = "Hejsan";
//const name = "Magdalena";

//document.querySelector(".result").innerHTML = greeting + ' ' + name;



function myFunction() {
     const displayOrHide = document.getElementById("myDIV");
     if (displayOrHide.style.display === "block") {
         displayOrHide.style.display = "none";
     }
     else {
         displayOrHide.style.display = "block";
     }
 }

const key = "6d7cb623efca4272ae7332a5fc3efb56"
const url = `https://newsapi.org/v2/top-headlines?country=se&category=sports&q=vm&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    const newsDiv = document.querySelector(".firstNews")
    newsdata.articles.forEach((article, index) => {


      let readDescription = article.description;
      if (article.description === null) {
        readDescription = "Artikeln har ingen text :)"
       }

    let imageUrl = article.urlToImage;
    if (article.urlToImage === null) {
  		imageUrl = "https://superlenny.com/sv/lennytalks/wp-content/uploads/2017/11/fifa-world-cup-2018.jpg"
  	}


    if(index === 0) {
        const firstNewsDiv = document.createElement("div")
    		firstNewsDiv.className = "";
    		firstNewsDiv.innerHTML = `
    		<a target="_blank" href="${article.url}"><h2>${article.title}</h2></a>
    		<img src="${imageUrl}"/>`
        newsDiv.appendChild(firstNewsDiv)
    	}

    	//Here we create and add html elements to our html file
	  if(index < 20 && index > 0) {
      const div2 = document.createElement("div");
		  const button = document.createElement("div");

		  div2.className = "hide-details";
		  div2.innerHTML = `<p>${article.description}</p>`

		  button.innerHTML = "Read More";
		  button.onclick = () => {div2.classList.toggle("hide-details");}

		  const div = document.createElement("div")
	      div.className = "news"
	      div.innerHTML = `
				<a target="_blank" href="${article.url}"><h2>${article.title}</h2></a>
				<img src="${imageUrl}"/>`
	      articlesDiv.appendChild(div)

        div.appendChild(button);
		    div.appendChild(div2)
	  }
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

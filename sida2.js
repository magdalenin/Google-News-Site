
const myName = "Magdalena";
const variable = 2 + 3;


const fruits = ["Orange", "Apple", "Grape"]
fruits.forEach((random) => {
  //console.log(random);
})

const apple = {name: "Apple", isSour: true, taste: 6};
const orange = {name: "Orange", isSour: true, taste: 4};
const pear = {name: "Pear", isSour: false, taste: 8};

const fruitArray = [apple, orange, pear];

console.log(fruitArray[1].name);

//kallas arrow function
fruitArray.forEach((fruit, index) => {
  console.log(fruit.name, index);
})

//const newFunction = (a, b) => {
//console.log(newFunction(10, 15));

const func = (arg) => {
  return arg.charAt(6);
}

const articles = [
        {
            "source": {
                "id": null,
                "name": "Expressen.se"
            },
            "author": "mikaela lindahl",
            "title": "LA Galaxy utslagna – när Zlatan är på VM",
            "description": "",
            "url": "https://www.expressen.se/sport/fotbollsvm/la-galaxy-utslagna-nar-zlatan-ar-pa-vm/",
            "urlToImage": "https://w.cdn-expressen.se/images/b9/09/b9091bd2d8c447bf9d6b8ad6e65d7071/16x9/original.jpg",
            "publishedAt": "2018-06-16T06:43:00Z"
        },
        {
            "source": {
                "id": null,
                "name": "Aftonbladet.se"
            },
            "author": "Marcus Leifby",
            "title": "Leifby: Låt Eriksson få prata fotboll, SVT",
            "description": "VM är igång och om någon är nyfiken på vem som dömer, varför just den domaren dömer, hur det är att döma och om det borde dömts annorlunda, så är det av allt att döma SVT som gäller.",
            "url": "https://www.aftonbladet.se/sportbladet/fotboll/a/6n7zkr/leifby-lat-eriksson-fa-prata-fotboll-svt",
            "urlToImage": "https://imgs.aftonbladet-cdn.se/v2/images/cbdc105d-177a-4fdd-8065-79f454a7cddf?fit=crop&h=630&w=1200&s=26aad7ef83b63e87823b088b53ec227dbe1377cb",
            "publishedAt": "2018-06-16T06:37:00Z"
        },
        {
            "source": {
                "id": null,
                "name": "Fotbollskanalen.se"
            },
            "author": null,
            "title": "Stormakten Argentina övertygar",
            "description": "VM rullar vidare med inte mindre än fyra matcher under lördagen. Den jag främst riktar mina blickar mot är mötet mellan Argentina och Island i Moskva. Sydamerikanerna går in som en stormakt i turneringen men har vissa frågetecken efter ett halvdant kval. Kan …",
            "url": "https://www.fotbollskanalen.se/svenska-spel/oddset/stormakten-argentina-overtygar/",
            "urlToImage": "http://www.fotbollskanalen.se/ImageHandler.axd?epslanguage=sv&guid=d3d2a6a3-d619-46d7-87bb-d7661a88d1f2&imageFormat=original",
            "publishedAt": "2018-06-15T21:01:11Z"
        },
        {
            "source": {
                "id": null,
                "name": "Aftonbladet.se"
            },
            "author": "Michael Wagner",
            "title": "Portugal –Spanien i fotbolls-VM",
            "description": "Det blir ett stormöte direkt i första omgången av grupp B när Portugal och Spanien möts i Sotji.",
            "url": "https://www.aftonbladet.se/sportbladet/fotboll/a/m646WL/portugal-spanien-i-fotbolls-vm",
            "urlToImage": "https://imgs.aftonbladet-cdn.se/v2/images/60005cd6-f824-4fd5-b28a-6ae83aeeee39?fit=crop&h=994&w=1900&s=0454490c82197b4caa0503c6b8434bb31e4c064f",
            "publishedAt": "2018-06-15T19:47:26Z"
        },
        {
            "source": {
                "id": null,
                "name": "Www.dn.se"
            },
            "author": null,
            "title": "Marockanskt självmål gav Iran segern",
            "description": "Med en språngnick i eget mål på övertid avgjorde Marocko – för Iran. Målet tillkom efter att Östersunds Saman Ghoddos vunnit en frispark åt Iran.",
            "url": "https://www.dn.se/sport/fotboll/marockanskt-sjalvmal-gav-iran-segen/",
            "urlToImage": "https://cached-images.bonnier.news/cms30/UploadedImages/2018/6/15/cc037f70-ff53-4e6e-b3b0-aec123783298/bigOriginal.jpg?interpolation=lanczos-none&fit=inside|470:246&output-quality=80&output-format=jpeg",
            "publishedAt": "2018-06-15T17:30:45Z"
        }
    ]


articles.forEach((article) => {
   document.querySelector(".result").appendChild(document.createTextNode(`${article.title} `));
})

# Övning - Movie search app

## Instruktioner

Du ska bygga en sida där man kan söka på filmer och visa resultatet i en lista. Ifall sökningen inte ger några träffar ska ett meddelande om detta visas.

Du ska använda dig av nedanstående API för att göra sökningen.

**API:** http://www.omdbapi.com/

**API-nyckel:** 37fe945a

Exempelanrop:

```
fetch('http://www.omdbapi.com/?apikey=37fe945a&s=Emma');
```

Du ska visa följande egenskaper om varje film:
* imdbID
* Poster
* Title
* Year

## Level 1
Din React-app ska bestå (förutom index.js och app.js) av tre komponenter:

 * `SearchMovies.js` - För att söka mot API:et
 * `DisplayMovies.js` - Ska loopa ut alla filmer som sökningen returnerade, varje film ska vara komponenten `MovieCard`
 * `MovieCard.js` - En komponent för att visa en film med ovanstående egenskaper

Använd dig av funktionella komponenter, React Hooks och props.

## Level 2

Gör om din React-app så den använder sig av Redux och att du sparar resultatet från API-anropet i din store.
`DisplayMovies.js` ska sedan hämta svaret från din store.
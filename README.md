# Interface-Interactie

| Naam | Studentnr.       | Klas     | Vak     | Startniveau |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Milan Steman     | 500800819       | VID2 | Interface & Interactie | Zwart |

# Je plan

<details open>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

### De eerste versie/schets:

### Je ambitie:

Aan deze technieken/punten wil ik werken:

- Werken met 3d objecten in CSS;
- Transities en animaties;
- Interacties d.m.v. DOM manipulatie

</details>

## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

### Bevinding 1:

Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 2:

Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 3:

...

</details>

## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 2:

Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 3:

...

</details>

## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  Je hebt nu een 3d model, maar buiten de start-animatie doe je er niet veel mee. Is het misschien een idee om nog iets interactiefs met je 3d model te doen?

#### oplossing:

Om ervoor te zorgen dat er toch een stukje interactiviteit was met het 3d object, heb ik een functie aangemaakt die het 3d model laat transformen wanneer je buiten de 'box' van de pokedex aan het hoveren bent. Hier kijk ik ook naar de 'hoek' waarin de cursor zich bevind. Zo kunnen we de translate3d aanpassen o.b.v. muispositie.

### Bevinding 2:

De interactie in de pokedex voelt nog wat leeg aan. Is er een manier waarop je het wat speelser kan maken?

#### oplossing:

Om de interactie te verhogen, heb ik de actieve Eevee in de bovenste lijst een animatie gegeven, Nu springt de huidige Eevee op en neer, net als in de echte game. Verder verandert de favicon en de titel naar de huidige Eevee. Bovendien laat ik per Eevee in de bovenste lijst zien welk item ze nodig hebben om te evolueren.

### Bevinding 3:

De blurry achtergrond is nog moeilijk te spotten. Kan je deze op een manier versterken?

#### oplossing:

Om de achtergrond te versterken, heb ik een 'outer'- en 'inner' cirkel gemaakt. De inner ring heeft meer opacity, maar is kleiner. Hierdoor krijg je een mooier achtergrond-effect.

### Bevinding 4:

De achtergrond en Eevee's veranderen nog steeds wanneer de pokedex uit staat. Je kan ook op het geluid-knopje drukken (wanneer de pokedex uit staat).

#### oplossing:

Dit was natuurlijk niet de bedoeling. Ik wil eigenlijk dat je alleen de interacteren met de elementen wanneer de pokedex aan staat. Hiervoor heb ik in het Javascript bestand een if statement gezet voor elke interactief blokje. Deze statement bevat een conditie die bekijkt of de pokedex de classList 'online' bevat. Wanneer dit niet het geval is, dan zullen de interactieve elementen nog niet werken.

### Bevinding 5:

De tekst in je pokedex snijdt nu nog af. Is dit de bedoeling? Of zou je er bijvoorbeeld doorheen kunnen scrollen?

#### oplossing:

De tekst hoort eigenlijk scrollable te zijn. Om dit te realiseren, heb ik bij de parent (li) een overflow: scroll neergezet.

</details>

## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

### Je uitkomst - karakteristiek screenshot(s):

### Dit ging goed/Heb ik geleerd:

Korte omschrijving met plaatje(s)

### Dit was lastig/Is niet gelukt:

Korte omschrijving met plaatje(s)

</details>

## Bronnenlijst

<details open>
<summary>Alle bronnen</summary>

1. [Cube - Intro to CSS 3D transforms](https://3dtransforms.desandro.com/cube)
2. [Detecting arrow key presses in JavaScript](https://stackoverflow.com/a/44213036)
3. [D-Pad animatie & box shadow](https://sinds1971.nl/spelenmetcss/2022-feb/stephan/index.html)
4. [Changing Favicon in Javascript](https://bootstrapcreative.com/how-to-change-favicon-with-javascript/)
5. [Make first letter of string uppercase in Javascript](https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript)
6. [How to use the mouseover event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
7. [How to get the viewport in Javascript](https://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto)
8. [Javascript MousEvent pageY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY)
9. [Javascript MousEvent pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX)
10. [CSS Translate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d)
11. [Smoother & sharper shadows with layered box-shadows](https://tobiasahlin.com/blog/layered-smooth-box-shadows/)
12. [Scss @mixin and @include](https://sass-lang.com/documentation/at-rules/mixin)
13. [CSS Radial Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
14. [Pokemon Audio (Alle)](https://play.pokemonshowdown.com/audio/cries)
15. [Pokemon Informatie (Alle)](https://bulbapedia.bulbagarden.net/wiki/Eeveelution)
16. [Pokemon Sprites (Alle)](https://www.ign.com/wikis/pokemon-black-and-white/)
17. [Pokemon Item Sprites (Alle)](https://bulbapedia.bulbagarden.net/)
</details>

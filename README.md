# Interface-Interactie

| Naam         | Studentnr. | Klas | Vak                    | Startniveau |
| ------------ | ---------- | ---- | ---------------------- | ----------- |
| Milan Steman | 500800819  | VID2 | Interface & Interactie | Zwart       |

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
  <summary>Mijn bevindingen + wijzigingen</summary>

### Bevinding 1:

Hoe wil je precies de evolutie gaan tonen voor alle Eevee's?

#### oplossing:

Dit was een goed punt. Een pokedex is leuk, maar hoe ga je precies de evoluties tonen? Ik ben tot de oplossing gekomen om de benodigde items op het bovenste scherm te tonen. Dit kan bijvoorbeeld door alle Eevee's op een rij te zetten, met het item.

### Bevinding 2:

Welke transities wil je in je ontwerp stoppen? Kan er bijvoorbeeld een swipe-effect o.i.d. komen?

#### oplossing:

Het liefst wil ik een scroll effect creëren wanneer je van Eevee verandert.

### Bevinding 3:

Zijn er nog easter eggs die je wilt toevoegen?

#### oplossing:

Misschien zou het leuk zijn om als easter egg een pokeball-icon per Eevee te zetten wanneer je erover hovered, of dat er iets qua tekst op de achtergrond verandert.

</details>

## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>
  
  ### Bevinding 1:
  Je hebt nog geen fonts gebruikt op je pagina. Kijk of je misschien een lokaal font, of eentje van Google/Adobe kan inladen.

#### oplossing:

Eigenlijk had ik op dit moment nog niet heel veel behoefte aan een font. Ik had nog maar drie regels met tekst. De bedoeling is dat er per Eeveelution en korte tekst met wat uitleg komt te staan. Dit staat in het reguliere sans-serif niet heel mooi. Daarom heb ik het font [inter](https://fonts.google.com/specimen/Inter) geïmporteerd vanuit Google Fonts.

### Bevinding 2:

Je openklapbare rechthoekjes kunnen nog niet met tab geselecteerd worden. Bovendien missen de buttons nog een aantal states.

#### oplossing:

De openklapbare rechthoeken zijn geen buttons. Daarom kunnen ze niet automatisch met tab geselecteerd worden. Hiervoor heb ik het HTML attribuut `tabindex` gebruikt.

```html
<!-- Rechthoek 5 -->
<section tabindex="1">
    <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>
</section>
```

Aan de buttons heb ik een active state toegevoegd. Hierdoor krijg je een daadwerkelijke inklikbare button.


### Bevinding 3:
Ik zie dat je een extensie gebruikt op je CSS. Hierdoor compiled het alleen verkeerd om. Je custom properties en globale stijling komen onderaan te staan.

#### oplossing:

Ik had in mijn main.scss perongeluk eerst de verschillende mapjes geïmporteerd voor de globale stijling. Hierdoor stond het allemaal andersom. Dit heb ik omgedraait. In de main.scss staan nu pas op het eind de imports.

### Bevinding 4:
In je CSS custom properties wordt niet altijd dezelfde manier gebruikt om kleurtjes te verzamelen.

#### oplossing:

In de custom properties stonden wat kleurtjes die met hsl gespecificeerd werden. Dit was niet de bedoeling, aangezien ik niet met verschillende tinten ging werken. De onnodige kleurtjes zijn weggehaald of aangepast naar een hexcode.

### Bevinding 5:
Er zijn nog een paar divjes die onnodig wrappen om bepaalde elementen.

#### oplossing:

Er waren nog een aantal divjes die wrappen om een losse section of ander element. Deze zijn in de HTML weggehaald en in de CSS is de stijling zodanig aangepast dat hetzelfde resultaat (qua stijling) te behalen was zonder de extra div.

</details>

## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>
  
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

De tekst hoort eigenlijk scrollable te zijn. Om dit te realiseren, heb ik bij de parent (li) een overflow met als waarde scroll neergezet. De parent (ol) heeft nog steeds de waarde hidden. Zo snijdt de tekst af in het beeldscherm, maar kan je wel door de tekst heen scrollen.

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

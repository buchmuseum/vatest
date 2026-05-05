
window.chapters = [
  {
  id: "intro",
  type: "intro",
  background: {
    type: "color",
    value: "#000000"
  },
  blocks: [
    {
      type: "text",
      content: "Eine der größten menschlichen Errungenschaften ist die Speicherung von Wissen. Ohne sie wäre kultureller und technischer Fortschritt undenkbar. Die Mittel der Speicherung haben sich in den letzten Jahrtausenden stark verändert. <br>Wir wagen eine Zeitreise durch die Geschichte der Wissensspeicherung und blicken anhand ausgewählter Beispiele in ihre Zukunft: vom Hungerstein und Gedächtnisketten in früher Zeit bis hin zu existenziellen Fragen der Atomsemiotik, Bioarchiven, Asservatenkammern und Zeitkapseln und den ersten Versuchen, Wissen auf DNA oder Memristoren zu speichern."
    }
  ]
  },
  { 
    id: "kapitel-1",
    title: "Der Zeitungsdruck kommt in Bewegung",
    style: "style-sprechblase",   
    color: "#2d6cdf",
    background: {
      type: "color",
      value: "#882f9c"
    },
    blocks: [
      {
        type: "text",
        content: "Auch Kuriositäten erfreuten sich reger Beliebtheit. So wirbt dieser Einblattdruck für die Ausstellung eines präparierten Krokodils, das ab 1563 in deutschen Städten gezeigt wurde. Wie viele Schausteller führte Salvator Flaminio dabei den Bilddruckstock mit sich und passte den Text am Ort der Schaustellung an."
      },
      {
        type: "media",
        media: {
          src: "assets/images/1.jpg"
        },
        text: "Mit der Erfindung seines Handgießinstrumentes ...",
        meta: {
          title: "Zeitungsdruckpresse",
          license: "CC BY-SA 4.0",
          rights: "Max Mustermann",
          description: "Frühe Druckpresse zur Herstellung von Zeitungen.",
          type: "Druckobjekt",
          identifier: "OBJ-1932-004",
          participants: "Johannes Gutenberg (zugeschrieben)",
          time: "ca. 1650",
          place: "Mainz",
          url: "https://example.org/objekt/123"
        }
      },
      {
          type: "image",
          src: "assets/images/2.jpg",
          meta: {
            title: "Zeitungsdruckpresse (ca. 17. Jh.)",
            year: "ca. 1650",
            description: "Frühe Druckpresse zur Herstellung von Flugblättern und Zeitungen.",
            source: "Deutsches Buch- und Schriftmuseum"
          }
        },
      {
        type: "gallery",
        items: [
          {type: "image", src: "assets/images/3.jpg",
            meta: {
              title: "Drucktype",
              year: "1600",
              description: "Einzelne Metalllettern aus einer Setzerei."
            }
          },
          {type: "image", src: "assets/images/4.jpg" },
          {type: "image", src: "assets/images/5.jpg" },
          {type: "image", src: "assets/images/6.jpg" },
          {type: "image", src: "assets/images/7.jpg" }
        ]
      }
    ]
  },

  {
    id: "kapitel-2",
    title: "Sporadisch - Wöchentlich - Täglich",
    style: "style-diagonal",
    color: "#882f9c",  
    background: {
      type: "image",
      value: "assets/images/4.jpg"
    },
    blocks: [
      {
        type: "text",
        content: "Mit der Erfindung seines Handgießinstrumentes entwickelte sich die periodische Zeitung."
      }
    ]
  },
  {
    id: "kapitel-3",
    title: "weitere Kapitel als Test",
    style: "style-blob",
    color: "#2f699c",  
    background: {
      type: "color",
      value: "#9c622f"
    },
    blocks: [
      {
        type: "text",
        content: "Dr. Carla Hayden, erste Frau und erste Afroamerikanerin als Präsidentin der Library of Congress (US-amerikanische Nationalbibliothek), wird im Mai 2025 von Präsident Donald Trump per E-Mail entlassen. Offiziell begründet das Weiße Haus die Absetzung mit ihrem Engagement für Diversity, Equity und Inclusion (DEI) und der Aufnahme „unangemessener Bücher“ in die Bibliothek. Die Entscheidung wird als politisch motivierter Eingriff in eine unabhängige Institution gewertet und löst international breite Empörung in Politik und Kultur aus. Ohne Wirkung."
      },
      {
        type: "gallery",
        items: [
           {
              type: "media",
              media: { src: "assets/images/2.jpg" },
              text: "Einige Beispiele von Datenbanken und Webseiten, die die US-amerikanische Administration in den vergangenen Monaten hat löschen lassen, geben einen Vorgeschmack auf die Gefahr, die von Autokratien für das Weltwissen ausgehen. Es verschwinden auf den Webseiten von Umweltbehörden Hinweise auf den menschengemachten Klimawandel. Daten zu Treibhausgasen, Meeresspiegelanstieg und Klimapolitik werden entfernt oder umgeschrieben.",
              meta: {
                        title: "Datenlöschung in Behörden",
                        year: "2025",
                        description: "Beispielhafte Entfernung wissenschaftlicher Daten aus öffentlichen US-Datenbanken.",
                        source: "Analysebericht"
                    }
            },
            {
              type: "media",
              media: { src: "assets/images/3.jpg" },
              text: "Das Skelett ist seit Entstehung der Wissenschaften ein Symbol für die Erforschung des menschlichen Lebens. Fehlen Knochen im Skelett, ist augenscheinlich, dass die wissenschaftliche Datenbasis nicht vollständig ist"
            }
          ]
      }

    ]
  },
  {
    id: "kapitel-4",
    title: "Team",
    color: "#121111",  
    background: {
      type: "color",
      value: "#000000"
    },
    blocks: [
      {
        type: "text",
        content: "<h1>Team</h1> <br> Kurator*innen <br> Viktoria Kerkewitz, Prof. Dr. Kerstin Preiwuß, Amy Wittenberg (Deutsches Litertaturinstitut Leipzig) <br> Dr. Linus Hartmann-Enke, Dr. Stephanie Jacobs, Luzie Horn, Christine Hartmann (Deutsches Buch- und Schriftmuseum) <br>"
      }
    ]
  },
  {
    id: "kapitel-5",
    title: "Impressum",
    color: "#121111",  
    background: {
      type: "color",
      value: "#000000"
    },
    blocks: [
      {
        type: "text",
        content: "<h1>Impressum</h1> <br> Die virtuelle Ausstellung Forget it?! veröffentlicht von: <br> <h2>Deutsches Buch- und Schriftmuseum der Deutschen Nationalbibliothek</h2> <br> <br> Deutscher Platz 1<br> 04103 Leipzig <br><br > vertreten durch <br> Frank Scholze <br>"
      }
    ]
  },
];

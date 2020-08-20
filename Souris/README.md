# Souris modifié pour afficher un code

J'utilise la lib U8G2 de [olikraus](https://github.com/olikraus/u8g2)

## Matos 

- un Arduino pro micro (peut aussi être fait avec un ESP)
- un écran 0.96" (SH1106 mais un SSD1306 peut convenir aussi)
- câble Dupond

## Installation

Apres ouverture de la souris, j'ai enlevé le PCB. J'ai mis écran face au trou pour voir le code qui sera affiché (visé)
La connexion se fait comme ceci :

|Cable USB|Arduino | Ecran|
|:-------:|:------:|:----:|
|         | GND    | GND  |
|         | VCC    | VDD  |
|         | 2      | SDA  |
|         | 3      | SCK  |
| GND     | GND    |      |
| V+      | RAW    |      |


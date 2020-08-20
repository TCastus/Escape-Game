#include <U8g2lib.h>
#include <Wire.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);


void setup(void) {
  u8g2.begin();
  
/******************* Écrire du texte *******************************/

  u8g2.setFont(u8g2_font_ncenB10_tf); // choix de la police
  u8g2.clearBuffer();
  u8g2.setCursor(64, 55); // position du début du texte
  u8g2.print("7894");  // on écrit le texte
  u8g2.sendBuffer();
}

void loop(void) {
}

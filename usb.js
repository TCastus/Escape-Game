/**
 * This program aim to detect if the right USB key has been inserted in the first part of the escape game
 */
var usbDetect = require('usb-detection');
var figlet = require('figlet');
var loadingbar = require('./utils/loading');
const { printLogo, printSkull } = require('./utils/assets');
const { textSync } = require('figlet');

// Consts to identify the right usb device
const VENDORID = 8644;
const PRODUCTID = 43064;

// Detecting new USB device
usbDetect.startMonitoring();

// Detect add/insert usb keys
usbDetect.on('add', function (device) {
  if (device.vendorId == VENDORID && device.productId == PRODUCTID) {
    success();
  } else {
    fail();
  }
});

// Display styyyyyled things
printLogo();
console.log(figlet.textSync('Malware loading Astus\'s software'));
console.log('Pls insert the usb key...');

/**
 * If the right key is plugged in
 */
function success() {
  console.log('Malware detected successfully');
  var bar = new loadingbar(50, '==', '--', 100, 'Loading the malware', () => { 
    console.log(figlet.textSync('Successfully loaded'));
    usbDetect.stopMonitoring();
  });
  bar.start();
}

/**
 * If a wrong key is plugged in
 */
function fail() {
  console.log('Failed, no malware detected');
  printSkull();
  console.log('Try again');
}
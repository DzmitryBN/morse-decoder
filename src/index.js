const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
  var decodingLetters = new Object();
  for (let morseCodeLeterr in MORSE_TABLE) {
    var decodingLetter = '';
    for (let i = 0; i < morseCodeLeterr.length; i++) {
      decodingLetter += String(morseCodeLeterr)[i] === '-' ? '11' : '10';
    }
    decodingLetter = '0000000000'.slice(0, (10 - decodingLetter.length)) + decodingLetter;
    decodingLetters[String(decodingLetter)] = MORSE_TABLE[morseCodeLeterr];
  }
  decodingLetters['**********'] = ' ';

  var decodingFraze = '';
  for (let n = 0; n < expr.length; n = n + 10) {
    decodingFraze += decodingLetters[expr.slice(n, (n + 10))]
  }

  return decodingFraze

}

module.exports = {
    decode
}
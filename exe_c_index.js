
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;

 newSentence = newSentence.toUpperCase();
  // modify the sentence

  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;
newSentence = `<div class="style_one">${newSentence}</div>`

  // modify the sentence

  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;
  newSentence = newSentence.replace(/I/g, "YOU");
 // var str = document.getElementById("#variation-three").innerHTML; 
 //  var res = str.replace("he", "W3Schools");
 //  document.getElementById("#variation-three").innerHTML = res;


  // modify the sentence

  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);

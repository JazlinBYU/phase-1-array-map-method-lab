/** @format */

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((tutorial) => {
    let splitString = tutorial.split(" ");
    let titleCaseArray = splitString.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    let titleCaseSentence = titleCaseArray.join(" ");
    return titleCaseSentence;
  });
}

// let word = "does"
// word[0].toUpperCase() + word.slice(1); // "D"
// // "oes"

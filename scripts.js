//Quote List
var quotes = [
"Be who you are and say what you feel, because those who mind don’t matter and those who matter don\’t mind. - Dr. Seuss",
"Imitation is suicide. - Ralph Waldo Emerson",
 "Do your own thing on your own terms and get what you came here for. - Oliver James",
"Flatter yourself critically. - Willis Goth Regier",
"Do what you feel in your heart to be right, for you\’ll be criticized anyway. - Eleanor Roosevelt",
"Whenever you find yourself on the side of the majority, it is time to pause and reflect. - Mark Twain",
"I will not let anyone walk through my mind with their dirty feet. - Mahatma Gandhi",
"Better to write for yourself and have no public, than to write for the public and have no self. - Cyril Connolly",
"We must not allow other people\’s limited perceptions to define us. - Virginia Satir",
"If things go wrong, don\’t go with them. - Roger Babson",
"Where\’s your will to be weird? - Jim Morrison"
 ]

//javascript contents
function newQuote(){
	var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

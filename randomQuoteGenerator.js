// Array of messages to randomly selected from.
   const message = ['Enjoy the Quote of the Day! ', 'This is one of my favorite quotes! ', 'Here is a random quote about developing. ', 'Here is a random quote from "Eloquent JavaScript". '];

// Array of Quotes and Authors to randomly select a quote from.   
   const quotes = [
    {
        quote: "We think we are creating the sytem for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity.",
        author: " - Ellen Ullman, Close to the Machine: Technophilia and its Discontents"
    },
    {
        quote: "Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.",
        author: " - Master Yuan-Ma, The Book of Programming"
    },
    {
        quote: "And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!",
        author: " - _why, Why's (Poignant) Guide to Ruby"
    },
    {
        quote: "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
        author: " - Donald Knuth"
    },
    {
        quote: "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
        author: " - Charles Babbage, Passages from the Life of a Philosopher (1864)"
    },
    {
        quote: "Tzu-li and Tzu-ssu were boasting about the size of their latest programs. ‘Two-hundred thousand lines,’ said Tzu-li, ‘not counting comments!’ Tzu-ssu responded, ‘Pssh, mine is almost a million lines already.’ Master Yuan-Ma said, ‘My best program has five hundred lines.’ Hearing this, Tzu-li and Tzu-ssu were enlightened.",
        author: " - Master Yuan-Ma, The Book of Programming"
    },
    {
        quote: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.",
        author: " - C.A.R. Hoare, 1980 ACM Turing Award Lecture"
    },
    {
        quote: "An abstract data type is realized by writing a special kind of program […] which defines the type in terms of the operations which can be performed on it.",
        author: " - Barbara Liskov, Programming with Abstract Data Types"
    },
    {
        quote: "[...] the question of whether Machines Can Think [...] is about as relevant as the question of whether Submarines Can Swim.",
        author: " - Edsger Dijkstra, The Threats to Computing Science"
    }
];
 
// console.log(quotes[3].quote);
// console.log(quotes[3].author);

//Function to randomly generate an intro message to the quote.
const randomMessage = () => {
    let arrayIndex = Math.floor(Math.random() * message.length);
        return(message[arrayIndex]);
} 

//Function to randomly generate an arrayIndex to use and Return the Quote and Author.
const randomQuote = () => { 
    let arrayIndex = Math.floor(Math.random() * quotes.length);
        return(quotes[arrayIndex].quote + " " + quotes[arrayIndex].author);
}

console.log(randomMessage() + randomQuote());

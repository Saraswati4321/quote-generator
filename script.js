function generate(){
    var quotes = 
    {
       
        "― John Galsworthy" : '"Life calls the tune, we dance"',
        "― Aaron Lauritsen" : '"The struggles we endure today will be the good old days we laugh about tomorrow."',
        "― Anne Morrow Lindbergh" : '"Him that I love, I wish to be free -- even from me."',
        "― Jamie Ford" : '"The library is like a candy store where everything is free."',
        "-Aaron Lauritsen" : '"Lifes trials will test you, and shape you, but dont let them change who you are."',
        "― Albert Borris" : '"the truth will set u free but first it will piss u off"',
        "― Aaron Lauritsen" : '"From this point forward, you donot even know how to quit in life."',
        "― Lana Del Rey"  : '"I feel free when I see no one and nobody knows my name"',
        "― Jordan Dane"   : '"Its better to die free than live life in a cage."',
        "― Christine E. Schulze" : '"You all have a gift. Its free. Its the gift of song."',
        "-Stephen Covey" :'"Be patient with yourself. Self-growth is tender; its holy ground. Theres no greater investment."',
        "-Joshua J. Marine":'"Challenges are what make life interesting and overcoming them is what makes life meaningful."',
        "― Robert Frost":'"In three words I can sum up everything I have learned about life: it goes on."',
        "― J.K. Rowling":'"It does not do to dwell on dreams and forget to live."',
        "― Pablo Picasso":'"Everything you can imagine is real."',
        "― Dr. Seuss":'"Sometimes the questions are complicated and the answers are simple."',
        "― Bill Watterson":'"Reality continues to ruin my life."'
    }
    var authors = Object.keys(quotes);
    var author =authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
   
}

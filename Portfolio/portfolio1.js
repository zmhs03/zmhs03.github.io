var quotes = [
    "You are allowed to be different than who you once were.",
    "Where there is anger, there is always pain underneath. - Eckhart Tolle",
    "Get comfortable with beung uncomfortable.",
    "One of the most courageous decisions you'll ever make is to finally let go of what is hurting your heart and soul.",
    "During the night we must wait for the light. - Frances de Sales",
    "Hurt me with the truth but never comfort me with a lie.",
    "Work hard in silence, let success make the noise.",
    "Never trust a person that has let you down more than twice. Once was a warning, twice was a lesson, and anything more than that is simply taking advantage.",
    "A one hour workout is 4% of your day. No excuses.",
    "Be the energy you want to attract.",
    "Don't let your loyalty become slavery. If they don't appreciate what you bring to the table, let them eat alone.",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment. - Marcus Aurelius",
    "Live the life you've dreamed - Henry David Thoreau",
    "Soon, when all is well, you're going to look back on this period of your life and be so glad that you never gave up. - Brittany Burgunder",
    "You learn more about someone at the end of a relationship than at the beginning.",
    "Staying positive doesn't mean you have to be happy all the time. It means that even on hard days you know that there are better ones coming.",
    "If you find someone who makes you smile, who checks up on you often to see if you're okay, who watches out for you and wants the best for you, who loves and respects you, don't let them go. People like that are hard to find. - Franz Kafka",
    "Each moment of my life I was dreaming of how great I could be, and continued working hard. Each time I closed my eyes I could see me shining bright like a sun. - Kobe Bryant",
    "A person who truly loves you will never let you go or give up on you, no matter how hard the situation is.",
    "I think the saddest people always try their hardest to make people happy because they know what it's like to feel absolutely worthless. - Robin Williams",
    "You're always one decision away from a totally different life.",
    "Consistency creates habit and our habits shape our life.",
    "At your absolute best you still won't be good enough for the wrong person. At your worst, you'll still be worth it to the right person. - Karen Salmansohn",
    "Short-term thinking makes people desperate, ungenerous, impulsive. Long-term thinking makes people calm, gracious, controlled. The mighty pyramids and cathedrals were built by civilizations with a long time horizon, so it is with the life of a great man. - The Stoic Emperor",
    "Whatever souls are made of, his and mine are the same. - Emily Brontë",
    "Loving someone you don't see every day is not a bad thing. It's just proof that love is not in sight but in the heart.",
    "Each day you get a little stronger than the day before.",
    "t takes a strong heart to love, but it takes an even stronger heart to continue to love after it's been hurt.",
    "Don't let how you feel make you forget what you deserve.",
    "Self-love, self-respect, self-worth... There is a reason they all start with 'self'. You cannot find them in anyone else.",
    "All the strength you need is inside you.",
    "Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even. - Muhammad Ali",
    "If what you are doing is not moving you towards your goals, then it's moving you away from your goals. - Brian Tracy",
    "The quieter you become, the more you can hear. -Ram Dass",
    "Losers live in the past. Winners learn from the past and enjoy working in the present toward the future. -Denis Waitley",
    "Everything you want is on the other side of fear. -Jack Canfield",
    "You deserve the love you keep trying to give to everyone else.",
    "Just remember; the thing worth holding onto would not have let go.",
    "Don't dream your life, live your dream.",
    "When you become comfortable with uncertainty, infinite possibilities open up in your life. It means fear is no longer a dominant factor in what you do and no longer prevents you from taking action to initiate change. - Eckhart Tolle",
    "A man who is a master of patience is master of everything else. - George Savile",
    "Victory belongs to the most persevering. - Napoleon Bonaparte",
    "The body achieves what the mind believes.",
    "Health is like money. We never have a true idea of its value until we lose it.",
    "Don't change yourself so that other people will like you. Be yourself so that the right people will love you.",
    "Staying positive doesn't mean you have to be happy all the time. It means that even on hard days you know that there are better ones coming.",

    

  ];
  
  function generateRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomNumber];
  }
  
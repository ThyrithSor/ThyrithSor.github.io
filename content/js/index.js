(function() {
  var makeNote;

  makeNote = function(que, ans, i) {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var r1 = hex[Math.floor((Math.random() * 3) + 13)];
    var r2 = hex[Math.floor(Math.random() * 16)];
    var g1 = hex[Math.floor((Math.random() * 3) + 13)];
    var g2 = hex[Math.floor(Math.random() * 16)];
    var b1 = hex[Math.floor((Math.random() * 3) + 13)];
    var b2 = hex[Math.floor(Math.random() * 16)];
    return '<div class="note"><div class="note-inner wow bounceIn" style="background: #'+ r1+r2+g1+g2+b1+b2 +'"><span class="note-question"><span style="font-weight: bold">Q'+i+': </span>'+ que +'<br><br></span><span class="note-answer" style="font-style: italic;"><span style="font-weight: bold">A:</span> '+ans+'</span></div></div>';
  };

  $(function() {
    var $note, $notes, i;
    $notes = $(".notes");

//fill this data
    var data = [
      {
        q:"A trader buys sugar for $1200 and sell it for $1500, per sack of sugar he makes a profit of $50. How many sacks of sugar did he have?",
        a:"He might have 6 sacks of sugar,<br>$1500- $1200 = 300<br>300/50 = 6"
      },
      {
        q:"Bob’s father has 4 children. Momo, Meme, and Mumu are three of them. Who’s the fourth?",
        a:"Bob"
      },
      {
        q:"I have three apples. If you take away two from me, how many do you have?",
        a:"2"
      },
      {
        q:"What breaks and never falls and what falls and never breaks?",
        a:"Day breaks and night falls."
      },
      {
        q:"You have a match and you enter a wagon with a candle, a lamp and a fireplace. Which one do you light first?",
        a:"Your match."
      },
      {
        q:"A family lived in a round hut. The father came back from work and found the mother dead. The first said he was watching television, the second said he was drawing,the third one said he was reading in a corner. Who did it?",
        a:"The youngest, because it’s a ROUND hut, no corners!"
      },
      {
        q:"A farmer had 752 sheep and took one shot that got them all. How did he do it?",
        a:"He took a panoramic view!"
      },
      {
        q:"Which letter of the English alphabet flies, sings, and stings?",
        a:"‘B’ (bee)."
      },
      {
        q:"Complete the series. 9 = 4, 21 = 9, 22 = 9, 24 = 10, 8 = 5, 7 = 5, 99 = 10, 100 = 7, 16 = ?, 17 =?",
        a:"16 = 7 and 17 = 9 [The number of letters in the spelling of 16 (sixteen) is 7 and that of 17 (seventeen) is 9]"
      },
      {
        q:"Name all the numbers from 1 – 100, which have the letter ‘A’ in their spellings?",
        a:"None!"
      },
      {
        q:"It took 20,000 workers to build the Taj Mahal in 20 years. How many workers would be required to build it in 10 years?",
        a:"Sorry, the Taj Mahal cannot be built again"
      },
      {
        q:"Which one is correct? “Penguins flies” or “A Penguin flies”",
        a:"Neither. Penguins don’t fly."
      },
      {
        q:"My neighbor Bob is a blacksmith. He is 45 years old, 7 ft. tall, and eats all the time. Guess what does he weigh?",
        a:"Iron"
      },
      {
        q:"You have 20 apples in a basket. 20 children come to you and each one of them ask for an apple. You want to give all the apples to each one of them, but still keep one inside the basket? How will you do it?",
        a:"Give all the 19 apples to each one of them and give the basket to the last child with the apple still inside it."
      },
      {
        q:"How many sides does a circle have?",
        a:"Two. An inside and an outside."
      },
      {
        q:"If there are 12 fish and half of them drown, how many are there?",
        a:"12, fish don’t drown!"
      },
      {
        q:"A man went outside in the pouring rain with no protection, but not a hair on his head got wet. How come?",
        a:"He was bald."
      },
      {
        q:"How can a man go eight days without sleep?",
        a:"No problem , He sleeps at night."
      },
      {
        q:"Before Mount Everest was discovered, what was the highest mountain in the world?",
        a:"Mount Everest was still the highest even though it had not been discovered."
      },
      {
        q:"What was the (American) President’s name in 1960?",
        a:"Exactly the same as today."
      },
      {
        q:"An electric train is moving north at 100mph and a wind is blowing to the west at 10mph. Which way does the smoke blow?",
        a:"There is no smoke with an electric train"
      },
      {
        q:"Why is it against the law for a man living in North Carolina to be buried in South Carolina?",
        a:"Because he’s not dead yet."
      },
      {
        q:"What looks like half an apple?",
        a:"The other half."
      },
      {
        q:"A girl kicks a soccer ball. It goes 10 feet and comes back to her. How is this possible?",
        a:"She kicked it up."
      },
      {
        q:"A man and his son were in an automobile accident. The man died on the way to the hospital, but the boy was rushed into surgery. The emergency room surgeon said “I can’t operate, that’s my son!” How is this possible?",
        a:"The surgeon was his mother."
      },
      {
        q:"A rooster laid an egg on top of the barn roof. Which way did it roll?",
        a:"It didn’t roll – roosters don’t lay eggs."
      },
      {
        q:"A truck driver is going down a one-way street the wrong way, and passes at least ten cops. Why is he not caught?",
       a:"He’s walking on the sidewalk."
      },
      {
        q:"What happened when wheel was invented?",
       a:"It caused a revolution"
      },
      {
        q:"What has 4 wheels & flies?",
       a:"The garbage truck"
      },
      {
        q:"What two words, when combined hold the most letters?",
       a:"Post Office"
      },
      {
        q:"A is the father of B. But B is not the son of A. How’s that possible?",
       a:"B is the daughter you MCP’s!"
      },
      {
        q:"What can you never eat for breakfast?",
        a:"Dinner."
      },
      {
        q:"There was an airplane crash, every single person on board died, but yet two people survived. How is this possible?",
        a:"The two were married."
      },
      {
        q:"If you had only one match, and entered a dark room containing an oil lamp, some newspaper, and some kindling wood, which would you light first?",
        a:"The match."
      },
      {
        q:"If there are 6 apples and you take away 4, how many do you have?",
        a:"The 4 you took."
      },
      {
        q:"If Mr Smith’s peacock lays an egg in Mr Jones’ yard, who owns the egg?",
       a:"Peacocks don’t lay eggs, just peahens."
      },
      {
        q:"It was a Sunday morning. Father was getting the mail, mother was in the kitchen cooking breakfast, little brother was playing Nintendo, big brother was playing the guitar, little sister was playing with dolls, and big sister was listening to music. Then everyone went into big sisters room and she was murdered! Who murdered her?",
        a:"The father because it was a Sunday and no one gets mail on Sunday!"
      },
      {
        q:"What do you call a woman who knows where her husband is every night?",
        a:"A widow."
      },
      {
        q:"How many legs does an elephant have if you count his trunk as a leg?",
        a:"Four. Because calling the trunk a leg doesn’t make it a leg."
      },
      {
        q:"If a plane crashes on the border between the US and Mexico, where do they bury the survivors",
        a:"Survivors generally are never buried."
      },
      {
        q:"If it took eight men ten hours to build a wall, how long would it take four men to build it?",
        a:"No time at all it is already built."
      },
      {
        q:"How much dirt is there in a hole 3 feet deep, 6 ft long and 4 ft wide?",
        a:"None, or it wouldn’t be a hole."
      },
      {
        q:"How can you lift an elephant with one hand?",
        a:"It is not a problem since you will never find an elephant with one hand."
      },
      {
        q:"How many birthdays does the average person have?",
        a:"Just one, all the rest are anniversaries."
      },
      {
        q:"A little girl kicks a soccer ball. It goes 10 feet and comes back to her. How is this possible?",
        a:"Ever heard of gravity? She kicked it up."
      },
      {
        q:"A 10 foot rope ladder hangs over the side of a boat with the bottom rung on the surface of the water. The rungs are one foot apart, and the tide goes up at the rate of 6 inches per hour. How long will it be until three rungs are covered?",
        a:"Never. The boat rises as the tide goes up."
      },
      {
        q:"A is the father of B. But B is not the son of A. How’s that possible?",
        a:"B is the daughter you MCP’s!"
      },
      {
        q:"A man dressed in all black is walking down a country lane. Suddenly, a large black car without any lights on comes round the corner and screeches to a halt. How did the car know he was there?",
        a:"It was day time."
      },
      {
        q:"A rooster laid an egg on top of the barn roof. Which way did it roll?",
        a:"It didn’t roll – since when did roosters start laying eggs?"
      },
      {
        q:"A truck driver is going down a one way street the wrong way, and passes at least ten cops. Why is he not caught?",
        a:"Because he was not driving! He’s walking on the sidewalk."
      },
      {
        q:"An electric train is moving north at 100mph and a wind is blowing to the west at 10mph. Which way does the smoke blow?",
        a:"There is no smoke with an electric train."
      },
      {
        q:"How can a man go eight days without sleep?",
        a:"By sleeping during the night time"
      },
      {
        q:"How can you drop a raw egg onto a concrete floor without cracking it?",
        a:"The Egg won’t crack the concrete floor!"
      },
      {
        q:"How can you lift an elephant with one hand?",
        a:"It is not a problem, since you will never find an elephant with one hand."
      },
      {
        q:"How much dirt is there in a hole 3 feet deep, 6 ft long and 4 ft wide?",
        a:"None, or else it wouldn’t be a hole. "
      },
      {
        q:"If a doctor gives you 3 pills and tells you to take one pill every half hour, how long would it take before all the pills had been taken?  ",
        a:"1 hour! Take the 1st pill right away, half an hour later take the 2nd and half an hour after that the 3rd. Total time spent: 1 hour! "
      },
      {
        q:"If it took eight men ten hours to build a wall,how long would it take four men to build it?",
        a:"No time at all it is already built."
      },
      {
        q:"If Mr Smith’s peacock lays an egg in Mr Jones’ yard, who owns the egg?",
        a:"Peacocks don’t lay eggs, just peahens."
      },
      {
        q:"If there are 6 apples and you take away 4, how many do you have?",
        a:"The 4 you took."
      },
      {
        q:"If you had only one match, and entered a dark room containing an oil lamp, some newspaper, and some kindling wood, which would you light first?",
        a:"The match."
      },
      {
        q:"Is it legal for a man to marry his widow’s sister?",
        a:"No, but since he’s dead it would be kind of difficult."
      },
      {
        q:"Some months have 31 days, others have 30 days. How many have 28 days?",
        a:"All months have 28 days."
      },
      {
        q:"Larry’s father has five sons named Ten, Twenty, Thirty, Forty…Guess what would be the name of the fifth?",
        a:"Larry! He would be the fifth son"
      },
      {
        q:"There was an airplane crash, every single person on board died, but yet two people survived. How is this possible?",
        a:"The two were married."
      },
      {
        q:"What goes up and down, but still remains in the same place?",
        a:"Stairs! "
      },
      {
        q:"How far can you walk into the woods?",
        a:"Half way. After that you are walking out of the woods."
      },
      {
        q:"If you throw a red stone into the blue sea what it will become?",
        a:"It will become Wet. Duhh :P"
      },
      {
        q:"What can you never eat for breakfast?",
        a:"Dinner"
      },
      {
        q:"What gets wetter & wetter the more it dries?",
        a:"A towel"
      },
      {
        q:"Name the most recent year in which New Year’s came before Christmas.",
        a:"This year. New Year’s always comes before Christmas of the same year."
      },
      {
        q:"What goes up and never comes down?",
        a:"Age!"
      },
      {
        q:"Which is heavier, 100 pounds of rocks or 100 pounds of feathers?",
        a:"They both weigh the same – 100 pounds"
      },
      {
        q:"What has a head and a tail but no body?",
        a:"A coin"
      },
      {
        q:"If there are 12 fish and half of them drown, how many are there?",
        a:"12, fish don’t drown!"
      },
      {
        q:"Imagine you are in a sinking row boat surrounded by sharks. How would you survive?",
        a:"Stop imagining!"
      },
      {
        q:"How many times can you subtract 10 from 100?",
        a:"Once. Next time you would be subtracting 10 from 90."
      },
      {
        q:"How many times does the alphabet ‘a’ appear from 0-100.",
        a:"None"
      },
      {
        q:"Mention how many times a day do a clock’s hands overlap?",
        a:"Clock hands overlap about 22 times a day."
      },
      {
        q:"Tell me what happened when a man pushed his car to the hotel and lost his fortune?",
        a:"He landed on the boardwalk- that is the answer"
      },
      {
        q:"Out of eight balls, seven balls weigh equal while the one ball is slightly heavier than the others how would you figure out which one is the heavier by using a balance and only two weighing?",
        a:"Take 6 balls out of 8 balls.Put 3 balls on each side of weighing machine, if they weight equal you know that the heavier ball is in the remaining two which is left out. But if they don’t weigh equal, then the heavier ball is in one of those triplets. Out of those 3 balls that have heavier ball, pick any 2 and put them on the scale and keep doing until you get your heavier ball"
      },
      {
        q:"Some months have 30 days, and some have 31, how may months have 28 days?",
        a:"12 months, as each month has 28 days. So don’t answer 1 or Feb."
      },
      {
        q:"What number comes next 10, 9, 60, 90, 70 and 66?",
        a:"Forget the numbers, here the trick is how you spell the numbers like<br> Ten -3<br> Nine -4<br> Sixty – 5<br> Ninety- 6<br> Seventy-7<br> Sixty-six-8<br> ?<br>,The next probable number would be anything that has 9 letters in it, i.e., ninety-six or ninety-one."
      },
      {
        q:"There are six drinking glasses standing in a row, with first three full of juice and the next three empty? How can you arrange those glasses so empty and full glasses alternate by moving only one glass?",
        a:"Pour the second glass in the fifth glass, and you can arrange them in alternate order."
      },
      {
        q:"A red house is made of red bricks; a blue house is made up of blue bricks than what does the green house is made up of?",
        a:"Green house is made up of Glasses"
      },
      {
        q:"Explain how five minus two equal 4?",
        a:"If you take f and e from five what remain is Roman numeral iv."
      },
      {
        q:"Who will be the shortest among all of them?<br>Roger is as tall as Oliver<br>Binny is shorter than Tony<br>Tony is taller than Oliver<br>Roger is shorter than Binny<br>",
        a:"There is no answer, because Roger and Oliver are equally tall."
      },
      {
        q:"Mention which lamp is brightest than all?<br>Lamp A is less brightest than Lamp B<br>Lamp B is brighter than Lamp C<br>Lamp C is as bright as Lamp D<br>Lamp B is brighter than Lamp D<br>Lamp D is brighter than Lamp A<br>",
        a:"B"
      },
      {
        q:"How can you get a total of 1000, by adding eight 8?",
        a:"888+88+8+8+8=1000"
      },
      {
        q:"An airplane crashed into a field and every single person died except two how come?",
        a:"Because they were married and not single."
      },
      {
        q:"A man predicts that he can predict the exact score of every foot ball game before it begins, and he is always right, how come?",
        a:"Because the score he predicts before the match begin is “ 0-0 ”."
      }

    ];

    for (i = 0; i < data.length; i++) {
      $note = $(makeNote(data[i].q, data[i].a, (i+1)));
      $notes.append($note);
    }

    return $('.notes').isotope({
      itemSelector: '.note',
      layoutMode: 'masonry'
    });
  });

}).call(this);
export const riddles = [
    {
        id: 1,
        title: "The Prisoner Hat Riddle",
        question: "Imagine 3 prisoners standing in a line. The back person sees the two in front. The middle person sees the one in front. The front person sees nobody. There are 2 Black hats and 3 White hats. The back person says 'I don't know my hat color'. The middle person says 'I don't know either'. Can you figure out what color the front person's hat is?",
        answer: "White",
        videoUrl: "https://www.youtube.com/watch?v=N5vJSNXPEwA",
        thumbnail: "https://img.youtube.com/vi/N5vJSNXPEwA/maxresdefault.jpg",
        explanation: "It must be White! If the back person saw 2 Black hats, they would know theirs is White. Since they didn't know, they didn't see 2 Blacks. The middle person knows this. If the middle person saw a Black hat in front, they would know they are White (because the back person didn't see 2 Blacks). Since the middle person didn't know, the front person MUST have a White hat."
    },
    {
        id: 2,
        title: "The Bridge Riddle",
        question: "4 friends need to cross a dark bridge with only one flashlight. It takes them 1, 2, 5, and 10 minutes to cross. They must cross in pairs at the speed of the slower person, and someone must bring the flashlight back each time. What is the fastest time they can all get across?",
        answer: "17 minutes",
        videoUrl: "https://www.youtube.com/watch?v=7yDmGnA8Hw0",
        thumbnail: "https://img.youtube.com/vi/7yDmGnA8Hw0/maxresdefault.jpg",
        explanation: "17 minutes! The trick is to send the two slowest people (5 and 10) together so they only waste time once. First send 1 & 2 (2 min), send 1 back (1 min), send 5 & 10 (10 min), send 2 back (2 min), then send 1 & 2 again (2 min). Total: 17 mins!"
    },
    {
        id: 3,
        title: "The Green-Eyed Logic Puzzle",
        question: "100 perfect logicians with green eyes are on an island. They can leave if they know their eye color, but they can't see their own reflection or talk to each other. A visitor announces 'I see someone with green eyes'. If they are all super smart, what happens?",
        answer: "All leave on night 100",
        videoUrl: "https://www.youtube.com/watch?v=98TQv5IAtY8",
        thumbnail: "https://img.youtube.com/vi/98TQv5IAtY8/maxresdefault.jpg",
        explanation: "They all leave on the 100th night! It's a chain reaction. If there was 1 person, they'd leave night 1. If 2, night 2. Since there are 100, they all wait until night 100 to be sure, and then they all leave together!"
    },
    {
        id: 4,
        title: "The Wizard Standoff Riddle",
        question: "You are in a wizard duel against a Sorcerer (70% accuracy) and an Enchantress (90% accuracy). You have three wands: Weak (60%), Medium (80%), and Strong (100%). Everyone takes turns casting spells. You go first. Which wand gives you the best chance of survival?",
        answer: "The Weak Wand (Bannekar)",
        videoUrl: "https://www.youtube.com/watch?v=mmkCS5eA4f8",
        thumbnail: "https://i.ytimg.com/vi/mmkCS5eA4f8/hqdefault.jpg",
        explanation: "The Weakest Wand! It sounds crazy, but if you choose the weak wand and intentionally miss, you look like less of a threat. The Sorcerer and Enchantress will attack each other first because they are more dangerous to each other. This gives you the best chance to be the last wizard standing!"
    },
    {
        id: 5,
        title: "The Virus Riddle",
        question: "You are in a lab with 16 rooms arranged in a 4x4 grid. A virus is in every room except the entrance. You must enter every contaminated room exactly once to flip a switch, and then leave. You can't go back into a room once you've visited it. Is this possible?",
        answer: "Yes",
        videoUrl: "https://www.youtube.com/watch?v=ZKh6z0X6KRw",
        thumbnail: "https://i.ytimg.com/vi/ZKh6z0X6KRw/hqdefault.jpg",
        explanation: "Yes, it is! The trick is that the entrance room is safe. You can enter the grid, go to a contaminated room, come BACK to the entrance, and then re-enter the grid. This extra move allows you to visit all the other rooms in a single path without getting stuck!"
    },
    {
        id: 6,
        title: "The Three Gods Riddle",
        question: "You meet three alien gods: One always tells the truth, one always lies, and one answers randomly. They say 'Ozo' or 'Ulu' for Yes/No, but you don't know which is which! You can ask 3 Yes/No questions to figure out who is who. What kind of questions should you ask?",
        answer: "Hypothetical questions",
        videoUrl: "https://www.youtube.com/watch?v=LKvjIsyYng8",
        thumbnail: "https://i.ytimg.com/vi/LKvjIsyYng8/hqdefault.jpg",
        explanation: "You need to ask hypothetical questions! Like 'If I asked you if you are the Truth god, would you say Ozo?'. This forces the Truth-teller and the Liar to give the same answer, helping you eliminate the Random god first."
    },
    {
        id: 7,
        title: "Einstein's Riddle",
        question: "There are 5 houses of different colors. In each house lives a person of a different nationality. They each have a specific pet, drink a specific drink, and have a favorite snack. Using clues like 'The Brit lives in the red house', can you figure out who owns the Fish?",
        answer: "The German",
        videoUrl: "https://www.youtube.com/watch?v=1rDVz_Fb6HQ",
        thumbnail: "https://i.ytimg.com/vi/1rDVz_Fb6HQ/hqdefault.jpg",
        explanation: "The German owns the fish! This is a classic logic grid puzzle. By filling in a table with all the clues (like who drinks milk and who has a dog), you can eliminate every other possibility until only the German is left to care for the fish."
    },
    {
        id: 8,
        title: "The Locker Riddle",
        question: "There are 100 lockers. Student 1 opens all of them. Student 2 closes every 2nd locker. Student 3 changes every 3rd locker (opens if closed, closes if open). This goes on until Student 100 changes the 100th locker. Which lockers stay open at the end?",
        answer: "Perfect Squares (1, 4, 9, 16...)",
        videoUrl: "https://www.youtube.com/watch?v=c18GjbnZXMw",
        thumbnail: "https://i.ytimg.com/vi/c18GjbnZXMw/hqdefault.jpg",
        explanation: "Only the perfect square numbers (1, 4, 9, 16, 25...) remain open! This is because lockers are touched once for every factor they have. Most numbers have an even number of factors (pairs), so they end up closed. But perfect squares have an odd number of factors (like 3x3=9), so they are left open!"
    },
    {
        id: 9,
        title: "The Pirate Riddle",
        question: "5 pirates of different ages have 100 gold coins. The oldest pirate proposes how to split them. Then ALL pirates vote. If 50% or more agree, the split happens. If not, the oldest pirate is thrown overboard and they start again with the next oldest. You are the oldest. What split should you propose to keep the most gold and stay alive?",
        answer: "98 coins for you, 0, 1, 0, 1",
        videoUrl: "https://www.youtube.com/watch?v=Mc6VA7Q1vXQ",
        thumbnail: "https://i.ytimg.com/vi/Mc6VA7Q1vXQ/hqdefault.jpg",
        explanation: "You should keep 98 coins! You only need 2 other votes. The 3rd and 5th pirates would get nothing if you die (based on the logic of fewer pirates), so you can buy their votes with just 1 coin each. Logic wins you the treasure!"
    },
    {
        id: 10,
        title: "The Prisoner Boxes Riddle",
        question: "100 prisoners are numbered 1-100. There is a room with 100 boxes, each containing a random number 1-100. Each prisoner can open 50 boxes. If EVERY prisoner finds their own number, they all go free. If even one fails, they are all doomed. They can't talk after starting. What strategy gives them a >30% chance of survival?",
        answer: "Follow the cycles",
        videoUrl: "https://www.youtube.com/watch?v=vIdStMTgNl0",
        thumbnail: "https://i.ytimg.com/vi/vIdStMTgNl0/hqdefault.jpg",
        explanation: "They should treat the boxes as a chain! Prisoner 1 opens box 1. If it has number 7 inside, he goes to box 7 next. He keeps following the numbers. This creates 'cycles'. As long as there isn't a single giant cycle longer than 50, everyone will find their number!"
    },
    {
        id: 11,
        title: "The Temple Riddle",
        question: "You are an explorer escaping a temple. You have to cross a lava pit on a bridge made of glass tiles. Some tiles break, some are safe. You have a map, but it's in a code you need to decipher quickly. Can you spot the pattern to cross safely?",
        answer: "Follow the pattern",
        videoUrl: "https://www.youtube.com/watch?v=nSbvlktToSY",
        thumbnail: "https://i.ytimg.com/vi/nSbvlktToSY/hqdefault.jpg",
        explanation: "The safe tiles follow a mathematical pattern based on the symbols on the wall. By decoding the sequence, you can step only on the solid glass and avoid falling into the lava!"
    },
    {
        id: 12,
        title: "The Passcode Riddle",
        question: "You need to escape a room by entering a 3-digit code. You have 5 clues: '682: One number is correct and well placed', '614: One number is correct but wrongly placed', '206: Two numbers are correct but wrongly placed', '738: Nothing is correct', '380: One number is correct but wrongly placed'. What is the code?",
        answer: "042",
        videoUrl: "https://www.youtube.com/watch?v=7Vd1dTBVbFg",
        thumbnail: "https://i.ytimg.com/vi/7Vd1dTBVbFg/hqdefault.jpg",
        explanation: "The code is 042! By using logic and elimination on the clues, you can deduce that 0 is the first digit, 4 is the second, and 2 is the third."
    },
    {
        id: 13,
        title: "The Counterfeit Coin Riddle",
        question: "You have 12 gold coins. One is fake and has a different weight (lighter or heavier, you don't know). You have a balance scale. What is the minimum number of weighings needed to find the fake coin and know if it is lighter or heavier?",
        answer: "3 weighings",
        videoUrl: "https://www.youtube.com/watch?v=tE2dZLDJSjA",
        thumbnail: "https://i.ytimg.com/vi/tE2dZLDJSjA/hqdefault.jpg",
        explanation: "Just 3 weighings! It's tricky, but by weighing 4 vs 4 first, you can narrow down which group has the fake coin. Then you split them up strategically to pinpoint the exact coin and its weight difference."
    },
    {
        id: 14,
        title: "The Unstoppable Blob Riddle",
        question: "A giant gelatinous blob is attacking! It doubles in size every minute. At 12:00 PM, it completely fills the room. At what time was the room half full?",
        answer: "11:59 PM",
        videoUrl: "https://www.youtube.com/watch?v=4peuImhJj44",
        thumbnail: "https://i.ytimg.com/vi/4peuImhJj44/hqdefault.jpg",
        explanation: "11:59 PM! Since it doubles every minute, one minute BEFORE it was full, it must have been half that size. Don't get tricked into thinking it takes half the time!"
    },
    {
        id: 15,
        title: "The Egg Drop Riddle",
        question: "You have 2 identical crystal eggs and a 100-story building. You need to find the highest floor from which an egg can be dropped without breaking. You want to do this with the fewest number of drops possible in the worst-case scenario. Which floor do you drop the first egg from?",
        answer: "Floor 14",
        videoUrl: "https://www.youtube.com/watch?v=NGtt7GJ1uiM",
        thumbnail: "https://i.ytimg.com/vi/NGtt7GJ1uiM/hqdefault.jpg",
        explanation: "Start at Floor 14! Then go up by 13 (Floor 27), then 12, 11, etc. This strategy balances the risk. If the first egg breaks, you use the second egg to test the floors below one by one. This ensures you never need more than 14 drops total."
    },
    {
        id: 16,
        title: "The Frog Riddle",
        question: "A frog is at the bottom of a 30-foot well. Each day he jumps up 3 feet, but at night he slides back down 2 feet. How many days will it take him to escape the well?",
        answer: "28 days",
        videoUrl: "https://www.youtube.com/watch?v=cpwSGsb-rTs",
        thumbnail: "https://i.ytimg.com/vi/cpwSGsb-rTs/hqdefault.jpg",
        explanation: "28 days! He gains 1 foot per day (3 up - 2 down). But on day 28, he starts at 27 feet, jumps up 3 feet, and reaches the top (30 feet) BEFORE sliding down. He's out!"
    },
    {
        id: 17,
        title: "The River Crossing Riddle",
        question: "A farmer has a wolf, a goat, and a cabbage. He needs to cross a river with a boat that can only fit him and one item. If left alone, the wolf will eat the goat, and the goat will eat the cabbage. How does he get everything across safely?",
        answer: "Take goat, return, take wolf...",
        videoUrl: "https://www.youtube.com/watch?v=ADR7dUoVh_c",
        thumbnail: "https://i.ytimg.com/vi/ADR7dUoVh_c/hqdefault.jpg",
        explanation: "First take the Goat across. Go back alone. Take the Wolf across, but bring the Goat BACK with you! Leave the Goat, take the Cabbage across. Go back alone. Finally, take the Goat across again. Everyone is safe!"
    },
    {
        id: 18,
        title: "The Airplane Riddle",
        question: "100 people board a plane with 100 seats. The first person lost his ticket and sits in a random seat. Every person after him sits in their assigned seat if it's open, or a random seat if it's taken. What is the probability that the last person (passenger 100) sits in their own assigned seat?",
        answer: "50%",
        videoUrl: "https://www.youtube.com/watch?v=dzrwnwOx0fw",
        thumbnail: "https://i.ytimg.com/vi/dzrwnwOx0fw/hqdefault.jpg",
        explanation: "It's exactly 50%! The fate of the last seat is linked to the first seat. It doesn't matter what happens in the middle. In the end, it comes down to whether the first person took the last person's seat or their own seat. It's a coin flip!"
    },
    {
        id: 19,
        title: "The Penniless Pilgrim Riddle",
        question: "A pilgrim is walking to a temple. He meets a demon who says 'I will double the money in your pocket, but then you must pay me 8 coins'. This happens 3 times. After the 3rd time, the pilgrim has exactly 0 coins left. How much money did he start with?",
        answer: "7 coins",
        videoUrl: "https://www.youtube.com/watch?v=6sBB-gRhfjE",
        thumbnail: "https://i.ytimg.com/vi/6sBB-gRhfjE/hqdefault.jpg",
        explanation: "7 coins! Work backwards. End: 0. Before paying 8: 8. Before doubling: 4. Second time - End: 4. Before paying 8: 12. Before doubling: 6. First time - End: 6. Before paying 8: 14. Before doubling: 7!"
    },
    {
        id: 20,
        title: "The Fish Riddle",
        question: "Wait, didn't we already do a fish riddle? This one is different! A fish has a head 9 inches long. The tail is equal to the size of the head plus half the size of the body. The body is the size of the head plus the tail. How long is the fish?",
        answer: "72 inches",
        videoUrl: "https://www.youtube.com/watch?v=lLOALyWls2k",
        thumbnail: "https://i.ytimg.com/vi/lLOALyWls2k/hqdefault.jpg",
        explanation: "72 inches! It's algebra. Head = 9. Tail = 9 + 0.5*Body. Body = 9 + Tail. Solving these equations gives you a Body of 36 and a Tail of 27. Total length = 9 + 36 + 27 = 72."
    }
];

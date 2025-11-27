export const riddles = [
    {
        id: 1,
        title: "The Prisoner Hat Riddle",
        question: "Three prisoners are lined up. The back one sees the two in front. The middle one sees the one in front. The front one sees no one. There are 2 Black hats and 3 White hats. The back prisoner says 'I don't know my hat color'. The middle one says 'I don't know either'. What color is the front prisoner's hat?",
        answer: "White",
        options: ["White", "Black", "Red", "Blue"],
        videoUrl: "https://www.youtube.com/watch?v=N5vJSNXPEwA",
        thumbnail: "https://img.youtube.com/vi/N5vJSNXPEwA/maxresdefault.jpg",
        explanation: "If the back person saw 2 Black hats, they would know they have a White hat. Since they don't know, they don't see 2 Black hats. The middle person knows this. If the middle person saw a Black hat in front, they would know they are White (because the back person didn't see 2 Black). Since the middle person doesn't know, the front person MUST have a White hat."
    },
    {
        id: 2,
        title: "The Bridge Riddle",
        question: "4 people need to cross a bridge at night. They have one flashlight. It takes them 1, 2, 5, and 10 minutes to cross. They must cross in pairs at the speed of the slower person. The flashlight must be carried back. What is the fastest time they can all cross?",
        answer: "17 minutes",
        options: ["17 minutes", "19 minutes", "21 minutes", "15 minutes"],
        videoUrl: "https://www.youtube.com/watch?v=7yDmGnA8Hw0",
        thumbnail: "https://img.youtube.com/vi/7yDmGnA8Hw0/maxresdefault.jpg",
        explanation: "1 & 2 cross (2 min). 1 returns (1 min). 5 & 10 cross (10 min). 2 returns (2 min). 1 & 2 cross (2 min). Total: 2 + 1 + 10 + 2 + 2 = 17 minutes."
    },
    {
        id: 3,
        title: "The Green-Eyed Logic Puzzle",
        question: "A tribe of 100 logic-perfect people with green eyes are imprisoned. They can leave if they deduce their eye color. They can't speak or see reflections. A visitor says 'I see someone with green eyes'. What happens?",
        answer: "All leave on night 100",
        options: ["All leave on night 100", "Nothing happens", "All leave on night 1", "One leaves on night 1"],
        videoUrl: "https://www.youtube.com/watch?v=98TQv5IAtY8",
        thumbnail: "https://img.youtube.com/vi/98TQv5IAtY8/maxresdefault.jpg",
        explanation: "It's a chain of logic! If there was 1 person, they leave night 1. If 2, night 2. By induction, with 100 people, they all deduce it and leave on the 100th night."
    },
    {
        id: 4,
        title: "The Wizard Standoff Riddle",
        question: "You're a champion wizard facing two powerful opponents: a sorcerer with a 70% accurate fish spell and an enchantress with a 90% accurate statue spell. You have three wands to choose from: the Bannekar (60% accurate vines spell), the Gaussian (80% accurate tree spell), and the Noether 9000 (100% accurate banish spell). You cast first, then the sorcerer, then the enchantress. Which wand gives you the best chance of winning?",
        answer: "The Bannekar (weakest wand)",
        options: ["The Noether 9000 (strongest wand)", "The Gaussian (medium wand)", "The Bannekar (weakest wand)", "Don't cast at all"],
        videoUrl: "https://www.youtube.com/watch?v=mmkCS5eA4f8",
        thumbnail: "https://i.ytimg.com/vi/mmkCS5eA4f8/hqdefault.jpg",
        explanation: "Choose the weakest wand and intentionally miss! By appearing less dangerous, your powerful opponents will target each other instead of you. This counterintuitive strategy maximizes your survival chances by making the sorcerer and enchantress see each other as the main threat."
    },
    {
        id: 5,
        title: "The Virus Riddle",
        question: "You're in a 4x4 laboratory grid with a prehistoric virus in every room except the entrance. You must activate a self-destruct switch in every contaminated room and then exit safely. Once you pull a switch in a room, you can NEVER enter that room again. The entrance room is not contaminated. Can you find a path that visits every contaminated room exactly once?",
        answer: "Yes, using the entrance strategically",
        options: ["Yes, using the entrance strategically", "No, it's impossible", "Only if you skip one room", "Yes, but you'll get trapped"],
        videoUrl: "https://www.youtube.com/watch?v=ZKh6z0X6KRw",
        thumbnail: "https://i.ytimg.com/vi/ZKh6z0X6KRw/hqdefault.jpg",
        explanation: "The key is that the entrance room is NOT contaminated! You can enter and exit it multiple times without activating a switch. This flexibility allows you to create a path that visits every contaminated room exactly once. There are actually 8 different successful routes!"
    },
    {
        id: 6,
        title: "The Three Gods Riddle",
        question: "You meet three alien overlords: Tee (always tells truth), Eff (always lies), and Arr (answers randomly). They only say 'ozo' or 'ulu' for yes/no, but you don't know which word means what! You can ask only THREE yes-or-no questions to identify all three. What's the key strategy?",
        answer: "Ask hypothetical questions",
        options: ["Ask hypothetical questions", "Ask about their names", "Guess randomly", "Ask the same question three times"],
        videoUrl: "https://www.youtube.com/watch?v=LKvjIsyYng8",
        thumbnail: "https://i.ytimg.com/vi/LKvjIsyYng8/hqdefault.jpg",
        explanation: "Ask hypothetical questions like 'If I asked you whether you are Tee, would you answer ozo?' This forces both Tee and Eff to give the same answer pattern regardless of which word means yes or no. First, identify a non-Arr god. Then ask that god about their identity. Finally, ask about the remaining gods!"
    },
    {
        id: 7,
        title: "Einstein's Riddle",
        question: "There are 5 houses in a row, each with a different color, owner nationality, pet, drink, and cigarette brand. Using 15 clues about their relationships (like 'The Norwegian lives in the first house' and 'The green house owner drinks coffee'), can you figure out who owns the fish?",
        answer: "The German",
        options: ["The German", "The Norwegian", "The Brit", "The Swede"],
        videoUrl: "https://www.youtube.com/watch?v=1rDVz_Fb6HQ",
        thumbnail: "https://i.ytimg.com/vi/1rDVz_Fb6HQ/hqdefault.jpg",
        explanation: "The German owns the fish! This classic logic puzzle requires careful deduction using a grid. Start with direct clues, then use process of elimination. Each piece of information unlocks others, and through patient reasoning, you discover the German is the fish owner."
    },
    {
        id: 8,
        title: "The Locker Riddle",
        question: "There are 100 closed lockers. Person 1 opens all lockers. Person 2 closes every 2nd locker. Person 3 changes every 3rd locker (opens if closed, closes if open). This continues until Person 100 changes locker 100. Which lockers remain open?",
        answer: "Perfect squares (1, 4, 9, 16, 25...)",
        options: ["Perfect squares (1, 4, 9, 16, 25...)", "Prime numbers", "Even numbers", "Multiples of 10"],
        videoUrl: "https://www.youtube.com/watch?v=c18GjbnZXMw",
        thumbnail: "https://i.ytimg.com/vi/c18GjbnZXMw/hqdefault.jpg",
        explanation: "Only perfect squares remain open! A locker is touched by every person whose number is a factor of the locker number. Most numbers have an even number of factors (they come in pairs), but perfect squares have an odd number because one factor pairs with itself (like 3×3=9). Odd touches means it stays open!"
    },
    {
        id: 9,
        title: "The Pirate Riddle",
        question: "Can you solve the pirate riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=Mc6VA7Q1vXQ",
        thumbnail: "https://i.ytimg.com/vi/Mc6VA7Q1vXQ/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 10,
        title: "The Prisoner Boxes Riddle",
        question: "Can you solve the prisoner boxes riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=vIdStMTgNl0",
        thumbnail: "https://i.ytimg.com/vi/vIdStMTgNl0/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 11,
        title: "The Temple Riddle",
        question: "Can you solve the temple riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=nSbvlktToSY",
        thumbnail: "https://i.ytimg.com/vi/nSbvlktToSY/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 12,
        title: "The Passcode Riddle",
        question: "Can you solve the passcode riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=7Vd1dTBVbFg",
        thumbnail: "https://i.ytimg.com/vi/7Vd1dTBVbFg/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 13,
        title: "The Counterfeit Coin Riddle",
        question: "Can you solve the counterfeit coin riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=tE2dZLDJSjA",
        thumbnail: "https://i.ytimg.com/vi/tE2dZLDJSjA/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 14,
        title: "The Unstoppable Blob Riddle",
        question: "Can you solve the unstoppable blob riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=4peuImhJj44",
        thumbnail: "https://i.ytimg.com/vi/4peuImhJj44/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 15,
        title: "The Egg Drop Riddle",
        question: "Can you solve the egg drop riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=NGtt7GJ1uiM",
        thumbnail: "https://i.ytimg.com/vi/NGtt7GJ1uiM/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 16,
        title: "The Frog Riddle",
        question: "Can you solve the frog riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=cpwSGsb-rTs",
        thumbnail: "https://i.ytimg.com/vi/cpwSGsb-rTs/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 17,
        title: "The River Crossing Riddle",
        question: "Can you solve the river crossing riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=ADR7dUoVh_c",
        thumbnail: "https://i.ytimg.com/vi/ADR7dUoVh_c/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 18,
        title: "The Airplane Riddle",
        question: "Can you solve the airplane riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=dzrwnwOx0fw",
        thumbnail: "https://i.ytimg.com/vi/dzrwnwOx0fw/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 19,
        title: "The Penniless Pilgrim Riddle",
        question: "Can you solve the penniless pilgrim riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=6sBB-gRhfjE",
        thumbnail: "https://i.ytimg.com/vi/6sBB-gRhfjE/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    },
    {
        id: 20,
        title: "The Fish Riddle",
        question: "Can you solve the fish riddle? Watch the video to find out!",
        answer: "Watch Video",
        options: ["Option A", "Option B", "Option C", "Watch Video"],
        videoUrl: "https://www.youtube.com/watch?v=lLOALyWls2k",
        thumbnail: "https://i.ytimg.com/vi/lLOALyWls2k/hqdefault.jpg",
        explanation: "Watch the video for the full solution."
    }
];

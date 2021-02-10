const  readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable! 😊 ', (name) => {
  
  rl.question(`Hello ${name}! What's an activity you like doing? 👾 `, (activity) => {
  
    rl.question(`${activity} sounds like fun! What do you listen to while doing that? 🎧 `, (music) => {

      rl.question(`Great choice! Let's talk about food! Which meal is your favourite (eg: dinner, brunch, etc.) 🤗 `, (meal) => {

        rl.question(`Interesting! What's your favourite thing to eat for ${meal}? 😋 `, (food) => {

          rl.question(`Yummy, ${food} is so delicious! Let's talk about sports! Which one is your absolute favourite? 🏃‍♂️🏃‍♀️ `, (sport) => {

            rl.question(`Last question! What is your superpower? In a few words, tell us what you are amazing at! 😎 `, (superpower) => {

              rl.question(`Great job on getting through this survey, ${name}! Whenever you are ready, press 'Enter' to see your profile!  `, () => {

                console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

                rl.close();
              });
              
            });
          });
        });
      });
    });
  });
});
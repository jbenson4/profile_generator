const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) \n", (name) => {
  rl.question("What's an activity you like doing? \n", (activity) => {
    rl.question("What do you listen to while doing that? \n", (listenTo) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) \n", (favMeal) => {
        rl.question("What's your favourite thing to eat for that meal? \n", (favFood) => {
          rl.question("Which sport is your absolute favourite? \n", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! \n", (superpower) => {
              console.log(`${name} likes to listen to ${listenTo} while ${activity}. Their favourite meal is ${favMeal} \
for which they love eating ${favFood}. ${name}'s favourite sport is ${sport} and they have the superpower of ${superpower}. \n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
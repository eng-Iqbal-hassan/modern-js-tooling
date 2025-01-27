const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const SpendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas'; use the default parameter

  // user = user.toLowerCase(); // we should not mutate the variable
  // so we are going to declare a new variable then give it the value which contains all the letter of the name by small letters

  const cleanUser = user.toLowerCase();

  // let lim;
  // if (SpendingLimits[user]) {
  //   lim = SpendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  const limit = SpendingLimits[user] ? SpendingLimits[user] : 0;
  // we can even use nullish coalescing operator to get this thing
  // const limit = SpendingLimits?.[user] ?? 0;

  // if (value <= limit) {
  // budget.push({ value: -value, description: description, user: user });
  // if our property name is same as that value name then we do not need to repeat it
  // now comes up to the main part of our work which is not to mutate the budget now we will return with the array which contains all budget objects and with the added object entry.
  // budget.push({ value: -value, description, user: cleanUser });
  // return [...state, { value: -value, description, user: cleanUser }];
  // }

  return value <= limit
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // we have used ternary operator to get the budget
  // Now this addExpense function is the pure function.
};
const newBudget1 = addExpense(budget, SpendingLimits, 40, 'Pizza 🍕');
// console.log(newBudget1);
// here we have seen that addExpense gives us the object with all budget objects and then the newly added entry is added at the last.
// in order to avoid this thing we will return new budget or the existing budget.
const newBudget2 = addExpense(
  newBudget1,
  SpendingLimits,
  10,
  'Going to movies 🍿'
);
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, SpendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);
// if we pass in the budget all the time in the addExpense function, then it will not keep adding all the expense in the budget but it will contain the original budget and only one entry.
// So to resolve this thing we will add addExpense function as param in addExpense function.
// here in the last entry jay is not allowed to added so in this console the budget is till the above entry.
// Now in the real world, there is something called composing and the technique is called currying to create the chain of operators.

const checkExpense = function () {
  for (const entry of budget) {
    // let lim;
    // if (SpendingLimits[entry.user]) {
    //   lim = SpendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }
    const limit = SpendingLimits?.[entry.user] ?? 0;
    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpense();

console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpense = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  // .reduce((str,cur)=>`${str} ${cur.description.slice(-2)}`,'')
  //here filter will give us the new array whose expense is larger and here with the map we get the emoji out from description and then join method gives us the string
  // instead of map and join method we can use the reduce method which will take the current string and in that string move more string elements with the initial empty string.
  // let output = '';
  // for (const entry of budget) {
  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} /`; // Emojis are 2 chars
  //   // }

  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
  //   // this if statement is replaced in this way.
  // }
  // output = output.slice(0, -2);
  // Remove last '/ '
  // from  this output we are getting two characters out and these two are for emojis take two characters
  console.log(bigExpense);
  // This logBigExpense is the impure function we can convert it into pure function
  // Here, the outout variable is changed and not only the array or object but also the variables should not be mutated.
};
logBigExpenses(newBudget3, 1000);

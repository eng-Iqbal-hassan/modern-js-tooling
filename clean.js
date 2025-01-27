const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const SpendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user = 'jonas') {
  // if (!user) user = 'jonas'; use the default parameter
  user = user.toLowerCase();

  // let lim;
  // if (SpendingLimits[user]) {
  //   lim = SpendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  const limit = SpendingLimits[user] ? SpendingLimits[user] : 0;
  // we can even use nullish coalescing operator to get this thing
  // const limit = SpendingLimits?.[user] ?? 0;

  if (value <= limit) {
    // budget.push({ value: -value, description: description, user: user });
    // if our property name is same as that value name then we do not need to repeat it
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

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

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    // if (entry.value <= -bigLimit) {
    //   output += `${entry.description.slice(-2)} /`; // Emojis are 2 chars
    // }

    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
    // this if statement is replaced in this way.
  }
  output = output.slice(0, -2); // Remove last '/ '
  // from  this output we are getting two characters out and these two are for emojis take two characters
  console.log(output);
};
logBigExpenses(1000);

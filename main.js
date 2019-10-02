let money = +prompt ("How much is your monthly budget?"),
    time = prompt ("Enter the date using format YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let question1 = prompt ("Enter a required cost item this month", ''),
    question2 = +prompt ("How much will it cost?", ''),
    question3 = prompt ("Enter a required cost item this month", ''),
    question4 = +prompt ("How much will it cost?", '');

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

alert(appData.budget /30);

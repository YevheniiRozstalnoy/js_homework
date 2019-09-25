let money = +prompt ("How much is your monthly budget?"),
    time = prompt ("Enter the date using format YYYY-MM-DD");


var question1 = prompt ("Enter a required cost item this month"),
    question2 = +prompt ("How much will it cost?"),
    question3 = prompt ("Enter a required cost item this month"),
    question4 = +prompt ("How much will it cost?");

let appData = {
    budget: money,
    timeData: time,
    expenses: { 
        [question1]: question2,
        [question3]: question4
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
alert((appData.budget - question2 - question4)/30);

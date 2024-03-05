// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment)) {
    investment = parseFloat(prompt('TRY AGAIN! Enter investment amount as a NUMBER: xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as xx.x'));
while (isNaN(rate) || rate < 0 || rate > 6) {
    rate = parseFloat(prompt('Enter interest rate as a NUMBER BETWEEN 0-6: xx.x'));
}

years = parseInt(prompt('Enter the number of years you want to invest for'));
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Enter the NUMBER of years you want to invest for between 1-30'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
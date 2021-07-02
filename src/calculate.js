const calculate = function() {
  const income = sessionStorage.getItem('amount');
  var bracketwiseTax = [];
  var taxrates = [
    { from: 0, to: 18200, percentage: 0, amount: 0 },
    { from: 18201, to: 45000, percentage: 19, over: 18200, amount: 0 },
    {
      from: 45001,
      to: 120000,
      percentage: 32.5,
      over: 45000,
      amount: 5092
    },
    {
      from: 120001,
      to: 180000,
      percentage: 37,
      over: 120000,
      amount: 29467
    },
    {
      from: 180001,
      to: Infinity,
      percentage: 45,
      over: 180000,
      amount: 51667
    }
  ];

  for (var x = 0; x < taxrates.length; x++) {
    if (income <= taxrates[x].to) {
      var amountOver = income - taxrates[x].over;
      var percent = taxrates[x].percentage / 100;
      bracketwiseTax[x] = taxrates[x].amount + amountOver * percent;
    }
  }
  sessionStorage.setItem('tax', JSON.stringify(bracketwiseTax));
};

export default calculate;

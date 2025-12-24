function showSalary(users, age) {
  // ваш код...
  const finalString = [];
  for (let item of users) {
    if (item.age <= age) {
      let sumUser = item.name + ", " + item.balance;
      finalString.push(sumUser);
    }
  }
  return finalString.join("\n");
}


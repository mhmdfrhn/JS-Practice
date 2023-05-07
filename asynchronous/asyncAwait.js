function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 25) {
        console.log("Buying Card");
        resolve({ tollRoadCard: true, balance: 10 });
        return;
      }
      reject(new Error("not enough money to buy card"));
    }, 1000);
  });
}

function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card) {
        console.log("topping up balance");
        resolve({ ...card, balance: card.balance + amount });
        return;
      }
      reject(new Error("no Card..."));
    }, 1000);
  });
}

function useTollCard(card) {
  const TOLL_PRICE = 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card.balance < TOLL_PRICE) {
        reject(new Error("net enough balance Card Toll"));
        return;
      }
      card.balance -= TOLL_PRICE;
      console.log("Using toll road!");
      resolve();
    }, 1000);
  });
}

async function getToAllAccess() {
  const buy = await buyTollRoadCard(25);
  const topUp = await topUpBalance(buy, 10);
  const access = useTollCard(topUp);
  return access;
}

getToAllAccess();

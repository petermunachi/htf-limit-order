import { OrderBook } from 'hft-limit-order-book';

enum Side {
  BUY = "buy",
  SELL = "sell"
}

enum TimeInForce {
  GTC = "GTC",
  IOC = "IOC",
  FOK = "FOK"
}

interface OrderI {
  orderId: string;
  size: number;
  price: number;
}

(async function main() {
  try {
    const lob = new OrderBook();

    // 50% 

    // BTC/USD
    const p1 = lob.limit(Side.SELL, "123", 1, 100);  // 1 BTC = 100 USD
    const p2 = lob.limit(Side.SELL, "1234", 2, 100); // 0.7 BTC = 50 USD
    const p3 = lob.limit(Side.SELL, "12345", 3, 20); // 0.5 BTC = 50 USD

    const buyOrder1 = lob.limit(Side.BUY, "123456", 6, 100); // 2 BTC = 100 USD

    const marketPriceBuy = lob.calculateMarketPrice(Side.BUY, 2);
    // const marketPriceSell = lob.calculateMarketPrice(Side.SELL, 10);
    console.log(`Market Price (Buy): ${marketPriceBuy.price}`);
    // console.log(`Market Price (Sell): ${marketPriceSell.price}`);

  
    console.log({p1, buyOrder1, buyOrder1Done: buyOrder1.done})
  } catch (error: any) {
    console.log(error)
  }

})();




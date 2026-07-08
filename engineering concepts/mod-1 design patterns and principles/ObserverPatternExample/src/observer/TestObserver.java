package observer;

public class TestObserver {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileUser = new MobileApp("Ravi");
        Observer webUser = new WebApp("Admin");

        stockMarket.registerObserver(mobileUser);
        stockMarket.registerObserver(webUser);

        System.out.println("Updating TCS stock price...");
        stockMarket.setStockPrice("TCS", 4200.50);

        System.out.println();

        stockMarket.deregisterObserver(webUser);

        System.out.println("Updating Infosys stock price...");
        stockMarket.setStockPrice("Infosys", 1850.75);
    }
}
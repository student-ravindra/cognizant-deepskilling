package ecommerce;

public class SearchDemo {

    public static void main(String[] args) {

        Product[] products = {

            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Accessories"),
            new Product(103, "Keyboard", "Accessories"),
            new Product(104, "Monitor", "Electronics"),
            new Product(105, "Printer", "Office")
        };

        System.out.println("Linear Search:");

        Product result1 =
                SearchOperations.linearSearch(
                        products, 104);

        System.out.println(result1);

        System.out.println("\nBinary Search:");

        Product result2 =
                SearchOperations.binarySearch(
                        products, 104);

        System.out.println(result2);
    }
}
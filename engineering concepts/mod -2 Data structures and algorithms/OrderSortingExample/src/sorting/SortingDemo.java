package sorting;

public class SortingDemo {

    public static void main(String[] args) {

        Order[] orders = {

            new Order(101,
                      "Ravi",
                      2500),

            new Order(102,
                      "Anil",
                      1200),

            new Order(103,
                      "Kiran",
                      4500),

            new Order(104,
                      "Rahul",
                      3000)
        };

        System.out.println("Before Sorting:");

        OrderSorter.display(orders);

        OrderSorter.quickSort(
                orders,
                0,
                orders.length - 1);

        System.out.println("\nAfter Quick Sort:");

        OrderSorter.display(orders);
    }
}
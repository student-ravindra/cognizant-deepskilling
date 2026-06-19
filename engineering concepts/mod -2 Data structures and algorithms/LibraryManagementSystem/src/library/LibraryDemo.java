package library;

public class LibraryDemo {

    public static void main(String[] args) {

        Book[] books = {

            new Book(101,
                     "C++",
                     "Bjarne Stroustrup"),

            new Book(102,
                     "Data Science",
                     "Joel Grus"),

            new Book(103,
                     "Java",
                     "Herbert Schildt"),

            new Book(104,
                     "Python",
                     "Mark Lutz")
        };

        System.out.println("Linear Search:");

        Book result1 =
                BookSearch.linearSearch(
                        books,
                        "Java");

        System.out.println(result1);

        System.out.println("\nBinary Search:");

        Book result2 =
                BookSearch.binarySearch(
                        books,
                        "Java");

        System.out.println(result2);
    }
}
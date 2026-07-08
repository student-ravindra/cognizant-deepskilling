package inventory;

import java.util.HashMap;

public class Inventory {

    private HashMap<Integer, Product> products =
            new HashMap<>();

    public void addProduct(Product product) {
        products.put(product.getProductId(), product);
        System.out.println("Product Added");
    }

    public void updateProduct(int id,
                              int quantity,
                              double price) {

        Product product = products.get(id);

        if (product != null) {
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product Updated");
        } else {
            System.out.println("Product Not Found");
        }
    }

    public void deleteProduct(int id) {

        if (products.remove(id) != null) {
            System.out.println("Product Deleted");
        } else {
            System.out.println("Product Not Found");
        }
    }

    public void displayProducts() {

        for (Product product : products.values()) {
            System.out.println(product);
        }
    }
}
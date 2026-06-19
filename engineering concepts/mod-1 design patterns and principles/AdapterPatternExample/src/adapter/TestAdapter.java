package adapter;

public class TestAdapter {

    public static void main(String[] args) {

        PaymentProcessor payPal =
                new PayPalAdapter(new PayPalGateway());

        PaymentProcessor razorpay =
                new RazorpayAdapter(new RazorpayGateway());

        payPal.processPayment(1000);
        razorpay.processPayment(2000);
    }
}
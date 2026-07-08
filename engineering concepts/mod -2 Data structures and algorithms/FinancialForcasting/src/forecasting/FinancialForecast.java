package forecasting;

public class FinancialForecast {

    // Recursive Method
    public static double predictFutureValue(
            double presentValue,
            double growthRate,
            int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return predictFutureValue(
                presentValue,
                growthRate,
                years - 1)
                * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                predictFutureValue(
                        presentValue,
                        growthRate,
                        years);

        System.out.printf(
                "Future Value after %d years = %.2f",
                years,
                futureValue);
    }
}
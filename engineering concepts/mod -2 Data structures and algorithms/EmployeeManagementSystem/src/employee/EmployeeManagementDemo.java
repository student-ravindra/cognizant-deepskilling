package employee;

public class EmployeeManagementDemo {

    public static void main(String[] args) {

        EmployeeManagement management =
                new EmployeeManagement(10);

        management.addEmployee(
                new Employee(101,
                             "Ravi",
                             "Manager",
                             50000));

        management.addEmployee(
                new Employee(102,
                             "Anil",
                             "Developer",
                             40000));

        management.addEmployee(
                new Employee(103,
                             "Rahul",
                             "Tester",
                             35000));

        System.out.println("\nEmployee List:");

        management.displayEmployees();

        System.out.println("\nSearching Employee 102:");

        System.out.println(
                management.searchEmployee(102));

        System.out.println("\nDeleting Employee 102:");

        management.deleteEmployee(102);

        System.out.println("\nUpdated Employee List:");

        management.displayEmployees();
    }
}
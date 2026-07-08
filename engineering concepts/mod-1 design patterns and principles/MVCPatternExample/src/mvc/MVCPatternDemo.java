package mvc;

public class MVCPatternDemo {

    public static void main(String[] args) {

        Student model =
                new Student("Ravi", "101", "A");

        StudentView view =
                new StudentView();

        StudentController controller =
                new StudentController(model, view);

        System.out.println("Initial Student Details:");
        controller.updateView();

        controller.setStudentName("Ravindra");
        controller.setStudentGrade("A+");

        System.out.println("\nUpdated Student Details:");
        controller.updateView();
    }
}
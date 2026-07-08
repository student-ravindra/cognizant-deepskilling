package task;

public class TaskManagementDemo {

    public static void main(String[] args) {

        TaskLinkedList taskList =
                new TaskLinkedList();

        taskList.addTask(
                new Task(101,
                         "Design Database",
                         "Pending"));

        taskList.addTask(
                new Task(102,
                         "Develop API",
                         "In Progress"));

        taskList.addTask(
                new Task(103,
                         "Testing",
                         "Pending"));

        System.out.println("All Tasks:");

        taskList.displayTasks();

        System.out.println("\nSearching Task 102:");

        System.out.println(
                taskList.searchTask(102));

        System.out.println("\nDeleting Task 102:");

        taskList.deleteTask(102);

        System.out.println("\nUpdated Task List:");

        taskList.displayTasks();
    }
}
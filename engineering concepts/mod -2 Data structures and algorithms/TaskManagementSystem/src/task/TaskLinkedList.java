package task;

public class TaskLinkedList {

    private Node head;

    private class Node {

        Task task;
        Node next;

        Node(Task task) {
            this.task = task;
        }
    }

    // Add Task
    public void addTask(Task task) {

        Node newNode = new Node(task);

        if (head == null) {
            head = newNode;
            return;
        }

        Node current = head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Search Task
    public Task searchTask(int taskId) {

        Node current = head;

        while (current != null) {

            if (current.task.getTaskId() == taskId) {
                return current.task;
            }

            current = current.next;
        }

        return null;
    }

    // Traverse Tasks
    public void displayTasks() {

        Node current = head;

        while (current != null) {
            System.out.println(current.task);
            current = current.next;
        }
    }

    // Delete Task
    public void deleteTask(int taskId) {

        if (head == null) {
            return;
        }

        if (head.task.getTaskId() == taskId) {
            head = head.next;
            System.out.println("Task Deleted");
            return;
        }

        Node current = head;

        while (current.next != null &&
               current.next.task.getTaskId() != taskId) {

            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
            System.out.println("Task Deleted");
        } else {
            System.out.println("Task Not Found");
        }
    }
}
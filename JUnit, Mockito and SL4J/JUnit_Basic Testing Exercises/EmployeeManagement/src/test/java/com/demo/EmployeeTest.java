package com.demo;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class EmployeeTest {

    Employee emp = new Employee();

    @Test
    public void testEmployeeName() {
        assertEquals("Ravi", emp.getEmployeeName());
    }

    @Test
    public void testCalculateSalary() {
        assertEquals(25000.0, emp.calculateSalary(25), 0.01);
    }
}
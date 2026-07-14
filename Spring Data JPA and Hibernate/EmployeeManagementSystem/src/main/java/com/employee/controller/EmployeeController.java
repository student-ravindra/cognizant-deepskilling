package com.employee.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import com.employee.dto.EmployeeDTO;
import com.employee.entity.Employee;
import com.employee.projection.EmployeeProjection;
import com.employee.repository.EmployeeRepository;
import com.employee.service.EmployeeService;


@RestController
@RequestMapping("/employees")
public class EmployeeController {


    @Autowired
    private EmployeeRepository employeeRepository;


    @Autowired
    private EmployeeService employeeService;



    // Create Employee
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }



    // Get All Employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }



    // Get Employee By ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id);
    }



    // Update Employee
    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee employeeDetails) {


        Employee employee = employeeRepository.findById(id).orElse(null);


        if(employee != null) {

            employee.setName(employeeDetails.getName());
            employee.setEmail(employeeDetails.getEmail());

            return employeeRepository.save(employee);
        }

        return null;
    }



    // Delete Employee
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {

        employeeRepository.deleteById(id);

        return "Employee Deleted Successfully";
    }




    // Find By Name
    @GetMapping("/name/{name}")
    public List<Employee> getByName(@PathVariable String name) {

        return employeeRepository.findByName(name);
    }




    // Find By Email
    @GetMapping("/email/{email}")
    public List<Employee> getByEmail(@PathVariable String email) {

        return employeeRepository.findByEmail(email);
    }




    // Custom Query
    @GetMapping("/search/{keyword}")
    public List<Employee> searchEmployee(@PathVariable String keyword) {

        return employeeRepository.searchByName(keyword);
    }




    // Named Query Name
    @GetMapping("/named/name/{name}")
    public List<Employee> getEmployeeByNamedQuery(@PathVariable String name) {

        return employeeRepository.findEmployeeByEmployeeName(name);
    }




    // Named Query Email
    @GetMapping("/named/email/{email}")
    public List<Employee> getEmployeeByNamedEmail(@PathVariable String email) {

        return employeeRepository.findEmployeeByEmployeeEmail(email);
    }




    // Pagination and Sorting
    @GetMapping("/page")
    public Page<Employee> getEmployeesWithPaginationAndSorting(

            @RequestParam(defaultValue="0") int page,

            @RequestParam(defaultValue="5") int size,

            @RequestParam(defaultValue="id") String sortBy,

            @RequestParam(defaultValue="asc") String direction

    ){

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();


        PageRequest pageable =
                PageRequest.of(page,size,sort);


        return employeeRepository.findAll(pageable);
    }





    // Interface Projection
    @GetMapping("/projection")
    public List<EmployeeProjection> getEmployeeProjection(){

        return employeeRepository.findAllProjectedBy();
    }





    // DTO Projection
    @GetMapping("/dto")
    public List<EmployeeDTO> getEmployeeDTO(){

        return employeeRepository.getEmployeeDTO();
    }





    // Hibernate Batch Processing
    @PostMapping("/batch")
    public List<Employee> saveEmployeesBatch(
            @RequestBody List<Employee> employees){

        return employeeService.saveAllEmployees(employees);
    }

}
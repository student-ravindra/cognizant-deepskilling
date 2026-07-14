package com.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entity.Employee;
import com.employee.projection.EmployeeProjection;

import com.employee.dto.EmployeeDTO;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Query Method
    List<Employee> findByName(String name);

    // Query Method
    List<Employee> findByEmail(String email);

    // Custom Query using @Query
    @Query("SELECT e FROM Employee e WHERE e.name LIKE %?1%")
    List<Employee> searchByName(String keyword);

    // Named Query - Name
    @Query(name = "Employee.findByEmployeeName")
    List<Employee> findEmployeeByEmployeeName(@Param("name") String name);

    // Named Query - Email
    @Query(name = "Employee.findByEmployeeEmail")
    List<Employee> findEmployeeByEmployeeEmail(@Param("email") String email);
    
    List<EmployeeProjection> findAllProjectedBy();
    
    @Query("SELECT new com.employee.dto.EmployeeDTO(e.name, e.email) FROM Employee e")
    List<EmployeeDTO> getEmployeeDTO();
}
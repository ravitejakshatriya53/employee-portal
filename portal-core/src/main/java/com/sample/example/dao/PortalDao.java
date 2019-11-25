package com.sample.example.dao;

import com.sample.example.VO.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortalDao extends JpaRepository<Employee, Long> {

    void addEmployee(Employee employee);


    List<Employee> getAllEmployees();
}

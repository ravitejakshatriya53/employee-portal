package com.sample.example.service;

import com.sample.example.VO.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PortalService {

    void addEmployee(Employee employee);

    List<Employee> getAllEmployees();
}

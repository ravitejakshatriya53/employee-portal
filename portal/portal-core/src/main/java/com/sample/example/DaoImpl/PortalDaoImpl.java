package com.sample.example.DaoImpl;

import com.sample.example.VO.Employee;
import com.sample.example.dao.PortalDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PortalDaoImpl {

    @Autowired
    private PortalDao portalDao;


    public void addEmployee(Employee employee) {
        portalDao.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return portalDao.findAll();
    }


}

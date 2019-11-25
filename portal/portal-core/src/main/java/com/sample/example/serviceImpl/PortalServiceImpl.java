package com.sample.example.serviceImpl;

import com.sample.example.DaoImpl.PortalDaoImpl;
import com.sample.example.VO.Employee;
import com.sample.example.service.PortalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PortalServiceImpl implements PortalService {

    @Autowired
    private PortalDaoImpl portalDao;

    @Override
    public void addEmployee(Employee employee) {
        portalDao.addEmployee(employee);
    }

    @Override
    public List<Employee> getAllEmployees(){
        return portalDao.getAllEmployees();
    }
}

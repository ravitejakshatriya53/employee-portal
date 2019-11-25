package com.sample.example.restApi;

import com.sample.example.VO.Employee;
import com.sample.example.service.PortalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController("/")
public class PortalController {

    @Autowired
    private PortalService portalService;

    @PostMapping("/addEmp")
    public void addEmployee(@RequestBody Employee employee){
        portalService.addEmployee(employee);
    }

    @GetMapping("/getAllEmployee")
    public @ResponseBody List<Employee> getAllEmployees(){
       return portalService.getAllEmployees();
    }

    @RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public String get(){
        return "Hello World";
    }
}

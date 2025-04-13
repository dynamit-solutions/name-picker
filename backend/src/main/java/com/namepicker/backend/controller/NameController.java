package com.namepicker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

@RestController
@RequestMapping("/api")
@Slf4j
public class NameController {

    @GetMapping("/names")
    public List<String> getNames() {
        return List.of("Alice", "Bob", "Christopher", "Dorothy", "Erica", "Frank", "Georgina long name");
    }

    @PostMapping("/names")
    public ResponseEntity<String> postNames(@RequestBody List<String> selectedNames) {
        log.info("Received: " + selectedNames);
        return ResponseEntity.ok("Received: " + selectedNames);
    }
}

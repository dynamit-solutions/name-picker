package com.namepicker.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/names")
public class NameController {

    @GetMapping
    public List<String> getNames() {
        return List.of("Alice", "Bob", "Charlie");
    }
}

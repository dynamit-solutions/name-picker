package com.namepicker.backend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class NameControllerTest {
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        NameController nameController = new NameController();
        mockMvc = MockMvcBuilders.standaloneSetup(nameController).build();
    }

    @Test
    public void testGetNames() throws Exception {
        mockMvc.perform(get("/api/names"))
                .andExpect(status().isOk())
                .andExpect(content().json("[\"Alice\", \"Bob\", \"Charlie\"]"));
    }
}
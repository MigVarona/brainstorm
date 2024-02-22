package com.brainstorm.backend;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.brainstorm.backend.persistence.Product;
import com.brainstorm.backend.persistence.ProductRepository;

@SpringBootTest
@AutoConfigureMockMvc
class ProductsTests {
    @Autowired
    private MockMvc api;
    private ProductRepository productRepository;

    public ProductsTests(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @BeforeEach
    public void setup(){
        productRepository.deleteAll();
    }

    @Test
    public void returns_existing_products() throws Exception {
        productRepository.saveAll(List.of(
            new Product("Robot", "limpiador", 1, 350, 10, 21, 1),
            new Product("inteligencia", "asesora", 1, 350, 10, 21, 1)
        ));
        api.perform(get("/products"))
            .andExpectAll(
                status().isOk(),
                jsonPath("$", hasSize(2)),
                jsonPath("$[0].name", equalTo("Robot")),
                jsonPath("$[0].description", equalTo("limpiador")),
                jsonPath("$[0].id_category", equalTo(1)),
                jsonPath("$[0].price", equalTo(350)),
                jsonPath("$[0].stock", equalTo(10)),
                jsonPath("$[0].tax", equalTo(21)),
                jsonPath("$[1].name", equalTo("inteligencia")),
                jsonPath("$[1].description", equalTo("asesora")),
                jsonPath("$[1].id_category", equalTo(1)),
                jsonPath("$[1].price", equalTo(350)),
                jsonPath("$[1].stock", equalTo(10)),
                jsonPath("$[1].tax", equalTo(21))
            );
    }

}
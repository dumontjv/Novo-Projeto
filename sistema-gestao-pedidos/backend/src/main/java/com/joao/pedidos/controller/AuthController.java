package com.joao.pedidos.controller;

import com.joao.pedidos.dto.AuthRequest;
import com.joao.pedidos.dto.AuthResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        if ("admin@pedidos.com".equals(request.email()) && "123456".equals(request.password())) {
            return new AuthResponse("demo-jwt-token-admin");
        }
        throw new RuntimeException("Credenciais inválidas");
    }
}

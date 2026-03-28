package com.joao.pedidos.controller;

import com.joao.pedidos.entity.Order;
import com.joao.pedidos.entity.OrderStatus;
import com.joao.pedidos.service.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> findAll() { return orderService.findAll(); }

    @PostMapping
    public Order create(@RequestBody Order order) { return orderService.create(order); }

    @PatchMapping("/{id}/status")
    public Order updateStatus(@PathVariable Long id, @RequestParam OrderStatus status) {
        return orderService.updateStatus(id, status);
    }
}

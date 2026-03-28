package com.joao.pedidos.config;

import com.joao.pedidos.entity.Order;
import com.joao.pedidos.entity.OrderStatus;
import com.joao.pedidos.repository.OrderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner loadSampleOrders(OrderRepository orderRepository) {
        return args -> {
            if (orderRepository.count() > 0) return;
            orderRepository.saveAll(List.of(
                    Order.builder().customerName("Loja Aurora").description("50 camisetas personalizadas").totalAmount(new BigDecimal("4200.00")).status(OrderStatus.NOVO).priority("Alta").createdAt(LocalDateTime.now().minusHours(5)).build(),
                    Order.builder().customerName("Mercado Central").description("Reposição de embalagens").totalAmount(new BigDecimal("1800.00")).status(OrderStatus.EM_PREPARACAO).priority("Média").createdAt(LocalDateTime.now().minusHours(3)).build(),
                    Order.builder().customerName("Clínica Vida").description("Material administrativo").totalAmount(new BigDecimal("950.00")).status(OrderStatus.ENVIADO).priority("Baixa").createdAt(LocalDateTime.now().minusHours(2)).build()
            ));
        };
    }
}

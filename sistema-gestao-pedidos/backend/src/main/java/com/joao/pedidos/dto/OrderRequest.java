package com.joao.pedidos.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public record OrderRequest(
        @NotBlank String customerName,
        @NotBlank String description,
        @NotNull BigDecimal totalAmount,
        @NotBlank String priority
) {
}

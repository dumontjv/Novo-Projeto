package com.joao.agendamentos.config;

import com.joao.agendamentos.entity.Appointment;
import com.joao.agendamentos.repository.AppointmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner loadAppointments(AppointmentRepository appointmentRepository) {
        return args -> {
            if (appointmentRepository.count() > 0) return;
            appointmentRepository.saveAll(List.of(
                    Appointment.builder().clientName("Marina Costa").professionalName("Dr. André Silva").serviceName("Consulta inicial").startAt(LocalDateTime.now().plusHours(2)).status("CONFIRMADO").build(),
                    Appointment.builder().clientName("Lucas Almeida").professionalName("Dra. Paula Rocha").serviceName("Retorno").startAt(LocalDateTime.now().plusHours(4)).status("PENDENTE").build(),
                    Appointment.builder().clientName("Fernanda Souza").professionalName("Dr. André Silva").serviceName("Avaliação").startAt(LocalDateTime.now().plusDays(1)).status("CONFIRMADO").build()
            ));
        };
    }
}

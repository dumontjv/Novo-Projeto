package com.joao.agendamentos.service;

import com.joao.agendamentos.entity.Appointment;
import com.joao.agendamentos.repository.AppointmentRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public AppointmentService(AppointmentRepository appointmentRepository, SimpMessagingTemplate messagingTemplate) {
        this.appointmentRepository = appointmentRepository;
        this.messagingTemplate = messagingTemplate;
    }

    public List<Appointment> findAll() {
        return appointmentRepository.findAll();
    }

    public Appointment create(Appointment appointment) {
        Appointment saved = appointmentRepository.save(appointment);
        messagingTemplate.convertAndSend("/topic/appointments", saved);
        return saved;
    }
}

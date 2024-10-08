package org.example.controllers;

import org.example.entities.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private final SimpMessagingTemplate messagingTemplate;

    public TestController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @PostMapping("/api/test/send")
    public ResponseEntity<String> sendMessage(@RequestBody Message message) {
        messagingTemplate.convertAndSend("/topic/public", message);
        return ResponseEntity.ok("Message sent successfully");
    }
}
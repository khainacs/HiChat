package org.example.entities;

import jakarta.persistence.*;
import lombok.*;
import org.example.roleName.MessageType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@Table(name = "Message")
@Builder
public class Message {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
//    @Column(name = "conservationId")
//    private String conservationId;
//    @Column(name = "senderId")
    private String senderId;
//    @Column(name = "text")
    private String text;
    private MessageType messageType;
}

package io.subbu.hilla.todoapp.models;

import jakarta.persistence.*;
import lombok.*;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

@Entity
@Table(name = "todos")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class TodoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String activity;

    private boolean complete;

    @Override
    public String toString(){
        return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
    }
}

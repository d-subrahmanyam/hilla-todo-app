package io.subbu.hilla.todoapp.dtos;

import lombok.*;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class TodoDto {

    private String id;

    private String activity;

    private boolean complete;

    @Override
    public String toString(){
        return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
    }
}

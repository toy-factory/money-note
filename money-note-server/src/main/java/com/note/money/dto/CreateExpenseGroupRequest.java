package com.note.money.dto;

import com.note.money.domain.user.ExpenseGroup;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@Getter
public class CreateExpenseGroupRequest {
    @NotBlank
    @Length(max = 20)
    private String groupName;

    private Long userId;

    public ExpenseGroup toEntity() {
        return ExpenseGroup.builder()
                .groupName(groupName)
                .userId(userId)
                .build();
    }
}

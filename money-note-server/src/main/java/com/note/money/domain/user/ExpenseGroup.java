package com.note.money.domain.user;

import com.note.money.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseGroup extends BaseTimeEntity {

    private static final int GROUP_NAME_SIZE = 20;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    @Column(length = GROUP_NAME_SIZE)
    @NotBlank
    private String groupName;

    private Long userId;

    @Builder
    public ExpenseGroup(String groupName, Long userId) {
        this.groupName = groupName;
        this.userId = userId;
    }
}

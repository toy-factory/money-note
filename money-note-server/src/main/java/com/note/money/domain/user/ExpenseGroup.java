package com.note.money.domain.user;

import com.note.money.domain.BaseTimeEntity;
import com.note.money.domain.util.EmptyStringToNullConverter;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseGroup extends BaseTimeEntity {

    private static final int GROUP_NAME_SIZE = 20;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    @NotNull
    @Column(length = 20)
    @Convert(converter = EmptyStringToNullConverter.class)
    private String groupName;

    private Long userId;

    @Builder
    public ExpenseGroup(String groupName, Long userId) {
        System.out.println(1);
        this.groupName = groupName;
        this.userId = userId;
    }
}

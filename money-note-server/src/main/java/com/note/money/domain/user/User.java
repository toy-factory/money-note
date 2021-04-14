package com.note.money.domain.user;


import com.note.money.domain.BaseTimeEntity;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String userId;

    @NotNull
    private String userPwd;

    @NotNull
    private String userName;

    @Builder
    public User(String userId, String userPwd, String userName) {
        this.userId = userId;
        this.userPwd = userPwd;
        this.userName = userName;
    }
}

package com.note.money.user;

public interface UserService {

    void join(User user);

    User login(String userId, String userPassword);
}

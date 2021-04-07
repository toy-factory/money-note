package com.note.money.user;

public interface UserRepository {

    void save(User user);

    User login(String userId, String userPassword);
}

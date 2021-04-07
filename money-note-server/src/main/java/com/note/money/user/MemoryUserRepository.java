package com.note.money.user;

import java.util.HashMap;
import java.util.Map;

public class MemoryUserRepository implements UserRepository{

    private static Map<String, User> store = new HashMap<>();

    @Override
    public void save(User user) {
        store.put(user.getId(), user);
    }

    @Override
    public User login(String userId, String userPassword) {
        if(store.get(userId).getPassword().equals(userPassword)){
            return store.get(userId);
        }
        return null;
    }
}

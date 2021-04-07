package com.note.money.user;

public class UserServiceImpl implements UserService {

    private final UserRepository userRepository = new MemoryUserRepository();

    @Override
    public void join(User user) {
        userRepository.save(user);
    }

    @Override
    public User login(String userId, String userPassword) {
        return userRepository.login(userId, userPassword);
    }
}

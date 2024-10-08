package org.example.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.example.dto.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//
//@Service
//@Slf4j
//public class UserServiceImpl extends AbstractBaseServiceImpl<UserDTO>
//        implements UserService {
//    @Autowired
//    UserRepository userRepository;
//
//    @Autowired
//    UserMapper mapper;
//
//    @Override
//    public void setRepository() {
//        AbstractBaseServiceImpl.setRepository(userRepository);
//    }
//
//    public UserServiceImpl() {
//        super.setMapper(new UserMapper());
//    }
//
//
//    // For Admin create
//    @Override
//    public UserDTO createUser(UserDTO userDTO) {
//        try {
//            if (userRepository.existsByEmail(userDTO.getEmail())) {
//                log.info("Email already exist: {}", userDTO.getEmail());
//                return null;
//            }
//            User user = new User();
//            user.setName(userDTO.getName());
//            user.setEmail(userDTO.getEmail());
//
//            return mapper.convertEntityToDTO(userRepository.saveAndFlush(user));
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return null;
//        }
//    }
//
//    // For Client
//    @Override
//    public UserDTO register(UserDTO userDTO) {
//        try {
//            if (userRepository.existsByEmail(userDTO.getEmail())) {
//                log.info("Email already exist: {}", userDTO.getEmail());
//                return null;
//            }
//
//            User user = new User();
//            user.setName(userDTO.getName());
//            user.setEmail(userDTO.getEmail());
//
//            return mapper.convertEntityToDTO(userRepository.save(user));
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return null;
//        }
//    }
//
//
//    public UserDTO signIn(UserDTO userDTO) {
////        try {
////            authenticationManager.authenticate(
////                    new UsernamePasswordAuthenticationToken(
////                            userDTO.getEmail(),
////                            userDTO.getPassword())
////            );
////            User user = userRepository.findByEmail(userDTO.getEmail()).orElseThrow();
////            String token = jwtService.generateToken(user);
////
////            UserDTO result = new UserDTO();
////            result.setUuid(user.getUuid());
////            result.setAccessToken(token);
////            return result;
////        } catch (AuthenticationException ex) {
////            return null;
////        }
//        return null;
//    }
//
//    @Override
//    public UserDTO forgotPassword(UserDTO userDTO) {
////        if(userRepository.existsByEmail(userDTO.getEmail())) {
////            User user = userRepository.findByEmail(userDTO.getEmail()).get();
////            String newPassword = userUtils.generatePassword();
////
////            user.setPassword(passwordEncoder.encode(newPassword));
////            // Send password by email
////            sendEmailService.forgotPasswordEmail(user.getEmail(), user.getLastName(), user.getFirstName(), newPassword);
////            return mapper.convertEntityToDTO(userRepository.save(user));
////        }
////
////        log.trace("Email does not exist: {}", userDTO.getEmail());
//        return null;
//    }
//
//    @Override
//    public UserDTO getByUUID(String uuid) {
//        UserDTO userDTO = new UserDTO();
//        User user = userRepository.findByUuid(uuid).get();
//
//        userDTO.setName(user.getName());
//        return userDTO;
//    }
//
//
//
////    @Override
////    public boolean delete(String uuid) {
////        User user = repository.findByUuid(uuid);
////        if (user != null) {
////            repository.delete(user);
////            return true;
////        }
////        return false;
////    }
//
//
//}

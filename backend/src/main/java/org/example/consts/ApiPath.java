package org.example.consts;

public interface ApiPath {
    /**
     * Swagger URL
     * ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
     * http://localhost:8080/swagger-ui/index.html#/
     * */

    String API = "/api/v1";
    //http://localhost:8080/api/v1


    //Ping
    String PING = API + "/ping";

    //User
//    String USER_LOGIN = API + "/login";
//    String USER_FORGOT_PASSWORD = API + "/forgot-password";

    String USER_GET_ALL = API + "/user/get-all";
    String USER_GET_UUID = API + "/user/{uuid}";

    String USER_CREATE = API + "/user/create";
//    String USER_REGISTER = API + "/user/register";
    String USER_UPDATE = API + "/user/update";
    String USER_DELETE = API + "/user/delete";


    //Conservation
}

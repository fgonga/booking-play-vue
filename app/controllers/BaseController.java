package controllers;

import models.User;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.results.RenderJson;

import java.util.HashMap;
import java.util.Map;
public class BaseController extends Controller {
    private static final Integer HTTP_SUCCESS_STATUS_CODE = 200;
    private static Integer code;
    private static Object data;
    private static String message;
    private static Boolean success;


    private static Map<String, Object> response(){
        Map<String,Object> map = new HashMap<>();
        map.put("data",data);
        map.put("code",code);
        map.put("message",message);
        map.put("success",success);
        return map;
    }
    static  void sendSuccess(Object o, String messageArgs){
        code = HTTP_SUCCESS_STATUS_CODE;
        data = o;
        message = messageArgs;
        success = true;
        throw new RenderJson(response());
    }
    static  void sendSuccess(Object o){
        code = HTTP_SUCCESS_STATUS_CODE;
        data = o;
        message = "success";
        success = true;
        throw new RenderJson(response());
    }

    static  void sendError(Integer status,  String messageArgs){
        response.status = status;
        code = status;
        message = messageArgs;
        success = false;
        throw new RenderJson(response());
    }
    static User connected() {
        if(renderArgs.get("user") != null) {
            return renderArgs.get("user", User.class);
        }
        String username = session.get("user");
        if(username != null) {
            return User.find("byUsername", username).first();
        }
        return null;
    }

}

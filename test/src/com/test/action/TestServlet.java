package com.test.action;


import java.io.IOException;

public class TestServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request,response);
    }

    /**
     *
     * @param request
     * @param response
     * @throws javax.servlet.ServletException
     * @throws IOException
     */
    @SuppressWarnings("JavaDoc")
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String result = "";
        if(username!=null&&!"".equals(username)) {
            result = "{success:true}";
            request.getSession().setAttribute("user",username);
        }
        if(password.length()<6){
            result = "{success:failure,errors:{password:'密码长度不能小于6位'}}";
        }
        response.getWriter().write(result);
        System.out.println("hah");
        System.out.println("hah");
    }
    public static void show(){
        String str = "set";
        System.out.println(str);
    }

}

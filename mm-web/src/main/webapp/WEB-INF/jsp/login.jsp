<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="/WEB-INF/js/jquery-1.7.1.js"></script>
</head>
<script type="text/javascript">

</script>
<body>
	<font color="red">${error}</font>
	<form id="loginForm" action="<%=request.getContextPath()%>/login/doLogin.do" method="post">
		用户名：<input type="text" name="username" maxlength="15" id="username"/><br>
		密码：&nbsp;&nbsp;<input type="password" name="password" maxlength="15" id="password"/><br>
		<input type="submit" value="登录"/>&nbsp;&nbsp;<input type="button" value="注册"/>
	</form>
</body>
</html>
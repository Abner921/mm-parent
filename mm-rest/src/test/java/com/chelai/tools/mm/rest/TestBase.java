package com.chelai.tools.mm.rest;

import org.junit.BeforeClass;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(locations = "file:../mm-web/src/main/webapp/WEB-INF/mm-parents-servlet.xml")
public class TestBase {

	/**
	 * Set up the environment
	 * @throws Exception
	 */
	@BeforeClass
	public static void setUp() throws Exception {
//		String projectPath = System.getProperty("user.dir");
//		String webProjectName = "validator-web";
//		String webSourcePath = webProjectName + "\\target\\validator-web\\WEB-INF\\cms-validator-servlet.xml";
//		String contextFilePath = projectPath.substring(0, projectPath.lastIndexOf("\\")) + "\\" + webSourcePath;
//
//		context = new FileSystemXmlApplicationContext(contextFilePath);
	}
	
}

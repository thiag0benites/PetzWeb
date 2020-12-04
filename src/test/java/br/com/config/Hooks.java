package br.com.config;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	
	private static WebDriver driver;
	private static Scenario scenario;
	
	@Before
	public void setup(Scenario scenario) {
		Hooks.scenario = scenario;
		
		System.out.println("*** Iniciando Teste ***");
		System.out.println("*** Executando cenario " + scenario.getName());
		
		WebDriverManager.chromedriver().setup();
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown() {
		driver.quit();
		System.out.println("*** Fim dos testes ***");	
	}
	
	public static Scenario getScenario() {
		return scenario;
	}
	
	public static WebDriver getDriver() {
		return driver;
	}

}

package br.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import br.com.config.Hooks;
import cucumber.api.Scenario;

public class BuscaLojaPage {

	protected WebDriver driver;
	protected Scenario cenario;
	
	public BuscaLojaPage() {
		driver = Hooks.getDriver();
		cenario = Hooks.getScenario();
		PageFactory.initElements(driver, this);
	}

	//Tela de login
	@FindBy(name="userName")
	public WebElement txtUserName;
	
}

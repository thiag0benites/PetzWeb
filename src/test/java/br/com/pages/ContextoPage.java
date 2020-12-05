package br.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import br.com.config.Hooks;
import br.com.framework.FrameworkWeb;
import cucumber.api.Scenario;

public class ContextoPage {

	protected String url = "https://www.petz.com.br/blog/";
	
	protected WebDriver driver;
	protected Scenario cenario;
	protected FrameworkWeb web;
	
	public ContextoPage() {
		driver = Hooks.getDriver();
		cenario = Hooks.getScenario();
		PageFactory.initElements(driver, this);
		web = new FrameworkWeb(driver, cenario);
	}

	//Menu principal
	@FindBy(id="menu-categorias")
	public WebElement idMenu;
	
	public void realizaAcesso() {
		driver.navigate().to(url);
		web.aguardaElemento(idMenu, 30);
		web.escreveRelatorio(true, "Passou! Acesso ao blog realizado!", true);
	}
}

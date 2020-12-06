package br.com.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import br.com.config.Hooks;
import br.com.framework.FrameworkWeb;
import cucumber.api.Scenario;

public class MenuPage {
	
	protected WebDriver driver;
	protected Scenario cenario;
	protected FrameworkWeb web;
	
	public MenuPage() {
		driver = Hooks.getDriver();
		cenario = Hooks.getScenario();
		PageFactory.initElements(driver, this);
		web = new FrameworkWeb(driver, cenario);
	}

	//Menu principal
	@FindBy(xpath="//div[@id='navbar']/ul[@id='menu-categorias']")
	public WebElement xpathMenu;
	
	@FindBy(xpath="//div[@class='posts-box posts-box-2']/div[@class='posts-wrapper']")
	public WebElement xpathContainerArticles;
	
	@FindBy(xpath="//div[@class='posts-box posts-box-2']//h1")
	public WebElement xpathTitle;
	
	public void selecionaItemMenu(List<String> itensMenu) {
		
		for (String itemMenu : itensMenu) {
			
			itemMenu = itemMenu.toUpperCase();
			WebElement elementoItemMenu = web.retornaElementoFilhoPorTexto(xpathMenu, By.tagName("li"), itemMenu);
			
			if(elementoItemMenu != null) {
				
				web.click(elementoItemMenu);
				
				if (web.elementoVisivel(xpathTitle)) {
					
					String textoTitle = web.obterTexto(xpathTitle);
					
					if (textoTitle.equals(itemMenu)) {
						web.escreveRelatorio(true, "Passou! Item " + itemMenu + " foi selecionado!", true);
						validaAcessoMenu(itemMenu);
					} else {
						web.escreveRelatorio(false, "Falhou! Item " + itemMenu + " não foi selecionado!", true);
					}
					
				} else {
					web.escreveRelatorio(false, "Falhou! Click no item " + itemMenu + " demorou para ser apresentado!", true);
				}
				
			} else {
				web.escreveRelatorio(false, "Falhou! O item " + itemMenu + " não foi localizado no menu!", true);
			}
		}
		
	}
	
	protected void validaAcessoMenu(String itemMenu) {
		
		int contArtigos = xpathContainerArticles.findElements(By.tagName("article")).size();
		
		if (contArtigos > 0) {
			web.escreveRelatorio(true, "Passou! Foram carregados " + contArtigos + " artigos na primeira página do item " + itemMenu + " do menu", true);
		} else {
			web.escreveRelatorio(false, "Falhou! Não foram carregados artigos para o item " + itemMenu + " do menu", true);
		}
	}

}

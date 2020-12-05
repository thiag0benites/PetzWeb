package br.com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import br.com.config.Hooks;
import br.com.framework.FrameworkWeb;
import cucumber.api.Scenario;

public class BuscaLojaPage {

	protected WebDriver driver;
	protected Scenario cenario;
	protected FrameworkWeb web;
	
	public BuscaLojaPage() {
		driver = Hooks.getDriver();
		cenario = Hooks.getScenario();
		PageFactory.initElements(driver, this);
		web = new FrameworkWeb(driver, cenario);
	}

	//Tela de login
	@FindBy(xpath="//div[@class='navbar-top-left clearfix']/ul[@id='menu-menu-topo']")
	public WebElement xpathMenuTopoBlog;
	
	@FindBy(id="title")
	public WebElement idTitulo;
	
	@FindBy(id="filterType")
	public WebElement idSelectFiltro;
	
	@FindBy(id="uf")
	public WebElement idSelectUf;
	
	@FindBy(id="city")
	public WebElement idSelectCidade;
	
	@FindBy(id="bntSearch")
	public WebElement idBtnBuscar;
	
	@FindBy(id="storeList")
	public WebElement idResultadoBusca;
	
	public void selecionaItemMenu(String itemMenu) {
		
		WebElement elementoItemMenu = web.retornaItemLista(xpathMenuTopoBlog, itemMenu);
		
		if(elementoItemMenu != null) {
			
			web.click(elementoItemMenu);
			
			if (web.elementoVisivel(idTitulo)) {
				
				String textoTitle = web.obterTexto(idTitulo);
				
				if (textoTitle.equals("Conheça nossas lojas")) {
					web.escreveRelatorio(true, "Passou! Item " + itemMenu + " foi selecionado!", true);
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

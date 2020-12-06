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
	
	@FindBy(id="cep")
	public WebElement idTxtCep;
	
	@FindBy(id="uf")
	public WebElement idSelectUf;
	
	@FindBy(id="city")
	public WebElement idSelectCidade;
	
	@FindBy(id="bntSearch")
	public WebElement idBtnBuscar;
	
	@FindBy(id="storeList")
	public WebElement idResultadoBusca;
	
	@FindBy(id="loader")
	public WebElement idLoader;
	
	@FindBy(xpath="//div[@id='store']//div[@class='is-12']/h1")
	public WebElement xpathLoja;
	
	public void selecionaItemMenu(String itemMenu) {
		
		WebElement elementoItemMenu = web.retornaElementoFilhoPorTexto(xpathMenuTopoBlog, By.tagName("li"), itemMenu);
		
		if(elementoItemMenu != null) {
			
			web.click(elementoItemMenu);
			
			if (web.elementoVisivel(idTitulo)) {
				
				String textoTitle = web.obterTexto(idTitulo);
				
				if (textoTitle.equals("CONHEÇA NOSSAS LOJAS")) {
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
	
	public void preencheCamposPesquisa(String filtro, String... campos) {
		
		web.selecionaComboBoxPorTexto(idSelectFiltro, filtro);
		
		switch (filtro) {
		case "CEP":
			web.preencheCampo(idTxtCep, campos[0]);
			web.escreveRelatorio(true, "Passou! O campo CEP foi preenchido: " + campos[0], true);
			break;

		case "Estado/Cidade":
			web.selecionaComboBoxPorTexto(idSelectUf, campos[0]);
			web.aguardar(3);
			web.selecionaComboBoxPorTexto(idSelectCidade, campos[1]);
			web.escreveRelatorio(true, "Passou! Os campos Estado e Cidade foram preenchidos: " + campos[0] + " - " + campos[1], true);
			break;
		}
		
	}
	
	public void validaPesquisa() {
		
		web.click(idBtnBuscar);
		web.aguardaElemento(idResultadoBusca, 60);
		
		aguardaCarregamento();
		
		int lojas = idResultadoBusca.findElements(By.className("store")).size();
		
		if (lojas > 0) {
			web.escreveRelatorio(true, "Passou! A busca retornou " + lojas + " lojas" , true);
		} else {
			web.escreveRelatorio(false, "Falhou! A busca não retornou resultados" , true);
		}
		
	}
	
	public void acessaLoja(String loja) {
		
		WebElement elementoLoja = web.retornaElementoFilhoPorTexto(idResultadoBusca, By.className("store"), loja);
		
		if (elementoLoja != null) {
			
			web.click(elementoLoja.findElement(By.tagName("a")));
			web.aguardaElemento(xpathLoja, 30);
			
			String nomeLojaAtual = web.obterTexto(xpathLoja);
			
			if (nomeLojaAtual.equals(loja)) {
				web.escreveRelatorio(true, "Passou! A loja " + loja + " foi selecionada!", true);
			} else {
				web.escreveRelatorio(false, "Falhou! A loja " + loja + " não foi selecionada!", true);
			}
			
		} else {
			web.escreveRelatorio(false, "Falhou! A loja " + loja + " não foi localizada no resultado da busca!", true);
		}
	}
	
	private void aguardaCarregamento() {
		
		int cont = 0;
		boolean loaderVisivel = true;
		
		do {
			loaderVisivel = web.elementoVisivel(idLoader);
			web.aguardar(1);
			cont++;
			
			if (cont == 30) {
				break;
			}
			
		} while (loaderVisivel == true);
			
	}
	
}

package br.com.steps;

import br.com.pages.BuscaLojaPage;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class BuscaLojaSteps extends BuscaLojaPage{

	@Quando("^acesso \"([^\"]*)\" no site da Petz$")
	public void acesso_no_site_da_Petz(String itemMenu) {
		selecionaItemMenu(itemMenu);
	}

	@Quando("^preencho os campos Fitrar por \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void preencho_os_campos_Fitrar_por(String filtro, String estado, String cidade) {
		
	}

	@Quando("^realizo a busca$")
	public void realizo_a_busca() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^acesso \"([^\"]*)\" no site Petz$")
	public void acesso_no_site_Petz(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^preencho os campos Filtrar por \"([^\"]*)\" e \"([^\"]*)\"$")
	public void preencho_os_campos_Filtrar_por_e(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^valido as lojas encontradas$")
	public void valido_as_lojas_encontradas() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
		
}

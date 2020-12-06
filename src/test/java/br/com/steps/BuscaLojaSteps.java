package br.com.steps;

import br.com.pages.BuscaLojaPage;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class BuscaLojaSteps extends BuscaLojaPage{

	@Quando("^acesso \"([^\"]*)\" no site da Petz$")
	public void acesso_no_site_da_Petz(String itemMenu) {
		selecionaItemMenu(itemMenu);
	}

	@Quando("^preencho os campos Fitrar por \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void preencho_os_campos_Fitrar_por(String filtro, String estado, String cidade) {
		preencheCamposPesquisa(filtro, estado, cidade);
	}

	@Quando("^preencho os campos Filtrar por \"([^\"]*)\" e \"([^\"]*)\"$")
	public void preencho_os_campos_Filtrar_por_e(String filtro, String cep) {
		preencheCamposPesquisa(filtro, cep);
	}

	@Entao("^valido as lojas encontradas$")
	public void valido_as_lojas_encontradas() {
		validaPesquisa();
	}
	
	@Entao("^acesso e valido a loja \"([^\"]*)\"$")
	public void acesso_e_valido_a_loja(String loja) {
		acessaLoja(loja);
	}

	
}

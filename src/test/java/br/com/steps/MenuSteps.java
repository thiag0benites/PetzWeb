package br.com.steps;

import br.com.pages.MenuPage;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class MenuSteps extends MenuPage{
	
	@Quando("^seleciono o item \"([^\"]*)\"$")
	public void seleciono_o_item(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Entao("^valido o resultado da pesquisa$")
	public void valido_o_resultado_da_pesquisa() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}

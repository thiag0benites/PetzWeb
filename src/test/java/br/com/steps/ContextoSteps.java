package br.com.steps;

import br.com.pages.ContextoPage;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;

public class ContextoSteps extends ContextoPage{
	
	@Dado("^que acesso o sistema$")
	public void que_acesso_o_sistema() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
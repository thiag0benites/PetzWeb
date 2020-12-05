package br.com.steps;

import br.com.pages.ContextoPage;
import cucumber.api.java.pt.Dado;

public class ContextoSteps extends ContextoPage{
	
	@Dado("^que acesso o sistema$")
	public void que_acesso_o_sistema() {
		realizaAcesso();
	}

}
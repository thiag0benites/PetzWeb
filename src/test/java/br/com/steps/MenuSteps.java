package br.com.steps;

import java.util.List;

import br.com.pages.MenuPage;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Quando;

public class MenuSteps extends MenuPage{

	@Quando("^seleciono e valido o item <itemMenu> do menu$")
	public void seleciono_e_valido_o_item_itemMenu_do_menu(DataTable itensMenu) {
		List<String> listaItensMenu = itensMenu.asList(String.class);
		selecionaItemMenu(listaItensMenu);
	}
	
}

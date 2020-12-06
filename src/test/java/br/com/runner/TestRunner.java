package br.com.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/features/"}, //Caminho dos arquivos features
		plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report/cucumber.json"}, //Cria e aponta onde o relatório será salvo
		tags = {"@SMOKETEST, @BUSCALOJA"},
		glue = {""}
		//monochrome = false,
		//dryRun = false
		)

public class TestRunner {

}

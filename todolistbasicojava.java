
import java.util.Scanner;
import java.util.ArrayList;


public class Main
{
    
    static ArrayList<String> listadetarefas = new ArrayList<String>();
    static ArrayList<String> listadetarefasconcluidas = new ArrayList<String>();
    static String CopiaTar;
    
    static void adicionarTarefaAlista(String tarefaadd) {
        listadetarefas.add(tarefaadd);
    }
    
    static void listartarefas(){
        for(int i = 0; i < listadetarefas.size(); i++){
            System.out.println(i+ 1 + " " + "-" + " " + listadetarefas.get(i));
        }
    }
    
    static void marcarconc(int num){
                
                listadetarefas.set(num, "[Concluido] "+ listadetarefas.get(num));
        }
    
    
    static void remover(int num){
        listadetarefas.remove(num);
    }
    
	public static void main(String[] args) {
        
        int resp = 0;
        Scanner leitor = new Scanner(System.in);
        Scanner leitortext = new Scanner(System.in);
        
        System.out.println("Bem-Vindo Ao Gerenciador de Tarefas!");
        
        while(resp != 5){
            System.out.println("\n");
            System.out.println("1 - Adicionar Tarefas");
            System.out.println("2 - Listar Tarefas");
            System.out.println("3 - Marcar Tarefas como Concluida");
            System.out.println("4 - Remover Tarefas");
            System.out.println("5 - Salvar e Sair");
            System.out.println("Resposta: ");
            resp = leitor.nextInt();
            
            if((resp > 0) && (resp <= 5)){
                
                switch(resp){
                    case 1:
                        String Tarefa;
                        
                        System.out.println("Digite A Tarefa Que Gostaria de Adicionar ");
                        System.out.println("Tarefa: ");
                        Tarefa = leitortext.nextLine();
                        adicionarTarefaAlista(Tarefa);
                        
                        break;
                        
                    case 2:
                        
                        System.out.println("Listando Tarefas...");
                        listartarefas();
                        
                        break;
                        
                    case 3:
                        System.out.println("Digite Qual Tarefa Gostaria de Marcar como Concluida: ");
                        listartarefas();
                        System.out.println("Resposta: ");
                        int Resposta = leitor.nextInt();
                        marcarconc(Resposta - 1);
                        
                        
                        break;
                        
                    case 4:
                        
                        System.out.println("Digite Qual Tarefa Gostaria de Remover: ");
                        listartarefas();
                        System.out.println("Resposta: ");
                        int Respostarem = leitor.nextInt();
                        remover(Respostarem- 1);
                        
                        break;
                        
                    // case 5:
                    //     System.out.println("Salvando E Saindo!");
                    //     salvandoArq();
                    //     System.out.println("Ate Mais!");
                    //     break;
                }
            }else{
                System.out.println("Digite Um Valor Valido!");
            }
        }
	}
}

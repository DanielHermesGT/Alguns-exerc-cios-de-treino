
using System;
using System.Collections;
class HelloWorld {
    
    static ArrayList tarefaslist = new ArrayList();
    
    static void addtarefa(string tarefa){
        tarefaslist.Add(tarefa);
    }
    static void listartarefas(){
        for(int i = 0; i < tarefaslist.Count; i++){
            Console.WriteLine(Convert.ToString(i + 1) + " " + "-" + " " + tarefaslist[i]);
        }
    }
    
    static void concluida(int tar){
        tarefaslist[tar] = "[concluida] " + tarefaslist[tar];
        }
        
    static void remover (int rem){
        tarefaslist.RemoveAt(rem); 
    }
    
    
  static void Main(string[] args) {
    Console.WriteLine("Bem Vindo Ao Gerenciador De Tarefas!");
    
    int resposta = 0;
    
        while(resposta != 5){
            Console.WriteLine("\n");
            Console.WriteLine("1 - Adicionar Tarefa");
            Console.WriteLine("2 - Listar Tarefas");
            Console.WriteLine("3 - Marcar Tarefa como Concluida");
            Console.WriteLine("4 - Remover Tarefa");
            Console.WriteLine("5 - Salvar e Sair");
            Console.WriteLine("Resposta: ");
            resposta = Convert.ToInt32(Console.ReadLine());
            
            switch(resposta){
                
                case 1:
                    
                    Console.WriteLine("Digite A tarefa: ");
                    string tarefaadd = Console.ReadLine();
                    addtarefa(tarefaadd);
                    
                    
                    break;
                
                case 2:
                
                    Console.WriteLine("Listando Tarefas....");
                    listartarefas();
                    
                    break;
                    
                case 3:
                    listartarefas();
                    Console.WriteLine("Digite Qual Tarefa foi concluida: ");
                    int tarI = Convert.ToInt32(Console.ReadLine());
                    concluida(tarI - 1);
                    
                    break;
                    
                case 4:
                    
                    Console.WriteLine("Digite Qual Tarefa Remover: ");
                    int rem = Convert.ToInt32(Console.ReadLine());
                    remover(rem - 1);
                    
                    break;
                    
                case 5:
                    
                    Console.WriteLine("Salvando..");
                    //funcarq();
                    Console.WriteLine("Saindo! Até a Proxima!");
                    
                    break;
            }
        }
    }
}
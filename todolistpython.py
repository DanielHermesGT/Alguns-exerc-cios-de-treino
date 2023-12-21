
print("Bem Vindo Ao Gerenciador de Tarefas!")
resp = 0
tarefasafazer = []
tarefasconc = []

def addtar(tarefa):
    tarefasafazer.append(tarefa)

def listar():
    for x, val in enumerate(tarefasafazer):
        print(f"{x + 1} - {val}")

def concluidatar(ind):
    tarefasafazer[ind] = "[Concluido] " + tarefasafazer[ind] 
    
def remover(ind):
    tarefasafazer.pop(ind)

while resp != 5:
    
    print("\n")
    print("1 - Adicionar Tarefa")
    print("2 - Listar Tarefas")
    print("3 - Marcar Tarefa Como Concluido")
    print("4 - Remover Tarefa")
    print("5 - Salvar e Sair")
    resp = int(input("Resposta: "))
    
    if(resp == 1):
        tarefa = input("Digite A Tarefa Que Deseja Adicionar: ")
        addtar(tarefa)
        
    if(resp == 2):
        print("Listando Tarefa...")
        listar()
        
    if(resp == 3):
        listar()
        conc = int(input("Digite Qual Tarefa foi Concluida: "))
        concluidatar(conc -1)
    
    if(resp == 4):
        rem = int(input("Digite Qual Tarefa Remover: "))
        remover(rem -1)
        
    if(resp == 5):
        print("Salvando!")
        funcarq()
        print("Ate Mais!")



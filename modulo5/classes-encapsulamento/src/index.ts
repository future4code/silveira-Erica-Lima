//Exercício 1
//a. Construtor determina o que  deve ser executadas dentro da função de objeto.
//Para chama-lá é const nomeDeAlgumaVariavel = new NomeDaClass()

//b.
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }
  

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions:[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
        this.transactions = transactions
    }
    public pegarName():void{
                console.log(this.name)
            }
            public pegarCpf():string {
                return this.cpf
            }
            public pegarAge(){
                return this.age
            }

            // public pegarTransaction(){
            //    return this.transactions
            // }
            public pegarBalance(){
              return this.balance
           }
  }

  // const erica = new UserAccount("805526002268", "Erica", 19)
  
// "Chamando o construtor da classe UserAccount" apareceu 1 vez.
//   console.log(erica);


//c. usando o "public" tem como usar osGetters e Setters  deixa manipular propriedades privadas.

//Exercício 2

class Transaction  {
    private description: string;
    private  value: number;
    private  date: string;
    constructor( novoDescription: string, novoValue:number, novoDate: string){
        console.log("Chamando o construtor da classe Transactions")
        this.description = novoDescription,
        this.value = novoValue,
        this.date = novoDate
    }
        public pegarDescription():string{
        return this.description
    }
    public pegarValue():number {
        return this.value
        
    }
    public pegarDate():string {
        return this.date
        
    }
  }
   const ericaTransaction = new Transaction("notebook",2548, "27/08/2022")
   const ericaUserAccount = new UserAccount("805526002268", "Erica", 19, [ericaTransaction])

  //Exercício 3
  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    
  }
const labeBank = new Bank([])
  console.log(labeBank);
  
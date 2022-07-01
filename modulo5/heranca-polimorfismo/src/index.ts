//Herança
//Exercício 1 
//a. Sim, foi impresso no terminal usando o console.log  a propriedade "password". Mas se for chamar o método não tenho o acesso a essa propriedade como as outras.
//b. Foi impresso a frase "Chamando o construtor da classe User" uma vez

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
          introduceYourself:string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
        //    console.log("Olá, bom dia!")
          this.introduceYourself = introduceYourself

      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public getIntroduceYourself(): string {
        return `Olá sou ${this.name}. Bom dia!`
    }
  }

// const user = new User("01", "ericainacia@gmail.com", "Erica","123456")
// user.getEmail()
// user.getId()
// user.getName()
// console.log(user);

//Exercício 2
//a. Foi impresso a frase "Chamando o construtor da classe Customer" uma vez.
//b.Foi impresso a frase "Chamando o construtor da classe User" uma vez. Foi impresso por ser a classe pai, ou seja, essa classe Customer tem informações em comum com a pai e mais duas propriedades.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal:number,
      introduceYourself: string
    ) {
      super(id, email, name, password,introduceYourself);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal;
    }
    public getPurchaseTotal(): number {
        return this.purchaseTotal;
      }
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
//   const customer =  new Customer("01", "ericainacia@gmail.com", "Erica","123456", "2050021597891475")

//Exercício 3
//a.Não seria possível imprimir "password" por ser uma propriedade "private" na classe pai que é "User".
// const customer =  new Customer("01", "ericainacia@gmail.com", "Erica","123456", "2050021597891475", 25250)
// customer.getCreditCard();
// customer.getEmail();
// customer.getId();
// customer.getName();
// customer.getPurchaseTotal()

//Exercício 4
// const customer =  new Customer("01", "ericainacia@gmail.com", "Erica","123456", "2050021597891475", 25250, "Olá")
// customer.getIntroduceYourself()
// console.log(customer.getIntroduceYourself());

//Exercício 5
const customer =  new Customer("01", "ericainacia@gmail.com", "Erica Inacia","123456", "2050021597891475", 25250, "Erikinha")
customer.getIntroduceYourself()
console.log(customer.getIntroduceYourself());

//Polimorfismo
//Exercício 1
//a.Propriedades: name, registrationNumber e consumedEnergy. A calculateBill acho que porque  é uma arrow funcition

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }
  const client:Client = {
    name: "Erica",
    registrationNumber: 2,
    consumedEnergy:150,
    calculateBill: () => {
        return 25;
      }
  }
  console.log(client);
  
//Exercício 2
//a."Não é possível criar uma instância de uma classe abstrata."
//b.

export abstract class Place {
    
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
  const place =  new Place("08200690")
//Exercício 3
//Exercício 4
//Exercício 5
//Exercício 6
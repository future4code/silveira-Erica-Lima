export class CustomError extends Error {
    constructor(public statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "O campo do email deve conter um '@' e um '.com'")
    }

}
export class InvalidUser extends CustomError{ 
    constructor(){
        super(400, "Usuário já criado")
    }

}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Inválido password")
    }

}


export class IncompleteField extends CustomError{ 
    constructor(){
        super(422, "Preencha os campos 'name','password' e 'email'.")
    }
}

export class IncompleteFieldLogin extends CustomError{ 
    constructor(){
        super(422, "Preencha os campos 'password' e 'email'.")
    }
}


export class InvalidPasswordIsCorrect extends CustomError{ 
    constructor(){
        super(400, "Inválido 'password' e 'email'.")
    }
}

export class IncompleteFieldPost extends CustomError{ 
    constructor(){
        super(422, "Preencha os campos 'photo','description' e 'type'.")
    }
}

 export class InvalidType extends CustomError{ 
    constructor(){
        super(400, "Type incorreto")
    }
}
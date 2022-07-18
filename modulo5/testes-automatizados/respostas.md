### Exercício 

#### a.
```

test("teste com um usuário com o saldo maior do que o valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 89
	})
})


```

#### b.

```

test("teste com um usuário com o saldo igual ao valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 30)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})


```
#### c.

```

test("teste com um usuário com o saldo menor do que o valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})
```
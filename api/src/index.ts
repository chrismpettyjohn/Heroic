import { prisma } from '../generated/prisma-client'

async function main() {
	const newUser = await prisma.createUser({
		email: 'chrismpettyjohn@gmail.com',
		password: 'password'
	})

	console.log(`Created new user: ${newUser.email} (ID: ${newUser.id})`)

	// Read all users from the database and print them to the console
	const allUsers = await prisma.users()
	console.log(allUsers)
}

main()
	.catch(e => console.error(e))

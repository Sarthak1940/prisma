import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: { 
      email,
      password,
      firstName,
      lastName,
    }
  })

  console.log(res);
  
}
insertUser("sarthak12ashba3godse@gmail.com", "Sarthak@123", "Sarthak", "Godse")

interface UpdateParams {
  firstName?: string,
  lastName?: string,
  password?: string,
}
async function updateUser(email: string, {firstName, lastName}: UpdateParams) {
  const res = await prisma.user.update({
    where: {
      email
    },
    data: {
      firstName,
      lastName,
    }
  })

  console.log(res);
  
}
updateUser("sarthak123godse@gmail.com", {firstName: "Pajya", lastName: "Walzade"})

  async function getUser(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })
  }
  getUser("sarthak123godse@gmail.com")

  async function getTodo(user_id:number) {
    const response = await prisma.todo.findMany({
      where: {
        user_id: user_id
      }
    })
    console.log(response);
    
  }

  async function getTodoAndUser(user_id:number) {
    const response = await prisma.todo.findMany({
      where: {
        user_id: user_id
      },
      select: {
        title: true,
        description: true,
        user: true,
      }
    })
    console.log(response);
    
  }
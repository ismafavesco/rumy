import * as z from "zod"


export  const SignupValidation = z.object({
    name: z.string().min(2,{message: 'Add a real name'}),
    username: z.string().min(2, {message : 'Minimum 2 characters'}),
    email: z.string().email(),
    password: z.string().min(6, {message : 'Password is too short. minimum 6 characters'})
    })
  
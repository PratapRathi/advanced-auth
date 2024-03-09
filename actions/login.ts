"use server";
import * as z from "zod";
import { LoginSchema } from '@/schemas/index';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success){
        return {error: "Fields are Invalid!"}
    }
    
    return {success: "Email sent successfully"}
}
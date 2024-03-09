"use server";
import * as z from "zod";
import { RegisterSchema } from '@/schemas/index';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);
    if(!validateFields.success){
        return {error: "Fields are Invalid!"}
    }
    
    return {success: "Email sent successfully"}
}
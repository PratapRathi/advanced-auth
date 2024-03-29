"use client"
import React, { useState, useTransition } from 'react';
import { CardWrapper } from '@/components/auth/card-wrapper';
import * as z from "zod";
import { LoginSchema } from '@/schemas/index';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from '@/components/ui/button'
import { FormSuccess } from '@/components/form-success';
import { FormError } from '@/components/form-error';
import { login } from '@/actions/login';

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            })
        })
    }

    return (
        <CardWrapper headerLabel='Welcome Back' backButtonLabel="Don't have an account" backButtonHref='/auth/register' showSocial >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className="space-y-4">
                        <FormField control={form.control} name='email' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} placeholder='john.doe@example.com' type='email' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='password' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} placeholder='******' type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormSuccess message={success} />
                    <FormError message={error} />
                    <Button disabled={isPending} className='w-full' type='submit'>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}



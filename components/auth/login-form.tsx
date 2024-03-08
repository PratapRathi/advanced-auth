import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel='Welcome Back'
            backButtonLabel="Don't have an account"
            backButtonHref='/auth/register'
            showSocial
            >
            Login Form
        </CardWrapper>
    )
}



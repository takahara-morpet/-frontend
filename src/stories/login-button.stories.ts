'use client';
import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '../app/molecules/login-button';

const meta: Meta = {
    title: 'Login Button',
    component: LoginButton,
    tags: ['autodoc', 'Molecules', 'Login Button'],
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const LineColorButton: Story = {
    args: {
        src: '/next.svg',
        alt: 'placeholder',
        text: 'Login',
        color: '#19bc03', // lineカラー
        
    }
};


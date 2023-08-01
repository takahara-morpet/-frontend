'use client';
import type { Meta, StoryObj } from '@storybook/react';
import UseableButton from '../app/molecules/useable-button';

const meta: Meta = {
    title: 'Useable Button',
    component: UseableButton,
    tags: ['autodoc', 'Molecules', 'Useable Button'],
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof UseableButton>;

export const LineColorButton: Story = {
    args: {
        src: '/vercel.svg',
        alt: 'placeholder',
        text: 'Useable',
        color: '#bd1404', // lineカラー
        
    }
};


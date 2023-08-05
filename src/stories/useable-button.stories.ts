'use client';
import type { Meta, StoryObj } from '@storybook/react';
import UseableButton from '@/components/molecules/useable-button';

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
        src: '/Line.svg',
        alt: 'placeholder',
        text: 'Useable',
        color: '#000000', // lineカラー
        backgroundColor: '#00B900',
        
    }
};
export const MailButton: Story = {
    args: {
        src: '/mail.svg',
        alt: 'placeholder',
        text: 'Useable',
        color: '#ffffff', // black color
        backgroundColor: '#000000',
        
    }
};

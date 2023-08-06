import type { Meta, StoryObj } from '@storybook/react';
import ImageButton from '../components/molecules/image-button';

export default {
    title: 'Image Button',
    component: ImageButton,
    tags: ['autodoc', 'Molecules', 'Image Button'],
} as Meta;

type Story = StoryObj<typeof ImageButton>;

export const DefaultButton: Story = {
    args: {
        src: '/Instagram_logo.svg',
        alt: 'placeholder',
        onClick: () => {
            alert('clicked');
        }
    } 
};




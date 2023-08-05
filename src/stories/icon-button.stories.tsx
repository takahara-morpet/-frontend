import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@/components/molecules/icon-button';
import CreateIcon from '@mui/icons-material/Create';

const meta = {
    title: 'Icon Button',
    component: IconButton,
    argTypes: {
        label: { control: 'text' },
        onClick: { action: 'clicked' },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs', 'molecules', 'icon button'],
} as Meta;

export default meta;

type Story = StoryObj<typeof IconButton>;


export const DefaultWithCreateIcon: Story = {
    args: {
        icon: <CreateIcon />,
    },
};

export const LabeledIconButton: Story = {
    args: {
        icon: <CreateIcon />,
        label: 'Create',
    },
};

export const RedCreateIcon: Story = {
    args: {
        icon: <CreateIcon fontSize="inherit" />,
        color: 'red',
    },
};

export const SmallCreateIcon: Story = {
    args: {
        icon: <CreateIcon fontSize="inherit" />,
        size: 'small',
    },
};


import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
    render: (args: ButtonProps) => <Button {...args} />,
    args: {
        label: 'Click Me',
        variant: 'primary',
        size: 'medium',
    },
};

export const Secondary: StoryObj<typeof Button> = {
    render: (args: ButtonProps) => <Button {...args} />,
    args: {
        label: "Secondary33",
        variant: "danger",
        size: "large",
    },
};

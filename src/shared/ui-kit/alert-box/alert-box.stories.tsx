import { Meta, StoryObj } from '@storybook/react';
import AlertBox from './alert-box';

const meta: Meta<typeof AlertBox> = {
    title: 'Components/AlertBox',
    component: AlertBox,
    // Локальный декоратор: добавляет поворот, рамку и фон вокруг истории
    decorators: [
        (Story) => (
            <div
                style={{
                    transform: 'rotate(-2deg)',
                    border: '2px dashed #333',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const Info: StoryObj<typeof AlertBox> = {
    args: {
        message: 'This is an informational alert!',
        variant: 'info',
    },
};

export const Warning: StoryObj<typeof AlertBox> = {
    args: {
        message: 'Warning: Please check your settings!',
        variant: 'warning',
    },
};

export const Error: StoryObj<typeof AlertBox> = {
    args: {
        message: 'Error: Something went wrong!',
        variant: 'error',
    },
};

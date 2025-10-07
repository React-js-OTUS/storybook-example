import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import ThemedMessage, {ThemedMessageProps} from './themed-message';
import {ThemeProvider} from "@/shared/lib/theme/theme-context";

type ThemedMessageStoryArgs = {
    initialTheme: 'light' | 'dark';
} & ThemedMessageProps;

const meta: Meta<ThemedMessageStoryArgs> = {
    title: 'Components/ThemedMessage',
    component: ThemedMessage,
    argTypes: {
        // Добавляем контрол для темы
        initialTheme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
            description: 'Начальная тема для ThemeProvider',
        },
    },
    // Локальный декоратор: оборачивает историю в ThemeProvider с темой "dark"
    decorators: [
        (Story, context) => {
            const { initialTheme } = context.args;
            return (
                <ThemeProvider key={initialTheme} initialTheme={initialTheme}>
                    <div style={{ margin: '20px' }}>
                        <Story />
                    </div>
                </ThemeProvider>
            );
        },
    ],
};

export default meta;

export const Default: StoryObj<ThemedMessageStoryArgs> = {
    args: {
        message: 'Hello from the themed component!',
        initialTheme: "dark",
    },
};

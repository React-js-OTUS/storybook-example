import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import LoginForm, { LoginFormProps } from './login-form';

const meta: Meta<typeof LoginForm> = {
    title: 'Components/LoginForm',
    component: LoginForm,
};

export default meta;

export const Default: StoryObj<typeof LoginForm> = {
    render: (args: LoginFormProps) => <LoginForm {...args} />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        // Шаг 1. Заполняем поля username и password
        await step('Заполнение полей формы', async () => {
            const usernameInput = canvas.getByTestId('username-input') as HTMLInputElement;
            const passwordInput = canvas.getByTestId('password-input') as HTMLInputElement;

            await userEvent.type(usernameInput, 'john_doe');
            await userEvent.type(passwordInput, 'secret123');
        });

        // Шаг 2. Нажимаем на кнопку Submit
        await step('Нажатие на кнопку Submit', async () => {
            const submitButton = canvas.getByTestId('submit-button');
            await userEvent.click(submitButton);
        });

        // Шаг 3. Проверяем, что после отправки формы отображается сообщение об успехе
        await step('Проверка отображения сообщения об успешной авторизации', async () => {
            const successMessage = canvas.getByTestId('success-message');
            if (!successMessage) {
                throw new Error('Сообщение об успешном логине не найдено');
            }
        });
    },
};

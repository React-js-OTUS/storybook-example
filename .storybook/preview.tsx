import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    // Параметры для глобальной конфигурации (например, настройки viewport)
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    // Настройка фона
    backgrounds: {
      values: [
        { name: 'default', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'blue', value: '#007bff' },
      ],
    },
  },
  decorators: [
    // Пример глобального декоратора (если нужно оборачивать компоненты в контекст или стили)
    (Story) => (
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
    ),
  ]
};

export default preview;

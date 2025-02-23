import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    // Параметры для глобальной конфигурации (например, настройки viewport)
    viewport: {
      viewports: {
        viewports: {
          iphoneX: {
            name: 'iPhone X',
            styles: {
              width: '375px',
              height: '812px',
            },
          },
          ipadPro: {
            name: 'iPad Pro',
            styles: {
              width: '1024px',
              height: '1366px',
            },
          },
        },
      },
    },
  },
  decorators: [
    // Пример глобального декоратора (если нужно оборачивать компоненты в контекст или стили)
    (Story) => (
        <div style={{ margin: '20px' }}>
          <Story />
        </div>
    ),
  ],
};

export default preview;

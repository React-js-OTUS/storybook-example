import { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      options: {
        default: { name: 'default', value: '#ffffff' },
        dark: { name: 'dark', value: '#333333' },
        blue: { name: 'blue', value: '#007bff' }
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
  ]
};

export default preview;

import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './form';

const meta = {
    title: 'Forms/Form',
    component: Form,
} as Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainForm: Story = {
    args: {
        // children: 'Button',
    },
};


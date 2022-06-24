import { Button } from './Button'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  argTypes: {
    variant: {
      defaultValue: 'inline-radio',
      description: 'The type of button',
      type: 'string',
      options: ['primary', 'secondary']
    },
    isSmall: {
      description: 'A small version of the button',
      type: 'boolean'
    },
    children: {
      description: 'The button content',
      control: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Small = Template.bind({})
Small.args = { isSmall: true }

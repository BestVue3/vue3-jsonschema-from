export default {
  name: 'Nested',
  schema: {
    type: 'object',
    required: ['title'],
    properties: {
      title: {
        type: 'string',
        title: 'Task list title',
      },
      tasks: {
        type: 'array',
        title: 'Tasks',
        items: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              title: 'Title',
              description: 'A sample title',
            },
            details: {
              type: 'string',
              title: 'Task details',
              description: 'Enter the task details',
            },
            done: {
              type: 'boolean',
              title: 'Done?',
              default: false,
            },
          },
        },
      },
    },
  },
  uiSchema: {
    title: 'A list of tasks',
    properties: {
      title: {
        title: 'Task list title',
      },
      tasks: {
        title: 'Tasks',
        items: {
          properties: {
            title: {
              title: 'Title',
              helpText: 'A sample title',
            },
            details: {
              title: 'Task details',
              helpText: 'Enter the task details',
              widget: 'textarea',
            },
            done: {
              title: 'Done?',
            },
          },
        },
      },
    },
  },
  default: {
    title: 'My current tasks',
    tasks: [
      {
        title: 'My first task',
        details:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        done: true,
      },
      {
        title: 'My second task',
        details:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        done: false,
      },
    ],
  },
}

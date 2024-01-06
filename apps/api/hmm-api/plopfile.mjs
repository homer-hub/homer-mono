/**
 * Main plopfile function
 * 
 * @param {NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('test', {
    description: 'generates a test file',
    prompts: [
      {
        type: 'input',
        name: 'sut',
        message: 'what is the system under test?',
      },
      {
        type: 'input',
        name: 'destination-path',
        message: 'destination path',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{destination-path}}/{{snakeCase sut}}.test.ts',
        templateFile: 'plop-templates/test.ts.hbs',
      },
    ],
  })
}

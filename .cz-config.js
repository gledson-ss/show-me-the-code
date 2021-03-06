module.exports = {
  types: [
      {
          value: ':hammer: chore',
          name:
              'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
      },
      { value: ':collision: feat', name: 'feat:     A new feature' },
      { value: ':beetle: fix', name: 'fix:      A bug fix' },
      { value: ':book: docs', name: 'docs:     Documentation only changes' },
      {
          value: ':eyeglasses: style',
          name:
              'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
      },
      {
          value: ':trophy: perf',
          name: 'perf:     A code change that improves performance',
      },
      {
          value: ':white_check_mark: test',
          name: 'test:     Adding missing tests',
      },
      { value: ':back: revert', name: 'revert:   Revert to a commit' },
      {
          value: ':building_construction: build',
          name: 'build:    Work in progress',
      },
      { value: ':heavy_plus_sign: ci', name: 'ci:       ci related changes' },
      {
          value: ':pencil2: refactor',
          name:
              'refactor: A code change that neither fixes a bug nor adds a feature',
      },
      { value: ':x:', name: 'delete:    deleted one or more files' }
  ],

  scopes: [
      { name: '' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      // used if allowCustomScopes is true
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body:
          'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer:
          'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
};
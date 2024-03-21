export const fields = {
  type: {
    type: 'selectWithFeedback',
    renderAsTag: true,
    options: [
      { value: 'people', label: 'people', color: 'magenta' },
      { value: 'company', label: 'company', color: 'blue' },
    ],
    required: true,
    hasFeedback: true,
  },
  name: {
    type: 'string',
    disableForForm: false,
    required: true,
  },
  "name (Arabic)": {
    type: 'string',
    disableForForm: false,
    required: true,
  },
  people: {
    type: 'search',
    label: 'people',
    entity: 'people',
    redirectLabel: 'Add New Person',
    withRedirect: true,
    urlToRedirect: '/people',
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    dataIndex: ['people', 'firstname'],
    disableForTable: true,
    feedback: 'people',
  },
  company: {
    type: 'search',
    label: 'company',
    entity: 'company',
    redirectLabel: 'Add New Company',
    withRedirect: true,
    urlToRedirect: '/company',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['company', 'name'],
    disableForTable: true,
    feedback: 'company',
    required: true,
  },
  country: {
    type: 'country',
    disableForForm: true,
  },
  email: {
    type: 'email',
    disableForForm: false,
    required: true,
  },
  phone: {
    type: 'phone',
    disableForForm: false,
    required: true,
  },

};

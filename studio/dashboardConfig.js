export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebc67cc7027a364ca6001ce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uhem6gkc',
                  apiId: '801ecd05-b7ca-432d-b99f-008711fc0a7b'
                },
                {
                  buildHookId: '5ebc67cc80c145f45f30d137',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4d58ae9g',
                  apiId: 'a56e0870-31d8-45b3-9dc0-b2ce6adb27f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrtncthrn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4d58ae9g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

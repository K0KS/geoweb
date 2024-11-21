module.exports = function (migration) {
  const page = migration.createContentType('page', {
    name: 'Page',
    description: 'A page on the website',
    displayField: 'title',
  });

  page
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  page
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .required(true)
    .validations([{ unique: true }]);

  page
    .createField('description')
    .name('Description')
    .type('Text')
    .required(false);

  page
    .createField('content')
    .name('Content')
    .type('RichText')
    .required(false);

  page
    .createField('featuredImage')
    .name('Featured Image')
    .type('Link')
    .linkType('Asset')
    .required(false);

  page
    .createField('sections')
    .name('Sections')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['researchTopic', 'project', 'teamMember'],
        },
      ],
    });
};

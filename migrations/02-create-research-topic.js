module.exports = function (migration) {
  const researchTopic = migration.createContentType('researchTopic', {
    name: 'Research Topic',
    description: 'A research topic or area of study',
    displayField: 'title',
  });

  researchTopic
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  researchTopic
    .createField('description')
    .name('Description')
    .type('Text')
    .required(true);

  researchTopic
    .createField('icon')
    .name('Icon')
    .type('Symbol')
    .required(false);

  researchTopic
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .required(false);

  researchTopic
    .createField('content')
    .name('Content')
    .type('RichText')
    .required(false);

  researchTopic
    .createField('relatedProjects')
    .name('Related Projects')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['project'],
        },
      ],
    });
};

module.exports = function (migration) {
  const project = migration.createContentType('project', {
    name: 'Project',
    description: 'A research project',
    displayField: 'title',
  });

  project
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  project
    .createField('description')
    .name('Description')
    .type('Text')
    .required(true);

  project
    .createField('startDate')
    .name('Start Date')
    .type('Date')
    .required(true);

  project
    .createField('endDate')
    .name('End Date')
    .type('Date')
    .required(false);

  project
    .createField('status')
    .name('Status')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['active', 'completed', 'planned'],
      },
    ]);

  project
    .createField('content')
    .name('Content')
    .type('RichText')
    .required(false);

  project
    .createField('teamMembers')
    .name('Team Members')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['teamMember'],
        },
      ],
    });

  project
    .createField('featuredImage')
    .name('Featured Image')
    .type('Link')
    .linkType('Asset')
    .required(false);
};

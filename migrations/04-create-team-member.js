module.exports = function (migration) {
  const teamMember = migration.createContentType('teamMember', {
    name: 'Team Member',
    description: 'A member of the research team',
    displayField: 'name',
  });

  teamMember
    .createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  teamMember
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  teamMember
    .createField('email')
    .name('Email')
    .type('Symbol')
    .required(false);

  teamMember
    .createField('photo')
    .name('Photo')
    .type('Link')
    .linkType('Asset')
    .required(false);

  teamMember
    .createField('bio')
    .name('Bio')
    .type('RichText')
    .required(false);

  teamMember
    .createField('researchInterests')
    .name('Research Interests')
    .type('Array')
    .items({
      type: 'Symbol',
    })
    .required(false);

  teamMember
    .createField('publications')
    .name('Publications')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['publication'],
        },
      ],
    });

  teamMember
    .createField('socialLinks')
    .name('Social Links')
    .type('Object')
    .required(false);
};

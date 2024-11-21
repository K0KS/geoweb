module.exports = function (migration) {
  const publication = migration.createContentType('publication', {
    name: 'Publication',
    description: 'A research publication or article',
    displayField: 'title',
  });

  publication
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  publication
    .createField('authors')
    .name('Authors')
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

  publication
    .createField('abstract')
    .name('Abstract')
    .type('Text')
    .required(false);

  publication
    .createField('publicationType')
    .name('Publication Type')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['journal-article', 'conference-paper', 'book-chapter', 'thesis', 'report'],
      },
    ]);

  publication
    .createField('journal')
    .name('Journal/Conference')
    .type('Symbol')
    .required(false);

  publication
    .createField('year')
    .name('Year')
    .type('Integer')
    .required(true);

  publication
    .createField('doi')
    .name('DOI')
    .type('Symbol')
    .required(false);

  publication
    .createField('url')
    .name('URL')
    .type('Symbol')
    .required(false);

  publication
    .createField('keywords')
    .name('Keywords')
    .type('Array')
    .items({
      type: 'Symbol',
    })
    .required(false);

  publication
    .createField('attachments')
    .name('Attachments')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Asset',
    })
    .required(false);
};

import { useContext, createContext } from 'react';

import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';
const { i18n } = i18nConfig;

export interface ContentfulContextInterface {
  locale: string;
  spaceIds: {
    main: string;
  };
  previewActive: boolean;
}

if (!contentfulConfig.contentful?.space_id) {
  throw new Error('Contentful space ID is not defined');
}

export const contentfulContextValue: ContentfulContextInterface = {
  locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.space_id,
  },
  previewActive: false,
};

export const ContentfulContext = createContext<ContentfulContextInterface>(contentfulContextValue);

export const useContentfulContext = () => useContext(ContentfulContext);

interface ContentfulContentProviderProps {
  children: (context: ContentfulContextInterface) => React.ReactNode;
  router: any;
}

const ContentfulContentProvider: React.FC<ContentfulContentProviderProps> = ({ children, router }) => {
  const previewActive = !!router.query.preview;
  const contextValue = {
    ...contentfulContextValue,
    previewActive,
  };

  return children(contextValue);
};

export { ContentfulContentProvider };

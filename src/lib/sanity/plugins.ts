import { definePlugin, DocumentDefinition } from 'sanity';
import { StructureBuilder, StructureResolver } from 'sanity/desk';

export const definePagePlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => templateItem.templateId !== type
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate');
        }

        return prev;
      },
    },
  };
});

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['aboutPage'].includes(listItem.getId())
      ),
    ]);

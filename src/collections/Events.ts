import {
  BoldFeature,
  HeadingFeature,
  ItalicFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { PayloadAiPluginLexicalEditorFeature } from '@ai-stack/payloadcms'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            ParagraphFeature(),
            ItalicFeature(),
            BoldFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            PayloadAiPluginLexicalEditorFeature(),
          ]
        },
      }),
    },
    {
      type: 'row',
      fields: [
        {
          name: 'date',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'location',
          type: 'select',
          options: ['Neologicky kastiel', 'Kulturny dom', 'Namestie slobody', 'Amfiteater'],
        },
      ],
    },
  ],
}

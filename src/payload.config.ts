// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { en } from '@payloadcms/translations/languages/en'
import { sk } from '@payloadcms/translations/languages/sk'
import { hu } from '@payloadcms/translations/languages/hu'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { payloadAiPlugin } from '@ai-stack/payloadcms'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Events],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { sk, hu, en },
  },
  localization: {
    locales: ['sk', 'hu', 'en'],
    defaultLocale: 'sk',
  },
  plugins: [
    payloadCloudPlugin(),
    payloadAiPlugin({
      collections: {
        [Events.slug]: true,
      },
      debugging: false,
      disableSponsorMessage: false,
    }),
  ],
})

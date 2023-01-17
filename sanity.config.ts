import {defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioCustomNavbar from './components/StudioCustomNavbar'
import StudioCustomLogo from './components/StudioCustomLogo'
import { getDefaultDocumentNode } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'Nextjs_Blog',
  title: 'Nextjs Blog',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components:{
      logo:StudioCustomLogo,
      navbar: StudioCustomNavbar
    }
  },
  // theme:myTheme
})
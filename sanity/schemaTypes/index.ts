import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './authorType';
import { startupType } from '@/sanity/schemaTypes/StartupType';
import { playlistType } from '@/sanity/schemaTypes/playlistType';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [startupType, authorType, playlistType],
};

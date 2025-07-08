import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './authorType';
import { startupType } from '@/sanity/schemaTypes/StartupType';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [startupType, authorType],
};

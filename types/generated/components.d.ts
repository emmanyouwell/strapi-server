import type { Schema, Struct } from '@strapi/strapi';

export interface ObjectsIssuerObject extends Struct.ComponentSchema {
  collectionName: 'components_objects_issuer_objects';
  info: {
    displayName: 'issuerObject';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ObjectsLinkObject extends Struct.ComponentSchema {
  collectionName: 'components_objects_link_objects';
  info: {
    displayName: 'linkObject';
  };
  attributes: {
    demo: Schema.Attribute.Text;
    github: Schema.Attribute.Text;
  };
}

export interface RepeatableTextArray extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_text_arrays';
  info: {
    displayName: 'textArray';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'objects.issuer-object': ObjectsIssuerObject;
      'objects.link-object': ObjectsLinkObject;
      'repeatable.text-array': RepeatableTextArray;
    }
  }
}

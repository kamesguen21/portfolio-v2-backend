import type { Struct, Schema } from '@strapi/strapi';

export interface ObjectsItem extends Struct.ComponentSchema {
  collectionName: 'components_objects_items';
  info: {
    displayName: 'Item';
    icon: 'plus';
    description: '';
  };
  attributes: {
    slug: Schema.Attribute.String;
    name: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    Logo: Schema.Attribute.Component<'objects.asset', false>;
    Screenshots: Schema.Attribute.Media<'images', true>;
  };
}

export interface ObjectsColor extends Struct.ComponentSchema {
  collectionName: 'components_objects_colors';
  info: {
    displayName: 'color';
    icon: 'paint';
    description: '';
  };
  attributes: {
    NamedColor: Schema.Attribute.Enumeration<
      [
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkgrey',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkslategrey',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dimgrey',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray',
        'green',
        'greenyellow',
        'grey',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightgrey',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightslategrey',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'slategrey',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen',
      ]
    >;
  };
}

export interface ObjectsAsset extends Struct.ComponentSchema {
  collectionName: 'components_objects_assets';
  info: {
    displayName: 'Asset';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    Asset: Schema.Attribute.Enumeration<
      [
        'AWS',
        'Bootstrap',
        'C',
        'Cpp',
        'Celery',
        'Django',
        'FastApi',
        'Flask',
        'Go',
        'Kafka',
        'Neo4j',
        'Nginx',
        'Numpy',
        'Pandas',
        'RabbitMQ',
        'Rust',
        'Scrapy',
        'Selenium',
        'Docker',
        'Kubernetes',
        'Csharp',
        'Xamarin',
        'TypeScript',
        'VueJs',
        'ReactJs',
        'Dart',
        'Kotlin',
        'Python',
        'NodeJs',
        'Deno',
        'Svelte',
        'ExpressJs',
        'JavaScript',
        'Fastify',
        'NestJs',
        'Quasar',
        'SolidJs',
        'Electron',
        'Flutter',
        'Java',
        'AdonisJs',
        'Android',
        'Angular',
        'PostgreSQL',
        'Firebase',
        'Sass',
        'Unknown',
        'MongoDB',
        'Redis',
        'Tailwind',
        'HTML',
        'Premiere',
        'Photoshop',
        'CSS',
        'AfterEffects',
        'Illustrator',
        'Nuxt',
        'Vite',
        'Vitest',
        'Jest',
        'Unocss',
        'Ruvy',
        'Postcss',
        'Azure',
        'Serverless',
        'Git',
        'SQL',
        'NOSQL',
        'Camunda',
        'Jhipster',
        'Keycloak',
        'Magento2',
        'SpringBoot',
        '//category',
        'pro-lang',
        'framework',
        'library',
        'lang',
        'db',
        'orm',
        'devops',
        'test',
        'devtools',
        'markup-style',
        'design',
        'soft',
      ]
    >;
  };
}

export interface InfoPeriod extends Struct.ComponentSchema {
  collectionName: 'components_info_periods';
  info: {
    displayName: 'Period';
    icon: 'calendar';
  };
  attributes: {
    from: Schema.Attribute.Date;
    to: Schema.Attribute.Date;
  };
}

export interface InfoLink extends Struct.ComponentSchema {
  collectionName: 'components_info_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
    Platform: Schema.Attribute.Enumeration<
      [
        'github',
        'stackoverflow',
        'twitter',
        'linkedin',
        'email',
        'facebook',
        'youtube',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'objects.item': ObjectsItem;
      'objects.color': ObjectsColor;
      'objects.asset': ObjectsAsset;
      'info.period': InfoPeriod;
      'info.link': InfoLink;
    }
  }
}

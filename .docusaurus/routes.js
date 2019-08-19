
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
}],
},
{
  path: '/blog/tags/zinnion',
  component: ComponentCreator('/blog/tags/zinnion'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

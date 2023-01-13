import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Repas',
    imageUrl: 'https://i.ibb.co/yyjnpDN/repas.jpg',
    route: 'shop/repas'
  },
  {
    id: 2,
    title: 'Salade',
    imageUrl: 'https://i.ibb.co/z44Vpxy/bo-bun.jpg',
    route: 'shop/salade'
  },
  {
    id: 3,
    title: 'Vapeurs',
    imageUrl: 'https://i.ibb.co/31HTNDs/vapeur.jpg',
    route: 'shop/vapeurs'
  },
  {
    id: 4,
    title: 'Fritures',
    imageUrl: 'https://i.ibb.co/qdwhr5G/friture.jpg',
    route: 'shop/fritures'
  },
  {
    id: 6,
    title: 'Surgelés',
    imageUrl: 'https://i.ibb.co/t8WvRN2/surgele.jpg',
    route: 'shop/surgelés'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

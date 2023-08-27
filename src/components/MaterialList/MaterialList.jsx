import { List } from './MaterialList.styled';
import MaterialItem from './MaterialItem';

const MaterialList = ({ items, ...otherProps }) => {
  return (
    <List>
      {items.map(item => (
        <MaterialItem key={item.id} item={item} {...otherProps} />
      ))}
    </List>
  );
};

export default MaterialList;

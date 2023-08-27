import {
  ListItem,
  ButtonDelete,
  ButtonEdit,
  ControlPanel,
} from './MaterialItem.styled';

function MaterialItem({ item, onDelete, onEdit, isLoading }) {
  return (
    <ListItem>
      <div>
        <div>
          <b>Title: </b>
          {item.title}
        </div>
        <b>Link: </b>
        {item.link}
      </div>
      <ControlPanel>
        <ButtonEdit
          onClick={() => {
            onEdit(item);
          }}
          disabled={isLoading}
        >
          Edit
        </ButtonEdit>
        <ButtonDelete
          onClick={() => {
            onDelete(item.id);
          }}
          disabled={isLoading}
        >
          Delete
        </ButtonDelete>
      </ControlPanel>
    </ListItem>
  );
}

export default MaterialItem;

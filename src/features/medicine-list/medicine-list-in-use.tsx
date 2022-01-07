import { Medicine } from '../../services/medicine/medicine.type';
import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react';

interface Props {
  medicines: Medicine[];
  onMinusClicked: (medicine: Medicine) => void;
  onPlusClicked: (medicine: Medicine) => void;
  onMoveStockClicked: (medicine: Medicine) => void;
}

export const MedicineListInUse = (props: Props) => {
  return (
    <UnorderedList>
      {props.medicines.map(medicine => (
        <ListItem key={medicine.id}>
          {medicine.name}
          <Button onClick={() => props.onMinusClicked(medicine)}>-</Button>
          <Box as={'span'}>{medicine.stock}</Box>
          <Button onClick={() => props.onPlusClicked(medicine)}>+</Button>
          <Button onClick={() => props.onMoveStockClicked(medicine)}></Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

import { Medicine } from '../../services/medicine/medicine.type';
import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react';

interface Props {
  medicines: Medicine[];
  onMinusClicked: (medicine: Medicine) => void;
  onPlusClicked: (medicine: Medicine) => void;
  onMoveInUseClicked: (medicine: Medicine) => void;
}

export const MedicineListStock = (props: Props) => {
  return (
    <UnorderedList>
      {props.medicines.map(medicine => (
        <ListItem key={medicine.id}>
          {medicine.name}
          <Button onClick={() => props.onMinusClicked(medicine)}>-</Button>
          <Box as={'span'}>{medicine.stock}</Box>
          <Button onClick={() => props.onPlusClicked(medicine)}>+</Button>
          <Button onClick={() => props.onMoveInUseClicked(medicine)}></Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FiX } from 'react-icons/fi';
import {
  CarImage,
  CloseButton,
  ConditionItem,
  ConditionList,
  ConditionSpan,
  Description,
  Item,
  List,
  OptionsTitel,
  Span,
  StyledButton,
  Title,
  TitleCard,
  WrapInfo,
  Wrapper
} from './AdvertModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  borderRadius: '24px',
  bgcolor: 'background.paper',
  boxShadow: 24,
 
  '@media screen and (max-width: 425px)': {
    width: 375,
    height: 'auto',
  },
};

export default function AdvertModal({ onClose, data, open }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            ...style,
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#12141720',
              borderRadius: '5px',
            },
          }}
        >
          <Wrapper>
            <CloseButton onClick={handleClose}>
              <FiX style={{ width: '24px', height: '24px' }} />
            </CloseButton>

            {data.img ? (
              <CarImage src={data.img} data={data} />
            ) : (
              <CarImage src='../../assets/default_car_image.png' alt='Default Car Image'  />
            )}
            <WrapInfo>
              <TitleCard>
                <Title>
                  {data.make} <Span>{data.model}, </Span>
                  {data.year}
                </Title>
              </TitleCard>
              <List>
                <Item>{data.address.split(',')[1]}</Item>
                <Item>{data.address.split(',')[2]}</Item>
                <Item>Id: </Item>
                <Item>Year: {data.year}</Item>
                <Item>Type: {data.type}</Item>
              </List>
              <List>
                <Item>Fuel Consumption: {data.fuelConsumption}</Item>
                <Item>Engine Size: {data.engineSize}</Item>
              </List>
              <Description>{data.description}</Description>
              <OptionsTitel>Accessories and functionalities:</OptionsTitel>
              <List>
                {data.accessories.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <List>
                {data.functionalities.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <OptionsTitel>Rental Conditions:</OptionsTitel>
              <ConditionList>
                <ConditionItem>
                  Minimum age:{' '}
                  <ConditionSpan>
                    {new Date().getFullYear() - data.year}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>{data.rentalConditions.split('\n')[1]}</ConditionItem>
                <ConditionItem>{data.rentalConditions.split('\n')[2]}</ConditionItem>
                <ConditionItem>
                  Mileage:{' '}
                  <ConditionSpan>
                    {data.mileage.toLocaleString('en-US')}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                </ConditionItem>
              </ConditionList>
            </WrapInfo>
            <StyledButton
              type="button"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            >
              Rental car
            </StyledButton>
          </Wrapper>
        </Box>
      </Modal>
    </>
  );
}

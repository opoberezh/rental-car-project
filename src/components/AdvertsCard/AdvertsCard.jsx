
import React, { useState, useEffect } from 'react';
import AdvertModal from '../AdvertModal/AdvertModal';
import {
  Description,
  Image,
  Price,
  StyledButtonWrapper,
  Title,
  Wrapper,
  WrapperImage,
  WrapperTitle,
  StyledButton,
} from './AdvertsCard.styled';
import {  useSelector } from 'react-redux';
// import FavoriteCards from '../FavoriteCards/FavoriteCards';
import { selectFavorites } from '../redux/selectors';


const AdvertsCard = ({item}) => {
  const {
    id,
    img,
    make,
    year,
    model,
    type,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = item || {};

  // const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the current item is in the favorites list
    const isFavorite = (favorites.some((fav) => fav.id === id))
    setIsFavorite(isFavorite);
  }, [favorites, id, isFavorite]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Wrapper>
      <WrapperImage  >
        <Image src={img} loading="lazy" alt={make}/>
        {/* <FavoriteCards card={item} /> */}
      </WrapperImage>
      <WrapperTitle>
        <Title>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </WrapperTitle>
      <Description>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{accessories[0]}</li>
      </Description>
      <StyledButtonWrapper>
        <StyledButton type="button" onClick={handleOpenModal}>
          Learn more
        </StyledButton>


      </StyledButtonWrapper>

      {isModalOpen && (
        <AdvertModal open={isModalOpen} onClose={handleCloseModal} data={item} />
      )}
    </Wrapper>
  );
};

export default AdvertsCard;

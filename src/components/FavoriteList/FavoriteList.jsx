import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import AdvertsCard from '../AdvertsCard/AdvertsCard';
import AdvertModal from '../AdvertModal/AdvertModal';
import {
  addToFavorite,
  removeFromFavorite,
} from '../redux/favoritesSlice';

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleToggleFavorite = card => {
    const isFavorite = favorites.some(fav => fav.id === card.id);
    if (isFavorite) {
      dispatch(removeFromFavorite(card.id));
    } else {
      dispatch(addToFavorite(card));
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const handleOpen = card => {
    setSelectedAdvert(card);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedAdvert(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <ul
        style={{
          display: 'flex',
          maxWidth: '1180px',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {favorites.map(item => (
          <li key={item.id} style={{ width: '274px' }}>
            <AdvertsCard
              item={item}
              onToggleFavorite={() => handleToggleFavorite(item)}
              onOpen={() => handleOpen(item)}
            />
          </li>
        ))}
      </ul>

      {isModalOpen && selectedAdvert && (
        <AdvertModal
          open={isModalOpen}
          onClose={handleClose}
          data={selectedAdvert}
        />
      )}
    </>
  );
};


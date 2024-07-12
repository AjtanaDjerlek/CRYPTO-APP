// src/Components/Favorite/Favorite.jsx
import React from 'react';
import { CenteredBox, StyledImage, MessageText, GoToCoinsLink} from './FavoriteStyled'; // Relativna putanja do stilizovanih komponenti
import MyFavImage from './No-data-pana.png'; // Relativna putanja do slike

export function Favorite() {
    return (
        <CenteredBox>
            <StyledImage src={MyFavImage} alt="No data" />
            <MessageText>You haven't added any coin to your favourite list, please add some.</MessageText>
            <GoToCoinsLink>Go to coins</GoToCoinsLink>
        </CenteredBox>
    );
}
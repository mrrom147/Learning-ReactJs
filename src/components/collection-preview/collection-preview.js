import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, ReviewContainer, TitleContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <ReviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </ReviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;

import React, { useState } from "react";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  ContainerCardProduct,
  ImageCardProduct,
  BoxInform,
  BoxNameQuantity,
  NameProduct,
  InformButton,
  InformDescription,
  BoxInformPriceButton,
  InformPrice,
} from "./styled";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ContainerCardProduct>
      <ImageCardProduct src={product.photoUrl} />
      <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{product.name}</NameProduct>
          <InformDescription>{product.description}</InformDescription>
          <BoxInformPriceButton>
            <InformPrice>{product.price}</InformPrice>
            <InformButton onClick={() => setShowModal(true)}>
              Adicionar
            </InformButton>
          </BoxInformPriceButton>
        </BoxNameQuantity>
        <ModalSelectQuantity open={showModal} setOpen={setShowModal} />
      </BoxInform>
    </ContainerCardProduct>
  );
};

export default CardProduct;

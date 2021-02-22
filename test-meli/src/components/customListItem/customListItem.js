import React from 'react';
import './customListItem.sass';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import imgShipping from '../../assets/ic_shipping@2x.png.png';

/* eslint-disable camelcase */
export default function CustomListItem({ item }) {
  const {
    id,
    title,
    price,
    picture,
    state,
    free_shipping
  } = item;
  const getCurrency = (priceAmount) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    return formatter.format(priceAmount.amount);
  };
  return (
    <div className="ItemContainer">
      <Grid fluid>
        <Row>
          <Col xs={8} sm={4} md={4} lg={2}>
            <div className="ImageContainer">
              <Link to={`/item/${id}`}>
                <img src={picture} alt="imagen" />
              </Link>
            </div>
          </Col>

          <Col xs={2} sm={4} md={4} lg={4}>
            <div className="DataContainer">
              <Row>
                <div className="PriceContainer">
                  {getCurrency(price)}
                </div>
                <div className="ShippingContainer">
                  {(free_shipping) ? <img src={imgShipping} alt="envio_gratis" /> : null}
                </div>
              </Row>
              <Row>
                <Link to={`/item/${id}`}>
                  <div className="TitleContainer">
                    {title}
                  </div>
                </Link>
              </Row>
            </div>
          </Col>

          <Col xs={3} sm={3} md={2} lg={4}>
            <div className="State">
              {state}
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

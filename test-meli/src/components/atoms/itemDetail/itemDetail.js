import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import './itemDetail.sass';

export default function ItemDetail({ item }) {
  const isNew = () => {
    let isNew = (item.condition === "new") ? "Nuevo" : "Usado";
    return isNew;
  }

  const loadDescription = () => {
    let result = [];
    let p = item.description.split('\n\n');
    p.forEach(function (element, i) {
      result.push(<p key={i}>{element}</p>);
    });
    return result;
  }

  return (
    (item) ?
      <div className="PLGeneralContainer">
        <div>
        <div className="CategoriesContainer">
          {console.log()}
        </div>
        <div className="DetailContainer">
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={9} lg={8} >
                <div className="DetailImageContainer">
                  <img src={item.picture} alt="Imagen" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={3} lg={4} >
                <div className="NewSoldContainer">
                  {isNew()} - {item.sold_quantity} Vendidos
                  </div>
                <div className="DTitleContainer">
                  {item.title}
                </div>
                <div className="DPriceContainer">
                  ${item.price.amount}
                </div>
                <div className="DButtonContainer">
                  <button className="DButton" onClick={() => alert("No disponible")}>
                    <div>Comprar</div>
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10} sm={10} md={7} lg={8} >
                <div className="DText">
                  <div className="TitleDescContainer">
                    Descripcion del producto
                  </div>
                  <div class="scrollbar">
                    <div class="overflow">
                      {loadDescription()}
                    </div>                   
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        </div>
      </div> : null
  );
}
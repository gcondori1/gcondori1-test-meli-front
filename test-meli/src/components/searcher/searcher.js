import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './searcher.sass';
import logo from '../../../assets/Logo_ML@2x.png.png';
import search from '../../../assets/ic_Search.png';
import { useHistory } from "react-router-dom";

export default function Searcher() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      findProducts();
    }
  }

  const handleChange = (event) => {
    setKeyword(event.target.value);
  }
  const findProducts = () => {
    if (!keyword) return;
    history.push("/items?search="+keyword);
  }
  const handleLogo = () => {
    history.push('/');
  }
  return (
    <div className="SGeneral-container">
      <div className="Searcher-container">
        <Grid fluid>
          <Row>
            <Col xs={4} sm={2} md={2} lg={2}>
              <div className="Logo-container">
                <img src={logo} alt="MercadoLibre" onClick={handleLogo} />
              </div>
            </Col>
            <Col xs={6} sm={8} md={9} lg={9}>
              <input
                type="text"
                className="Search-text"
                name="keyword"
                placeholder="Nunca dejes de buscar"
                value={keyword}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <button className="Search-Button" type="submit" value="Submit" onClick={findProducts} >
                <img src={search} alt="buscar" />
              </button>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

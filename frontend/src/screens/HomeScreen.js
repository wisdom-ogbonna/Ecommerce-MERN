import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../components/Products';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



// import Data from '../data'



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state

  }
}



function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  });

  // const [products, SetProducts] = useState([]);


  useEffect(() => {
    const fetchDate = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })

      } catch (err) {

        dispatch({ type: 'FETCH_FAIL', payload: err.message });

      }

      // SetProducts(result.data)
    };
    fetchDate()

  }, [])

  return (
    <div>
      <Helmet>
        <title>ECOMMERCE</title>

      </Helmet>

      <h2> Featured Products</h2>

      <div className="products">
        {
          loading ? (
            <LoadingBox />

          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>)

            : (
              <Row>
                {products.map((product) => (

                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">

                    <Products product={product} />
                  </Col>
                )

                )}</Row>
            )
        }
      </div>
    </div>
  )
}

export default HomeScreen
import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizza1 from '../images/pizza1.jpg';
import burger1 from '../images/burger1.jpeg';
import buyPizza from '../redux/pizza/pizzaAction';
import buyBurger from '../redux/burger/burgerAction';
let PizzaHut = () =>{
    let dispatch = useDispatch();
    let pizzaInfo = useSelector((state) => {
        return state.pizza;
    });
  let burgerInfo = useSelector((state) => {
    return state.burger;
  });
    let clickBuyPizza = () => {
        //trigger an action to redux
       dispatch(buyPizza());
    }
  let clickBuyBurger = () => {
    //trigger an action to redux
    dispatch(buyBurger());
  }
    return (
      <Fragment>
          <pre>{JSON.stringify(pizzaInfo)}</pre>
        <div className='container mt-3'>
          <div className='row'>
            <div className=' col-md-6'>
              <div className='card'>
                <div className='card-header bg-light'>
                  <h1>Pizza hut</h1>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img
                        src={pizza1}
                        alt='#'
                        className='img=fluid img-thumbnail'
                        height='200'
                        width='200'
                      />
                    </div>
                    <div className='col-md-6'>
                      <h2>Total : {pizzaInfo.pizzaCount}</h2>
                      <button onClick = {clickBuyPizza} className='btn btn-success btn-sm'>
                        Buy pizza
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' col-md-6'>
              <div className='card'>
                <div className='card-header bg-light'>
                  <h1>Burger hut</h1>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img
                        src={burger1}
                        alt='#'
                        className='img=fluid img-thumbnail'
                        height='200'
                        width='200'
                      />
                    </div>
                    <div className='col-md-6'>
                      <h2>Total : {burgerInfo.burgerCount}</h2>
                      <button onClick={clickBuyBurger} className='btn btn-success btn-sm'>
                        Buy burger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};

export default PizzaHut;
import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizza1 from '../images/pizza1.jpg';
import buyPizza from '../redux/pizza/pizzaAction';
let PizzaHut = () =>{
    let dispatch = useDispatch();
    let pizzaInfo = useSelector((state) => {
        return state.pizza;
    });
    let clickBuyPizza = () => {
        //trigger an action to redux
       dispatch(buyPizza());
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
          </div>
        </div>
      </Fragment>
    );
};

export default PizzaHut;
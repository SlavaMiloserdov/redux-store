import React from 'react';
import { BoostoreServiceConsumer } from '../../services';

const withBookstoreConsumer = () => (Wrapped) => {
  
  return (props) => {
    <BoostoreServiceConsumer>
      {
        (bookstoreService) => {

          return (
            <Wrapped {...props} 
            bookstoreService={bookstoreService} />
          )
        }
      }
    </BoostoreServiceConsumer>
  }
}

export default withBookstoreConsumer;
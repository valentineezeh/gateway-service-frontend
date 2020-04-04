import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmptyPage = () => (
  <>
    <div className="empty_savings_page">
      <div className="empty_savings_page_texts">
        <h2>
          Ooops! You are yet to create a Gateway
        </h2>
        <p>
          To create a gateway click the button below
          {' '}
          <br />
          {' '}
          Note in order to create a device you must have created a gateway
        </p>
        <Link to="/create-gateway">
          <Button
            type="button"
            variant="info"
          >
            Create a Gateway
          </Button>
        </Link>
      </div>
    </div>
  </>
);

export default EmptyPage;

import React from 'react';
import { Accordion } from '../components'
import faqs from '../fixtures/faqs.json'

const FaqContainer = () => {
    return (
      <Accordion>
          <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          {faqs.map(item => (
              <Accordion.Item key={item.id} id={item.id}>
                  <Accordion.Header id={item.id}>{item.header}</Accordion.Header>
                  <Accordion.Body id={item.id}>{item.body}</Accordion.Body>
              </Accordion.Item>
          ))}
      </Accordion>
    );
};

export default FaqContainer;

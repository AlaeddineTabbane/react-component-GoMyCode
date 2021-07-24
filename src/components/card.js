import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

function Card1(props) {
  return (
    <Card
      hoverable
      cover={<img alt="example" src={props.item.img} />}
    >
      <Meta title={props.item.title} description={props.item.description} />
    </Card>
  )
}

export default Card1
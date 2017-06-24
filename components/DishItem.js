import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export default ({dish}) => (
  <Card key="dish.name">
    <CardHeader
      title={dish.name}
      subtitle={dish.romanizedName}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>{dish.description}</CardText>
  </Card>
)

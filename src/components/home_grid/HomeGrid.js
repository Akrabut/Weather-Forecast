import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import LikeButton from '../like_button/LikeButton'

function HomeGrid(props) {
  return (
    <Grid stackable={true}>
      <Grid.Row columns={2}>
        <Grid.Column floated={'left'} width={3}>
          <Image verticalAlign='top' align="left" src={`../../assets/icons/${props.fiveDay.icon}.png`} />
          <span style={{ ...style, fontSize: '1.15vw', fontWeight: 'bolder' }}>
            <strong>{props.fiveDay.name}<br></br>{props.fiveDay.current}</strong>
          </span>
        </Grid.Column>
        <Grid.Column textAlign='right' floated='right' width={2}>
          <LikeButton />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h1 style={{ ...style, fontSize: '2.4vw' }}>{props.fiveDay.headline}</h1>
      </Grid.Row>
      <Grid.Row textAlign='center' verticalAlign='bottom' columns={1} style={{ justifyContent: 'center' }}>
        <Card.Group centered={true} stackable={true} itemsPerRow={5} style={{ width: '100%' }}>
          {props.fiveDay.fiveDays.map((day, i) => {
            return (
              <Card color='violet' key={i} centered={true}>
                <Card.Content>
                  <Image size='tiny' src={`../../assets/icons/${day.icon}.png`} />
                  <Card.Description style={{ fontSize: '1vw' }}>{day.day}<br></br>{day.temp}</Card.Description>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Grid.Row>
    </Grid>
  )
}

const style = {
  color: "#6435c9"
}

export default HomeGrid
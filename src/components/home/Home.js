/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Location from '../location/Location'
import LocationSearch from '../location_search/LocationSearch'
import HomeGrid from '../home_grid/HomeGrid'
import { connect } from 'react-redux';
import { setFiveDay } from './homeActions'
import { setCachedFiveDay } from '../location_search/locationSearchActions'
import { setError } from '../_Error/errorActions'

function Home(props) {
  useEffect(() => {
    if (props.match) {
      props.setCachedFiveDay(props.favorites.get(props.match))
      return
    }
    (async () => {
      // if the user didn't allow location access setup app with tel aviv
      if (props.location.lat === 32.045 && props.location.lon === 34.77) {
        // tel aviv's key is hard coded
        return props.setFiveDay(null, 215854, 'Tel Aviv', props.setError)
      }
      props.setFiveDay(props.location, null, null, props.setError)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location])

  // rendering HomeGrid is sync while the data that populates it is fetched async
  // this makes sure the component is rendered only after the required states are populated
  function renderHomeGrid() {
    if (!props.fiveDay.fiveDays) return null
    return <HomeGrid fiveDay={props.fiveDay} />
  }

  return (
    <Container style={{width:"80%"}}>
      <LocationSearch setFiveDay={props.setFiveDay} />
      <Location />
      {renderHomeGrid()}
    </Container>
  )
}

const mapDispatchToProps = {
  setFiveDay,
  setCachedFiveDay,
  setError,
}

function mapStateToProps(state) {
  return {
    location: state.location,
    fiveDay: state.fiveDay,
    favorites: state.favorites,
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)
export default connectedHome
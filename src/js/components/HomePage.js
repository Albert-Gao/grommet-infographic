import React, { Component } from 'react';

import Responsive from 'grommet/utils/Responsive';

import Box from 'grommet/components/Box';
import WorldMap from './Map';
import CircleMeter from './CircleMeter';
import AreaChart from './AreaChart';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import '../../scss/index.scss';

export default class HomePage extends Component {
  constructor() {
    super();

    this._onResponsive = this._onResponsive.bind(this);

    this.state = {
      layout: 'large'
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive (small) {
    this.setState({
      layout: (small) ? 'small' : 'large'
    });
  }

  render() {
    const statImg = (this.state.layout !== 'small')
      ? <img style={{maxWidth:'752px'}} src="../img/people.svg" />
      : <img src="../img/people-mobile.svg" />;
    
    return (
      <Box className="dashboard" justify="center" align="center" full={true}
        pad="large" colorIndex="grey-2">
        <Box className="infographic-start" direction="column">
          <Box justify="center" align="start">
            <Box direction="row">
              <Headline size="medium" strong={true}>
                Worldwide Internet Usage
              </Headline>
            </Box>
            <Box direction="column">
              <Heading tag="h3">
                Access to the internet has increased at an unprecedented rate 
                over the past 10 years. Creating today’s idea economy, where 
                the speed of businesses is faster and more agile than ever.
              </Heading>
              <Box align="start" direction="row" responsive={false}>
                <Button href="#" label="Learn More" plain={true}
                  icon={<LinkNext />} />
              </Box>
            </Box>
          </Box>

          <Box justify="start" className="infographic-stat" 
            responsive={false} direction="row" style={{padding:'20px 0'}}>
              {statImg}
              <Box direction="column">
              <Heading tag="h4" strong={true} margin="none">
                Nearly
              </Heading>
              <Heading tag="h1" strong={true}>
                50
                <span className="unit">%</span>
                <span className="support"> (or 3.2B people)</span>
              </Heading>
              <Heading tag="h3">
                of the world's population have access to the internet.
                </Heading>
              </Box>
          </Box>
        </Box>

        <Box className="stacked-row" direction="row" pad={{vertical:"medium"}}>
          <Box className="meter-box col__span-25" justify="start" 
            pad={{horizontal:"medium"}} align="center">
            <CircleMeter />
          </Box>
          <Box className="area-box col__span-25" justify="start" 
            pad={{horizontal:"medium"}} align="center">
            <AreaChart />
          </Box>
          <Box className="map-box col__span-50" justify="start" 
            pad={{horizontal:"medium"}} align="center">
            <WorldMap />
          </Box>
        </Box>
      </Box>
    );
  }
};

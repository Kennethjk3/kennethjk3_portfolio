var React = require('react')
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          Build using React!
        </footer>
      </Grid>
    );
  }
}

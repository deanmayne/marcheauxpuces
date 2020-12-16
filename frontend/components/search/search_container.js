import { connect } from 'react-redux';

import Search from './search';

const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Search);

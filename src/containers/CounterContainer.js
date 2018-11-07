import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increment, decrement, reset, setValue} from '../actions';

const mapStateToProps = (state) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    },
    setValue: (value) => {
      dispatch(setValue(+value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
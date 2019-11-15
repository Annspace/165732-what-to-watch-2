import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.activeChangeHandler = this.activeChangeHandler.bind(this);
      this.state = {
        activeItem: props.activeItem,
      };
    }

    activeChangeHandler(id) {
      this.setState({
        activeItem: id,
      });
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveChange={this.activeChangeHandler}
      />;
    }
  }
  WithActiveItem.propTypes = {
    activeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  WithActiveItem.defaultProps = {
    activeItem: -1,
  };
  return WithActiveItem;
};

export default withActiveItem;

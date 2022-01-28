import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1 style={style.heading}>{title}</h1>
    </div>
  );
};

const style = {
  heading: {
    color: "darkgreen",
  },
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Task Tracker - default",
};

export default Header;

import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickButton = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Prop" onClick={onClickButton} />
    </header>
  );
};

// const style = {
//   heading: {
//     color: "darkgreen",
//   },
// };

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Task Tracker - default",
};

export default Header;

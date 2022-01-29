import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, toggleAddTask }) => {
  const onAdd = () => {
    toggleAddTask();
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onClick={onAdd}
      />
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

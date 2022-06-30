import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1> { title } </h1>
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
}


// Usualmente se posicionan al final el propTypes y defaultProps
// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.number.isRequired
// }

// FirstApp.defaultProps = {
//   title: 'No hay titulo',
//   subTitle: '',
//   name: 'sin nombre'
// }



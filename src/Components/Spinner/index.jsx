// eslint-disable-next-line react/prop-types
const Spinner = ({ value }) => {
  return (
    <div className={`flex items-center justify-center ${value}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Spinner;
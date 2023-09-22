import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

const ShowModal = ({ handleCloseBtn }) => {
  return (
    <div className="w-full min-h-screen fixed inset-0 z-20 bg-[#00000050]">
      <div className="w-11/12 mx-auto relative h-full mt-16 bg-gray-300 dark:bg-gray-800 rounded-xl border border-gray-700 dark:border-gray-500">
        <div className="absolute -top-10 right-5 z-30">
          <button onClick={handleCloseBtn} className='icon-btn' type="button"><RxCross2 /></button>
        </div>
      </div>
    </div>
  )
}

ShowModal.propTypes = {
  handleCloseBtn: PropTypes.func
}

export default ShowModal
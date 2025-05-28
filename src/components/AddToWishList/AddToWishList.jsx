import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const AddToWishlist = () => {
  const handleAddToWishlist = () => {
    // Perform your "add to wishlist" logic here

    // Show alert
    MySwal.fire({
      icon: 'success',
      title: 'Added to Wishlist!',
      showConfirmButton: false,
      timer: 1500, // Alert will disappear after 1.5 seconds
      timerProgressBar: true,
      position: 'top-end', // Position alert in top-right
      toast: true, // Makes it look like a toast notification
    });
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
    >
      Add to Wishlist
    </button>
  );
};

export default AddToWishlist;

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

// eslint-disable-next-line import/prefer-default-export
export function useAlert() {
  const showAlert = (options) => Swal.fire(options);

  return { showAlert };
}

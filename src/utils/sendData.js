import Swal from 'sweetalert2';

export const sendData = async (formData, setSuccess) => {
    await fetch('http://localhost:4000/', {
        method: 'POST',
        body: formData,
    })
        .then((res) => {
            if (res.status === 200) {
                Swal.fire(
                    'Great job!',
                    "You've passed the challenge!",
                    'success'
                );
                setSuccess(true);
            }
        })
        .catch((error) => console.log(error));
};

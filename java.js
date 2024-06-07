document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Form Valid!');
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        const nama = document.querySelector('input[placeholder="Masukkan Nama Anda"]');
        const nim = document.querySelector('input[placeholder="Masukkan NIM anda"]');
        const jurusan = document.querySelector('input[placeholder="Masukkan Jurusan Anda"]');
        const email = document.querySelector('input[placeholder="Masukkan Email Anda"]');
        const universitas = document.querySelector('input[placeholder="Masukkan Nama Universitas"]');
        const matkul = document.querySelector('input[placeholder="Masukkan Matkul Fav"]');
        const gender = document.querySelector('input[name="gender"]:checked');
        
        if (nama.value.trim() === '') {
            alert('Mohon Masukkan Nama Lengkap');
            isValid = false;
        }
        
        if (nim.value.trim() === '') {
            alert('Mohon Masukkan NIM');
            isValid = false;
        }
        
        if (jurusan.value.trim() === '') {
            alert('Mohon Masukkan Jurusan');
            isValid = false;
        }
        
        if (email.value.trim() === '') {
            alert('Mohon Masukkan Email');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            alert('Format Email Tidak Valid');
            isValid = false;
        }
        
        if (universitas.value.trim() === '') {
            alert('Mohon Masukkan Universitas');
            isValid = false;
        }
        
        if (matkul.value.trim() === '') {
            alert('Mohon Mata Masukkan Mata Kuliah');
            isValid = false;
        }
        
        if (!gender) {
            alert('Mohon Klik Gender');
            isValid = false;
        }
        
        return isValid;
    }

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }
    function isAlphabetic(value) {
        return /^[A-Za-z\s]+$/.test(value);
    }
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

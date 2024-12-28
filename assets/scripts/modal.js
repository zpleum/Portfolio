function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('opacity-100'); // ลบการแสดงผลที่เต็ม
    modal.classList.add('opacity-0'); // ตั้งค่าให้โปร่งแสง
    setTimeout(() => {
        modal.classList.add('hidden'); // ซ่อน modal หลังจาก fade-out เสร็จ
    }, 500); // เวลาตามที่กำหนดใน transition (500ms)
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // เปลี่ยน src ของรูปใน modal
    modalImage.src = imageSrc;

    // แสดง modal โดยเพิ่ม opacity และเปิดให้มองเห็น
    modal.classList.remove('hidden'); // แสดง modal
    setTimeout(() => {
        modal.classList.add('opacity-100'); // ทำให้ modal ค่อยๆ แสดง (fade-in)
    }, 10); // หน่วงเวลาเล็กน้อยเพื่อให้ transition ทำงาน
}
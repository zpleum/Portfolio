// ฟังก์ชั่นตรวจสอบว่าองค์ประกอบอยู่ในมุมมองหรือไม่
function checkVisibility() {
    const elements = document.querySelectorAll('.sideupani');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
  }
  
  // เรียกใช้งานเมื่อโหลดหน้าเสร็จ
  window.addEventListener('DOMContentLoaded', checkVisibility);
  // เรียกใช้งานเมื่อเลื่อนหน้า
  window.addEventListener('scroll', checkVisibility);
  
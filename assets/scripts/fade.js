// ฟังก์ชั่นตรวจสอบว่าองค์ประกอบอยู่ในมุมมองหรือไม่
function checkVisibility() {
    const elements1 = document.querySelectorAll('.sideupani1');
    elements1.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up1'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements15 = document.querySelectorAll('.sideupani15');
    elements15.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up15'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements2 = document.querySelectorAll('.sideupani2');
    elements2.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up2'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements25 = document.querySelectorAll('.sideupani25');
    elements25.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up25'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements3 = document.querySelectorAll('.sideupani3');
    elements3.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up3'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements4 = document.querySelectorAll('.sideupani4');
    elements4.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up4'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements5 = document.querySelectorAll('.sideupani5');
    elements5.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up5'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements6 = document.querySelectorAll('.sideupani6');
    elements6.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up6'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements7 = document.querySelectorAll('.sideupani7');
    elements7.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up7'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elements8 = document.querySelectorAll('.sideupani8');
    elements8.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-up8'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    
    const elementsl1 = document.querySelectorAll('.sideupanil1');
    elementsl1.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-upl1'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    const elementsr1 = document.querySelectorAll('.sideupanir1');
    elementsr1.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-upr1'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
    
    const elementst1 = document.querySelectorAll('.sideupanit1');
    elementst1.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('slide-in-upt1'); // เพิ่มคลาสเพื่อเริ่มอนิเมชั่น
      }
    });
  }
  
// เรียกใช้งานเมื่อโหลดหน้าเสร็จ
window.addEventListener('DOMContentLoaded', checkVisibility);
// เรียกใช้งานเมื่อเลื่อนหน้า
window.addEventListener('scroll', checkVisibility);
  
# Yohoo School

เว็บไซต์ Yohoo School สำหรับ FiveM Roleplay ธีมโรงเรียนไทย สร้างด้วย React, Tailwind CSS และ Vite และ deploy เป็น Static Site บน Vercel ได้ ไม่มี backend หรือ API

> **สำคัญ:** ใช้โฟลเดอร์ `yohoo-school` นี้เป็น repository สำหรับเว็บไซต์ อย่าอัปโหลด workspace โฟลเดอร์ชั้นนอก เพราะมีโปรเจกต์อื่นและไฟล์ `.env` ซึ่งไม่เกี่ยวกับเว็บนี้

## หน้าเว็บ

- `index.html` หน้าแรกและขั้นตอนเริ่มต้น
- `guide.html` คู่มือการเล่นและกฎชุมชน
- `login.html` สถานะการเชื่อมต่อ Discord
- `register.html` สถานะระบบสมัคร
- `dashboard.html` หน้า Dashboard

หน้า Login และสมัครยังไม่เปิดให้ใช้งานจนกว่าจะเชื่อมระบบยืนยันตัวตนจริง ไม่มีการจำลอง OAuth/OTP หรือเก็บข้อมูลผู้ใช้ใน localStorage

## พัฒนาในเครื่อง

ต้องใช้ Node.js `22.12.0` ขึ้นไป.

```bash
npm ci
npm run dev
```

เปิด URL ที่ Vite แสดงใน terminal. อย่าเปิดไฟล์ HTML ด้วย `file://` หรือใช้ Live Server เพราะ source ใช้ React/JSX และต้องผ่าน Vite.

ตรวจ production build ในเครื่องได้ด้วย:

```bash
npm run build
npm run preview
```

ไฟล์ deploy อยู่ใน `dist/`.

## อัปโหลดขึ้น GitHub

1. สร้าง repository ใหม่บน GitHub โดยไม่ต้องเพิ่ม README, license หรือ `.gitignore` ซ้ำ
2. เปิด Terminal ในโฟลเดอร์ `yohoo-school` นี้
3. รันคำสั่งต่อไปนี้ โดยแทน URL ด้วย repository ของคุณ:

```bash
git init
git add .
git status --short
git commit -m "Prepare Yohoo School for Vercel"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

ตรวจผล `git status --short` ก่อน commit ทุกครั้ง อย่า commit ไฟล์ `.env`, credentials หรือ secret ใด ๆ; `.gitignore` ของโปรเจกต์กันไฟล์ `.env`, dependencies, build output และไฟล์ต้นฉบับใน `source-assets/` ไว้แล้ว

## Deploy บน Vercel

1. ใน Vercel เลือก **Add New Project** แล้ว Import repository จาก GitHub
2. เลือก repository ของ Yohoo School (ที่มี `package.json` และ `vercel.json` อยู่ที่ root)
3. ตั้ง **Root Directory** เป็น `./` หรือค่าเริ่มต้น ไม่ต้องเลือก `yohoo-school` ซ้ำ เพราะ repository นี้ควรเริ่มจากเนื้อหาในโฟลเดอร์ดังกล่าว
4. Vercel ใช้การตั้งค่าใน `vercel.json`: Framework **Vite**, Install Command `npm ci`, Build Command `npm run build`, Output Directory `dist`
5. ไม่ต้องเพิ่ม Environment Variables สำหรับเว็บไซต์เวอร์ชันนี้ จากนั้นกด **Deploy**

ไฟล์ `vercel.json` ตั้งให้คง URL แบบ `.html` เพื่อให้ลิงก์ภายในทุกหน้าทำงานตรงกัน และตั้ง Vercel ให้ build จาก lockfile ด้วย `npm ci`.

## Assets และเนื้อหา

ใช้ Prompt และ Noto Sans Thai สำหรับภาษาไทย โดยมี system fallback หากโหลด Google Fonts ไม่สำเร็จ โลโก้และภาพที่ใช้งานอยู่ใน `public/assets/`; ไฟล์ต้นฉบับที่ไม่ใช้บนเว็บอยู่ใน `source-assets/` และไม่ถูกส่งขึ้น Git

แก้ไขเนื้อหาและหน้า React ได้ที่ `src/main.jsx`; สไตล์อยู่ใน `src/styles.css`, `css/` และ `tailwind.config.js`.

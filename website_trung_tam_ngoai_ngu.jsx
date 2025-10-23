// App.jsx
// Website cho "Trung tâm ngoại ngữ Kizuna" — chuyên tiếng Nhật, giao diện tiếng Việt nhưng nội dung tiếng Nhật.
// Dán vào src/App.jsx của dự án React, dùng TailwindCSS.

import React, { useState } from 'react';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    { id: 1, title: '初級日本語コース（3ヶ月）', length: '3 tháng', price: '3,000,000 VND' },
    { id: 2, title: '中級日本語コース（4ヶ月）', length: '4 tháng', price: '4,500,000 VND' },
    { id: 3, title: 'JLPT N3・N2 対策コース（6ヶ月）', length: '6 tháng', price: '6,500,000 VND' },
  ];

  const teachers = [
    { id: 1, name: '山田 花子', bio: '日本語教育歴5年、日本の文化を楽しく教えます。' },
    { id: 2, name: 'Nguyễn Lan', bio: 'Tốt nghiệp chuyên ngành Nhật ngữ, 7 năm kinh nghiệm giảng dạy.' },
    { id: 3, name: '佐藤 健', bio: 'JLPT対策専門講師、実践重視の授業スタイル。' },
  ];

  function openEnroll(course) {
    setSelectedCourse(course);
    setFormData(prev => ({ ...prev, course: course?.title || '' }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Đăng ký:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', email: '', phone: '', course: '' });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">KZ</div>
            <div>
              <h1 className="text-xl font-semibold">Trung tâm ngoại ngữ Kizuna</h1>
              <p className="text-xs text-gray-500">Kết nối tri thức – Gắn bó tương lai</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#courses" className="hover:text-red-600">Khóa học</a>
            <a href="#teachers" className="hover:text-red-600">Giảng viên</a>
            <a href="#pricing" className="hover:text-red-600">Học phí</a>
            <a href="#contact" className="hover:text-red-600">Liên hệ</a>
          </nav>
          <div className="hidden md:block">
            <button onClick={() => openEnroll(courses[0])} className="bg-red-600 text-white px-4 py-2 rounded-lg">Đăng ký thử</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Học tiếng Nhật<br className="hidden sm:inline"/> — Kết nối tương lai</h2>
            <p className="mt-4 text-gray-600">Khóa học tiếng Nhật chất lượng cao với giảng viên người Nhật và Việt Nam. Học tập trong môi trường năng động, thân thiện.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => openEnroll(courses[1])} className="px-5 py-3 bg-red-600 text-white rounded-lg font-medium">Xem khóa học</button>
              <a href="#contact" className="px-5 py-3 border rounded-lg text-sm">Liên hệ tư vấn</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Lớp học trực tuyến & trực tiếp – linh hoạt thời gian, cam kết đầu ra.</div>
          </div>
          <div>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">Ảnh lớp học tiếng Nhật</div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="mt-12">
          <h3 className="text-2xl font-semibold">Các khóa học tiếng Nhật</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(c => (
              <div key={c.id} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg">{c.title}</h4>
                <p className="mt-2 text-sm text-gray-500">Thời lượng: {c.length}</p>
                <p className="mt-1 font-medium">Học phí: {c.price}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => openEnroll(c)} className="px-3 py-2 bg-red-600 text-white rounded">Đăng ký</button>
                  <button onClick={() => alert('Chi tiết khóa học:\n' + c.title)} className="px-3 py-2 border rounded">Chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teachers */}
        <section id="teachers" className="mt-12">
          <h3 className="text-2xl font-semibold">Đội ngũ giảng viên</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map(t => (
              <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="w-full h-36 bg-gray-100 rounded flex items-center justify-center text-gray-400">Ảnh GV</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.bio}</div>
                </div>
                <div className="mt-auto">
                  <button onClick={() => alert('Mở profile ' + t.name)} className="w-full px-3 py-2 bg-red-600 text-white rounded">Xem profile</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-12">
          <h3 className="text-2xl font-semibold">Gói học & học phí</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Gói cơ bản</h4>
              <p className="mt-2 text-sm text-gray-500">初級コース – nhóm 6-10 học viên</p>
              <p className="mt-4 font-bold">3,000,000 VND</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Gói nâng cao</h4>
              <p className="mt-2 text-sm text-gray-500">中級コース – Lớp nhỏ, kèm cá nhân</p>
              <p className="mt-4 font-bold">5,500,000 VND</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Gói luyện thi JLPT</h4>
              <p className="mt-2 text-sm text-gray-500">JLPT N3・N2 対策 – cam kết tiến bộ</p>
              <p className="mt-4 font-bold">6,500,000 VND</p>
            </div>
          </div>
        </section>

        {/* Contact / Enrollment Form */}
        <section id="contact" className="mt-12 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold">Đăng ký / Liên hệ</h3>
          <p className="text-sm text-gray-500 mt-2">Điền thông tin, Kizuna sẽ liên hệ lại trong 24 giờ làm việc.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Họ & tên</label>
              <input required name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input required name="email" value={formData.email} onChange={handleChange} type="email" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="text-sm">Số điện thoại</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="text-sm">Chọn khóa học</label>
              <select name="course" value={formData.course} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2">
                <option value="">-- Chọn --</option>
                {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
              </select>
            </div>

            <div className="sm:col-span-2 flex gap-3 mt-2">
              <button type="submit" className="px-5 py-3 bg-red-600 text-white rounded">Gửi đăng ký</button>
              <button type="button" onClick={() => setFormData({ name: '', email: '', phone: '', course: '' })} className="px-5 py-3 border rounded">Xóa</button>
            </div>
          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800">Cảm ơn! Kizuna đã nhận thông tin của bạn.</div>
          )}
        </section>

      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Trung tâm ngoại ngữ Kizuna — Địa chỉ: Số 123, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội</div>
          <div className="text-sm">Hotline: 090-123-4567 | Email: info@kizuna.edu.vn</div>
        </div>
      </footer>
    </div>
  );
}
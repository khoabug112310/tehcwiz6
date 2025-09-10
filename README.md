graph TD
    Start[Start] --> Landing[Landing Page]
    Landing --> Popup[Popup Form: Enter Name & Select User Type via Radio Buttons<br>Options: Pet Owner, Veterinarian, Animal Shelter]
    Popup -->|Pet Owner| PetOwnerMenu[Pet Owner Menu]
    Popup -->|Veterinarian| VetMenu[Veterinarian Menu]
    Popup -->|Animal Shelter| ShelterMenu[Animal Shelter Menu]

    subgraph Pet Owner Sections
    PetOwnerMenu --> AboutUs[About Us<br>About the team]
    PetOwnerMenu --> PetCare[Pet Care Sections<br>Pet Profile (Static)<br>Feeding Guide (Chart)<br>Grooming Videos (Embedded)<br>Health Tips (Audio/Video)<br>Training Tips (Audio + Text)]
    PetOwnerMenu --> ProductShowcase[Pet Product Showcase<br>Categories: Dog/Cat Food, Toys, Grooming Essentials, Bedding/Apparel, Health Supplements<br>Each: Name, Image, Description, Price, Buy Now (Non-functional)<br>Sort/Filter/Search]
    PetOwnerMenu --> Emergency[Emergency and Vet Help<br>Emergency contact numbers (Hard-coded table)]
    PetOwnerMenu --> Feedback[Feedback Page<br>Form layout with name/email/Feedback (UI only)]
    PetOwnerMenu --> ContactUs[Contact Us<br>Static team contact information<br>Real-time clock and geolocation display]
    end

    subgraph Veterinarian Sections
    VetMenu --> VetProfile[Veterinarian Profile<br>Form: Name, Specialization, Contact, Image<br>Display: Name, Specialization, Contact, Image]
    VetMenu --> TimeSlots[Time Slots<br>Booked and available appointments (Display only)]
    VetMenu --> CaseStudies[Case Studies<br>Static pet medical records or case examples]
    end

    subgraph Animal Shelter Sections
    ShelterMenu --> Gallery[Pet Adoption Gallery<br>Images with Name, Age, Breed, Description<br>Filter by type (Dog/Cat/Rabbit) - JS client-side]
    ShelterMenu --> SuccessStories[Success Stories<br>Text and images of previous adoptions]
    ShelterMenu --> Events[Events<br>Static announcements like adoption campaigns, vaccination camps]
    ShelterMenu --> ShelterContact[Shelter Contact<br>Display Google Map]
    end

    PetOwnerMenu --> Ticker[Scrolling ticker with location, time, and updates]
    VetMenu --> Ticker
    ShelterMenu --> Ticker
    PetOwnerMenu --> Features[Common Features: Personalized Welcome, Animated Menu with Hover, Simulated Visitor Counter, Geolocation, Real-time Clock]
    VetMenu --> Features
    ShelterMenu --> Features
    
Kế Hoạch Thiết Kế Web Cho Dự Án "FurEver Care"
1. Giới Thiệu Dự Án

Tên Dự Án: FurEver Care - They Deserve Forever Love.
Mô Tả Tổng Quát: Đây là một trang web responsive (NextGen Website Development) dành cho chăm sóc thú cưng, cung cấp nền tảng quản lý hồ sơ thú cưng, lịch hẹn, sản phẩm liên quan, và hỗ trợ cộng đồng. Trang web được thiết kế dưới dạng Single Page Application (SPA) với giao diện thân thiện, tập trung vào ba loại người dùng chính: Chủ sở hữu thú cưng (Pet Owner), Bác sĩ thú y (Veterinarian), và Trại động vật cứu hộ (Animal Shelter).
Nền Tảng: Dựa trên tài liệu SRS (Software Requirements Specification) cung cấp, bao gồm bối cảnh, yêu cầu chức năng, phi chức năng, và hạn chế.
Mục Tiêu Chính: Giải quyết vấn đề quản lý chăm sóc thú cưng tập trung, cung cấp thông tin 24/7, thúc đẩy sức khỏe thú cưng, hỗ trợ nhận nuôi, và xây dựng cộng đồng.

2. Phạm Vi Dự Án

Bao Gồm:

Trang chủ (Landing Page) với popup form nhập tên người dùng (Name) và chọn loại người dùng (radio buttons: Pet Owner, Veterinarian, Animal Shelter).
Menu động dựa trên loại người dùng, hiển thị tin nhắn chào mừng cá nhân hóa và tên người dùng ở góc trên.
Hỗ trợ đa phương tiện: Video chải chuốt (embedded), mẹo sức khỏe âm thanh/video, hướng dẫn văn bản.
Dữ liệu tĩnh từ file JSON (không lưu trữ server-side).
Tính năng lọc, sắp xếp, tìm kiếm sản phẩm (sử dụng JS client-side).
Hiển thị vị trí địa lý (HTML5 Geolocation), đồng hồ thời gian thực, và scrolling ticker với updates.
Trang About Us, Contact Us, Feedback (form UI only, không submit thực).


Không Bao Gồm (Hạn Chế Từ SRS):

Lưu trữ dữ liệu trên server (chỉ đọc từ JSON, không ghi).
Chức năng submit form thực tế (ví dụ: Buy Now button non-functional).
Sử dụng template sẵn có hoặc copy code từ AI/GPT (trừ hình ảnh AI-generated với credit).
Backend đầy đủ; tập trung frontend responsive.



3. Đối Tượng Người Dùng Và Yêu Cầu Chức Năng

Loại Người Dùng:

Chủ Sở Hữu Thú Cưng (Pet Owner):

Form thu thập thông tin thú cưng (tên, loài, giống, tuổi).
Các phần: Pet Profile (tĩnh), Feeding Guide (biểu đồ), Grooming Videos, Health Tips (audio/video), Training Tips.
Pet Product Showcase: Hiển thị sản phẩm từ JSON (thức ăn, đồ chơi, grooming essentials, bedding/apparel, health supplements) với tên, hình ảnh, mô tả, giá, Buy Now button. Hỗ trợ sắp xếp/lọc/tìm kiếm.
Emergency and Vet Help: Danh sách contact tĩnh (hard-coded table).
Feedback Page: Form tên/email/feedback (UI only).
Contact Us: Thông tin tĩnh, Google Map.


Bác Sĩ Thú Y (Veterinarian):

Form thu thập thông tin (tên, chuyên khoa, contact, hình ảnh).
Trang profile tĩnh: Tên, chuyên môn, contact, hình ảnh.
Time Slots: Hiển thị lịch hẹn đã đặt/có sẵn (tĩnh).
Case Studies: Mẫu bệnh án thú cưng tĩnh.


Trại Động Vật Cứu Hộ (Animal Shelter):

Gallery: Hình ảnh thú cưng nhận nuôi với tên, tuổi, giống, mô tả.
Filter Button: Theo loại (chó/mèo/thỏ) sử dụng JS client-side.
Success Stories: Văn bản + hình ảnh tĩnh.
Events: Thông báo sự kiện tĩnh (adoption campaigns, vaccination camps).
Shelter Contact: Google Map.




Chức Năng Chung:

Tin nhắn chào mừng cá nhân hóa.
Menu hoạt hình với hover effects.
Quầy tiếp khách (simulated visitor counter).
Scrolling ticker với location, time, updates.



4. Yêu Cầu Phi Chức Năng

An Toàn: Không tải file độc hại; sử dụng dữ liệu tĩnh.
Dễ Truy Cập: Phông chữ rõ ràng, navigation dễ hiểu, responsive design.
Thân Thiện Người Dùng: Giao diện trực quan, nền trắng với chữ đen sáng, dễ nhìn.
Hiệu Suất: Tải nhanh, chuyển trang mượt mà (SPA).
Khả Năng Mở Rộng: Hỗ trợ số lượng người dùng lớn, hoạt động 24/7.
Tương Thích: Các trình duyệt mới nhất (Chrome, Firefox, etc.).
Responsive: Hoạt động tốt trên mobile/desktop.

5. Công Nghệ Stack

Frontend: HTML5, CSS3, Bootstrap (optional), JavaScript, jQuery, ReactJS (cho SPA, components).
Data Storage: JSON files (đọc động qua JS).
IDE: Visual Studio Code, Notepad++, etc.
Công Cụ Thiết Kế: Figma Toolkit cho wireframes.
Khác: HTML5 Geolocation cho vị trí, embedded media cho video/audio, Google Maps API cho contact.

6. Thiết Kế Giao Diện (UI/UX)

Sitemap (Dựa trên SRS):

Landing Page → Popup form chọn loại người dùng → Menu tương ứng.
Pet Owner: About Us → Pet Care Sections → Pet Product Showcase → Emergency/Vet Help → Feedback → Contact Us.
Veterinarian: Profile → Time Slots → Case Studies.
Animal Shelter: Adoption Gallery (with filter) → Success Stories → Events → Contact.


Thiết Kế Visual:

Màu sắc: Nền trắng, chữ đen sáng, sử dụng accents nhẹ cho buttons và highlights để giữ giao diện dễ nhìn (thay vì pastel tones).
Fonts: Rõ ràng, dễ đọc (sans-serif như Arial hoặc Open Sans).
Elements: Cards cho sản phẩm, tables cho contacts, embedded videos, scrolling ticker ở footer.
Responsive: Sử dụng media queries/CSS flex/grid cho mobile.


Wireframes: Dựa trên hình ảnh cung cấp (ví dụ: Landing page với popup form, sitemap tables, diagrams cho pet adoption).

7. Kế Hoạch Thực Hiện Và Timeline

Giai Đoạn 1: Planning (1 ngày - 11/09/2025): Phân tích SRS, thiết kế wireframes trên Figma, tạo file JSON data (fill data cần thiết cho sản phẩm, profiles, contacts, v.v.).
Giai Đoạn 2: Development (1,5 ngày - 12-13/09/2025):

Xây dựng frontend SPA với React.
Implement functions: Forms, dynamic loading from JSON, filters/sorts.
Thêm features: Geolocation, clock, ticker.


Giai Đoạn 3: Testing (0,5 ngày - 13/09/2025): Kiểm tra responsive, performance, compatibility. Sử dụng test data từ JSON.
Tổng Thời Gian: 3 ngày (11/09/2025 - 13/09/2025).

8. Tài Nguyên Và Rủi Ro

Tài Nguyên: Developer frontend, hình ảnh (AI-generated nếu cần, với credit), test data.
Rủi Ro: Không sử dụng template/AI code để tránh phạt đánh giá. Tập trung sáng tạo thêm features (ví dụ: thêm animation cho menu).
Sản Phẩm Cuối: Source code, diagrams (flowcharts, data flow), test data, installation guide, project report, video demo.

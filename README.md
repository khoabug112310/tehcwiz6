# FurEver Care - They Deserve Forever Love

## 1. Project Introduction
Pet owners often struggle to manage feeding schedules, grooming, medical records, and product selection due to fragmented platforms. Veterinarians lack a unified system to access pet histories, while shelters face difficulties in showcasing adoptable pets effectively. This leads to inconvenience, limited accessibility, and weak community engagement.
Thus, there is a need for a centralized platform that integrates pet care management, veterinary services, adoption processes, and product discovery. Such a solution will improve convenience, promote pet wellness, support shelters, and foster an engaged pet-loving community.

## 2. Project Scope

**Includes:**

- Home page (Landing Page) with popup form for entering user name (Name) and selecting user type (radio buttons: Pet Owner, Veterinarian, Animal Shelter).
- Dynamic menu based on user type, displaying personalized welcome message and user name in the upper corner.
- Multimedia support: Embedded grooming videos, audio/video health tips, text-based training tips.
- Static data from JSON files (not server-side storage).
- Product filtering, sorting, and searching features (using client-side JS).
- Display of geolocation (HTML5 Geolocation), real-time clock, and scrolling ticker with updates.
- About Us, Contact Us, and Feedback pages (form UI only, no actual submission).

**Excludes (Constraints from SRS):**

- Server-side data storage (only read from JSON, no writing).
- Actual form submission functionality (e.g., Buy Now button non-functional).
- Use of ready-made templates or AI/GPT copied code (except AI-generated images with credit).
- Full backend; focus on responsive frontend.

## 3. User Types and Functional Requirements

### User Types:

**Pet Owner:**

- Form for collecting pet information (name, species, breed, age).
- Sections: Pet Profile (static), Feeding Guide (chart), Grooming Videos, Health Tips (audio/video), Training Tips.
- Pet Product Showcase: Display products from JSON (food, toys, grooming essentials, bedding/apparel, health supplements) with name, image, description, price, Buy Now button. Supports sorting/filtering/searching.
- Emergency and Vet Help: Static contact list (hard-coded table).
- Feedback Page: Name/email/feedback form (UI only).
- Contact Us: Static information, Google Map.

**Veterinarian:**

- Form for collecting information (name, specialization, contact, image).
- Static profile page: Name, specialization, contact, image.
- Time Slots: Display booked/available appointments (static).
- Case Studies: Static pet medical records or case examples.

**Animal Shelter:**

- Gallery: Pet adoption images with name, age, breed, description.
- Filter Button: By type (dog/cat/rabbit) using client-side JS.
- Success Stories: Static text and images.
- Events: Static event announcements (adoption campaigns, vaccination camps).
- Shelter Contact: Google Map.

### Common Features:

- Personalized welcome message.
- Animated menu with hover effects.
- Simulated visitor counter.
- Scrolling ticker with location, time, updates.

## 4. Project Installation Instructions
●Open sourcecode folder named “Up&Down_FurEverCare” by Visual Studio Code
●Run new terminal and run below commands:
-npm install
-npm start
●Get link http://localhost:3000/ to see home page.


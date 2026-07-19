# SNEAKPEAK® — Sourcing Grails Locally

SneakPeak is a premium, gallery-style sneaker aggregator and local marketplace experience designed by **Saksham Lodha**. It bridges the gap between buyers hunting for rare grails and local verified sellers offering authentic pairs within specific Indian cities (Delhi, Mumbai, Bengaluru, Kolkata).

---

## ✦ Key Features (Current Implementation)

### 1. Aesthetic Design System
* **Curated Colors**: Custom HSL transitions from clean light bone-cream (`#F2EEE5`) to sleek deep dark charcoal (`#131009`) with smooth CSS variables.
* **Inline Hero Sneaker Pill**: Centered, rotated Puma Palermo side-view sneaker image inside a custom shadow pill container embedded directly within the H1 title.
* **Refined Typography**: Sleek displays in `Anton` font, body details in `Space Grotesk`, and orange/ember italics in `Instrument Serif`.

### 2. Multi-Portal Workspaces (Frontend-Only Mock State)
* **User Portal**: Curator grids, price/size/brand catalog filters, product specification panels, local vetted seller lists, and secure checkout bag quantities.
* **Vendor Portal**: Secure dashboard showing active listings table, seller metrics (sales volume, ratings), and a mock form to submit new listings.
* **Superadmin Control Panel**: Master dashboard showing system operations, pending lists approvals queue (Approve/Reject buttons), seller vetting controls, and an event audit trail.
* **Floating Developer Switcher**: Easily test all three workspaces dynamically using the toggle widget in the bottom-right corner of the page.

### 3. City-Wise Sourcing
* **Header Selector Dropdown**: Switch between `All Cities`, `Delhi`, `Mumbai`, `Bengaluru`, and `Kolkata`.
* **Dynamic Location Filter**: Automatically filters the sneaker catalog to showcase only the inventory available near the selected location.

---

## ✦ Tech Stack
* **Framework**: React 19 (Functional Components + hooks)
* **Build System**: Vite
* **Styling**: Tailwind CSS
* **Routing**: Context-driven dynamic page rendering (`AppContext.jsx`)

---

## ✦ Local Setup & Installation

To run the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   cd frontend
   npm install
   ```
2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
3. **Open Browser**: Navigate to `http://localhost:5173/`

---

## ✦ Future Roadmap

* **Scraping Pipeline (Backend integration)**: Run Python scripts (`Scrapy` / `Playwright`) to scrape live sneaker stock details from Indian retail stores like *VegNonVeg* and *Superkicks* every 12 hours.
* **Price Comparison APIs**: Call third-party RapidAPI services (Myntra/Ajio trackers) and Keepa API (Amazon price indexing) on detail pages to display external market prices side-by-side.
* **Production Database**: Migrate context state to an Express/MongoDB backend database with JSON Web Tokens (JWT) for secure portal authentication.

export default function Header() {
  return (
    <nav class="container py-4 relative" id="navbar">
      <div class="flex items-center justify-between">
        <a
          class="text-4xl relative font-semibold after:absolute after:top-2/4 after:-right-5 after:-translate-x-2/4 after:w-3 after:h-3 after:bg-[#ff9302] after:rounded-full"
          href="/"
        >
          Foodie
        </a>
        <button
          class="navbar-toggler"
          type="button"
        >
          <i class="fa-solid fa-bars menu-btn"></i>
        </button>
        <div class="hidden md:flex items-center flex-1" id="navbarNav">
          <div class="flex mx-auto">
            <a class="px-2 py-1.5 active:bg-[#ff9302]" href="#about">
              about
            </a>
            <a class="px-2 py-1.5 active:bg-[#ff9302]" href="#services">
              services
            </a>
            <a class="px-2 py-1.5 active:bg-[#ff9302]" href="#menu">
              menu
            </a>
            <a class="px-2 py-1.5 active:bg-[#ff9302]" href="#contact">
              contact
            </a>
          </div>
          <div class="d-flex align-items-center justify-content-center shop">
            <div class="shooping me-5 d-none d-lg-inline-block">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>

            <a
              href="#"
              class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2"
            >
              sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

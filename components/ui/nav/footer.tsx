export default function Footer() {
  return (
    <footer class="footer overflow-hidden">
      <div
        class="footer-top"
        style="background-image: url('./footer-illustration.png')"
      >
        <div class="container flex flex-col md:flex-row justify-between">
          <div class="footer-brand">
            <a
              class="text-4xl relative font-semibold after:absolute after:top-2/4 after:-right-5 after:-translate-x-2/4 after:w-3 after:h-3 after:bg-[#ff9302] after:rounded-full"
              href="/"
            >
              Foodie
            </a>
            <p class="text-base text-[#787878] mt-4 mb-5 max-w-80">
              Financial experts support or help you to to find out which way you
              can raise your funds more.
            </p>
          </div>
          <div class="flex flex-col md:flex-row gap-3 md:gap-2">
            <div class="footer-list">
              <p class="footer-list-title">Contact Info</p>
              <p class="text-base text-[#787878] mt-5">
                +1 (062) 109-9222
              </p>
              <p class="text-base text-[#787878] my-4">
                Info@YourGmail24.com
              </p>
              <p
                aria-label="address"
                class="text-base font-normal text-[#787878]"
              >
                153 Williamson Plaza, Maggieberg, MT 09514
              </p>
            </div>
            <div class="footer-list">
              <p class="footer-list-title">Opening Hours</p>
              <p class="text-base text-[#787878] mt-5">
                Monday-Friday: 08:00-22:00
              </p>
              <p class="text-base text-[#787878] my-4">
                Tuesday 4PM: Till Mid Night
              </p>
              <p class="text-base text-[#787878]">
                Saturday: 10:00-16:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-[#787878] py-4">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://iftakharulalam.com/" class="underline">
          Iftakharul Alam
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}

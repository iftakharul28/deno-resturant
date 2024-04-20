import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { type Handlers, type PageProps } from "$fresh/server.ts";
import { ProductType } from "../types/index.ts";
import ProductCard from "../components/ui/card/product-card.tsx";
import { Head } from "$fresh/runtime.ts";
import Star from "../constant/icons/star.tsx";
import Image from "../components/Image.tsx";

// export const handler: Handlers<{
//   message: string | null;
//   data: ProductType[];
// }> = {
//   async GET(_req, ctx) {
//     const project = await fetch(
//       "https://adorable-bat-fatigues.cyclic.app/best-foods",
//     );
//     const result = await project.json();
//     if (!result) {
//       return ctx.renderNotFound({
//         message: "Project does not exist",
//         data: [],
//       });
//     }
//     return ctx.render(result);
//   },
// };
export default function Home(props: PageProps<ProductType[]>) {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Deno Resturents</title>
        <meta
          name="description"
          content="This is a brief description of Fresh"
        />
      </Head>
      <section
        class="container flex flex-col min-h-[calc(100vh_-_72px)]"
        id="home"
      >
        <div class="flex justify-center items-center">
          <div class="md:flex-[0_0_auto] md:w-2/4 pr-3">
            <div class="home__info text-lg-start mb-5 mb-lg-0">
              <h1 class="text-6xl capitalize font-bold text-[#232323] leading-tight">
                A healthy meal <br /> delivered to your door.
              </h1>
              <p class="capitalize text-base leading-8 text-[#232323] my-4 max-w-[80%]">
                the food places is a neighborhood restaurant serving seasonal
                global cuisine driven by the faire
              </p>
              <a
                href="#"
                class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2"
              >
                order now
              </a>
            </div>
          </div>
          <div class="md:flex-[0_0_auto] md:w-2/4 pl-3">
            <div class="home__image">
              <Image
                class="img-fluid"
                src="./home.png"
                alt="home"
                loading="eager"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-8 pt-4 mt-auto gap-4">
          <div class="bg-[#eee]">
            <figure class="w-max mx-auto">
              <Image
                class="h-full w-full"
                src="./category/cat-1.png"
                alt="cat-1"
                height={95}
                width={108}
              />
            </figure>
            <h3 class="text-2xl font-semibold capitalize text-center text-[#212529]">
              combo
            </h3>
            <div class="flex items-center justify-center gap-1.5 my-3">
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="half"
              />
            </div>
            <p class="text-center pb-2 font-medium text-lg">$20.00</p>
          </div>
          <div class="bg-[#eee]">
            <figure class="w-max mx-auto">
              <Image
                class="h-full w-full"
                src="./category/cat-2.png"
                alt="cat-2"
                height={95}
                width={108}
              />
            </figure>
            <h3 class="text-2xl font-semibold capitalize text-center text-[#212529]">
              pizza
            </h3>
            <div class="flex items-center justify-center gap-1.5 my-3">
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="half"
              />
            </div>
            <p class="text-center pb-2 font-medium text-lg">$20.00</p>
          </div>
          <div class="bg-[#eee]">
            <figure class="w-max mx-auto">
              <Image
                class="h-full w-full"
                src="./category/cat-3.png"
                alt="cat-3"
                height={95}
                width={108}
              />
            </figure>
            <h3 class="text-2xl font-semibold capitalize text-center text-[#212529]">
              burger
            </h3>
            <div class="flex items-center justify-center gap-1.5 my-3">
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="half"
              />
            </div>
            <p class="text-center pb-2 font-medium text-lg">$20.00</p>
          </div>
          <div class="bg-[#eee]">
            <figure class="w-max mx-auto">
              <Image
                class="h-full w-full"
                src="./category/cat-4.png"
                alt="cat-4"
                height={95}
                width={108}
              />
            </figure>
            <h3 class="text-2xl font-semibold capitalize text-center text-[#212529]">
              chicken
            </h3>
            <div class="flex items-center justify-center gap-1.5 my-3">
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="full"
              />
              <Star
                class="fill-[#ff9302]"
                width="16px"
                height="16px"
                icon_type="half"
              />
            </div>
            <p class="text-center pb-2 font-medium text-lg">$20.00</p>
          </div>
        </div>
      </section>
      <section class="py-14 bg-[#f9f6f0]">
        <div class="container">
          <div class=" grid grid-cols-4 gap-2.5">
            <div class="max-h-[426px] col-[1_/_3] row-[1_/_3] relative text-white group overflow-hidden">
              <Image
                src="./banner/banner-1.jpg"
                width="550"
                height="450"
                loading="lazy"
                alt="Discount For Delicious Tasty Burgers!"
                class="h-full w-full object-cover group-[:hover]:scale-105 duration-300 ease-in-out"
              />
              <div class="absolute inset-0 flex items-center">
                <div class="p-4">
                  <p class=" text-3xl font-semibold drop-shadow-md">
                    50% Off Now!
                  </p>
                  <h3 class="text-4xl font-bold my-2.5 max-w-[70%] drop-shadow-md">
                    Discount For Delicious Tasty Burgers!
                  </h3>
                  <p class="capitalize text-base leading-8 my-2.5 drop-shadow-md">
                    Sale off 50% only this week
                  </p>
                  <button
                    type="button"
                    class="bg-[#ff9302] capitalize rounded-md px-3.5 py-2"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div class="max-h-52 relative text-white group overflow-hidden">
              <Image
                src="./banner/banner-2.jpg"
                width="550"
                height="465"
                loading="lazy"
                alt="Delicious Pizza"
                class="h-full w-full object-cover group-[:hover]:scale-105 duration-300 ease-in-out"
              />
              <div class="absolute inset-0 flex items-center">
                <div class="p-4">
                  <h3 class="text-4xl font-bold my-2.5 max-w-[70%] drop-shadow-md">
                    Delicious Pizza
                  </h3>
                  <p class="capitalize text-base leading-8 my-2.5 drop-shadow-md">
                    50% off Now
                  </p>
                  <button
                    type="button"
                    class="bg-[#ff9302] capitalize rounded-md px-3.5 py-2"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div class="max-h-52 relative text-white group overflow-hidden">
              <Image
                src="./banner/banner-3.jpg"
                width="550"
                height="465"
                loading="lazy"
                alt="American Burgers"
                class="h-full w-full object-cover group-[:hover]:scale-105 duration-300 ease-in-out"
              />
              <div class="absolute inset-0 flex items-center">
                <div class="p-4">
                  <h3 class="text-4xl font-bold my-2.5 max-w-[70%] drop-shadow-md">
                    American Burgers
                  </h3>
                  <p class="capitalize text-base leading-8 my-2.5 drop-shadow-md">
                    50% off Now
                  </p>
                  <button
                    type="button"
                    class="bg-[#ff9302] capitalize rounded-md px-3.5 py-2"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-[3_/_5] row-[2_/_3] max-h-52 relative text-white group overflow-hidden">
              <Image
                src="./banner/banner-4.jpg"
                width="550"
                height="220"
                loading="lazy"
                alt="Tasty Buzzed Pizza"
                class="h-full w-full object-cover group-[:hover]:scale-105 duration-300 ease-in-out"
              />
              <div class="absolute inset-0 flex items-center justify-end">
                <div class="p-4">
                  <h3 class="text-4xl font-bold my-2.5 max-w-[70%] drop-shadow-md">
                    Tasty Buzzed Pizza
                  </h3>
                  <p class="capitalize text-base leading-8 my-2.5 drop-shadow-md">
                    Sale off 50% only this week
                  </p>
                  <button
                    type="button"
                    class="bg-[#ff9302] capitalize rounded-md px-3.5 py-2"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-14 bg-[#f9f6f0]">
        <div
          class="home__banner"
          style="background-image: url('./hero-bg.jpg')"
        >
          <div class="container grid grid-cols-2 items-center gap-8 ">
            <div class=" text-left text-white">
              <h2 class="text-4xl  font-semibold max-w-[510px]">
                The Foodie Have Excellent Of{" "}
                <span class="text-[#ff9302]">Quality Burgers!</span>
              </h2>
              <p class="capitalize text-base leading-8 my-4">
                The restaurants in Hangzhou also catered to many northern
                Chinese who had fled south from Kaifeng during the Jurchen
                invasion of the 1120s, while it is also known that many
                restaurants were run by families.
              </p>

              <button
                type="button"
                class="bg-[#ff9302] capitalize rounded-md px-3.5 py-2"
              >
                Order Now
              </button>
            </div>

            <div class="relative">
              <Image
                src="./banner/cta-banner.png"
                width="700"
                height="637"
                loading="lazy"
                alt="Burger"
                class="w-100 home__banner-img"
              />
              <figure class="absolute top-0 home__banner-icon">
                <Image
                  src="./sale-shape.png"
                  width="216"
                  height="226"
                  loading="lazy"
                  alt="get up to 50% off now"
                  class="abs-img scale-up-anim"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 bg-[#f9f6f0]">
        <div class="container">
          <p class="text-[#ff9302] text-sm text-center font-semibold capitalize">
            Popular Dishes
          </p>
          <h2 class="text-4xl text-center font-semibold py-3">
            Our Delicious <span class="text-[#ff9302]">Foods</span>
          </h2>
          <p class="capitalize text-base text-center text-[#232323] max-w-96 mx-auto mb-4">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>
          <div class="flex justify-center gap-3">
            <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-1.5  active">
              All
            </button>
            <button class="bg-[#eee] capitalize font-medium rounded-md px-3.5 py-1.5">
              Pizza
            </button>
            <button class="bg-[#eee] capitalize font-medium rounded-md px-3.5 py-1.5">
              Burger
            </button>
            <button class="bg-[#eee] capitalize font-medium rounded-md px-3.5 py-1.5">
              Drinks
            </button>
            <button class="bg-[#eee] capitalize font-medium rounded-md px-3.5 py-1.5">
              Sandwich
            </button>
          </div>
          <div class="grid grid-cols-3 items-center justify-center gap-5">
            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-1.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Chicken</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">Fried Chicken Unlimited</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$49.00</data>
                <del class="text-base font-medium" value="69.00">$69.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>

            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-2.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Noddles</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">Burger King Whopper</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$29.00</data>
                <del class="text-base font-medium" value="69.00">$39.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>

            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-3.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Pizzas</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">White Castle Pizzas</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$39.00</data>
                <del class="text-base font-medium" value="69.00">$35.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>

            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-4.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Burrito</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">Bell Burrito Supreme</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$59.00</data>
                <del class="text-base font-medium" value="69.00">$45.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>

            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-5.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
                {
                  /* <div class="badge">-15%</div>
                <button class="btn food-menu-btn">Order Now</button> */
                }
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Nuggets</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">Kung Pao Chicken BBQ</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$49.00</data>
                <del class="text-base font-medium" value="69.00">$45.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>

            <div class="bg-white p-10">
              <div class=" w-max mx-auto">
                <Image
                  src="./menu/food-menu-6.png"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-full"
                />
                {
                  /* <div class="badge">-15%</div>
                <button class="btn food-menu-btn">Order Now</button> */
                }
              </div>
              <div class="flex items-center gap-1.5 my-3">
                <p class="text-base font-semibold">Chicken</p>
                <div class="flex items-center gap-1.5">
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="full"
                  />
                  <Star
                    class="fill-[#ff9302]"
                    height="16px"
                    width="16px"
                    icon_type="half"
                  />
                </div>
              </div>
              <h3 class="text-xl font-bold">Wendy's Chicken</h3>
              <div class="flex items-center gap-1.5 my-3">
                <p class=" flex items-center gap-1.5 font-semibold">
                  Price:
                </p>
                <data class="text-lg font-semibold text-[#ff9302]">$49.00</data>
                <del class="text-base font-medium" value="69.00">$37.00</del>
              </div>
              <button class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-[#f9f6f0]">
        <h2 class="text-[#212529] text-3xl text-center capitalize font-bold mb-4">
          about us
        </h2>
        <div class="container">
          <div class="flex justify-center items-center">
            <div class="md:flex-[0_0_auto] md:w-2/4 pr-3">
              <Image
                class="img-fluid"
                src="./about-img.png"
                alt=""
                height={518}
                width={684}
              />
            </div>
            <div class="md:flex-[0_0_auto] md:w-2/4 pr-3">
              <div class="content">
                <span class="text-[#ff9302] text-sm font-semibold capitalize">
                  Why Choose Us?
                </span>
                <h2 class="my-3 text-7xl capitalize font-bold text-[#232323] leading-tight">
                  What's Make Our Food <br />
                  Delicious!
                </h2>
                <p class="capitalize text-base leading-8 text-[#232323] mb-4">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos
                  Ut Explicabo, Numquam Iusto Est A Ipsum Assumenda Tempore Esse
                  Corporis?
                </p>
                <button
                  type="button"
                  class="bg-[#ff9302] capitalize text-white rounded-md px-3.5 py-2"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        /* <div class="grid grid-cols-4 gap-5">
        {props.data.map((item, id) => (
          <ProductCard key={`food-card-${id}`} product={item} />
        ))}
      </div> */
      }
      {/* <pre>{JSON.stringify(props.data, null,2)}</pre> */}
      {
        /* <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Image
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div> */
      }
    </>
  );
}

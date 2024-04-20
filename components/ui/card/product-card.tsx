import Star from "../../../constant/icons/star.tsx";

import Image from "../../Image.tsx";
type ProductType = {
  image: string;
  title: string;
};
export default function ProductCard(
  { product }: { product: ProductType | null },
) {
  return (
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
  );
}

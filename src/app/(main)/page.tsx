import Image from "next/image";
import { Carousel } from "flowbite-react";
export default function Home() {
  return (
    // Hero
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#007f73] pb-6">
        <div className="col-1 text-left pl-6 md:pl-20 py-16 md:py-32 px-4 md:px-20 text-white">
          <div className="md:text-[40px] sm:text-[24px] font-bold">
            Welcome to Paws & Claws :{" "}
            <span className="text-[#FFC001]">The Best</span> for Your Best
            Friend!
          </div>
          <p className="pt-4 md:pt-10 text-sm md:text-base">
            Offering a wide range of high-quality products, from nutritious food
            to fun toys, cozy bedding to health essentials, we ensure your pets
            happiness and well-being. Visit us and discover a paradise for your
            pets!
          </p>
          <button className="my-5 py-2 px-4 rounded-md bg-[#FFC001] border-black border-b-4 border-r-4 border-2 text-black">
            See Our Product
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/gambar.svg"
            width={634}
            height={500}
            alt="Picture of the author"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#FFC001] text-black px-4 py-10 md:px-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/play-with-pet.png"
              width={300}
              height={300}
              alt="Play with Pet"
              className="flex-shrink-0"
            />
          </div>

          {/* Text  1 */}
          <div className="text-center md:text-right">
            <div className="text-[24px] md:text-[32px] pb-5 font-bold text-black">
              Company Overview
            </div>
            <div className="text-[16px] md:text-[24px] text-black">
              At Paws & Claws Petshop, pets are family. Since 2020, we have been
              dedicated to offering top-quality products and services for all
              your furry, feathered, and scaly friends. Our passionate team is
              committed to creating a caring and welcoming community for pet
              lovers.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10">
          {/* Text  2 */}
          <div className="text-center md:text-left">
            <div className="text-[24px] md:text-[32px] pb-5 font-bold text-black">
              Products
            </div>
            <div className="text-[16px] md:text-[24px] text-black">
              Paws & Claws offers premium food for dogs, cats, birds, and fish,
              along with engaging toys, stylish accessories, and essential
              health products. Find everything you need to keep your pets happy
              and healthy.
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/Food.svg"
              width={350}
              height={350}
              alt="Food"
              className="flex-shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="text-center bg-[#FFF455] py-40">
        <b className="text-[32px]">Our Testimonial</b>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 text-center sm:px-56  ">
          <Carousel slideInterval={5000}>
            <div>
              Kerennn 🙀 <br />
              Anonymous{" "}
            </div>
            <div>
              Keren Banget 🤩🤩🤩 <br />
              Asep{" "}
            </div>
            <div>
              Toko terbaik nich ⭐️⭐️⭐️⭐️⭐️ <br />
              Maemunah{" "}
            </div>
            <div>
              Ok <br />
              Anonymous
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

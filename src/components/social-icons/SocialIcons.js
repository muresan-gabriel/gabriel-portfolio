import "./social-icons.css";

export default function SocialIcons() {
  return (
    <div class="flex items-center place-content-between md:place-content-center mt-8">
      <a
        class="bg-indigo-500 px-[15px] py-[10px] rounded-full border md:mx-5 border-indigo-200 animate transition-all duration-1 hover:bg-indigo-600"
        href="https://www.linkedin.com/in/gabrielmuresanionut"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin text-2xl text-indigo-200"></i>
      </a>
      <a
        class="bg-indigo-500 px-[15px] py-[10px] rounded-full border md:mx-5 border-indigo-200 animate transition-all duration-1 hover:bg-indigo-600"
        href="https://github.com/muresan-gabriel"
        target="_blank"
      >
        <i class="fa-brands fa-github text-2xl text-indigo-200"></i>
      </a>
      <a
        class="bg-indigo-500 px-[13.5px] py-[10px] rounded-full border md:mx-5 border-indigo-200 animate transition-all duration-1 hover:bg-indigo-600"
        href="https://www.behance.net/muresangabriel"
        target="_blank"
      >
        <i class="fa-brands fa-behance text-2xl text-indigo-200"></i>
      </a>
      <a
        class="bg-indigo-500 px-[15px] py-[10px] rounded-full border md:mx-5 border-indigo-200 animate transition-all duration-1 hover:bg-indigo-600"
        href="https://dribbble.com/muresangabriel"
        target="_blank"
      >
        <i class="fa-brands fa-dribbble text-2xl text-indigo-200"></i>
      </a>
      <a
        class="bg-indigo-500 px-[15px] py-[10px] rounded-full border md:mx-5 border-indigo-200 animate transition-all duration-1 hover:bg-indigo-600"
        href="https://www.instagram.com/muresan__gabriel/"
        target="_blank"
      >
        <i class="fa-brands fa-instagram text-2xl text-indigo-200"></i>
      </a>
    </div>
  );
}
